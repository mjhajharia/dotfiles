(function () {
  'use strict';

  var buildType = "production";
  var manifestV3 = true;
  var key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCq7XsXE/uakq4aKMG5Smz2nc8VSaandriziGorxX08py3mTkab79GpWYu7j/hA3Yf7fkCLQnX8QoZGj7WdaMX6+b+eHxF7vYpOhEW/Bam7TOlb+5AVmL1KReG9PPTLz4dp+xA4WfK2dqFM+XN40FTbm2G/SNk3GRP3gQOxgy3ZKwIDAQAB";
  var apiUrl = "https://hypothes.is/api/";
  var authDomain = "hypothes.is";
  var bouncerUrl = "https://hyp.is/";
  var serviceUrl = "https://hypothes.is/";
  var oauthClientId = "fd23fe2e-7792-11e7-8e16-23e47a1799d4";
  var sentryPublicDSN = "https://934d4f62912b47d8bb03c28ae6670cf8@app.getsentry.com/69811";
  var browserIsChrome = true;
  var appType = "chrome-extension";
  var version = "1.1259.0.2";
  var versionName = "Official Build";
  var raven$1 = {
  	dsn: "https://934d4f62912b47d8bb03c28ae6670cf8@app.getsentry.com/69811",
  	release: "1.1259.0.2"
  };
  var rawSettings = {
  	buildType: buildType,
  	manifestV3: manifestV3,
  	key: key,
  	apiUrl: apiUrl,
  	authDomain: authDomain,
  	bouncerUrl: bouncerUrl,
  	serviceUrl: serviceUrl,
  	oauthClientId: oauthClientId,
  	sentryPublicDSN: sentryPublicDSN,
  	browserIsChrome: browserIsChrome,
  	appType: appType,
  	version: version,
  	versionName: versionName,
  	raven: raven$1
  };

  /**
   * Incomplete type for settings in the `settings.json` file.
   *
   * This contains only the settings that the background script uses. Other
   * settings are used when generating the `manifest.json` file.
   */

  /**
   * Configuration data for the extension.
   */
  const settings = {
    ...rawSettings,
    // Ensure API url does not end with '/'
    apiUrl: rawSettings.apiUrl.replace(/\/$/, '')
  };

  /**
   * This module provides a wrapper around the Chrome / WebExtension APIs that
   * the extension uses.
   *
   * It has several purposes:
   *  - Provide a Promise-returning interface for all async APIs
   *  - Abstract over the differences between different browsers
   *  - Provide a seam that can be easily mocked in tests
   */
  /**
   * Wrap the browser APIs exposed via the `chrome` object to return promises.
   *
   * This is exposed for testing. Consumers should use {@link chromeAPI}.
   */
  function getChromeAPI(chrome = globalThis.chrome) {
    var _chrome$scripting;
    // In the test environment, the `chrome` global may not exist.
    if (typeof chrome === 'undefined') {
      // The `as never` causes this branch to be ignored when TS determines the
      // return type of this function.
      return null;
    }

    /**
     * Cache of Promise-ified APIs. This is used so that APIs which are looked up
     * on-demand, eg. because they are optional and may not exist when `getChromeAPI`
     * is first called, are only created once.
     */
    const cache = new Map();

    /**
     * Convert an async callback-accepting Chrome API to a Promise-returning version.
     *
     * TypeScript may complain if the API has a Manifest V3-only overload that
     * returns a Promise. Use {@link promisifyAlt} as a workaround.
     *
     * This wrapper can be removed once the extension becomes Manifest V3-only.
     *
     * @param fn - The original Chrome API that accepts a callback.
     * @return Wrapped API that doesn't take a callback but returns a Promise instead
     */
    function promisify(fn) {
      const cached = cache.get(fn);
      if (cached) {
        return cached;
      }
      return (...args) => {
        return new Promise((resolve, reject) => {
          fn(...args, result => {
            const lastError = chrome.runtime.lastError;
            if (lastError) {
              reject(lastError);
            } else {
              resolve(result);
            }
          });
        });
      };
    }
    function promisifyAlt(fn) {
      // @ts-expect-error
      return promisify(fn);
    }
    const browserAction = chrome.browserAction ?? chrome.action;
    return {
      browserAction: {
        onClicked: browserAction.onClicked,
        setBadgeBackgroundColor: promisify(browserAction.setBadgeBackgroundColor),
        setBadgeText: promisify(browserAction.setBadgeText),
        setIcon: promisify(browserAction.setIcon),
        setTitle: promisify(browserAction.setTitle)
      },
      extension: {
        isAllowedFileSchemeAccess: promisify(chrome.extension.isAllowedFileSchemeAccess)
      },
      management: {
        getSelf: promisify(chrome.management.getSelf)
      },
      runtime: {
        id: chrome.runtime.id,
        getURL: chrome.runtime.getURL,
        onMessage: chrome.runtime.onMessage,
        onMessageExternal: chrome.runtime.onMessageExternal,
        onInstalled: chrome.runtime.onInstalled,
        onUpdateAvailable: chrome.runtime.onUpdateAvailable,
        reload: chrome.runtime.reload,
        // Firefox (as of v92) does not support `requestUpdateCheck`.
        requestUpdateCheck: chrome.runtime.requestUpdateCheck ? promisify(chrome.runtime.requestUpdateCheck) : null
      },
      permissions: {
        getAll: promisify(chrome.permissions.getAll),
        request: promisify(chrome.permissions.request)
      },
      tabs: {
        create: promisify(chrome.tabs.create),
        get: promisifyAlt(chrome.tabs.get),
        onCreated: chrome.tabs.onCreated,
        onReplaced: chrome.tabs.onReplaced,
        onRemoved: chrome.tabs.onRemoved,
        onUpdated: chrome.tabs.onUpdated,
        query: promisifyAlt(chrome.tabs.query),
        update: promisify(chrome.tabs.update),
        // Manifest V2 only.
        executeScript: promisifyAlt(chrome.tabs.executeScript)
      },
      // Manifest V3 only.
      scripting: {
        executeScript: (_chrome$scripting = chrome.scripting) === null || _chrome$scripting === void 0 ? void 0 : _chrome$scripting.executeScript
      },
      storage: {
        // Methods of storage areas (sync, local, managed) need to be bound.
        // Standalone functions in Chrome API namespaces do not.
        sync: {
          get: promisify(chrome.storage.sync.get.bind(chrome.storage.sync))
        }
      },
      // APIs that require optional permissions.
      //
      // These are resolved on-demand because the `chrome.<namespace>` properties
      // will not exist unless the extension has the required permissions.
      //
      // If a permission is revoked, the property remains accessible until the
      // page/worker is reloaded, but calling APIs may fail.

      get webNavigation() {
        return {
          getAllFrames: promisifyAlt(chrome.webNavigation.getAllFrames)
        };
      }
    };
  }

  /**
   * Entry point for browser APIs.
   *
   * This has the same shape as the `chrome` or `browser` object.
   */
  const chromeAPI = getChromeAPI();

  // The functions below are wrappers around the extension APIs for scripting
  // which abstract over differences between browsers (eg. Manifest V2 vs Manifest V3)
  // and provide a simpler and more strongly typed interface.

  /**
   * Generate a string of code which can be eval-ed to produce the same result
   * as invoking `func` with `args`.
   */
  function codeStringForFunctionCall(func, args) {
    return `(${func})(${args.map(arg => JSON.stringify(arg)).join(',')})`;
  }
  /**
   * Execute a JavaScript file within a tab.
   */
  async function executeScript({
    tabId,
    frameId,
    file
  }, chromeAPI_ = chromeAPI) {
    if (settings.manifestV3) {
      const target = {
        tabId
      };
      if (frameId) {
        target.frameIds = [frameId];
      }
      const results = await chromeAPI_.scripting.executeScript({
        target,
        files: [file]
      });
      return results[0].result;
    }
    const result = await chromeAPI_.tabs.executeScript(tabId, {
      frameId,
      file
    });
    return result[0];
  }
  /**
   * Execute a JavaScript function within a tab.
   */
  async function executeFunction({
    tabId,
    frameId,
    func,
    args
  }, chromeAPI_ = chromeAPI) {
    if (settings.manifestV3) {
      const target = {
        tabId
      };
      if (frameId) {
        target.frameIds = [frameId];
      }
      const results = await chromeAPI_.scripting.executeScript({
        target,
        func,
        args
      });
      return results[0].result;
    }
    const code = codeStringForFunctionCall(func, args);
    const result = await chromeAPI_.tabs.executeScript(tabId, {
      frameId,
      code
    });
    return result[0];
  }
  function getExtensionId(chromeAPI_ = chromeAPI) {
    return chromeAPI_.runtime.id;
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  // Each button state has two icons one for normal resolution (19) and one
  // for hi-res screens (38).
  const icons = {
    active: {
      19: 'images/browser-icon-active.png',
      38: 'images/browser-icon-active@2x.png'
    },
    inactive: {
      19: 'images/browser-icon-inactive.png',
      38: 'images/browser-icon-inactive@2x.png'
    }
  };

  /**
   * Themes to apply to the toolbar icon badge depending on the type of
   * build. Production builds use the default color and no text
   */
  const badgeThemes = {
    dev: {
      defaultText: 'DEV',
      color: '#5BCF59' // Emerald green
    },

    qa: {
      defaultText: 'QA',
      color: '#EDA061' // Porche orange-pink
    }
  };

  /**
   * Controls the display of the browser action button setting the icon, title
   * and badges depending on the current state of the tab.
   *
   * BrowserAction is responsible for mapping the logical H state of
   * a tab (whether the extension is active, annotation count) to
   * the badge state.
   */
  class BrowserAction {
    /**
     * Updates the state of the browser action to reflect the logical
     * H state of a tab.
     */
    update(tabId, state) {
      let activeIcon;
      let title;
      let badgeText = '';
      switch (state.state) {
        case 'active':
          activeIcon = icons.active;
          title = 'Hypothesis is active';
          break;
        case 'inactive':
          activeIcon = icons.inactive;
          title = 'Hypothesis is inactive';
          break;
        case 'errored':
          activeIcon = icons.inactive;
          title = 'Hypothesis failed to load';
          badgeText = '!';
          break;
      }

      // display the annotation count on the badge
      if (state.state !== 'errored' && state.annotationCount) {
        let totalString = state.annotationCount.toString();
        if (state.annotationCount > 999) {
          totalString = '999+';
        }
        let countLabel;
        if (state.annotationCount === 1) {
          countLabel = "There's 1 annotation on this page";
        } else {
          countLabel = `There are ${totalString} annotations on this page`;
        }
        title = countLabel;
        badgeText = totalString;
      }

      // update the badge style to reflect the build type
      const badgeTheme = badgeThemes[settings.buildType];
      if (badgeTheme) {
        chromeAPI.browserAction.setBadgeBackgroundColor({
          tabId: tabId,
          color: badgeTheme.color
        });
        if (!badgeText) {
          badgeText = badgeTheme.defaultText;
        }
      }
      chromeAPI.browserAction.setBadgeText({
        tabId: tabId,
        text: badgeText
      });
      chromeAPI.browserAction.setIcon({
        tabId: tabId,
        path: activeIcon
      });
      chromeAPI.browserAction.setTitle({
        tabId: tabId,
        title: title
      });
    }
  }
  _defineProperty(BrowserAction, "icons", icons);

  /**
   * Subset of the client configuration which causes the client to show a
   * particular set of annotations automatically after it loads.
   *
   * See https://h-client.readthedocs.io/en/latest/publishers/config/#config-settings
   */

  /**
   * Extracts the direct-linking query from the URL if any.
   *
   * If present, the query causes the extension to activate automatically and
   * show the matching set of annotations.
   *
   * @param url -
   *   The URL which may contain a '#annotations:' fragment specifying which
   *   annotations to show.
   * @return - The direct link query translated into client configuration settings.
   */
  function directLinkQuery(url) {
    // Annotation IDs are url-safe-base64 identifiers
    // See https://tools.ietf.org/html/rfc4648#page-7
    const idMatch = url.match(/#annotations:([A-Za-z0-9_-]+)$/);
    if (idMatch) {
      return {
        annotations: idMatch[1]
      };
    }
    const queryMatch = url.match(/#annotations:query:(.*)$/);
    if (queryMatch) {
      const query = decodeURIComponent(queryMatch[1]);
      return {
        query
      };
    }

    // Group IDs (and other "pubids" in h) are a subset of ASCII letters and
    // digits. As a special exception, the "Public" group has underscores in its
    // ID ("__world__").
    const groupMatch = url.match(/#annotations:group:([A-Za-z0-9_]+)$/);
    if (groupMatch) {
      return {
        group: groupMatch[1]
      };
    }
    return null;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var singleton = {exports: {}};

  var stringify$2 = {exports: {}};

  /*
   json-stringify-safe
   Like JSON.stringify, but doesn't throw on circular references.

   Originally forked from https://github.com/isaacs/json-stringify-safe
   version 5.0.1 on 3/8/2017 and modified to handle Errors serialization
   and IE8 compatibility. Tests for this are in test/vendor.

   ISC license: https://github.com/isaacs/json-stringify-safe/blob/master/LICENSE
  */

  (function (module, exports) {
  	exports = module.exports = stringify;
  	exports.getSerialize = serializer;

  	function indexOf(haystack, needle) {
  	  for (var i = 0; i < haystack.length; ++i) {
  	    if (haystack[i] === needle) return i;
  	  }
  	  return -1;
  	}

  	function stringify(obj, replacer, spaces, cycleReplacer) {
  	  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
  	}

  	// https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
  	function stringifyError(value) {
  	  var err = {
  	    // These properties are implemented as magical getters and don't show up in for in
  	    stack: value.stack,
  	    message: value.message,
  	    name: value.name
  	  };

  	  for (var i in value) {
  	    if (Object.prototype.hasOwnProperty.call(value, i)) {
  	      err[i] = value[i];
  	    }
  	  }

  	  return err;
  	}

  	function serializer(replacer, cycleReplacer) {
  	  var stack = [];
  	  var keys = [];

  	  if (cycleReplacer == null) {
  	    cycleReplacer = function(key, value) {
  	      if (stack[0] === value) {
  	        return '[Circular ~]';
  	      }
  	      return '[Circular ~.' + keys.slice(0, indexOf(stack, value)).join('.') + ']';
  	    };
  	  }

  	  return function(key, value) {
  	    if (stack.length > 0) {
  	      var thisPos = indexOf(stack, this);
  	      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
  	      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

  	      if (~indexOf(stack, value)) {
  	        value = cycleReplacer.call(this, key, value);
  	      }
  	    } else {
  	      stack.push(value);
  	    }

  	    return replacer == null
  	      ? value instanceof Error ? stringifyError(value) : value
  	      : replacer.call(this, key, value);
  	  };
  	} 
  } (stringify$2, stringify$2.exports));

  var stringifyExports = stringify$2.exports;

  var stringify$1 = stringifyExports;

  var _window$3 =
    typeof window !== 'undefined'
      ? window
      : typeof commonjsGlobal !== 'undefined'
        ? commonjsGlobal
        : typeof self !== 'undefined'
          ? self
          : {};

  function isObject$1(what) {
    return typeof what === 'object' && what !== null;
  }

  // Yanked from https://git.io/vS8DV re-used under CC0
  // with some tiny modifications
  function isError$1(value) {
    switch (Object.prototype.toString.call(value)) {
      case '[object Error]':
        return true;
      case '[object Exception]':
        return true;
      case '[object DOMException]':
        return true;
      default:
        return value instanceof Error;
    }
  }

  function isErrorEvent$1(value) {
    return Object.prototype.toString.call(value) === '[object ErrorEvent]';
  }

  function isDOMError$1(value) {
    return Object.prototype.toString.call(value) === '[object DOMError]';
  }

  function isDOMException$1(value) {
    return Object.prototype.toString.call(value) === '[object DOMException]';
  }

  function isUndefined$1(what) {
    return what === void 0;
  }

  function isFunction$1(what) {
    return typeof what === 'function';
  }

  function isPlainObject$1(what) {
    return Object.prototype.toString.call(what) === '[object Object]';
  }

  function isString$1(what) {
    return Object.prototype.toString.call(what) === '[object String]';
  }

  function isArray$1(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
  }

  function isEmptyObject$1(what) {
    if (!isPlainObject$1(what)) return false;

    for (var _ in what) {
      if (what.hasOwnProperty(_)) {
        return false;
      }
    }
    return true;
  }

  function supportsErrorEvent() {
    try {
      new ErrorEvent(''); // eslint-disable-line no-new
      return true;
    } catch (e) {
      return false;
    }
  }

  function supportsDOMError() {
    try {
      new DOMError(''); // eslint-disable-line no-new
      return true;
    } catch (e) {
      return false;
    }
  }

  function supportsDOMException() {
    try {
      new DOMException(''); // eslint-disable-line no-new
      return true;
    } catch (e) {
      return false;
    }
  }

  function supportsFetch$1() {
    if (!('fetch' in _window$3)) return false;

    try {
      new Headers(); // eslint-disable-line no-new
      new Request(''); // eslint-disable-line no-new
      new Response(); // eslint-disable-line no-new
      return true;
    } catch (e) {
      return false;
    }
  }

  // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
  // https://caniuse.com/#feat=referrer-policy
  // It doesn't. And it throw exception instead of ignoring this parameter...
  // REF: https://github.com/getsentry/raven-js/issues/1233
  function supportsReferrerPolicy$1() {
    if (!supportsFetch$1()) return false;

    try {
      // eslint-disable-next-line no-new
      new Request('pickleRick', {
        referrerPolicy: 'origin'
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  function supportsPromiseRejectionEvent() {
    return typeof PromiseRejectionEvent === 'function';
  }

  function wrappedCallback(callback) {
    function dataCallback(data, original) {
      var normalizedData = callback(data) || data;
      if (original) {
        return original(normalizedData) || normalizedData;
      }
      return normalizedData;
    }

    return dataCallback;
  }

  function each$1(obj, callback) {
    var i, j;

    if (isUndefined$1(obj.length)) {
      for (i in obj) {
        if (hasKey$1(obj, i)) {
          callback.call(null, i, obj[i]);
        }
      }
    } else {
      j = obj.length;
      if (j) {
        for (i = 0; i < j; i++) {
          callback.call(null, i, obj[i]);
        }
      }
    }
  }

  function objectMerge$1(obj1, obj2) {
    if (!obj2) {
      return obj1;
    }
    each$1(obj2, function(key, value) {
      obj1[key] = value;
    });
    return obj1;
  }

  /**
   * This function is only used for react-native.
   * react-native freezes object that have already been sent over the
   * js bridge. We need this function in order to check if the object is frozen.
   * So it's ok that objectFrozen returns false if Object.isFrozen is not
   * supported because it's not relevant for other "platforms". See related issue:
   * https://github.com/getsentry/react-native-sentry/issues/57
   */
  function objectFrozen$1(obj) {
    if (!Object.isFrozen) {
      return false;
    }
    return Object.isFrozen(obj);
  }

  function truncate$1(str, max) {
    if (typeof max !== 'number') {
      throw new Error('2nd argument to `truncate` function should be a number');
    }
    if (typeof str !== 'string' || max === 0) {
      return str;
    }
    return str.length <= max ? str : str.substr(0, max) + '\u2026';
  }

  /**
   * hasKey, a better form of hasOwnProperty
   * Example: hasKey(MainHostObject, property) === true/false
   *
   * @param {Object} host object to check property
   * @param {string} key to check
   */
  function hasKey$1(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
  }

  function joinRegExp$1(patterns) {
    // Combine an array of regular expressions and strings into one large regexp
    // Be mad.
    var sources = [],
      i = 0,
      len = patterns.length,
      pattern;

    for (; i < len; i++) {
      pattern = patterns[i];
      if (isString$1(pattern)) {
        // If it's a string, we need to escape it
        // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        sources.push(pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
      } else if (pattern && pattern.source) {
        // If it's a regexp already, we want to extract the source
        sources.push(pattern.source);
      }
      // Intentionally skip other cases
    }
    return new RegExp(sources.join('|'), 'i');
  }

  function urlencode$1(o) {
    var pairs = [];
    each$1(o, function(key, value) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    });
    return pairs.join('&');
  }

  // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
  // intentionally using regex and not <a/> href parsing trick because React Native and other
  // environments where DOM might not be available
  function parseUrl$1(url) {
    if (typeof url !== 'string') return {};
    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
      protocol: match[2],
      host: match[4],
      path: match[5],
      relative: match[5] + query + fragment // everything minus origin
    };
  }
  function uuid4$1() {
    var crypto = _window$3.crypto || _window$3.msCrypto;

    if (!isUndefined$1(crypto) && crypto.getRandomValues) {
      // Use window.crypto API if available
      // eslint-disable-next-line no-undef
      var arr = new Uint16Array(8);
      crypto.getRandomValues(arr);

      // set 4 in byte 7
      arr[3] = (arr[3] & 0xfff) | 0x4000;
      // set 2 most significant bits of byte 9 to '10'
      arr[4] = (arr[4] & 0x3fff) | 0x8000;

      var pad = function(num) {
        var v = num.toString(16);
        while (v.length < 4) {
          v = '0' + v;
        }
        return v;
      };

      return (
        pad(arr[0]) +
        pad(arr[1]) +
        pad(arr[2]) +
        pad(arr[3]) +
        pad(arr[4]) +
        pad(arr[5]) +
        pad(arr[6]) +
        pad(arr[7])
      );
    } else {
      // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
      return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
  }

  /**
   * Given a child DOM element, returns a query-selector statement describing that
   * and its ancestors
   * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
   * @param elem
   * @returns {string}
   */
  function htmlTreeAsString$1(elem) {
    /* eslint no-extra-parens:0*/
    var MAX_TRAVERSE_HEIGHT = 5,
      MAX_OUTPUT_LEN = 80,
      out = [],
      height = 0,
      len = 0,
      separator = ' > ',
      sepLength = separator.length,
      nextStr;

    while (elem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = htmlElementAsString(elem);
      // bail out if
      // - nextStr is the 'html' element
      // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
      //   (ignore this limit if we are on the first iteration)
      if (
        nextStr === 'html' ||
        (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)
      ) {
        break;
      }

      out.push(nextStr);

      len += nextStr.length;
      elem = elem.parentNode;
    }

    return out.reverse().join(separator);
  }

  /**
   * Returns a simple, query-selector representation of a DOM element
   * e.g. [HTMLElement] => input#foo.btn[name=baz]
   * @param HTMLElement
   * @returns {string}
   */
  function htmlElementAsString(elem) {
    var out = [],
      className,
      classes,
      key,
      attr,
      i;

    if (!elem || !elem.tagName) {
      return '';
    }

    out.push(elem.tagName.toLowerCase());
    if (elem.id) {
      out.push('#' + elem.id);
    }

    className = elem.className;
    if (className && isString$1(className)) {
      classes = className.split(/\s+/);
      for (i = 0; i < classes.length; i++) {
        out.push('.' + classes[i]);
      }
    }
    var attrWhitelist = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < attrWhitelist.length; i++) {
      key = attrWhitelist[i];
      attr = elem.getAttribute(key);
      if (attr) {
        out.push('[' + key + '="' + attr + '"]');
      }
    }
    return out.join('');
  }

  /**
   * Returns true if either a OR b is truthy, but not both
   */
  function isOnlyOneTruthy(a, b) {
    return !!(!!a ^ !!b);
  }

  /**
   * Returns true if both parameters are undefined
   */
  function isBothUndefined(a, b) {
    return isUndefined$1(a) && isUndefined$1(b);
  }

  /**
   * Returns true if the two input exception interfaces have the same content
   */
  function isSameException$1(ex1, ex2) {
    if (isOnlyOneTruthy(ex1, ex2)) return false;

    ex1 = ex1.values[0];
    ex2 = ex2.values[0];

    if (ex1.type !== ex2.type || ex1.value !== ex2.value) return false;

    // in case both stacktraces are undefined, we can't decide so default to false
    if (isBothUndefined(ex1.stacktrace, ex2.stacktrace)) return false;

    return isSameStacktrace$1(ex1.stacktrace, ex2.stacktrace);
  }

  /**
   * Returns true if the two input stack trace interfaces have the same content
   */
  function isSameStacktrace$1(stack1, stack2) {
    if (isOnlyOneTruthy(stack1, stack2)) return false;

    var frames1 = stack1.frames;
    var frames2 = stack2.frames;

    // Exit early if stacktrace is malformed
    if (frames1 === undefined || frames2 === undefined) return false;

    // Exit early if frame count differs
    if (frames1.length !== frames2.length) return false;

    // Iterate through every frame; bail out if anything differs
    var a, b;
    for (var i = 0; i < frames1.length; i++) {
      a = frames1[i];
      b = frames2[i];
      if (
        a.filename !== b.filename ||
        a.lineno !== b.lineno ||
        a.colno !== b.colno ||
        a['function'] !== b['function']
      )
        return false;
    }
    return true;
  }

  /**
   * Polyfill a method
   * @param obj object e.g. `document`
   * @param name method name present on object e.g. `addEventListener`
   * @param replacement replacement function
   * @param track {optional} record instrumentation to an array
   */
  function fill$1(obj, name, replacement, track) {
    if (obj == null) return;
    var orig = obj[name];
    obj[name] = replacement(orig);
    obj[name].__raven__ = true;
    obj[name].__orig__ = orig;
    if (track) {
      track.push([obj, name, orig]);
    }
  }

  /**
   * Join values in array
   * @param input array of values to be joined together
   * @param delimiter string to be placed in-between values
   * @returns {string}
   */
  function safeJoin(input, delimiter) {
    if (!isArray$1(input)) return '';

    var output = [];

    for (var i = 0; i < input.length; i++) {
      try {
        output.push(String(input[i]));
      } catch (e) {
        output.push('[value cannot be serialized]');
      }
    }

    return output.join(delimiter);
  }

  // Default Node.js REPL depth
  var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
  // 50kB, as 100kB is max payload size, so half sounds reasonable
  var MAX_SERIALIZE_EXCEPTION_SIZE = 50 * 1024;
  var MAX_SERIALIZE_KEYS_LENGTH = 40;

  function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
  }

  function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
  }

  function serializeValue(value) {
    if (typeof value === 'string') {
      var maxLength = 40;
      return truncate$1(value, maxLength);
    } else if (
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      typeof value === 'undefined'
    ) {
      return value;
    }

    var type = Object.prototype.toString.call(value);

    // Node.js REPL notation
    if (type === '[object Object]') return '[Object]';
    if (type === '[object Array]') return '[Array]';
    if (type === '[object Function]')
      return value.name ? '[Function: ' + value.name + ']' : '[Function]';

    return value;
  }

  function serializeObject(value, depth) {
    if (depth === 0) return serializeValue(value);

    if (isPlainObject$1(value)) {
      return Object.keys(value).reduce(function(acc, key) {
        acc[key] = serializeObject(value[key], depth - 1);
        return acc;
      }, {});
    } else if (Array.isArray(value)) {
      return value.map(function(val) {
        return serializeObject(val, depth - 1);
      });
    }

    return serializeValue(value);
  }

  function serializeException$1(ex, depth, maxSize) {
    if (!isPlainObject$1(ex)) return ex;

    depth = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_DEPTH : depth;
    maxSize = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_SIZE : maxSize;

    var serialized = serializeObject(ex, depth);

    if (jsonSize(stringify$1(serialized)) > maxSize) {
      return serializeException$1(ex, depth - 1);
    }

    return serialized;
  }

  function serializeKeysForMessage$1(keys, maxLength) {
    if (typeof keys === 'number' || typeof keys === 'string') return keys.toString();
    if (!Array.isArray(keys)) return '';

    keys = keys.filter(function(key) {
      return typeof key === 'string';
    });
    if (keys.length === 0) return '[object has no keys]';

    maxLength = typeof maxLength !== 'number' ? MAX_SERIALIZE_KEYS_LENGTH : maxLength;
    if (keys[0].length >= maxLength) return keys[0];

    for (var usedKeys = keys.length; usedKeys > 0; usedKeys--) {
      var serialized = keys.slice(0, usedKeys).join(', ');
      if (serialized.length > maxLength) continue;
      if (usedKeys === keys.length) return serialized;
      return serialized + '\u2026';
    }

    return '';
  }

  function sanitize$1(input, sanitizeKeys) {
    if (!isArray$1(sanitizeKeys) || (isArray$1(sanitizeKeys) && sanitizeKeys.length === 0))
      return input;

    var sanitizeRegExp = joinRegExp$1(sanitizeKeys);
    var sanitizeMask = '********';
    var safeInput;

    try {
      safeInput = JSON.parse(stringify$1(input));
    } catch (o_O) {
      return input;
    }

    function sanitizeWorker(workerInput) {
      if (isArray$1(workerInput)) {
        return workerInput.map(function(val) {
          return sanitizeWorker(val);
        });
      }

      if (isPlainObject$1(workerInput)) {
        return Object.keys(workerInput).reduce(function(acc, k) {
          if (sanitizeRegExp.test(k)) {
            acc[k] = sanitizeMask;
          } else {
            acc[k] = sanitizeWorker(workerInput[k]);
          }
          return acc;
        }, {});
      }

      return workerInput;
    }

    return sanitizeWorker(safeInput);
  }

  var utils$3 = {
    isObject: isObject$1,
    isError: isError$1,
    isErrorEvent: isErrorEvent$1,
    isDOMError: isDOMError$1,
    isDOMException: isDOMException$1,
    isUndefined: isUndefined$1,
    isFunction: isFunction$1,
    isPlainObject: isPlainObject$1,
    isString: isString$1,
    isArray: isArray$1,
    isEmptyObject: isEmptyObject$1,
    supportsErrorEvent: supportsErrorEvent,
    supportsDOMError: supportsDOMError,
    supportsDOMException: supportsDOMException,
    supportsFetch: supportsFetch$1,
    supportsReferrerPolicy: supportsReferrerPolicy$1,
    supportsPromiseRejectionEvent: supportsPromiseRejectionEvent,
    wrappedCallback: wrappedCallback,
    each: each$1,
    objectMerge: objectMerge$1,
    truncate: truncate$1,
    objectFrozen: objectFrozen$1,
    hasKey: hasKey$1,
    joinRegExp: joinRegExp$1,
    urlencode: urlencode$1,
    uuid4: uuid4$1,
    htmlTreeAsString: htmlTreeAsString$1,
    htmlElementAsString: htmlElementAsString,
    isSameException: isSameException$1,
    isSameStacktrace: isSameStacktrace$1,
    parseUrl: parseUrl$1,
    fill: fill$1,
    safeJoin: safeJoin,
    serializeException: serializeException$1,
    serializeKeysForMessage: serializeKeysForMessage$1,
    sanitize: sanitize$1
  };

  var utils$2 = utils$3;

  /*
   TraceKit - Cross brower stack traces

   This was originally forked from github.com/occ/TraceKit, but has since been
   largely re-written and is now maintained as part of raven-js.  Tests for
   this are in test/vendor.

   MIT license
  */

  var TraceKit$1 = {
    collectWindowErrors: true,
    debug: false
  };

  // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
  var _window$2 =
    typeof window !== 'undefined'
      ? window
      : typeof commonjsGlobal !== 'undefined'
      ? commonjsGlobal
      : typeof self !== 'undefined'
      ? self
      : {};

  // global reference to slice
  var _slice = [].slice;
  var UNKNOWN_FUNCTION = '?';

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
  var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

  function getLocationHref() {
    if (typeof document === 'undefined' || document.location == null) return '';
    return document.location.href;
  }

  function getLocationOrigin() {
    if (typeof document === 'undefined' || document.location == null) return '';

    // Oh dear IE10...
    if (!document.location.origin) {
      return (
        document.location.protocol +
        '//' +
        document.location.hostname +
        (document.location.port ? ':' + document.location.port : '')
      );
    }

    return document.location.origin;
  }

  /**
   * TraceKit.report: cross-browser processing of unhandled exceptions
   *
   * Syntax:
   *   TraceKit.report.subscribe(function(stackInfo) { ... })
   *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
   *   TraceKit.report(exception)
   *   try { ...code... } catch(ex) { TraceKit.report(ex); }
   *
   * Supports:
   *   - Firefox: full stack trace with line numbers, plus column number
   *              on top frame; column number is not guaranteed
   *   - Opera:   full stack trace with line and column numbers
   *   - Chrome:  full stack trace with line and column numbers
   *   - Safari:  line and column number for the top frame only; some frames
   *              may be missing, and column number is not guaranteed
   *   - IE:      line and column number for the top frame only; some frames
   *              may be missing, and column number is not guaranteed
   *
   * In theory, TraceKit should work on all of the following versions:
   *   - IE5.5+ (only 8.0 tested)
   *   - Firefox 0.9+ (only 3.5+ tested)
   *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
   *     Exceptions Have Stacktrace to be enabled in opera:config)
   *   - Safari 3+ (only 4+ tested)
   *   - Chrome 1+ (only 5+ tested)
   *   - Konqueror 3.5+ (untested)
   *
   * Requires TraceKit.computeStackTrace.
   *
   * Tries to catch all unhandled exceptions and report them to the
   * subscribed handlers. Please note that TraceKit.report will rethrow the
   * exception. This is REQUIRED in order to get a useful stack trace in IE.
   * If the exception does not reach the top of the browser, you will only
   * get a stack trace from the point where TraceKit.report was called.
   *
   * Handlers receive a stackInfo object as described in the
   * TraceKit.computeStackTrace docs.
   */
  TraceKit$1.report = (function reportModuleWrapper() {
    var handlers = [],
      lastArgs = null,
      lastException = null,
      lastExceptionStack = null;

    /**
     * Add a crash handler.
     * @param {Function} handler
     */
    function subscribe(handler) {
      installGlobalHandler();
      handlers.push(handler);
    }

    /**
     * Remove a crash handler.
     * @param {Function} handler
     */
    function unsubscribe(handler) {
      for (var i = handlers.length - 1; i >= 0; --i) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
        }
      }
    }

    /**
     * Remove all crash handlers.
     */
    function unsubscribeAll() {
      uninstallGlobalHandler();
      handlers = [];
    }

    /**
     * Dispatch stack information to all handlers.
     * @param {Object.<string, *>} stack
     */
    function notifyHandlers(stack, isWindowError) {
      var exception = null;
      if (isWindowError && !TraceKit$1.collectWindowErrors) {
        return;
      }
      for (var i in handlers) {
        if (handlers.hasOwnProperty(i)) {
          try {
            handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
          } catch (inner) {
            exception = inner;
          }
        }
      }

      if (exception) {
        throw exception;
      }
    }

    var _oldOnerrorHandler, _onErrorHandlerInstalled;

    /**
     * Ensures all global unhandled exceptions are recorded.
     * Supported by Gecko and IE.
     * @param {string} msg Error message.
     * @param {string} url URL of script that generated the exception.
     * @param {(number|string)} lineNo The line number at which the error
     * occurred.
     * @param {?(number|string)} colNo The column number at which the error
     * occurred.
     * @param {?Error} ex The actual Error object.
     */
    function traceKitWindowOnError(msg, url, lineNo, colNo, ex) {
      var stack = null;
      // If 'ex' is ErrorEvent, get real Error from inside
      var exception = utils$2.isErrorEvent(ex) ? ex.error : ex;
      // If 'msg' is ErrorEvent, get real message from inside
      var message = utils$2.isErrorEvent(msg) ? msg.message : msg;

      if (lastExceptionStack) {
        TraceKit$1.computeStackTrace.augmentStackTraceWithInitialElement(
          lastExceptionStack,
          url,
          lineNo,
          message
        );
        processLastException();
      } else if (exception && utils$2.isError(exception)) {
        // non-string `exception` arg; attempt to extract stack trace

        // New chrome and blink send along a real error object
        // Let's just report that like a normal error.
        // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
        stack = TraceKit$1.computeStackTrace(exception);
        notifyHandlers(stack, true);
      } else {
        var location = {
          url: url,
          line: lineNo,
          column: colNo
        };

        var name = undefined;
        var groups;

        if ({}.toString.call(message) === '[object String]') {
          var groups = message.match(ERROR_TYPES_RE);
          if (groups) {
            name = groups[1];
            message = groups[2];
          }
        }

        location.func = UNKNOWN_FUNCTION;

        stack = {
          name: name,
          message: message,
          url: getLocationHref(),
          stack: [location]
        };
        notifyHandlers(stack, true);
      }

      if (_oldOnerrorHandler) {
        return _oldOnerrorHandler.apply(this, arguments);
      }

      return false;
    }

    function installGlobalHandler() {
      if (_onErrorHandlerInstalled) {
        return;
      }
      _oldOnerrorHandler = _window$2.onerror;
      _window$2.onerror = traceKitWindowOnError;
      _onErrorHandlerInstalled = true;
    }

    function uninstallGlobalHandler() {
      if (!_onErrorHandlerInstalled) {
        return;
      }
      _window$2.onerror = _oldOnerrorHandler;
      _onErrorHandlerInstalled = false;
      _oldOnerrorHandler = undefined;
    }

    function processLastException() {
      var _lastExceptionStack = lastExceptionStack,
        _lastArgs = lastArgs;
      lastArgs = null;
      lastExceptionStack = null;
      lastException = null;
      notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
    }

    /**
     * Reports an unhandled Error to TraceKit.
     * @param {Error} ex
     * @param {?boolean} rethrow If false, do not re-throw the exception.
     * Only used for window.onerror to not cause an infinite loop of
     * rethrowing.
     */
    function report(ex, rethrow) {
      var args = _slice.call(arguments, 1);
      if (lastExceptionStack) {
        if (lastException === ex) {
          return; // already caught by an inner catch block, ignore
        } else {
          processLastException();
        }
      }

      var stack = TraceKit$1.computeStackTrace(ex);
      lastExceptionStack = stack;
      lastException = ex;
      lastArgs = args;

      // If the stack trace is incomplete, wait for 2 seconds for
      // slow slow IE to see if onerror occurs or not before reporting
      // this exception; otherwise, we will end up with an incomplete
      // stack trace
      setTimeout(
        function() {
          if (lastException === ex) {
            processLastException();
          }
        },
        stack.incomplete ? 2000 : 0
      );

      if (rethrow !== false) {
        throw ex; // re-throw to propagate to the top level (and cause window.onerror)
      }
    }

    report.subscribe = subscribe;
    report.unsubscribe = unsubscribe;
    report.uninstall = unsubscribeAll;
    return report;
  })();

  /**
   * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
   *
   * Syntax:
   *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
   * Returns:
   *   s.name              - exception name
   *   s.message           - exception message
   *   s.stack[i].url      - JavaScript or HTML file URL
   *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
   *   s.stack[i].args     - arguments passed to the function, if known
   *   s.stack[i].line     - line number, if known
   *   s.stack[i].column   - column number, if known
   *
   * Supports:
   *   - Firefox:  full stack trace with line numbers and unreliable column
   *               number on top frame
   *   - Opera 10: full stack trace with line and column numbers
   *   - Opera 9-: full stack trace with line numbers
   *   - Chrome:   full stack trace with line and column numbers
   *   - Safari:   line and column number for the topmost stacktrace element
   *               only
   *   - IE:       no line numbers whatsoever
   *
   * Tries to guess names of anonymous functions by looking for assignments
   * in the source code. In IE and Safari, we have to guess source file names
   * by searching for function bodies inside all page scripts. This will not
   * work for scripts that are loaded cross-domain.
   * Here be dragons: some function names may be guessed incorrectly, and
   * duplicate functions may be mismatched.
   *
   * TraceKit.computeStackTrace should only be used for tracing purposes.
   * Logging of unhandled exceptions should be done with TraceKit.report,
   * which builds on top of TraceKit.computeStackTrace and provides better
   * IE support by utilizing the window.onerror event to retrieve information
   * about the top of the stack.
   *
   * Note: In IE and Safari, no stack trace is recorded on the Error object,
   * so computeStackTrace instead walks its *own* chain of callers.
   * This means that:
   *  * in Safari, some methods may be missing from the stack trace;
   *  * in IE, the topmost function in the stack trace will always be the
   *    caller of computeStackTrace.
   *
   * This is okay for tracing (because you are likely to be calling
   * computeStackTrace from the function you want to be the topmost element
   * of the stack trace anyway), but not okay for logging unhandled
   * exceptions (because your catch block will likely be far away from the
   * inner function that actually caused the exception).
   *
   */
  TraceKit$1.computeStackTrace = (function computeStackTraceWrapper() {
    // Contents of Exception in various browsers.
    //
    // SAFARI:
    // ex.message = Can't find variable: qq
    // ex.line = 59
    // ex.sourceId = 580238192
    // ex.sourceURL = http://...
    // ex.expressionBeginOffset = 96
    // ex.expressionCaretOffset = 98
    // ex.expressionEndOffset = 98
    // ex.name = ReferenceError
    //
    // FIREFOX:
    // ex.message = qq is not defined
    // ex.fileName = http://...
    // ex.lineNumber = 59
    // ex.columnNumber = 69
    // ex.stack = ...stack trace... (see the example below)
    // ex.name = ReferenceError
    //
    // CHROME:
    // ex.message = qq is not defined
    // ex.name = ReferenceError
    // ex.type = not_defined
    // ex.arguments = ['aa']
    // ex.stack = ...stack trace...
    //
    // INTERNET EXPLORER:
    // ex.message = ...
    // ex.name = ReferenceError
    //
    // OPERA:
    // ex.message = ...message... (see the example below)
    // ex.name = ReferenceError
    // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
    // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

    /**
     * Computes stack trace information from the stack property.
     * Chrome and Gecko use this property.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
    function computeStackTraceFromStackProp(ex) {
      if (typeof ex.stack === 'undefined' || !ex.stack) return;

      var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
      var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
      // NOTE: blob urls are now supposed to always have an origin, therefore it's format
      // which is `blob:http://url/path/with-some-uuid`, is matched by `blob.*?:\/` as well
      var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
      // Used to additionally parse URL/line/column from eval frames
      var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
      var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
      var lines = ex.stack.split('\n');
      var stack = [];
      var submatch;
      var parts;
      var element;
      /^(.*) is undefined$/.exec(ex.message);

      for (var i = 0, j = lines.length; i < j; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
          var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
          var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
          if (isEval && (submatch = chromeEval.exec(parts[2]))) {
            // throw out eval line/column and use top-most line/column number
            parts[2] = submatch[1]; // url
            parts[3] = submatch[2]; // line
            parts[4] = submatch[3]; // column
          }
          element = {
            url: !isNative ? parts[2] : null,
            func: parts[1] || UNKNOWN_FUNCTION,
            args: isNative ? [parts[2]] : [],
            line: parts[3] ? +parts[3] : null,
            column: parts[4] ? +parts[4] : null
          };
        } else if ((parts = winjs.exec(lines[i]))) {
          element = {
            url: parts[2],
            func: parts[1] || UNKNOWN_FUNCTION,
            args: [],
            line: +parts[3],
            column: parts[4] ? +parts[4] : null
          };
        } else if ((parts = gecko.exec(lines[i]))) {
          var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
          if (isEval && (submatch = geckoEval.exec(parts[3]))) {
            // throw out eval line/column and use top-most line number
            parts[3] = submatch[1];
            parts[4] = submatch[2];
            parts[5] = null; // no column when eval
          } else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
            // FireFox uses this awesome columnNumber property for its top frame
            // Also note, Firefox's column number is 0-based and everything else expects 1-based,
            // so adding 1
            // NOTE: this hack doesn't work if top-most frame is eval
            stack[0].column = ex.columnNumber + 1;
          }
          element = {
            url: parts[3],
            func: parts[1] || UNKNOWN_FUNCTION,
            args: parts[2] ? parts[2].split(',') : [],
            line: parts[4] ? +parts[4] : null,
            column: parts[5] ? +parts[5] : null
          };
        } else {
          continue;
        }

        if (!element.func && element.line) {
          element.func = UNKNOWN_FUNCTION;
        }

        if (element.url && element.url.substr(0, 5) === 'blob:') {
          // Special case for handling JavaScript loaded into a blob.
          // We use a synchronous AJAX request here as a blob is already in
          // memory - it's not making a network request.  This will generate a warning
          // in the browser console, but there has already been an error so that's not
          // that much of an issue.
          var xhr = new XMLHttpRequest();
          xhr.open('GET', element.url, false);
          xhr.send(null);

          // If we failed to download the source, skip this patch
          if (xhr.status === 200) {
            var source = xhr.responseText || '';

            // We trim the source down to the last 300 characters as sourceMappingURL is always at the end of the file.
            // Why 300? To be in line with: https://github.com/getsentry/sentry/blob/4af29e8f2350e20c28a6933354e4f42437b4ba42/src/sentry/lang/javascript/processor.py#L164-L175
            source = source.slice(-300);

            // Now we dig out the source map URL
            var sourceMaps = source.match(/\/\/# sourceMappingURL=(.*)$/);

            // If we don't find a source map comment or we find more than one, continue on to the next element.
            if (sourceMaps) {
              var sourceMapAddress = sourceMaps[1];

              // Now we check to see if it's a relative URL.
              // If it is, convert it to an absolute one.
              if (sourceMapAddress.charAt(0) === '~') {
                sourceMapAddress = getLocationOrigin() + sourceMapAddress.slice(1);
              }

              // Now we strip the '.map' off of the end of the URL and update the
              // element so that Sentry can match the map to the blob.
              element.url = sourceMapAddress.slice(0, -4);
            }
          }
        }

        stack.push(element);
      }

      if (!stack.length) {
        return null;
      }

      return {
        name: ex.name,
        message: ex.message,
        url: getLocationHref(),
        stack: stack
      };
    }

    /**
     * Adds information about the first frame to incomplete stack traces.
     * Safari and IE require this to get complete data on the first frame.
     * @param {Object.<string, *>} stackInfo Stack trace information from
     * one of the compute* methods.
     * @param {string} url The URL of the script that caused an error.
     * @param {(number|string)} lineNo The line number of the script that
     * caused an error.
     * @param {string=} message The error generated by the browser, which
     * hopefully contains the name of the object that caused the error.
     * @return {boolean} Whether or not the stack information was
     * augmented.
     */
    function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
      var initial = {
        url: url,
        line: lineNo
      };

      if (initial.url && initial.line) {
        stackInfo.incomplete = false;

        if (!initial.func) {
          initial.func = UNKNOWN_FUNCTION;
        }

        if (stackInfo.stack.length > 0) {
          if (stackInfo.stack[0].url === initial.url) {
            if (stackInfo.stack[0].line === initial.line) {
              return false; // already in stack trace
            } else if (
              !stackInfo.stack[0].line &&
              stackInfo.stack[0].func === initial.func
            ) {
              stackInfo.stack[0].line = initial.line;
              return false;
            }
          }
        }

        stackInfo.stack.unshift(initial);
        stackInfo.partial = true;
        return true;
      } else {
        stackInfo.incomplete = true;
      }

      return false;
    }

    /**
     * Computes stack trace information by walking the arguments.caller
     * chain at the time the exception occurred. This will cause earlier
     * frames to be missed but is the only way to get any stack trace in
     * Safari and IE. The top frame is restored by
     * {@link augmentStackTraceWithInitialElement}.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
    function computeStackTraceByWalkingCallerChain(ex, depth) {
      var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
        stack = [],
        funcs = {},
        recursion = false,
        parts,
        item;

      for (
        var curr = computeStackTraceByWalkingCallerChain.caller;
        curr && !recursion;
        curr = curr.caller
      ) {
        if (curr === computeStackTrace || curr === TraceKit$1.report) {
          // console.log('skipping internal function');
          continue;
        }

        item = {
          url: null,
          func: UNKNOWN_FUNCTION,
          line: null,
          column: null
        };

        if (curr.name) {
          item.func = curr.name;
        } else if ((parts = functionName.exec(curr.toString()))) {
          item.func = parts[1];
        }

        if (typeof item.func === 'undefined') {
          try {
            item.func = parts.input.substring(0, parts.input.indexOf('{'));
          } catch (e) {}
        }

        if (funcs['' + curr]) {
          recursion = true;
        } else {
          funcs['' + curr] = true;
        }

        stack.push(item);
      }

      if (depth) {
        // console.log('depth is ' + depth);
        // console.log('stack is ' + stack.length);
        stack.splice(0, depth);
      }

      var result = {
        name: ex.name,
        message: ex.message,
        url: getLocationHref(),
        stack: stack
      };
      augmentStackTraceWithInitialElement(
        result,
        ex.sourceURL || ex.fileName,
        ex.line || ex.lineNumber,
        ex.message || ex.description
      );
      return result;
    }

    /**
     * Computes a stack trace for an exception.
     * @param {Error} ex
     * @param {(string|number)=} depth
     */
    function computeStackTrace(ex, depth) {
      var stack = null;
      depth = depth == null ? 0 : +depth;

      try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
          return stack;
        }
      } catch (e) {
        if (TraceKit$1.debug) {
          throw e;
        }
      }

      try {
        stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
        if (stack) {
          return stack;
        }
      } catch (e) {
        if (TraceKit$1.debug) {
          throw e;
        }
      }
      return {
        name: ex.name,
        message: ex.message,
        url: getLocationHref()
      };
    }

    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
    computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;

    return computeStackTrace;
  })();

  var tracekit = TraceKit$1;

  /*
   * JavaScript MD5
   * https://github.com/blueimp/JavaScript-MD5
   *
   * Copyright 2011, Sebastian Tschan
   * https://blueimp.net
   *
   * Licensed under the MIT license:
   * https://opensource.org/licenses/MIT
   *
   * Based on
   * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
   * Digest Algorithm, as defined in RFC 1321.
   * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
   * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
   * Distributed under the BSD License
   * See http://pajhome.org.uk/crypt/md5 for more info.
   */

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;

      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff);
    }
    return output;
  }

  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);
    }
    return output;
  }

  /*
  * Calculate the MD5 of a raw string
  */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }

  /*
  * Convert a raw string to a hex string
  */
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  }

  /*
  * Encode a string as utf-8
  */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }

  /*
  * Take string arguments and return either raw or hex encoded strings
  */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }
  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }

  function md5$1(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }
      return rawMD5(string);
    }
    if (!raw) {
      return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
  }

  var md5_1 = md5$1;

  function RavenConfigError$1(message) {
    this.name = 'RavenConfigError';
    this.message = message;
  }
  RavenConfigError$1.prototype = new Error();
  RavenConfigError$1.prototype.constructor = RavenConfigError$1;

  var configError = RavenConfigError$1;

  var utils$1 = utils$3;

  var wrapMethod = function(console, level, callback) {
    var originalConsoleLevel = console[level];
    var originalConsole = console;

    if (!(level in console)) {
      return;
    }

    var sentryLevel = level === 'warn' ? 'warning' : level;

    console[level] = function() {
      var args = [].slice.call(arguments);

      var msg = utils$1.safeJoin(args, ' ');
      var data = {level: sentryLevel, logger: 'console', extra: {arguments: args}};

      if (level === 'assert') {
        if (args[0] === false) {
          // Default browsers message
          msg =
            'Assertion failed: ' + (utils$1.safeJoin(args.slice(1), ' ') || 'console.assert');
          data.extra.arguments = args.slice(1);
          callback && callback(msg, data);
        }
      } else {
        callback && callback(msg, data);
      }

      // this fails for some browsers. :(
      if (originalConsoleLevel) {
        // IE9 doesn't allow calling apply on console functions directly
        // See: https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function#answer-5473193
        Function.prototype.apply.call(originalConsoleLevel, originalConsole, args);
      }
    };
  };

  var console$1 = {
    wrapMethod: wrapMethod
  };

  /*global XDomainRequest:false */

  var TraceKit = tracekit;
  var stringify = stringifyExports;
  var md5 = md5_1;
  var RavenConfigError = configError;

  var utils = utils$3;
  var isErrorEvent = utils.isErrorEvent;
  var isDOMError = utils.isDOMError;
  var isDOMException = utils.isDOMException;
  var isError = utils.isError;
  var isObject = utils.isObject;
  var isPlainObject = utils.isPlainObject;
  var isUndefined = utils.isUndefined;
  var isFunction = utils.isFunction;
  var isString = utils.isString;
  var isArray = utils.isArray;
  var isEmptyObject = utils.isEmptyObject;
  var each = utils.each;
  var objectMerge = utils.objectMerge;
  var truncate = utils.truncate;
  var objectFrozen = utils.objectFrozen;
  var hasKey = utils.hasKey;
  var joinRegExp = utils.joinRegExp;
  var urlencode = utils.urlencode;
  var uuid4 = utils.uuid4;
  var htmlTreeAsString = utils.htmlTreeAsString;
  var isSameException = utils.isSameException;
  var isSameStacktrace = utils.isSameStacktrace;
  var parseUrl = utils.parseUrl;
  var fill = utils.fill;
  var supportsFetch = utils.supportsFetch;
  var supportsReferrerPolicy = utils.supportsReferrerPolicy;
  var serializeKeysForMessage = utils.serializeKeysForMessage;
  var serializeException = utils.serializeException;
  var sanitize = utils.sanitize;

  var wrapConsoleMethod = console$1.wrapMethod;

  var dsnKeys = 'source protocol user pass host port path'.split(' '),
    dsnPattern = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

  function now() {
    return +new Date();
  }

  // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
  var _window$1 =
    typeof window !== 'undefined'
      ? window
      : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};
  var _document = _window$1.document;
  var _navigator = _window$1.navigator;

  function keepOriginalCallback(original, callback) {
    return isFunction(callback)
      ? function(data) {
          return callback(data, original);
        }
      : callback;
  }

  // First, check for JSON support
  // If there is no JSON, we no-op the core features of Raven
  // since JSON is required to encode the payload
  function Raven$2() {
    this._hasJSON = !!(typeof JSON === 'object' && JSON.stringify);
    // Raven can run in contexts where there's no document (react-native)
    this._hasDocument = !isUndefined(_document);
    this._hasNavigator = !isUndefined(_navigator);
    this._lastCapturedException = null;
    this._lastData = null;
    this._lastEventId = null;
    this._globalServer = null;
    this._globalKey = null;
    this._globalProject = null;
    this._globalContext = {};
    this._globalOptions = {
      // SENTRY_RELEASE can be injected by https://github.com/getsentry/sentry-webpack-plugin
      release: _window$1.SENTRY_RELEASE && _window$1.SENTRY_RELEASE.id,
      logger: 'javascript',
      ignoreErrors: [],
      ignoreUrls: [],
      whitelistUrls: [],
      includePaths: [],
      headers: null,
      collectWindowErrors: true,
      captureUnhandledRejections: true,
      maxMessageLength: 0,
      // By default, truncates URL values to 250 chars
      maxUrlLength: 250,
      stackTraceLimit: 50,
      autoBreadcrumbs: true,
      instrument: true,
      sampleRate: 1,
      sanitizeKeys: []
    };
    this._fetchDefaults = {
      method: 'POST',
      // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
      // https://caniuse.com/#feat=referrer-policy
      // It doesn't. And it throw exception instead of ignoring this parameter...
      // REF: https://github.com/getsentry/raven-js/issues/1233
      referrerPolicy: supportsReferrerPolicy() ? 'origin' : ''
    };
    this._ignoreOnError = 0;
    this._isRavenInstalled = false;
    this._originalErrorStackTraceLimit = Error.stackTraceLimit;
    // capture references to window.console *and* all its methods first
    // before the console plugin has a chance to monkey patch
    this._originalConsole = _window$1.console || {};
    this._originalConsoleMethods = {};
    this._plugins = [];
    this._startTime = now();
    this._wrappedBuiltIns = [];
    this._breadcrumbs = [];
    this._lastCapturedEvent = null;
    this._keypressTimeout;
    this._location = _window$1.location;
    this._lastHref = this._location && this._location.href;
    this._resetBackoff();

    // eslint-disable-next-line guard-for-in
    for (var method in this._originalConsole) {
      this._originalConsoleMethods[method] = this._originalConsole[method];
    }
  }

  /*
   * The core Raven singleton
   *
   * @this {Raven}
   */

  Raven$2.prototype = {
    // Hardcode version string so that raven source can be loaded directly via
    // webpack (using a build step causes webpack #1617). Grunt verifies that
    // this value matches package.json during build.
    //   See: https://github.com/getsentry/raven-js/issues/465
    VERSION: '3.27.2',

    debug: false,

    TraceKit: TraceKit, // alias to TraceKit

    /*
       * Configure Raven with a DSN and extra options
       *
       * @param {string} dsn The public Sentry DSN
       * @param {object} options Set of global options [optional]
       * @return {Raven}
       */
    config: function(dsn, options) {
      var self = this;

      if (self._globalServer) {
        this._logDebug('error', 'Error: Raven has already been configured');
        return self;
      }
      if (!dsn) return self;

      var globalOptions = self._globalOptions;

      // merge in options
      if (options) {
        each(options, function(key, value) {
          // tags and extra are special and need to be put into context
          if (key === 'tags' || key === 'extra' || key === 'user') {
            self._globalContext[key] = value;
          } else {
            globalOptions[key] = value;
          }
        });
      }

      self.setDSN(dsn);

      // "Script error." is hard coded into browsers for errors that it can't read.
      // this is the result of a script being pulled in from an external domain and CORS.
      globalOptions.ignoreErrors.push(/^Script error\.?$/);
      globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);

      // join regexp rules into one big rule
      globalOptions.ignoreErrors = joinRegExp(globalOptions.ignoreErrors);
      globalOptions.ignoreUrls = globalOptions.ignoreUrls.length
        ? joinRegExp(globalOptions.ignoreUrls)
        : false;
      globalOptions.whitelistUrls = globalOptions.whitelistUrls.length
        ? joinRegExp(globalOptions.whitelistUrls)
        : false;
      globalOptions.includePaths = joinRegExp(globalOptions.includePaths);
      globalOptions.maxBreadcrumbs = Math.max(
        0,
        Math.min(globalOptions.maxBreadcrumbs || 100, 100)
      ); // default and hard limit is 100

      var autoBreadcrumbDefaults = {
        xhr: true,
        console: true,
        dom: true,
        location: true,
        sentry: true
      };

      var autoBreadcrumbs = globalOptions.autoBreadcrumbs;
      if ({}.toString.call(autoBreadcrumbs) === '[object Object]') {
        autoBreadcrumbs = objectMerge(autoBreadcrumbDefaults, autoBreadcrumbs);
      } else if (autoBreadcrumbs !== false) {
        autoBreadcrumbs = autoBreadcrumbDefaults;
      }
      globalOptions.autoBreadcrumbs = autoBreadcrumbs;

      var instrumentDefaults = {
        tryCatch: true
      };

      var instrument = globalOptions.instrument;
      if ({}.toString.call(instrument) === '[object Object]') {
        instrument = objectMerge(instrumentDefaults, instrument);
      } else if (instrument !== false) {
        instrument = instrumentDefaults;
      }
      globalOptions.instrument = instrument;

      TraceKit.collectWindowErrors = !!globalOptions.collectWindowErrors;

      // return for chaining
      return self;
    },

    /*
       * Installs a global window.onerror error handler
       * to capture and report uncaught exceptions.
       * At this point, install() is required to be called due
       * to the way TraceKit is set up.
       *
       * @return {Raven}
       */
    install: function() {
      var self = this;
      if (self.isSetup() && !self._isRavenInstalled) {
        TraceKit.report.subscribe(function() {
          self._handleOnErrorStackInfo.apply(self, arguments);
        });

        if (self._globalOptions.captureUnhandledRejections) {
          self._attachPromiseRejectionHandler();
        }

        self._patchFunctionToString();

        if (self._globalOptions.instrument && self._globalOptions.instrument.tryCatch) {
          self._instrumentTryCatch();
        }

        if (self._globalOptions.autoBreadcrumbs) self._instrumentBreadcrumbs();

        // Install all of the plugins
        self._drainPlugins();

        self._isRavenInstalled = true;
      }

      Error.stackTraceLimit = self._globalOptions.stackTraceLimit;
      return this;
    },

    /*
       * Set the DSN (can be called multiple time unlike config)
       *
       * @param {string} dsn The public Sentry DSN
       */
    setDSN: function(dsn) {
      var self = this,
        uri = self._parseDSN(dsn),
        lastSlash = uri.path.lastIndexOf('/'),
        path = uri.path.substr(1, lastSlash);

      self._dsn = dsn;
      self._globalKey = uri.user;
      self._globalSecret = uri.pass && uri.pass.substr(1);
      self._globalProject = uri.path.substr(lastSlash + 1);

      self._globalServer = self._getGlobalServer(uri);

      self._globalEndpoint =
        self._globalServer + '/' + path + 'api/' + self._globalProject + '/store/';

      // Reset backoff state since we may be pointing at a
      // new project/server
      this._resetBackoff();
    },

    /*
       * Wrap code within a context so Raven can capture errors
       * reliably across domains that is executed immediately.
       *
       * @param {object} options A specific set of options for this context [optional]
       * @param {function} func The callback to be immediately executed within the context
       * @param {array} args An array of arguments to be called with the callback [optional]
       */
    context: function(options, func, args) {
      if (isFunction(options)) {
        args = func || [];
        func = options;
        options = {};
      }

      return this.wrap(options, func).apply(this, args);
    },

    /*
       * Wrap code within a context and returns back a new function to be executed
       *
       * @param {object} options A specific set of options for this context [optional]
       * @param {function} func The function to be wrapped in a new context
       * @param {function} _before A function to call before the try/catch wrapper [optional, private]
       * @return {function} The newly wrapped functions with a context
       */
    wrap: function(options, func, _before) {
      var self = this;
      // 1 argument has been passed, and it's not a function
      // so just return it
      if (isUndefined(func) && !isFunction(options)) {
        return options;
      }

      // options is optional
      if (isFunction(options)) {
        func = options;
        options = undefined;
      }

      // At this point, we've passed along 2 arguments, and the second one
      // is not a function either, so we'll just return the second argument.
      if (!isFunction(func)) {
        return func;
      }

      // We don't wanna wrap it twice!
      try {
        if (func.__raven__) {
          return func;
        }

        // If this has already been wrapped in the past, return that
        if (func.__raven_wrapper__) {
          return func.__raven_wrapper__;
        }
      } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return func;
      }

      function wrapped() {
        var args = [],
          i = arguments.length,
          deep = !options || (options && options.deep !== false);

        if (_before && isFunction(_before)) {
          _before.apply(this, arguments);
        }

        // Recursively wrap all of a function's arguments that are
        // functions themselves.
        while (i--) args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];

        try {
          // Attempt to invoke user-land function
          // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
          //       means Raven caught an error invoking your application code. This is
          //       expected behavior and NOT indicative of a bug with Raven.js.
          return func.apply(this, args);
        } catch (e) {
          self._ignoreNextOnError();
          self.captureException(e, options);
          throw e;
        }
      }

      // copy over properties of the old function
      for (var property in func) {
        if (hasKey(func, property)) {
          wrapped[property] = func[property];
        }
      }
      wrapped.prototype = func.prototype;

      func.__raven_wrapper__ = wrapped;
      // Signal that this function has been wrapped/filled already
      // for both debugging and to prevent it to being wrapped/filled twice
      wrapped.__raven__ = true;
      wrapped.__orig__ = func;

      return wrapped;
    },

    /**
     * Uninstalls the global error handler.
     *
     * @return {Raven}
     */
    uninstall: function() {
      TraceKit.report.uninstall();

      this._detachPromiseRejectionHandler();
      this._unpatchFunctionToString();
      this._restoreBuiltIns();
      this._restoreConsole();

      Error.stackTraceLimit = this._originalErrorStackTraceLimit;
      this._isRavenInstalled = false;

      return this;
    },

    /**
     * Callback used for `unhandledrejection` event
     *
     * @param {PromiseRejectionEvent} event An object containing
     *   promise: the Promise that was rejected
     *   reason: the value with which the Promise was rejected
     * @return void
     */
    _promiseRejectionHandler: function(event) {
      this._logDebug('debug', 'Raven caught unhandled promise rejection:', event);
      this.captureException(event.reason, {
        mechanism: {
          type: 'onunhandledrejection',
          handled: false
        }
      });
    },

    /**
     * Installs the global promise rejection handler.
     *
     * @return {raven}
     */
    _attachPromiseRejectionHandler: function() {
      this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this);
      _window$1.addEventListener &&
        _window$1.addEventListener('unhandledrejection', this._promiseRejectionHandler);
      return this;
    },

    /**
     * Uninstalls the global promise rejection handler.
     *
     * @return {raven}
     */
    _detachPromiseRejectionHandler: function() {
      _window$1.removeEventListener &&
        _window$1.removeEventListener('unhandledrejection', this._promiseRejectionHandler);
      return this;
    },

    /**
     * Manually capture an exception and send it over to Sentry
     *
     * @param {error} ex An exception to be logged
     * @param {object} options A specific set of options for this error [optional]
     * @return {Raven}
     */
    captureException: function(ex, options) {
      options = objectMerge({trimHeadFrames: 0}, options ? options : {});

      if (isErrorEvent(ex) && ex.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        ex = ex.error;
      } else if (isDOMError(ex) || isDOMException(ex)) {
        // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
        // then we just extract the name and message, as they don't provide anything else
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
        var name = ex.name || (isDOMError(ex) ? 'DOMError' : 'DOMException');
        var message = ex.message ? name + ': ' + ex.message : name;

        return this.captureMessage(
          message,
          objectMerge(options, {
            // neither DOMError or DOMException provide stack trace and we most likely wont get it this way as well
            // but it's barely any overhead so we may at least try
            stacktrace: true,
            trimHeadFrames: options.trimHeadFrames + 1
          })
        );
      } else if (isError(ex)) {
        // we have a real Error object
        ex = ex;
      } else if (isPlainObject(ex)) {
        // If it is plain Object, serialize it manually and extract options
        // This will allow us to group events based on top-level keys
        // which is much better than creating new group when any key/value change
        options = this._getCaptureExceptionOptionsFromPlainObject(options, ex);
        ex = new Error(options.message);
      } else {
        // If none of previous checks were valid, then it means that
        // it's not a DOMError/DOMException
        // it's not a plain Object
        // it's not a valid ErrorEvent (one with an error property)
        // it's not an Error
        // So bail out and capture it as a simple message:
        return this.captureMessage(
          ex,
          objectMerge(options, {
            stacktrace: true, // if we fall back to captureMessage, default to attempting a new trace
            trimHeadFrames: options.trimHeadFrames + 1
          })
        );
      }

      // Store the raw exception object for potential debugging and introspection
      this._lastCapturedException = ex;

      // TraceKit.report will re-raise any exception passed to it,
      // which means you have to wrap it in try/catch. Instead, we
      // can wrap it here and only re-raise if TraceKit.report
      // raises an exception different from the one we asked to
      // report on.
      try {
        var stack = TraceKit.computeStackTrace(ex);
        this._handleStackInfo(stack, options);
      } catch (ex1) {
        if (ex !== ex1) {
          throw ex1;
        }
      }

      return this;
    },

    _getCaptureExceptionOptionsFromPlainObject: function(currentOptions, ex) {
      var exKeys = Object.keys(ex).sort();
      var options = objectMerge(currentOptions, {
        message:
          'Non-Error exception captured with keys: ' + serializeKeysForMessage(exKeys),
        fingerprint: [md5(exKeys)],
        extra: currentOptions.extra || {}
      });
      options.extra.__serialized__ = serializeException(ex);

      return options;
    },

    /*
       * Manually send a message to Sentry
       *
       * @param {string} msg A plain message to be captured in Sentry
       * @param {object} options A specific set of options for this message [optional]
       * @return {Raven}
       */
    captureMessage: function(msg, options) {
      // config() automagically converts ignoreErrors from a list to a RegExp so we need to test for an
      // early call; we'll error on the side of logging anything called before configuration since it's
      // probably something you should see:
      if (
        !!this._globalOptions.ignoreErrors.test &&
        this._globalOptions.ignoreErrors.test(msg)
      ) {
        return;
      }

      options = options || {};
      msg = msg + ''; // Make sure it's actually a string

      var data = objectMerge(
        {
          message: msg
        },
        options
      );

      var ex;
      // Generate a "synthetic" stack trace from this point.
      // NOTE: If you are a Sentry user, and you are seeing this stack frame, it is NOT indicative
      //       of a bug with Raven.js. Sentry generates synthetic traces either by configuration,
      //       or if it catches a thrown object without a "stack" property.
      try {
        throw new Error(msg);
      } catch (ex1) {
        ex = ex1;
      }

      // null exception name so `Error` isn't prefixed to msg
      ex.name = null;
      var stack = TraceKit.computeStackTrace(ex);

      // stack[0] is `throw new Error(msg)` call itself, we are interested in the frame that was just before that, stack[1]
      var initialCall = isArray(stack.stack) && stack.stack[1];

      // if stack[1] is `Raven.captureException`, it means that someone passed a string to it and we redirected that call
      // to be handled by `captureMessage`, thus `initialCall` is the 3rd one, not 2nd
      // initialCall => captureException(string) => captureMessage(string)
      if (initialCall && initialCall.func === 'Raven.captureException') {
        initialCall = stack.stack[2];
      }

      var fileurl = (initialCall && initialCall.url) || '';

      if (
        !!this._globalOptions.ignoreUrls.test &&
        this._globalOptions.ignoreUrls.test(fileurl)
      ) {
        return;
      }

      if (
        !!this._globalOptions.whitelistUrls.test &&
        !this._globalOptions.whitelistUrls.test(fileurl)
      ) {
        return;
      }

      // Always attempt to get stacktrace if message is empty.
      // It's the only way to provide any helpful information to the user.
      if (this._globalOptions.stacktrace || options.stacktrace || data.message === '') {
        // fingerprint on msg, not stack trace (legacy behavior, could be revisited)
        data.fingerprint = data.fingerprint == null ? msg : data.fingerprint;

        options = objectMerge(
          {
            trimHeadFrames: 0
          },
          options
        );
        // Since we know this is a synthetic trace, the top frame (this function call)
        // MUST be from Raven.js, so mark it for trimming
        // We add to the trim counter so that callers can choose to trim extra frames, such
        // as utility functions.
        options.trimHeadFrames += 1;

        var frames = this._prepareFrames(stack, options);
        data.stacktrace = {
          // Sentry expects frames oldest to newest
          frames: frames.reverse()
        };
      }

      // Make sure that fingerprint is always wrapped in an array
      if (data.fingerprint) {
        data.fingerprint = isArray(data.fingerprint)
          ? data.fingerprint
          : [data.fingerprint];
      }

      // Fire away!
      this._send(data);

      return this;
    },

    captureBreadcrumb: function(obj) {
      var crumb = objectMerge(
        {
          timestamp: now() / 1000
        },
        obj
      );

      if (isFunction(this._globalOptions.breadcrumbCallback)) {
        var result = this._globalOptions.breadcrumbCallback(crumb);

        if (isObject(result) && !isEmptyObject(result)) {
          crumb = result;
        } else if (result === false) {
          return this;
        }
      }

      this._breadcrumbs.push(crumb);
      if (this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs) {
        this._breadcrumbs.shift();
      }
      return this;
    },

    addPlugin: function(plugin /*arg1, arg2, ... argN*/) {
      var pluginArgs = [].slice.call(arguments, 1);

      this._plugins.push([plugin, pluginArgs]);
      if (this._isRavenInstalled) {
        this._drainPlugins();
      }

      return this;
    },

    /*
       * Set/clear a user to be sent along with the payload.
       *
       * @param {object} user An object representing user data [optional]
       * @return {Raven}
       */
    setUserContext: function(user) {
      // Intentionally do not merge here since that's an unexpected behavior.
      this._globalContext.user = user;

      return this;
    },

    /*
       * Merge extra attributes to be sent along with the payload.
       *
       * @param {object} extra An object representing extra data [optional]
       * @return {Raven}
       */
    setExtraContext: function(extra) {
      this._mergeContext('extra', extra);

      return this;
    },

    /*
       * Merge tags to be sent along with the payload.
       *
       * @param {object} tags An object representing tags [optional]
       * @return {Raven}
       */
    setTagsContext: function(tags) {
      this._mergeContext('tags', tags);

      return this;
    },

    /*
       * Clear all of the context.
       *
       * @return {Raven}
       */
    clearContext: function() {
      this._globalContext = {};

      return this;
    },

    /*
       * Get a copy of the current context. This cannot be mutated.
       *
       * @return {object} copy of context
       */
    getContext: function() {
      // lol javascript
      return JSON.parse(stringify(this._globalContext));
    },

    /*
       * Set environment of application
       *
       * @param {string} environment Typically something like 'production'.
       * @return {Raven}
       */
    setEnvironment: function(environment) {
      this._globalOptions.environment = environment;

      return this;
    },

    /*
       * Set release version of application
       *
       * @param {string} release Typically something like a git SHA to identify version
       * @return {Raven}
       */
    setRelease: function(release) {
      this._globalOptions.release = release;

      return this;
    },

    /*
       * Set the dataCallback option
       *
       * @param {function} callback The callback to run which allows the
       *                            data blob to be mutated before sending
       * @return {Raven}
       */
    setDataCallback: function(callback) {
      var original = this._globalOptions.dataCallback;
      this._globalOptions.dataCallback = keepOriginalCallback(original, callback);
      return this;
    },

    /*
       * Set the breadcrumbCallback option
       *
       * @param {function} callback The callback to run which allows filtering
       *                            or mutating breadcrumbs
       * @return {Raven}
       */
    setBreadcrumbCallback: function(callback) {
      var original = this._globalOptions.breadcrumbCallback;
      this._globalOptions.breadcrumbCallback = keepOriginalCallback(original, callback);
      return this;
    },

    /*
       * Set the shouldSendCallback option
       *
       * @param {function} callback The callback to run which allows
       *                            introspecting the blob before sending
       * @return {Raven}
       */
    setShouldSendCallback: function(callback) {
      var original = this._globalOptions.shouldSendCallback;
      this._globalOptions.shouldSendCallback = keepOriginalCallback(original, callback);
      return this;
    },

    /**
     * Override the default HTTP transport mechanism that transmits data
     * to the Sentry server.
     *
     * @param {function} transport Function invoked instead of the default
     *                             `makeRequest` handler.
     *
     * @return {Raven}
     */
    setTransport: function(transport) {
      this._globalOptions.transport = transport;

      return this;
    },

    /*
       * Get the latest raw exception that was captured by Raven.
       *
       * @return {error}
       */
    lastException: function() {
      return this._lastCapturedException;
    },

    /*
       * Get the last event id
       *
       * @return {string}
       */
    lastEventId: function() {
      return this._lastEventId;
    },

    /*
       * Determine if Raven is setup and ready to go.
       *
       * @return {boolean}
       */
    isSetup: function() {
      if (!this._hasJSON) return false; // needs JSON support
      if (!this._globalServer) {
        if (!this.ravenNotConfiguredError) {
          this.ravenNotConfiguredError = true;
          this._logDebug('error', 'Error: Raven has not been configured.');
        }
        return false;
      }
      return true;
    },

    afterLoad: function() {
      // TODO: remove window dependence?

      // Attempt to initialize Raven on load
      var RavenConfig = _window$1.RavenConfig;
      if (RavenConfig) {
        this.config(RavenConfig.dsn, RavenConfig.config).install();
      }
    },

    showReportDialog: function(options) {
      if (
        !_document // doesn't work without a document (React native)
      )
        return;

      options = objectMerge(
        {
          eventId: this.lastEventId(),
          dsn: this._dsn,
          user: this._globalContext.user || {}
        },
        options
      );

      if (!options.eventId) {
        throw new RavenConfigError('Missing eventId');
      }

      if (!options.dsn) {
        throw new RavenConfigError('Missing DSN');
      }

      var encode = encodeURIComponent;
      var encodedOptions = [];

      for (var key in options) {
        if (key === 'user') {
          var user = options.user;
          if (user.name) encodedOptions.push('name=' + encode(user.name));
          if (user.email) encodedOptions.push('email=' + encode(user.email));
        } else {
          encodedOptions.push(encode(key) + '=' + encode(options[key]));
        }
      }
      var globalServer = this._getGlobalServer(this._parseDSN(options.dsn));

      var script = _document.createElement('script');
      script.async = true;
      script.src = globalServer + '/api/embed/error-page/?' + encodedOptions.join('&');
      (_document.head || _document.body).appendChild(script);
    },

    /**** Private functions ****/
    _ignoreNextOnError: function() {
      var self = this;
      this._ignoreOnError += 1;
      setTimeout(function() {
        // onerror should trigger before setTimeout
        self._ignoreOnError -= 1;
      });
    },

    _triggerEvent: function(eventType, options) {
      // NOTE: `event` is a native browser thing, so let's avoid conflicting wiht it
      var evt, key;

      if (!this._hasDocument) return;

      options = options || {};

      eventType = 'raven' + eventType.substr(0, 1).toUpperCase() + eventType.substr(1);

      if (_document.createEvent) {
        evt = _document.createEvent('HTMLEvents');
        evt.initEvent(eventType, true, true);
      } else {
        evt = _document.createEventObject();
        evt.eventType = eventType;
      }

      for (key in options)
        if (hasKey(options, key)) {
          evt[key] = options[key];
        }

      if (_document.createEvent) {
        // IE9 if standards
        _document.dispatchEvent(evt);
      } else {
        // IE8 regardless of Quirks or Standards
        // IE9 if quirks
        try {
          _document.fireEvent('on' + evt.eventType.toLowerCase(), evt);
        } catch (e) {
          // Do nothing
        }
      }
    },

    /**
     * Wraps addEventListener to capture UI breadcrumbs
     * @param evtName the event name (e.g. "click")
     * @returns {Function}
     * @private
     */
    _breadcrumbEventHandler: function(evtName) {
      var self = this;
      return function(evt) {
        // reset keypress timeout; e.g. triggering a 'click' after
        // a 'keypress' will reset the keypress debounce so that a new
        // set of keypresses can be recorded
        self._keypressTimeout = null;

        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors). Ignore if we've
        // already captured the event.
        if (self._lastCapturedEvent === evt) return;

        self._lastCapturedEvent = evt;

        // try/catch both:
        // - accessing evt.target (see getsentry/raven-js#838, #768)
        // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
        //   can throw an exception in some circumstances.
        var target;
        try {
          target = htmlTreeAsString(evt.target);
        } catch (e) {
          target = '<unknown>';
        }

        self.captureBreadcrumb({
          category: 'ui.' + evtName, // e.g. ui.click, ui.input
          message: target
        });
      };
    },

    /**
     * Wraps addEventListener to capture keypress UI events
     * @returns {Function}
     * @private
     */
    _keypressEventHandler: function() {
      var self = this,
        debounceDuration = 1000; // milliseconds

      // TODO: if somehow user switches keypress target before
      //       debounce timeout is triggered, we will only capture
      //       a single breadcrumb from the FIRST target (acceptable?)
      return function(evt) {
        var target;
        try {
          target = evt.target;
        } catch (e) {
          // just accessing event properties can throw an exception in some rare circumstances
          // see: https://github.com/getsentry/raven-js/issues/838
          return;
        }
        var tagName = target && target.tagName;

        // only consider keypress events on actual input elements
        // this will disregard keypresses targeting body (e.g. tabbing
        // through elements, hotkeys, etc)
        if (
          !tagName ||
          (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)
        )
          return;

        // record first keypress in a series, but ignore subsequent
        // keypresses until debounce clears
        var timeout = self._keypressTimeout;
        if (!timeout) {
          self._breadcrumbEventHandler('input')(evt);
        }
        clearTimeout(timeout);
        self._keypressTimeout = setTimeout(function() {
          self._keypressTimeout = null;
        }, debounceDuration);
      };
    },

    /**
     * Captures a breadcrumb of type "navigation", normalizing input URLs
     * @param to the originating URL
     * @param from the target URL
     * @private
     */
    _captureUrlChange: function(from, to) {
      var parsedLoc = parseUrl(this._location.href);
      var parsedTo = parseUrl(to);
      var parsedFrom = parseUrl(from);

      // because onpopstate only tells you the "new" (to) value of location.href, and
      // not the previous (from) value, we need to track the value of the current URL
      // state ourselves
      this._lastHref = to;

      // Use only the path component of the URL if the URL matches the current
      // document (almost all the time when using pushState)
      if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host)
        to = parsedTo.relative;
      if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host)
        from = parsedFrom.relative;

      this.captureBreadcrumb({
        category: 'navigation',
        data: {
          to: to,
          from: from
        }
      });
    },

    _patchFunctionToString: function() {
      var self = this;
      self._originalFunctionToString = Function.prototype.toString;
      // eslint-disable-next-line no-extend-native
      Function.prototype.toString = function() {
        if (typeof this === 'function' && this.__raven__) {
          return self._originalFunctionToString.apply(this.__orig__, arguments);
        }
        return self._originalFunctionToString.apply(this, arguments);
      };
    },

    _unpatchFunctionToString: function() {
      if (this._originalFunctionToString) {
        // eslint-disable-next-line no-extend-native
        Function.prototype.toString = this._originalFunctionToString;
      }
    },

    /**
     * Wrap timer functions and event targets to catch errors and provide
     * better metadata.
     */
    _instrumentTryCatch: function() {
      var self = this;

      var wrappedBuiltIns = self._wrappedBuiltIns;

      function wrapTimeFn(orig) {
        return function(fn, t) {
          // preserve arity
          // Make a copy of the arguments to prevent deoptimization
          // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
          }
          var originalCallback = args[0];
          if (isFunction(originalCallback)) {
            args[0] = self.wrap(
              {
                mechanism: {
                  type: 'instrument',
                  data: {function: orig.name || '<anonymous>'}
                }
              },
              originalCallback
            );
          }

          // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
          // also supports only two arguments and doesn't care what this is, so we
          // can just call the original function directly.
          if (orig.apply) {
            return orig.apply(this, args);
          } else {
            return orig(args[0], args[1]);
          }
        };
      }

      var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

      function wrapEventTarget(global) {
        var proto = _window$1[global] && _window$1[global].prototype;
        if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
          fill(
            proto,
            'addEventListener',
            function(orig) {
              return function(evtName, fn, capture, secure) {
                // preserve arity
                try {
                  if (fn && fn.handleEvent) {
                    fn.handleEvent = self.wrap(
                      {
                        mechanism: {
                          type: 'instrument',
                          data: {
                            target: global,
                            function: 'handleEvent',
                            handler: (fn && fn.name) || '<anonymous>'
                          }
                        }
                      },
                      fn.handleEvent
                    );
                  }
                } catch (err) {
                  // can sometimes get 'Permission denied to access property "handle Event'
                }

                // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
                // so that we don't have more than one wrapper function
                var before, clickHandler, keypressHandler;

                if (
                  autoBreadcrumbs &&
                  autoBreadcrumbs.dom &&
                  (global === 'EventTarget' || global === 'Node')
                ) {
                  // NOTE: generating multiple handlers per addEventListener invocation, should
                  //       revisit and verify we can just use one (almost certainly)
                  clickHandler = self._breadcrumbEventHandler('click');
                  keypressHandler = self._keypressEventHandler();
                  before = function(evt) {
                    // need to intercept every DOM event in `before` argument, in case that
                    // same wrapped method is re-used for different events (e.g. mousemove THEN click)
                    // see #724
                    if (!evt) return;

                    var eventType;
                    try {
                      eventType = evt.type;
                    } catch (e) {
                      // just accessing event properties can throw an exception in some rare circumstances
                      // see: https://github.com/getsentry/raven-js/issues/838
                      return;
                    }
                    if (eventType === 'click') return clickHandler(evt);
                    else if (eventType === 'keypress') return keypressHandler(evt);
                  };
                }
                return orig.call(
                  this,
                  evtName,
                  self.wrap(
                    {
                      mechanism: {
                        type: 'instrument',
                        data: {
                          target: global,
                          function: 'addEventListener',
                          handler: (fn && fn.name) || '<anonymous>'
                        }
                      }
                    },
                    fn,
                    before
                  ),
                  capture,
                  secure
                );
              };
            },
            wrappedBuiltIns
          );
          fill(
            proto,
            'removeEventListener',
            function(orig) {
              return function(evt, fn, capture, secure) {
                try {
                  fn = fn && (fn.__raven_wrapper__ ? fn.__raven_wrapper__ : fn);
                } catch (e) {
                  // ignore, accessing __raven_wrapper__ will throw in some Selenium environments
                }
                return orig.call(this, evt, fn, capture, secure);
              };
            },
            wrappedBuiltIns
          );
        }
      }

      fill(_window$1, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
      fill(_window$1, 'setInterval', wrapTimeFn, wrappedBuiltIns);
      if (_window$1.requestAnimationFrame) {
        fill(
          _window$1,
          'requestAnimationFrame',
          function(orig) {
            return function(cb) {
              return orig(
                self.wrap(
                  {
                    mechanism: {
                      type: 'instrument',
                      data: {
                        function: 'requestAnimationFrame',
                        handler: (orig && orig.name) || '<anonymous>'
                      }
                    }
                  },
                  cb
                )
              );
            };
          },
          wrappedBuiltIns
        );
      }

      // event targets borrowed from bugsnag-js:
      // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
      var eventTargets = [
        'EventTarget',
        'Window',
        'Node',
        'ApplicationCache',
        'AudioTrackList',
        'ChannelMergerNode',
        'CryptoOperation',
        'EventSource',
        'FileReader',
        'HTMLUnknownElement',
        'IDBDatabase',
        'IDBRequest',
        'IDBTransaction',
        'KeyOperation',
        'MediaController',
        'MessagePort',
        'ModalWindow',
        'Notification',
        'SVGElementInstance',
        'Screen',
        'TextTrack',
        'TextTrackCue',
        'TextTrackList',
        'WebSocket',
        'WebSocketWorker',
        'Worker',
        'XMLHttpRequest',
        'XMLHttpRequestEventTarget',
        'XMLHttpRequestUpload'
      ];
      for (var i = 0; i < eventTargets.length; i++) {
        wrapEventTarget(eventTargets[i]);
      }
    },

    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - XMLHttpRequests
     *  - DOM interactions (click/typing)
     *  - window.location changes
     *  - console
     *
     * Can be disabled or individually configured via the `autoBreadcrumbs` config option
     */
    _instrumentBreadcrumbs: function() {
      var self = this;
      var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

      var wrappedBuiltIns = self._wrappedBuiltIns;

      function wrapProp(prop, xhr) {
        if (prop in xhr && isFunction(xhr[prop])) {
          fill(xhr, prop, function(orig) {
            return self.wrap(
              {
                mechanism: {
                  type: 'instrument',
                  data: {function: prop, handler: (orig && orig.name) || '<anonymous>'}
                }
              },
              orig
            );
          }); // intentionally don't track filled methods on XHR instances
        }
      }

      if (autoBreadcrumbs.xhr && 'XMLHttpRequest' in _window$1) {
        var xhrproto = _window$1.XMLHttpRequest && _window$1.XMLHttpRequest.prototype;
        fill(
          xhrproto,
          'open',
          function(origOpen) {
            return function(method, url) {
              // preserve arity

              // if Sentry key appears in URL, don't capture
              if (isString(url) && url.indexOf(self._globalKey) === -1) {
                this.__raven_xhr = {
                  method: method,
                  url: url,
                  status_code: null
                };
              }

              return origOpen.apply(this, arguments);
            };
          },
          wrappedBuiltIns
        );

        fill(
          xhrproto,
          'send',
          function(origSend) {
            return function() {
              // preserve arity
              var xhr = this;

              function onreadystatechangeHandler() {
                if (xhr.__raven_xhr && xhr.readyState === 4) {
                  try {
                    // touching statusCode in some platforms throws
                    // an exception
                    xhr.__raven_xhr.status_code = xhr.status;
                  } catch (e) {
                    /* do nothing */
                  }

                  self.captureBreadcrumb({
                    type: 'http',
                    category: 'xhr',
                    data: xhr.__raven_xhr
                  });
                }
              }

              var props = ['onload', 'onerror', 'onprogress'];
              for (var j = 0; j < props.length; j++) {
                wrapProp(props[j], xhr);
              }

              if ('onreadystatechange' in xhr && isFunction(xhr.onreadystatechange)) {
                fill(
                  xhr,
                  'onreadystatechange',
                  function(orig) {
                    return self.wrap(
                      {
                        mechanism: {
                          type: 'instrument',
                          data: {
                            function: 'onreadystatechange',
                            handler: (orig && orig.name) || '<anonymous>'
                          }
                        }
                      },
                      orig,
                      onreadystatechangeHandler
                    );
                  } /* intentionally don't track this instrumentation */
                );
              } else {
                // if onreadystatechange wasn't actually set by the page on this xhr, we
                // are free to set our own and capture the breadcrumb
                xhr.onreadystatechange = onreadystatechangeHandler;
              }

              return origSend.apply(this, arguments);
            };
          },
          wrappedBuiltIns
        );
      }

      if (autoBreadcrumbs.xhr && supportsFetch()) {
        fill(
          _window$1,
          'fetch',
          function(origFetch) {
            return function() {
              // preserve arity
              // Make a copy of the arguments to prevent deoptimization
              // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
              var args = new Array(arguments.length);
              for (var i = 0; i < args.length; ++i) {
                args[i] = arguments[i];
              }

              var fetchInput = args[0];
              var method = 'GET';
              var url;

              if (typeof fetchInput === 'string') {
                url = fetchInput;
              } else if ('Request' in _window$1 && fetchInput instanceof _window$1.Request) {
                url = fetchInput.url;
                if (fetchInput.method) {
                  method = fetchInput.method;
                }
              } else {
                url = '' + fetchInput;
              }

              // if Sentry key appears in URL, don't capture, as it's our own request
              if (url.indexOf(self._globalKey) !== -1) {
                return origFetch.apply(this, args);
              }

              if (args[1] && args[1].method) {
                method = args[1].method;
              }

              var fetchData = {
                method: method,
                url: url,
                status_code: null
              };

              return origFetch
                .apply(this, args)
                .then(function(response) {
                  fetchData.status_code = response.status;

                  self.captureBreadcrumb({
                    type: 'http',
                    category: 'fetch',
                    data: fetchData
                  });

                  return response;
                })
                ['catch'](function(err) {
                  // if there is an error performing the request
                  self.captureBreadcrumb({
                    type: 'http',
                    category: 'fetch',
                    data: fetchData,
                    level: 'error'
                  });

                  throw err;
                });
            };
          },
          wrappedBuiltIns
        );
      }

      // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
      // to the document. Do this before we instrument addEventListener.
      if (autoBreadcrumbs.dom && this._hasDocument) {
        if (_document.addEventListener) {
          _document.addEventListener('click', self._breadcrumbEventHandler('click'), false);
          _document.addEventListener('keypress', self._keypressEventHandler(), false);
        } else if (_document.attachEvent) {
          // IE8 Compatibility
          _document.attachEvent('onclick', self._breadcrumbEventHandler('click'));
          _document.attachEvent('onkeypress', self._keypressEventHandler());
        }
      }

      // record navigation (URL) changes
      // NOTE: in Chrome App environment, touching history.pushState, *even inside
      //       a try/catch block*, will cause Chrome to output an error to console.error
      // borrowed from: https://github.com/angular/angular.js/pull/13945/files
      var chrome = _window$1.chrome;
      var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
      var hasPushAndReplaceState =
        !isChromePackagedApp &&
        _window$1.history &&
        _window$1.history.pushState &&
        _window$1.history.replaceState;
      if (autoBreadcrumbs.location && hasPushAndReplaceState) {
        // TODO: remove onpopstate handler on uninstall()
        var oldOnPopState = _window$1.onpopstate;
        _window$1.onpopstate = function() {
          var currentHref = self._location.href;
          self._captureUrlChange(self._lastHref, currentHref);

          if (oldOnPopState) {
            return oldOnPopState.apply(this, arguments);
          }
        };

        var historyReplacementFunction = function(origHistFunction) {
          // note history.pushState.length is 0; intentionally not declaring
          // params to preserve 0 arity
          return function(/* state, title, url */) {
            var url = arguments.length > 2 ? arguments[2] : undefined;

            // url argument is optional
            if (url) {
              // coerce to string (this is what pushState does)
              self._captureUrlChange(self._lastHref, url + '');
            }

            return origHistFunction.apply(this, arguments);
          };
        };

        fill(_window$1.history, 'pushState', historyReplacementFunction, wrappedBuiltIns);
        fill(_window$1.history, 'replaceState', historyReplacementFunction, wrappedBuiltIns);
      }

      if (autoBreadcrumbs.console && 'console' in _window$1 && console.log) {
        // console
        var consoleMethodCallback = function(msg, data) {
          self.captureBreadcrumb({
            message: msg,
            level: data.level,
            category: 'console'
          });
        };

        each(['debug', 'info', 'warn', 'error', 'log'], function(_, level) {
          wrapConsoleMethod(console, level, consoleMethodCallback);
        });
      }
    },

    _restoreBuiltIns: function() {
      // restore any wrapped builtins
      var builtin;
      while (this._wrappedBuiltIns.length) {
        builtin = this._wrappedBuiltIns.shift();

        var obj = builtin[0],
          name = builtin[1],
          orig = builtin[2];

        obj[name] = orig;
      }
    },

    _restoreConsole: function() {
      // eslint-disable-next-line guard-for-in
      for (var method in this._originalConsoleMethods) {
        this._originalConsole[method] = this._originalConsoleMethods[method];
      }
    },

    _drainPlugins: function() {
      var self = this;

      // FIX ME TODO
      each(this._plugins, function(_, plugin) {
        var installer = plugin[0];
        var args = plugin[1];
        installer.apply(self, [self].concat(args));
      });
    },

    _parseDSN: function(str) {
      var m = dsnPattern.exec(str),
        dsn = {},
        i = 7;

      try {
        while (i--) dsn[dsnKeys[i]] = m[i] || '';
      } catch (e) {
        throw new RavenConfigError('Invalid DSN: ' + str);
      }

      if (dsn.pass && !this._globalOptions.allowSecretKey) {
        throw new RavenConfigError(
          'Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key'
        );
      }

      return dsn;
    },

    _getGlobalServer: function(uri) {
      // assemble the endpoint from the uri pieces
      var globalServer = '//' + uri.host + (uri.port ? ':' + uri.port : '');

      if (uri.protocol) {
        globalServer = uri.protocol + ':' + globalServer;
      }
      return globalServer;
    },

    _handleOnErrorStackInfo: function(stackInfo, options) {
      options = options || {};
      options.mechanism = options.mechanism || {
        type: 'onerror',
        handled: false
      };

      // if we are intentionally ignoring errors via onerror, bail out
      if (!this._ignoreOnError) {
        this._handleStackInfo(stackInfo, options);
      }
    },

    _handleStackInfo: function(stackInfo, options) {
      var frames = this._prepareFrames(stackInfo, options);

      this._triggerEvent('handle', {
        stackInfo: stackInfo,
        options: options
      });

      this._processException(
        stackInfo.name,
        stackInfo.message,
        stackInfo.url,
        stackInfo.lineno,
        frames,
        options
      );
    },

    _prepareFrames: function(stackInfo, options) {
      var self = this;
      var frames = [];
      if (stackInfo.stack && stackInfo.stack.length) {
        each(stackInfo.stack, function(i, stack) {
          var frame = self._normalizeFrame(stack, stackInfo.url);
          if (frame) {
            frames.push(frame);
          }
        });

        // e.g. frames captured via captureMessage throw
        if (options && options.trimHeadFrames) {
          for (var j = 0; j < options.trimHeadFrames && j < frames.length; j++) {
            frames[j].in_app = false;
          }
        }
      }
      frames = frames.slice(0, this._globalOptions.stackTraceLimit);
      return frames;
    },

    _normalizeFrame: function(frame, stackInfoUrl) {
      // normalize the frames data
      var normalized = {
        filename: frame.url,
        lineno: frame.line,
        colno: frame.column,
        function: frame.func || '?'
      };

      // Case when we don't have any information about the error
      // E.g. throwing a string or raw object, instead of an `Error` in Firefox
      // Generating synthetic error doesn't add any value here
      //
      // We should probably somehow let a user know that they should fix their code
      if (!frame.url) {
        normalized.filename = stackInfoUrl; // fallback to whole stacks url from onerror handler
      }

      normalized.in_app = !// determine if an exception came from outside of our app
      // first we check the global includePaths list.
      (
        (!!this._globalOptions.includePaths.test &&
          !this._globalOptions.includePaths.test(normalized.filename)) ||
        // Now we check for fun, if the function name is Raven or TraceKit
        /(Raven|TraceKit)\./.test(normalized['function']) ||
        // finally, we do a last ditch effort and check for raven.min.js
        /raven\.(min\.)?js$/.test(normalized.filename)
      );

      return normalized;
    },

    _processException: function(type, message, fileurl, lineno, frames, options) {
      var prefixedMessage = (type ? type + ': ' : '') + (message || '');
      if (
        !!this._globalOptions.ignoreErrors.test &&
        (this._globalOptions.ignoreErrors.test(message) ||
          this._globalOptions.ignoreErrors.test(prefixedMessage))
      ) {
        return;
      }

      var stacktrace;

      if (frames && frames.length) {
        fileurl = frames[0].filename || fileurl;
        // Sentry expects frames oldest to newest
        // and JS sends them as newest to oldest
        frames.reverse();
        stacktrace = {frames: frames};
      } else if (fileurl) {
        stacktrace = {
          frames: [
            {
              filename: fileurl,
              lineno: lineno,
              in_app: true
            }
          ]
        };
      }

      if (
        !!this._globalOptions.ignoreUrls.test &&
        this._globalOptions.ignoreUrls.test(fileurl)
      ) {
        return;
      }

      if (
        !!this._globalOptions.whitelistUrls.test &&
        !this._globalOptions.whitelistUrls.test(fileurl)
      ) {
        return;
      }

      var data = objectMerge(
        {
          // sentry.interfaces.Exception
          exception: {
            values: [
              {
                type: type,
                value: message,
                stacktrace: stacktrace
              }
            ]
          },
          transaction: fileurl
        },
        options
      );

      var ex = data.exception.values[0];
      if (ex.type == null && ex.value === '') {
        ex.value = 'Unrecoverable error caught';
      }

      // Move mechanism from options to exception interface
      // We do this, as requiring user to pass `{exception:{mechanism:{ ... }}}` would be
      // too much
      if (!data.exception.mechanism && data.mechanism) {
        data.exception.mechanism = data.mechanism;
        delete data.mechanism;
      }

      data.exception.mechanism = objectMerge(
        {
          type: 'generic',
          handled: true
        },
        data.exception.mechanism || {}
      );

      // Fire away!
      this._send(data);
    },

    _trimPacket: function(data) {
      // For now, we only want to truncate the two different messages
      // but this could/should be expanded to just trim everything
      var max = this._globalOptions.maxMessageLength;
      if (data.message) {
        data.message = truncate(data.message, max);
      }
      if (data.exception) {
        var exception = data.exception.values[0];
        exception.value = truncate(exception.value, max);
      }

      var request = data.request;
      if (request) {
        if (request.url) {
          request.url = truncate(request.url, this._globalOptions.maxUrlLength);
        }
        if (request.Referer) {
          request.Referer = truncate(request.Referer, this._globalOptions.maxUrlLength);
        }
      }

      if (data.breadcrumbs && data.breadcrumbs.values)
        this._trimBreadcrumbs(data.breadcrumbs);

      return data;
    },

    /**
     * Truncate breadcrumb values (right now just URLs)
     */
    _trimBreadcrumbs: function(breadcrumbs) {
      // known breadcrumb properties with urls
      // TODO: also consider arbitrary prop values that start with (https?)?://
      var urlProps = ['to', 'from', 'url'],
        urlProp,
        crumb,
        data;

      for (var i = 0; i < breadcrumbs.values.length; ++i) {
        crumb = breadcrumbs.values[i];
        if (
          !crumb.hasOwnProperty('data') ||
          !isObject(crumb.data) ||
          objectFrozen(crumb.data)
        )
          continue;

        data = objectMerge({}, crumb.data);
        for (var j = 0; j < urlProps.length; ++j) {
          urlProp = urlProps[j];
          if (data.hasOwnProperty(urlProp) && data[urlProp]) {
            data[urlProp] = truncate(data[urlProp], this._globalOptions.maxUrlLength);
          }
        }
        breadcrumbs.values[i].data = data;
      }
    },

    _getHttpData: function() {
      if (!this._hasNavigator && !this._hasDocument) return;
      var httpData = {};

      if (this._hasNavigator && _navigator.userAgent) {
        httpData.headers = {
          'User-Agent': _navigator.userAgent
        };
      }

      // Check in `window` instead of `document`, as we may be in ServiceWorker environment
      if (_window$1.location && _window$1.location.href) {
        httpData.url = _window$1.location.href;
      }

      if (this._hasDocument && _document.referrer) {
        if (!httpData.headers) httpData.headers = {};
        httpData.headers.Referer = _document.referrer;
      }

      return httpData;
    },

    _resetBackoff: function() {
      this._backoffDuration = 0;
      this._backoffStart = null;
    },

    _shouldBackoff: function() {
      return this._backoffDuration && now() - this._backoffStart < this._backoffDuration;
    },

    /**
     * Returns true if the in-process data payload matches the signature
     * of the previously-sent data
     *
     * NOTE: This has to be done at this level because TraceKit can generate
     *       data from window.onerror WITHOUT an exception object (IE8, IE9,
     *       other old browsers). This can take the form of an "exception"
     *       data object with a single frame (derived from the onerror args).
     */
    _isRepeatData: function(current) {
      var last = this._lastData;

      if (
        !last ||
        current.message !== last.message || // defined for captureMessage
        current.transaction !== last.transaction // defined for captureException/onerror
      )
        return false;

      // Stacktrace interface (i.e. from captureMessage)
      if (current.stacktrace || last.stacktrace) {
        return isSameStacktrace(current.stacktrace, last.stacktrace);
      } else if (current.exception || last.exception) {
        // Exception interface (i.e. from captureException/onerror)
        return isSameException(current.exception, last.exception);
      } else if (current.fingerprint || last.fingerprint) {
        return Boolean(current.fingerprint && last.fingerprint) &&
          JSON.stringify(current.fingerprint) === JSON.stringify(last.fingerprint)
      }

      return true;
    },

    _setBackoffState: function(request) {
      // If we are already in a backoff state, don't change anything
      if (this._shouldBackoff()) {
        return;
      }

      var status = request.status;

      // 400 - project_id doesn't exist or some other fatal
      // 401 - invalid/revoked dsn
      // 429 - too many requests
      if (!(status === 400 || status === 401 || status === 429)) return;

      var retry;
      try {
        // If Retry-After is not in Access-Control-Expose-Headers, most
        // browsers will throw an exception trying to access it
        if (supportsFetch()) {
          retry = request.headers.get('Retry-After');
        } else {
          retry = request.getResponseHeader('Retry-After');
        }

        // Retry-After is returned in seconds
        retry = parseInt(retry, 10) * 1000;
      } catch (e) {
        /* eslint no-empty:0 */
      }

      this._backoffDuration = retry
        ? // If Sentry server returned a Retry-After value, use it
          retry
        : // Otherwise, double the last backoff duration (starts at 1 sec)
          this._backoffDuration * 2 || 1000;

      this._backoffStart = now();
    },

    _send: function(data) {
      var globalOptions = this._globalOptions;

      var baseData = {
          project: this._globalProject,
          logger: globalOptions.logger,
          platform: 'javascript'
        },
        httpData = this._getHttpData();

      if (httpData) {
        baseData.request = httpData;
      }

      // HACK: delete `trimHeadFrames` to prevent from appearing in outbound payload
      if (data.trimHeadFrames) delete data.trimHeadFrames;

      data = objectMerge(baseData, data);

      // Merge in the tags and extra separately since objectMerge doesn't handle a deep merge
      data.tags = objectMerge(objectMerge({}, this._globalContext.tags), data.tags);
      data.extra = objectMerge(objectMerge({}, this._globalContext.extra), data.extra);

      // Send along our own collected metadata with extra
      data.extra['session:duration'] = now() - this._startTime;

      if (this._breadcrumbs && this._breadcrumbs.length > 0) {
        // intentionally make shallow copy so that additions
        // to breadcrumbs aren't accidentally sent in this request
        data.breadcrumbs = {
          values: [].slice.call(this._breadcrumbs, 0)
        };
      }

      if (this._globalContext.user) {
        // sentry.interfaces.User
        data.user = this._globalContext.user;
      }

      // Include the environment if it's defined in globalOptions
      if (globalOptions.environment) data.environment = globalOptions.environment;

      // Include the release if it's defined in globalOptions
      if (globalOptions.release) data.release = globalOptions.release;

      // Include server_name if it's defined in globalOptions
      if (globalOptions.serverName) data.server_name = globalOptions.serverName;

      data = this._sanitizeData(data);

      // Cleanup empty properties before sending them to the server
      Object.keys(data).forEach(function(key) {
        if (data[key] == null || data[key] === '' || isEmptyObject(data[key])) {
          delete data[key];
        }
      });

      if (isFunction(globalOptions.dataCallback)) {
        data = globalOptions.dataCallback(data) || data;
      }

      // Why??????????
      if (!data || isEmptyObject(data)) {
        return;
      }

      // Check if the request should be filtered or not
      if (
        isFunction(globalOptions.shouldSendCallback) &&
        !globalOptions.shouldSendCallback(data)
      ) {
        return;
      }

      // Backoff state: Sentry server previously responded w/ an error (e.g. 429 - too many requests),
      // so drop requests until "cool-off" period has elapsed.
      if (this._shouldBackoff()) {
        this._logDebug('warn', 'Raven dropped error due to backoff: ', data);
        return;
      }

      if (typeof globalOptions.sampleRate === 'number') {
        if (Math.random() < globalOptions.sampleRate) {
          this._sendProcessedPayload(data);
        }
      } else {
        this._sendProcessedPayload(data);
      }
    },

    _sanitizeData: function(data) {
      return sanitize(data, this._globalOptions.sanitizeKeys);
    },

    _getUuid: function() {
      return uuid4();
    },

    _sendProcessedPayload: function(data, callback) {
      var self = this;
      var globalOptions = this._globalOptions;

      if (!this.isSetup()) return;

      // Try and clean up the packet before sending by truncating long values
      data = this._trimPacket(data);

      // ideally duplicate error testing should occur *before* dataCallback/shouldSendCallback,
      // but this would require copying an un-truncated copy of the data packet, which can be
      // arbitrarily deep (extra_data) -- could be worthwhile? will revisit
      if (!this._globalOptions.allowDuplicates && this._isRepeatData(data)) {
        this._logDebug('warn', 'Raven dropped repeat event: ', data);
        return;
      }

      // Send along an event_id if not explicitly passed.
      // This event_id can be used to reference the error within Sentry itself.
      // Set lastEventId after we know the error should actually be sent
      this._lastEventId = data.event_id || (data.event_id = this._getUuid());

      // Store outbound payload after trim
      this._lastData = data;

      this._logDebug('debug', 'Raven about to send:', data);

      var auth = {
        sentry_version: '7',
        sentry_client: 'raven-js/' + this.VERSION,
        sentry_key: this._globalKey
      };

      if (this._globalSecret) {
        auth.sentry_secret = this._globalSecret;
      }

      var exception = data.exception && data.exception.values[0];

      // only capture 'sentry' breadcrumb is autoBreadcrumbs is truthy
      if (
        this._globalOptions.autoBreadcrumbs &&
        this._globalOptions.autoBreadcrumbs.sentry
      ) {
        this.captureBreadcrumb({
          category: 'sentry',
          message: exception
            ? (exception.type ? exception.type + ': ' : '') + exception.value
            : data.message,
          event_id: data.event_id,
          level: data.level || 'error' // presume error unless specified
        });
      }

      var url = this._globalEndpoint;
      (globalOptions.transport || this._makeRequest).call(this, {
        url: url,
        auth: auth,
        data: data,
        options: globalOptions,
        onSuccess: function success() {
          self._resetBackoff();

          self._triggerEvent('success', {
            data: data,
            src: url
          });
          callback && callback();
        },
        onError: function failure(error) {
          self._logDebug('error', 'Raven transport failed to send: ', error);

          if (error.request) {
            self._setBackoffState(error.request);
          }

          self._triggerEvent('failure', {
            data: data,
            src: url
          });
          error = error || new Error('Raven send failed (no additional details provided)');
          callback && callback(error);
        }
      });
    },

    _makeRequest: function(opts) {
      // Auth is intentionally sent as part of query string (NOT as custom HTTP header) to avoid preflight CORS requests
      var url = opts.url + '?' + urlencode(opts.auth);

      var evaluatedHeaders = null;
      var evaluatedFetchParameters = {};

      if (opts.options.headers) {
        evaluatedHeaders = this._evaluateHash(opts.options.headers);
      }

      if (opts.options.fetchParameters) {
        evaluatedFetchParameters = this._evaluateHash(opts.options.fetchParameters);
      }

      if (supportsFetch()) {
        evaluatedFetchParameters.body = stringify(opts.data);

        var defaultFetchOptions = objectMerge({}, this._fetchDefaults);
        var fetchOptions = objectMerge(defaultFetchOptions, evaluatedFetchParameters);

        if (evaluatedHeaders) {
          fetchOptions.headers = evaluatedHeaders;
        }

        return _window$1
          .fetch(url, fetchOptions)
          .then(function(response) {
            if (response.ok) {
              opts.onSuccess && opts.onSuccess();
            } else {
              var error = new Error('Sentry error code: ' + response.status);
              // It's called request only to keep compatibility with XHR interface
              // and not add more redundant checks in setBackoffState method
              error.request = response;
              opts.onError && opts.onError(error);
            }
          })
          ['catch'](function() {
            opts.onError &&
              opts.onError(new Error('Sentry error code: network unavailable'));
          });
      }

      var request = _window$1.XMLHttpRequest && new _window$1.XMLHttpRequest();
      if (!request) return;

      // if browser doesn't support CORS (e.g. IE7), we are out of luck
      var hasCORS = 'withCredentials' in request || typeof XDomainRequest !== 'undefined';

      if (!hasCORS) return;

      if ('withCredentials' in request) {
        request.onreadystatechange = function() {
          if (request.readyState !== 4) {
            return;
          } else if (request.status === 200) {
            opts.onSuccess && opts.onSuccess();
          } else if (opts.onError) {
            var err = new Error('Sentry error code: ' + request.status);
            err.request = request;
            opts.onError(err);
          }
        };
      } else {
        request = new XDomainRequest();
        // xdomainrequest cannot go http -> https (or vice versa),
        // so always use protocol relative
        url = url.replace(/^https?:/, '');

        // onreadystatechange not supported by XDomainRequest
        if (opts.onSuccess) {
          request.onload = opts.onSuccess;
        }
        if (opts.onError) {
          request.onerror = function() {
            var err = new Error('Sentry error code: XDomainRequest');
            err.request = request;
            opts.onError(err);
          };
        }
      }

      request.open('POST', url);

      if (evaluatedHeaders) {
        each(evaluatedHeaders, function(key, value) {
          request.setRequestHeader(key, value);
        });
      }

      request.send(stringify(opts.data));
    },

    _evaluateHash: function(hash) {
      var evaluated = {};

      for (var key in hash) {
        if (hash.hasOwnProperty(key)) {
          var value = hash[key];
          evaluated[key] = typeof value === 'function' ? value() : value;
        }
      }

      return evaluated;
    },

    _logDebug: function(level) {
      // We allow `Raven.debug` and `Raven.config(DSN, { debug: true })` to not make backward incompatible API change
      if (
        this._originalConsoleMethods[level] &&
        (this.debug || this._globalOptions.debug)
      ) {
        // In IE<10 console methods do not have their own 'apply' method
        Function.prototype.apply.call(
          this._originalConsoleMethods[level],
          this._originalConsole,
          [].slice.call(arguments, 1)
        );
      }
    },

    _mergeContext: function(key, context) {
      if (isUndefined(context)) {
        delete this._globalContext[key];
      } else {
        this._globalContext[key] = objectMerge(this._globalContext[key] || {}, context);
      }
    }
  };

  // Deprecations
  Raven$2.prototype.setUser = Raven$2.prototype.setUserContext;
  Raven$2.prototype.setReleaseContext = Raven$2.prototype.setRelease;

  var raven = Raven$2;

  /**
   * Enforces a single instance of the Raven client, and the
   * main entry point for Raven. If you are a consumer of the
   * Raven library, you SHOULD load this file (vs raven.js).
   **/

  var RavenConstructor = raven;

  // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
  var _window =
    typeof window !== 'undefined'
      ? window
      : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};
  var _Raven = _window.Raven;

  var Raven = new RavenConstructor();

  /*
   * Allow multiple versions of Raven to be installed.
   * Strip Raven from the global context and returns the instance.
   *
   * @return {Raven}
   */
  Raven.noConflict = function() {
    _window.Raven = _Raven;
    return Raven;
  };

  Raven.afterLoad();

  singleton.exports = Raven;

  /**
   * DISCLAIMER:
   *
   * Expose `Client` constructor for cases where user want to track multiple "sub-applications" in one larger app.
   * It's not meant to be used by a wide audience, so pleaaase make sure that you know what you're doing before using it.
   * Accidentally calling `install` multiple times, may result in an unexpected behavior that's very hard to debug.
   *
   * It's called `Client' to be in-line with Raven Node implementation.
   *
   * HOWTO:
   *
   * import Raven from 'raven-js';
   *
   * const someAppReporter = new Raven.Client();
   * const someOtherAppReporter = new Raven.Client();
   *
   * someAppReporter.config('__DSN__', {
   *   ...config goes here
   * });
   *
   * someOtherAppReporter.config('__OTHER_DSN__', {
   *   ...config goes here
   * });
   *
   * someAppReporter.captureMessage(...);
   * someAppReporter.captureException(...);
   * someAppReporter.captureBreadcrumb(...);
   *
   * someOtherAppReporter.captureMessage(...);
   * someOtherAppReporter.captureException(...);
   * someOtherAppReporter.captureBreadcrumb(...);
   *
   * It should "just work".
   */
  singleton.exports.Client = RavenConstructor;

  var singletonExports = singleton.exports;
  var Raven$1 = /*@__PURE__*/getDefaultExportFromCjs(singletonExports);

  /**
   * This module configures Raven for reporting crashes
   * to Sentry.
   *
   * Logging requires the Sentry DSN and Hypothesis
   * version to be provided via the app's settings object.
   */

  /**
   * Returns the input URL if it is an HTTP URL or the filename part of the URL
   * otherwise.
   *
   * @param {string} url - The script URL associated with an exception stack
   *                       frame.
   */
  function convertLocalURLsToFilenames(url) {
    if (!url) {
      return url;
    }
    if (url.match(/https?:/)) {
      return url;
    }

    // Strip the query string (which is used as a cache buster)
    // and extract the filename from the URL
    return url.replace(/\?.*/, '').split('/').slice(-1)[0];
  }

  /**
   * Return a transformed version of `data` with local URLs replaced
   * with filenames.
   *
   * In environments where the client is served from a local URL,
   * eg. chrome-extension://<ID>/scripts/bundle.js, the script URL
   * and the sourcemap it references will not be accessible to Sentry.
   *
   * Therefore on the client we replace references to such URLs with just
   * the filename part and then as part of the release process, upload both
   * the source file and the source map to Sentry.
   *
   * Using just the filename allows us to upload a single set of source files
   * and sourcemaps for a release though a given release of H might be served
   * from multiple actual URLs (eg. different browser extensions).
   *
   * @param {any} data
   */
  function translateSourceURLs(data) {
    try {
      /** @type {Array<{ filename: string }>} */
      const frames = data.exception.values[0].stacktrace.frames;
      frames.forEach(function (frame) {
        frame.filename = convertLocalURLsToFilenames(frame.filename);
      });
      data.culprit = frames[0].filename;
    } catch (err) {
      console.warn('Failed to normalize error stack trace', err, data);
    }
    return data;
  }

  /**
   * @param {{ dsn: string, release: string }} config
   */
  function init$1(config) {
    Raven$1.config(config.dsn, {
      release: config.release,
      dataCallback: translateSourceURLs
    }).install();
    installUnhandledPromiseErrorHandler();
  }

  /**
   * Report an error to Sentry.
   *
   * @param {{ message: string } | string} error - An error object describing what went wrong
   * @param {string} when - A string describing the context in which
   *                        the error occurred.
   * @param {object} [context] - A JSON-serializable object containing additional
   *                             information which may be useful when
   *                             investigating the error.
   */
  function report$1(error, when, context) {
    if (!(error instanceof Error)) {
      // If the passed object is not an Error, raven-js
      // will serialize it using toString() which produces unhelpful results
      // for objects that do not provide their own toString() implementations.
      //
      // If the error is a plain object or non-Error subclass with a message
      // property, such as errors returned by chrome.extension.lastError,
      // use that instead.
      if (typeof error === 'object' && error.message) {
        error = error.message;
      }
    }
    const extra = Object.assign({
      when: when
    }, context);
    Raven$1.captureException(error, {
      extra: extra
    });
  }

  /**
   * Installs a handler to catch unhandled rejected promises.
   *
   * For this to work, the browser or the Promise polyfill must support
   * the unhandled promise rejection event (Chrome >= 49). On other browsers,
   * the rejections will simply go unnoticed. Therefore, app code _should_
   * always provide a .catch() handler on the top-most promise chain.
   *
   * See https://github.com/getsentry/raven-js/issues/424
   * and https://www.chromestatus.com/feature/4805872211460096
   *
   * It is possible that future versions of Raven JS may handle these events
   * automatically, in which case this code can simply be removed.
   */
  function installUnhandledPromiseErrorHandler() {
    globalThis.addEventListener('unhandledrejection', function (event) {
      if (event.reason) {
        report$1(event.reason, 'Unhandled Promise rejection');
      }
    });
  }

  class ExtensionError extends Error {}
  class LocalFileError extends ExtensionError {}
  class NoFileAccessError extends ExtensionError {}
  class RestrictedProtocolError extends ExtensionError {}
  class BlockedSiteError extends ExtensionError {}
  class AlreadyInjectedError extends ExtensionError {}
  class RequestCanceledError extends Error {}
  class BadgeUriError extends Error {}

  /**
   * Returns true if `err` is a recognized 'expected' error.
   */
  function isKnownError(err) {
    return err instanceof ExtensionError;
  }
  const IGNORED_ERRORS = [
  // Errors that can happen when the tab is closed during injection
  /The tab was closed/, /No tab with id.*/,
  // Attempts to access pages for which Chrome does not allow scripting
  /Cannot access contents of.*/, /The extensions gallery cannot be scripted/,
  // The extension is disabled on LMS assignments to avoid confusion with the
  // embedded Hypothesis instance. The user can still use the extension on other
  // pages hosted in the LMS itself.
  /Hypothesis extension can't be used on Hypothesis LMS assignments/];

  /**
   * Returns true if a given `err` is anticipated during sidebar injection, such
   * as the tab being closed by the user, and should not be reported to Sentry.
   *
   * @param err - The Error-like object
   */
  function shouldIgnoreInjectionError(err) {
    if (IGNORED_ERRORS.some(pattern => err.message.match(pattern))) {
      return true;
    }
    if (isKnownError(err)) {
      return true;
    }
    return false;
  }

  /**
   * Report an error.
   *
   * All errors are logged to the console. Additionally unexpected errors,
   * ie. those which are not instances of ExtensionError, are reported to
   * Sentry.
   *
   * @param error - The error which happened.
   * @param when - Describes the context in which the error occurred.
   * @param context - Additional context for the error.
   */
  function report(error, when, context) {
    console.error(when, error);
    if (!isKnownError(error)) {
      report$1(error, when, context);
    }
  }

  /**
   * A controller for displaying help pages. These are bound to extension
   * specific errors (found in errors.js) but can also be triggered manually.
   */
  class HelpPage {
    /**
     * Accepts an instance of errors.ExtensionError and displays an appropriate
     * help page if one exists.
     *
     * @param tab - The tab where the error occurred
     * @param error - The error to display, usually an instance of {@link ExtensionError}
     */
    showHelpForError(tab, error) {
      let section;
      if (error instanceof LocalFileError) {
        section = 'local-file';
      } else if (error instanceof NoFileAccessError) {
        section = 'no-file-access';
      } else if (error instanceof RestrictedProtocolError) {
        section = 'restricted-protocol';
      } else if (error instanceof BlockedSiteError) {
        section = 'blocked-site';
      } else {
        section = 'other-error';
      }
      const url = new URL(chromeAPI.runtime.getURL('/help/index.html'));
      if (error) {
        url.searchParams.append('message', error.message);
      }
      url.hash = section;
      chromeAPI.tabs.create({
        index: tab.index + 1,
        url: url.toString(),
        openerTabId: tab.id
      });
    }
  }

  /** Details of the detected content type. */

  /**
   * Detect the type of content in the current document.
   *
   * This function is injected as a content script into tabs in order to detect
   * the type of content on the page (PDF, HTML) etc.  by sniffing for viewer
   * plugins.
   *
   * In future this could also be extended to support extraction of the URLs of
   * content in embedded viewers where that differs from the tab's main URL.
   *
   * @param document_ - Document to query
   */
  /* istanbul ignore next */
  function detectContentType(document_ = document) {
    function detectChromePDFViewer() {
      // When viewing a PDF in Chrome, the viewer consists of a top-level
      // document with an <embed> tag, which in turn instantiates an inner HTML
      // document providing the PDF viewer UI plus another <embed> tag which
      // instantiates the native PDF renderer.
      //
      // The selector below matches the <embed> tag in the top-level document. To
      // see this document, open the developer tools from Chrome's menu rather
      // than right-clicking on the viewport and selecting the 'Inspect' option
      // which will instead show the _inner_ document.
      if (document_.querySelector('embed[type="application/pdf"]')) {
        return {
          type: 'PDF'
        };
      }
      return null;
    }
    function detectFirefoxPDFViewer() {
      // The Firefox PDF viewer is an instance of PDF.js.
      //
      // The Firefox PDF plugin specifically can be detected via the <base>
      // tag it includes, which can be done from a content script (which runs
      // in an isolated JS world from the page's own scripts).
      //
      // Generic PDF.js detection can be done by looking for the
      // `window.PDFViewerApplication` object. This however requires running JS
      // code in the same JS context as the page's own code.
      if (document_.baseURI.indexOf('resource://pdf.js') === 0) {
        return {
          type: 'PDF'
        };
      }
      return null;
    }
    const detectFns = [detectChromePDFViewer, detectFirefoxPDFViewer];
    for (let i = 0; i < detectFns.length; i++) {
      const typeInfo = detectFns[i]();
      if (typeInfo) {
        return typeInfo;
      }
    }
    return {
      type: 'HTML'
    };
  }

  const CONTENT_TYPE_HTML = 'HTML';
  const CONTENT_TYPE_PDF = 'PDF';
  const CONTENT_TYPE_VITALSOURCE = 'VITALSOURCE';
  const CONTENT_TYPE_LMS = 'LMS';

  /* istanbul ignore next - Code coverage breaks `eval`-ing of this function in tests. */
  function setClientConfig(config, extensionId) {
    const script = document.createElement('script');
    script.className = 'js-hypothesis-config';
    script.type = 'application/json';
    script.textContent = JSON.stringify(config);
    script.setAttribute('data-extension-id', extensionId);
    // This ensures the client removes the script when the extension is deactivated
    script.setAttribute('data-remove-on-unload', '');
    document.head.appendChild(script);
  }

  /**
   * Function that is run in a frame to test whether the Hypothesis client is
   * active there.
   *
   * @param extensionURL - Root URL for the extension, of the form
   *   "chrome-extension://{ID}/".
   */
  function isClientActive(extensionURL) {
    const annotatorLink = document.querySelector('link[type="application/annotator+html"]');
    return (annotatorLink === null || annotatorLink === void 0 ? void 0 : annotatorLink.href.startsWith(extensionURL)) ?? false;
  }

  /**
   * A Chrome tab for which we have ID and URL information.
   *
   * This type avoids the need to check everywhere we access these properties.
   */

  /**
   * Check that a tab has the necessary metadata to inject or un-inject the client.
   *
   * All "normal" tabs should have this information because of the extension's
   * permissions.
   */
  function checkTab(tab) {
    if (!tab.id || !tab.url) {
      throw new Error('Tab is missing ID or URL');
    }
    return tab;
  }

  /**
   * The SidebarInjector is used to deploy and remove the Hypothesis sidebar
   * from tabs. It also deals with loading PDF documents into the PDF.js viewer
   * when applicable.
   */
  class SidebarInjector {
    constructor() {
      _defineProperty(this, "isClientActiveInTab", void 0);
      _defineProperty(this, "injectIntoTab", void 0);
      _defineProperty(this, "removeFromTab", void 0);
      _defineProperty(this, "requestExtraPermissionsForTab", void 0);
      const pdfViewerBaseURL = chromeAPI.runtime.getURL('/pdfjs/web/viewer.html');

      /**
       * Check for the presence of the client in a browser tab.
       *
       * If code cannot be run in this tab to check the state of the client, it is
       * assumed to not be active.
       */
      this.isClientActiveInTab = async tab => {
        const tab_ = checkTab(tab);

        // If this is our PDF viewer, the client is definitely active.
        if (isPDFViewerURL(tab_.url)) {
          return true;
        }

        // In the VitalSource book reader, we need to test a specific frame.
        let frameId;
        if (isVitalSourceURL(tab_.url)) {
          const vsFrame = await getVitalSourceViewerFrame(tab_);
          if (vsFrame) {
            frameId = vsFrame.frameId;
          }
        }
        try {
          const extensionURL = chromeAPI.runtime.getURL('/');
          const isActive = await executeFunction({
            tabId: tab_.id,
            frameId,
            func: isClientActive,
            args: [extensionURL]
          });
          return isActive;
        } catch {
          // We failed to run code in this tab, eg. because it is a URL that
          // disallows extension scripting or it is being unloaded.
          return false;
        }
      };

      /**
       * Injects the Hypothesis sidebar into the tab provided.
       *
       * Certain URLs (eg. VitalSource books) may require extra permissions to
       * inject. These must be obtained by calling {@link requestExtraPermissionsForTab},
       * directly after the user clicks the extension's toolbar icon, before calling
       * this method.
       *
       * @param tab - A tab object representing the tab to insert the sidebar into.
       * @param config - An object containing configuration info that is passed to
       *   the app when it loads.
       *
       * Returns a promise that will be resolved if the injection succeeded
       * otherwise it will be rejected with an error.
       */
      this.injectIntoTab = (tab, config = {}) => {
        const tab_ = checkTab(tab);
        if (isFileURL(tab_.url)) {
          return injectIntoLocalDocument(tab_, config);
        } else {
          return injectIntoRemoteDocument(tab_, config);
        }
      };

      /**
       * Removes the Hypothesis sidebar from the tab provided.
       *
       * Returns a promise that will be resolved if the removal succeeded
       * otherwise it will be rejected with an error.
       */
      this.removeFromTab = tab => {
        const tab_ = checkTab(tab);
        if (isPDFViewerURL(tab_.url)) {
          return removeFromPDF(tab_);
        } else if (isVitalSourceURL(tab_.url)) {
          return removeFromVitalSource(tab_);
        } else {
          return removeFromHTML(tab_);
        }
      };

      /**
       * Request additional permissions that are required to inject Hypothesis
       * into a given tab.
       *
       * Ideally the permissions request would just be part of {@link injectIntoTab}
       * however it needs to be performed immediately after the user clicks the
       * extension's toolbar icon, before any async calls, otherwise it will fail
       * due to lack of a user gesture. See https://bugs.chromium.org/p/chromium/issues/detail?id=1363490.
       */
      this.requestExtraPermissionsForTab = async tab => {
        const tab_ = checkTab(tab);
        if (isVitalSourceURL(tab_.url)) {
          return await chromeAPI.permissions.request({
            permissions: ['webNavigation']
          });
        } else {
          // No extra permissions needed for other tabs.
          return true;
        }
      };
      function getPDFViewerURL(url) {
        // Encode the original URL but preserve the fragment. Preserving the
        // fragment was originally done to support `#annotations:` fragments that
        // bouncer used to use. Bouncer and the extension now use a different
        // mechanism to pass direct-linked annotation IDs to the client. However
        // preserving the fragment may be useful for other reasons.
        const parsedURL = new URL(url);
        const hash = parsedURL.hash;
        parsedURL.hash = '';
        const encodedURL = encodeURIComponent(parsedURL.href);
        return `${pdfViewerBaseURL}?file=${encodedURL}${hash}`;
      }

      /**
       * Returns true if the extension is permitted to inject a content script into
       * a tab with a given URL.
       */
      async function canInjectScript(url) {
        if (isFileURL(url)) {
          return chromeAPI.extension.isAllowedFileSchemeAccess();
        }
        return isSupportedURL(url);
      }

      /**
       * Guess the content type of a page from the URL alone.
       *
       * This is a fallback for when it is not possible to inject
       * a content script to determine the type of content in the page.
       */
      function guessContentTypeFromURL(url) {
        if (url.includes('.pdf')) {
          return CONTENT_TYPE_PDF;
        } else {
          return CONTENT_TYPE_HTML;
        }
      }
      function isVitalSourceURL(url) {
        return url.startsWith('https://bookshelf.vitalsource.com/');
      }
      function isLMSAssignmentURL(url) {
        const {
          origin
        } = new URL(url);
        // Matches origins like `lms.hypothes.is`, `qa-lms.hypothes.is`, `lms.ca.hypothes.is`.
        return /\blms\b/.test(origin) && origin.endsWith('.hypothes.is');
      }
      async function detectTabContentType(tab) {
        if (isPDFViewerURL(tab.url)) {
          return CONTENT_TYPE_PDF;
        }
        if (isVitalSourceURL(tab.url)) {
          return CONTENT_TYPE_VITALSOURCE;
        }
        if (isLMSAssignmentURL(tab.url)) {
          return CONTENT_TYPE_LMS;
        }
        const canInject = await canInjectScript(tab.url);
        if (canInject) {
          const result = await executeFunction({
            tabId: tab.id,
            func: detectContentType,
            args: []
          });
          if (result) {
            return result.type;
          } else {
            // If the content script threw an exception,
            // frameResults may be null or undefined.
            //
            // In that case, fall back to guessing based on the
            // tab URL
            return guessContentTypeFromURL(tab.url);
          }
        } else {
          // We cannot inject a content script in order to determine the
          // file type, so fall back to a URL-based mechanism
          return guessContentTypeFromURL(tab.url);
        }
      }

      /**
       * Returns true if a tab is displaying a PDF using the PDF.js-based
       * viewer bundled with the extension.
       */
      function isPDFViewerURL(url) {
        return url.startsWith(pdfViewerBaseURL);
      }
      function isFileURL(url) {
        return url.startsWith('file:');
      }
      function isSupportedURL(url) {
        // Injection of content scripts is limited to a small number of protocols,
        // see https://developer.chrome.com/extensions/match_patterns
        const parsedURL = new URL(url);
        return ['http:', 'https:', 'ftp:'].includes(parsedURL.protocol);
      }
      async function injectIntoLocalDocument(tab, config) {
        const type = await detectTabContentType(tab);
        if (type === CONTENT_TYPE_PDF) {
          return injectIntoLocalPDF(tab, config);
        } else {
          throw new LocalFileError('Local non-PDF files are not supported');
        }
      }
      async function injectIntoRemoteDocument(tab, config) {
        if (isPDFViewerURL(tab.url)) {
          return;
        }
        if (!isSupportedURL(tab.url)) {
          // Chrome does not permit extensions to inject content scripts
          // into (chrome*):// URLs and other custom schemes.
          //
          // A common case where this happens is when the user has an
          // extension installed that provides a custom viewer for PDFs
          // (or some other format). In some cases we could extract the original
          // URL and open that in the Hypothesis viewer instead.
          const protocol = tab.url.split(':')[0];
          throw new RestrictedProtocolError(`Cannot load Hypothesis into ${protocol} pages`);
        }
        const type = await detectTabContentType(tab);
        if (type === CONTENT_TYPE_PDF) {
          await injectIntoPDF(tab, config);
        } else if (type === CONTENT_TYPE_VITALSOURCE) {
          await injectIntoVitalSourceReader(tab, config);
        } else if (type === CONTENT_TYPE_LMS) {
          // The extension is blocked on LMS assignments to avoid confusion with the
          // embedded Hypothesis instance. The user can still use the extension on other
          // pages hosted in the LMS itself.
          throw new BlockedSiteError("Hypothesis extension can't be used on Hypothesis LMS assignments");
        } else {
          // FIXME - Nothing actually sets `installedURL`. It used to be part of
          // the client's boot script. See e0bf3fd2a09414170eb991d7837bf6acd821502b.
          const result = await injectIntoHTML(tab, config);
          if (typeof (result === null || result === void 0 ? void 0 : result.installedURL) === 'string' && !result.installedURL.includes(chromeAPI.runtime.getURL('/'))) {
            throw new AlreadyInjectedError('Hypothesis is already injected into this page');
          }
        }
      }
      function injectIntoPDF(tab, config) {
        if (isPDFViewerURL(tab.url)) {
          return Promise.resolve();
        }
        const onMessage = chromeAPI.runtime.onMessage;
        const listener = (request, sender, sendResponse) => {
          var _sender$tab;
          if (((_sender$tab = sender.tab) === null || _sender$tab === void 0 ? void 0 : _sender$tab.id) === tab.id && (request === null || request === void 0 ? void 0 : request.type) === 'getConfigForTab') {
            sendResponse(config);
            onMessage.removeListener(listener);
          }
        };
        onMessage.addListener(listener);
        return chromeAPI.tabs.update(tab.id, {
          url: getPDFViewerURL(tab.url)
        });
      }
      async function injectIntoLocalPDF(tab, config) {
        const isAllowed = await chromeAPI.extension.isAllowedFileSchemeAccess();
        if (isAllowed) {
          await injectIntoPDF(tab, config);
        } else {
          throw new NoFileAccessError('Local file scheme access denied');
        }
      }
      async function injectIntoHTML(tab, config) {
        await injectConfig(tab.id, config);
        return executeClientBootScript(tab.id);
      }
      async function removeFromPDF(tab) {
        const parsedURL = new URL(tab.url);
        const originalURL = parsedURL.searchParams.get('file');
        if (!originalURL) {
          throw new Error(`Failed to extract original URL from ${tab.url}`);
        }
        let hash = parsedURL.hash;

        // If the original URL was a direct link, drop the #annotations fragment
        // as otherwise the Chrome extension will re-activate itself on this tab
        // when the original URL loads.
        if (hash.startsWith('#annotations:')) {
          hash = '';
        }
        await chromeAPI.tabs.update(tab.id, {
          url: decodeURIComponent(originalURL) + hash
        });
      }
      async function removeFromHTML(tab) {
        if (!isSupportedURL(tab.url)) {
          return;
        }
        await executeScript({
          tabId: tab.id,
          file: '/unload-client.js'
        });
      }

      /**
       * Find the frame within the VitalSource Bookshelf reader into which the
       * Hypothesis client should be loaded.
       *
       * The frame hierarchy will look like:
       *
       * bookshelf.vitalsource.com (Main frame)
       * |- jigsaw.vitalsource.com (Ebook reader. This is where we want to inject the client)
       *     |- jigsaw.vitalsource.com (Content of current chapter)
       */
      async function getVitalSourceViewerFrame(tab) {
        var _await$chromeAPI$perm;
        // Using `chrome.webNavigation.getAllFrames` requires asking for the
        // `webNavigation` permission which results in a scary prompt about reading
        // browser history, even though we only want to get frames for the current
        // tab :(
        //
        // The request for permissions must happen immediately after clicking
        // the browser action, to avoid an error about it happening outside a user
        // gesture [1]. This is done by calling `requestExtraPermissionsForTab`
        // before `injectIntoTab`.
        //
        // [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1363490
        const canUseWebNavigation = (_await$chromeAPI$perm = (await chromeAPI.permissions.getAll()).permissions) === null || _await$chromeAPI$perm === void 0 ? void 0 : _await$chromeAPI$perm.includes('webNavigation');
        if (!canUseWebNavigation) {
          throw new Error('The extension was not granted required permissions');
        }
        const frames = await chromeAPI.webNavigation.getAllFrames({
          tabId: tab.id
        });
        if (!frames) {
          throw new Error('Could not list frames in tab');
        }
        return frames.find(frame => {
          const frameURL = new URL(frame.url);
          if (frameURL.hostname !== 'jigsaw.vitalsource.com' || !frameURL.pathname.startsWith('/mosaic/wrapper.html')) {
            return null;
          }
          return frame;
        });
      }
      async function injectIntoVitalSourceReader(tab, config) {
        const frame = await getVitalSourceViewerFrame(tab);
        if (!frame) {
          throw new Error('Book viewer frame not found');
        }
        await injectConfig(tab.id, config, frame.frameId);
        await executeClientBootScript(tab.id, frame.frameId);
      }
      async function removeFromVitalSource(tab) {
        const frame = await getVitalSourceViewerFrame(tab);
        if (!frame) {
          return;
        }
        await executeScript({
          tabId: tab.id,
          frameId: frame.frameId,
          file: '/unload-client.js'
        });
      }

      /**
       * Inject configuration for the Hypothesis client into the page via a
       * JSON <script> tag.
       */
      function injectConfig(tabId, clientConfig, frameId) {
        const extensionId = getExtensionId();
        return executeFunction({
          tabId,
          frameId,
          func: setClientConfig,
          args: [clientConfig, extensionId]
        });
      }
      async function executeClientBootScript(tabId, frameId) {
        return executeScript({
          tabId,
          frameId,
          file: '/client/build/boot.js'
        });
      }
    }
  }

  /*!
   * is-primitive <https://github.com/jonschlinkert/is-primitive>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */

  // see http://jsperf.com/testing-value-is-primitive/7
  var isPrimitive$1 = function isPrimitive(value) {
    return value == null || (typeof value !== 'function' && typeof value !== 'object');
  };

  /*!
   * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */

  var isPrimitive = isPrimitive$1;

  var isEqualShallow = function isEqual(a, b) {
    if (!a && !b) { return true; }
    if (!a && b || a && !b) { return false; }

    var numKeysA = 0, numKeysB = 0, key;
    for (key in b) {
      numKeysB++;
      if (!isPrimitive(b[key]) || !a.hasOwnProperty(key) || (a[key] !== b[key])) {
        return false;
      }
    }
    for (key in a) {
      numKeysA++;
    }
    return numKeysA === numKeysB;
  };

  var isShallowEqual = /*@__PURE__*/getDefaultExportFromCjs(isEqualShallow);

  const ALLOWED_PROTOCOLS = new Set(['http:', 'https:']);

  // The following sites are personal in nature, high potential traffic
  // and URLs don't correspond to identifiable content
  const BLOCKED_HOSTNAMES = new Set(['facebook.com', 'www.facebook.com', 'mail.google.com']);

  /**
   * Encodes a string for use in a query parameter.
   */
  function encodeUriQuery(val) {
    return encodeURIComponent(val).replace(/%20/g, '+');
  }

  /**
   * Returns a normalized version of URI for use in badge requests, or throws BadgeUrlError
   * if badge requests cannot be made for the given URL
   *
   * The normalization consist on (1) adding a final '/' at the end of the URL and
   * (2) removing the fragment from the URL. The URL fragment can be ignored as it
   *  will result the same badge count.
   *
   *  In addition, this normalization facilitates the identification of unique URLs.
   *
   * @return URL without fragment
   * @throws Will throw if URL is invalid or should not be sent to the 'badge' request endpoint
   */
  function uriForBadgeRequest(uri) {
    const url = new URL(uri);
    if (!ALLOWED_PROTOCOLS.has(url.protocol)) {
      throw new BadgeUriError('Blocked protocol');
    }
    if (BLOCKED_HOSTNAMES.has(url.hostname)) {
      throw new BadgeUriError('Blocked hostname');
    }
    url.hash = '';
    return url.toString();
  }

  /**
   * Queries the Hypothesis service that provides statistics about the annotations
   * for a given URL.
   *
   * @throws Will throw a variety of errors: network, json parsing, or wrong format errors.
   */
  async function fetchAnnotationCount(uri) {
    const response = await fetch(settings.apiUrl + '/badge?uri=' + encodeUriQuery(uri), {
      credentials: 'include'
    });
    const data = await response.json();
    if (data && typeof data.total === 'number') {
      return data.total;
    }
    throw new Error('Unable to parse badge response');
  }

  /**
   * Hypothesis-related state for a specific tab.
   *
   * This should really be named `TabState` but that will conflict with the
   * `TabState` class below. That class needs to be renamed first.
   */

  /**
   * The default H state for a new browser tab.
   */
  const DEFAULT_STATE = {
    state: 'inactive',
    annotationCount: 0,
    extensionSidebarInstalled: false,
    ready: false,
    error: undefined
  };

  /**
   * Represents a pending request to the `/api/badge` endpoint to get the
   * annotation count for a URI.
   */

  /**
   * TabState stores the Hypothesis-related state for tabs in the current browser
   * session.
   */
  class TabState {
    /** Map of URI to annotation count. */

    /** Map of tab ID to current badge request. */

    /** Callback invoked when a tab's state changes. */

    /**
     * Current Hypothesis-related state for each tab.
     *
     * @param onchange - Callback invoked when state for a tab changes
     */
    constructor(onchange) {
      _defineProperty(this, "_annotationCountCache", void 0);
      _defineProperty(this, "_pendingAnnotationCountRequests", void 0);
      _defineProperty(this, "_currentState", void 0);
      _defineProperty(this, "onchange", void 0);
      this._currentState = new Map();
      this._pendingAnnotationCountRequests = new Map();
      this._annotationCountCache = new Map();
      this.onchange = onchange;
    }

    /**
     * Mark a tab as having Hypothesis loaded in it.
     */
    activateTab(tabId) {
      this.setState(tabId, {
        state: 'active'
      });
    }

    /**
     * Mark a tab as not having Hypothesis loaded.
     */
    deactivateTab(tabId) {
      this.setState(tabId, {
        state: 'inactive'
      });
    }

    /**
     * Mark a tab as having encountered an error when trying to load Hypothesis into it.
     */
    errorTab(tabId, error) {
      this.setState(tabId, {
        state: 'errored',
        error: error
      });
    }

    /**
     * Remove Hypothesis-related state about a given tab.
     */
    clearTab(tabId) {
      this.setState(tabId, null);
      this._pendingAnnotationCountRequests.delete(tabId);
    }

    /**
     * Return the current Hypothesis-related state for a tab.
     */
    getState(tabId) {
      return this._currentState.get(tabId) ?? DEFAULT_STATE;
    }

    /**
     * Return the badge count for a given tab.
     */
    annotationCount(tabId) {
      return this.getState(tabId).annotationCount;
    }

    /**
     * Return `true` if Hypothesis is loaded into a given tab.
     */
    isTabActive(tabId) {
      return this.getState(tabId).state === 'active';
    }

    /**
     * Return `true` if Hypothesis is not loaded in a given tab.
     */
    isTabInactive(tabId) {
      return this.getState(tabId).state === 'inactive';
    }

    /**
     * Return `true` if an error occurred while trying to load Hypothesis into a given tab.
     */
    isTabErrored(tabId) {
      return this.getState(tabId).state === 'errored';
    }

    /**
     * Updates the H state for a tab.
     *
     * @param tabId - The ID of the tab being updated
     */
    setState(tabId, stateUpdate) {
      let newState;
      if (stateUpdate) {
        newState = Object.assign({}, this.getState(tabId), stateUpdate);
        if (newState.state !== 'errored') {
          newState.error = undefined;
        }
      }
      if (isShallowEqual(newState, this._currentState.get(tabId))) {
        return;
      }
      if (newState) {
        this._currentState.set(tabId, newState);
      } else {
        this._currentState.delete(tabId);
      }
      if (this.onchange) {
        this.onchange(tabId, newState);
      }
    }

    /**
     * Request the current annotation count for the tab's URL.
     *
     * @param tabId The id of the tab.
     * @param tabUrl The URL of the tab.
     */
    async updateAnnotationCount(tabId, tabUrl) {
      const INITIAL_WAIT_MS = 1000;
      const MAX_WAIT_MS = 3000;
      const CACHE_EXPIRATION_MS = 3000;
      const pendingRequest = this._pendingAnnotationCountRequests.get(tabId);
      let url;
      try {
        url = uriForBadgeRequest(tabUrl);
      } catch {
        return;
      }
      const annotationCount = this._annotationCountCache.get(url);
      if (annotationCount !== undefined) {
        this.setState(tabId, {
          annotationCount
        });
        return;
      }
      const wait = Math.min((pendingRequest === null || pendingRequest === void 0 ? void 0 : pendingRequest.waitMs) ?? INITIAL_WAIT_MS, MAX_WAIT_MS);
      pendingRequest === null || pendingRequest === void 0 ? void 0 : pendingRequest.cancel();
      const debouncedFetch = new Promise((resolve, reject) => {
        const timerId = setTimeout(async () => {
          let count = this._annotationCountCache.get(url);
          if (count !== undefined) {
            resolve(count);
            return;
          }
          try {
            count = await fetchAnnotationCount(url);
            this._annotationCountCache.set(url, count);
            setTimeout(() => this._annotationCountCache.delete(url), CACHE_EXPIRATION_MS);
          } catch {
            count = 0;
          }
          this._pendingAnnotationCountRequests.delete(tabId);
          resolve(count);
        }, wait);
        this._pendingAnnotationCountRequests.set(tabId, {
          cancel: () => {
            clearTimeout(timerId);
            reject(new RequestCanceledError('Badge request canceled'));
          },
          waitMs: wait * 2
        });
      });
      try {
        const annotationCount = await debouncedFetch;
        this.setState(tabId, {
          annotationCount
        });
      } catch (error) {
        if (error instanceof RequestCanceledError) {
          // Do nothing
          return;
        }
        throw error;
      }
    }
  }

  /** Options for {@link Extension.activate}. */

  /**
   * Normalize a URL for comparison. This strips the fragment and converts
   * `http://` to `https://`.
   */
  function normalizeURL(url) {
    try {
      const parsed = new URL(url);
      parsed.hash = '';
      if (parsed.protocol === 'http:') {
        parsed.protocol = 'https:';
      }
      return parsed.toString();
    } catch {
      return url;
    }
  }

  /**
   * Return true if two URLs are equal, ignoring the fragment and treating HTTP
   * and HTTPS as equivalent.
   */
  function urlsEqual(urlA, urlB) {
    return normalizeURL(urlA) === normalizeURL(urlB);
  }

  /**
   * The main extension background application.
   *
   * This is responsible for tracking the state of the extension in each tab and
   * injecting of the client when the extension is activated by clicking the
   * extension's toolbar icon.
   *
   * Initializing the extension has two steps:
   *
   *  1. Create an instance of `Extension`
   *  2. Call the async {@link Extension.init} method to initialize the
   *     extension state for existing tabs.
   */
  class Extension {
    constructor() {
      _defineProperty(this, "firstRun", void 0);
      _defineProperty(this, "activate", void 0);
      _defineProperty(this, "init", void 0);
      _defineProperty(this, "_onTabStateChange", void 0);
      const help = new HelpPage();
      const state = new TabState(onTabStateChange);
      const browserAction = new BrowserAction();
      const sidebar = new SidebarInjector();
      const currentlyLoadingUrl = new Map(); // keeps tracks of what URL each tab is loading

      /**
       * Pending activations of extension. This is a map of tab ID to activation
       * URL and options. The activation is applied when the tab navigates to
       * the given URL.
       */
      const pendingActivations = new Map();

      /**
       * Opens the onboarding page.
       */
      this.firstRun = async extensionInfo => {
        // If we've been installed because of an administrative policy, then don't
        // open the welcome page in a new tab.
        //
        // It's safe to assume that if an admin policy is responsible for installing
        // the extension, opening the welcome page is going to do more harm than
        // good, as it will appear that a tab opened without user action.
        //
        // See:
        //
        //   https://developer.chrome.com/extensions/management#type-ExtensionInstallType
        //
        if (extensionInfo.installType === 'admin') {
          return;
        }
        const tab = await chromeAPI.tabs.create({
          url: settings.serviceUrl + 'welcome'
        });
        state.activateTab(tab.id);
      };

      /**
       * Activate the extension on a specific tab.
       */
      this.activate = (tabId, options = {}) => {
        if (options.afterNavigationTo) {
          pendingActivations.set(tabId, options);
        } else {
          state.setState(tabId, {
            state: 'active',
            directLinkQuery: directLinkQuery(options.query ?? '') ?? undefined
          });
        }
      };

      /**
       * Initialize cached state for browser tabs by querying each tab to see
       * whether the extension is active there.
       *
       * This should be called when the extension is loaded or reloaded.
       */
      const initTabStates = async () => {
        const tabs = await chromeAPI.tabs.query({});
        const activeStates = await Promise.all(tabs.map(async tab => {
          if (tab.id === undefined) {
            return false;
          }
          try {
            const active = await sidebar.isClientActiveInTab(tab);
            return active;
          } catch (e) {
            console.warn(`Unable to determine extension state in tab ${tab.id}`, e);
            return false;
          }
        }));
        for (let i = 0; i < tabs.length; i++) {
          const tab = tabs[i];
          if (!tab.id) {
            continue;
          }
          const isActive = activeStates[i];

          // nb. If tab status is not available, we optimistically assume it is
          // loaded.
          const ready = tab.status === 'complete' || typeof tab.status !== 'string';
          state.setState(tab.id, {
            state: isActive ? 'active' : 'inactive',
            extensionSidebarInstalled: isActive,
            ready
          });
        }
      };
      async function onTabStateChange(tabId, current) {
        if (!current) {
          return;
        }
        let tab;
        try {
          tab = await chromeAPI.tabs.get(tabId);
        } catch {
          state.clearTab(tabId);
          return;
        }
        browserAction.update(tabId, current);
        updateTabDocument(tab);
      }

      // exposed for use by tests
      this._onTabStateChange = onTabStateChange;
      async function onBrowserActionClicked(tab) {
        const tabId = tab.id;
        const tabError = state.getState(tabId).error;
        if (tabError) {
          help.showHelpForError(tab, tabError);
        } else if (state.isTabActive(tabId)) {
          state.deactivateTab(tabId);
        } else {
          // Immediately request additional permissions we may need for this
          // specific tab, before any async calls. See notes in
          // `requestExtraPermissionsForTab` docs.
          //
          // eslint-disable-next-line no-lonely-if
          if (await sidebar.requestExtraPermissionsForTab(tab)) {
            state.activateTab(tabId);
          } else {
            state.errorTab(tabId, new Error('Hypothesis could not get the permissions needed to load in this tab'));
          }
        }
      }

      /**
       * Returns the active state for a tab which has just been navigated to.
       */
      function activeStateForNavigatedTab(tabId) {
        let activeState = state.getState(tabId).state;
        if (activeState === 'errored') {
          // user had tried to activate H on the previous page but it failed,
          // retry on the new page
          activeState = 'active';
        }
        return activeState;
      }
      function resetTabState(tabId, url) {
        state.setState(tabId, {
          state: activeStateForNavigatedTab(tabId),
          ready: false,
          annotationCount: 0,
          extensionSidebarInstalled: false
        });
        updateAnnotationCountIfEnabled(tabId, url);
      }

      /**
       * This function will be called multiple times as the tab reloads.
       * https://developer.chrome.com/extensions/tabs#event-onUpdated
       *
       * 'changeInfo' contains details of what changed about the tab's status.
       * Two important events are when the tab's `status` changes to `loading`
       * when the user begins a new navigation and when the tab's status changes
       * to `complete` after the user completes a navigation
       */
      const onTabUpdated = (tabId, {
        status
      }, tab) => {
        // `url` property is included because manifest has the `tabs` permission
        const url = tab.url;
        const loadingUrl = currentlyLoadingUrl.get(tabId);
        if (status === 'loading' && url !== loadingUrl) {
          currentlyLoadingUrl.set(tabId, url);
          resetTabState(tabId, url);
          const query = directLinkQuery(url);
          if (query) {
            state.setState(tabId, {
              directLinkQuery: query
            });
          }
        } else if (status === 'complete') {
          currentlyLoadingUrl.delete(tabId);
          const tabState = state.getState(tabId);
          let newActiveState = tabState.state;
          if (tabState.directLinkQuery) {
            newActiveState = 'active';
          }
          state.setState(tabId, {
            ready: true,
            state: newActiveState
          });
        }

        // Apply activations scheduled for when tab navigates to its current URL.
        //
        // We compare normalized URLs because the browser may modify the fragment
        // or redirect HTTP to HTTPS, compared to the URL we expected the tab
        // to navigate to.
        const pendingActivation = pendingActivations.get(tabId);
        if (pendingActivation !== null && pendingActivation !== void 0 && pendingActivation.afterNavigationTo && urlsEqual(pendingActivation.afterNavigationTo, url)) {
          pendingActivations.delete(tabId);

          // Clear the URL so that the activation takes effect immediately.
          pendingActivation.afterNavigationTo = undefined;
          this.activate(tabId, pendingActivation);
        }
      };
      async function onTabReplaced(addedTabId, removedTabId) {
        state.setState(addedTabId, {
          state: activeStateForNavigatedTab(removedTabId),
          ready: true
        });
        state.clearTab(removedTabId);
        const tab = await chromeAPI.tabs.get(addedTabId);
        updateAnnotationCountIfEnabled(addedTabId, tab.url);
      }
      function onTabCreated(tab) {
        // Clear the state in case there is old, conflicting data in storage.
        if (tab.id) {
          onTabRemoved(tab.id);
        }
      }
      function onTabRemoved(tabId) {
        currentlyLoadingUrl.delete(tabId);
        state.clearTab(tabId);
      }

      /**
       * Installs or uninstalls the sidebar from a tab when the H
       * state for a tab changes
       */
      function updateTabDocument(tab) {
        const tabId = tab.id;

        // If the tab has not yet finished loading then just quietly return.
        if (!state.getState(tabId).ready) {
          return;
        }
        const isInstalled = state.getState(tabId).extensionSidebarInstalled;
        if (state.isTabActive(tabId) && !isInstalled) {
          // optimistically set the state flag indicating that the sidebar
          // has been installed
          state.setState(tabId, {
            extensionSidebarInstalled: true
          });
          const {
            directLinkQuery
          } = state.getState(tabId);

          // Configure client to load assets from extension.
          //
          // Note this configuration is duplicated in `pdfjs-init.js`. Any changes
          // made here must be reflected there as well.
          const config = {
            assetRoot: chromeAPI.runtime.getURL('/client/'),
            notebookAppUrl: chromeAPI.runtime.getURL('/client/notebook.html'),
            profileAppUrl: chromeAPI.runtime.getURL('/client/profile.html'),
            sidebarAppUrl: chromeAPI.runtime.getURL('/client/app.html')
          };

          // Pass the direct-link query as configuration into the client.
          //
          // The reason we don't rely on just putting this into the URL and letting
          // the client pick it up is to make direct-linking work in sites/apps
          // that modify the URL fragment as they load. See commit 3143ca27e05d.
          Object.assign(config, directLinkQuery);
          sidebar.injectIntoTab(tab, config).then(function () {
            // Clear the direct link once H has been successfully injected
            state.setState(tabId, {
              directLinkQuery: undefined
            });
          }).catch(function (err) {
            if (err instanceof AlreadyInjectedError) {
              state.setState(tabId, {
                state: 'inactive',
                extensionSidebarInstalled: false
              });
              return;
            }
            if (!shouldIgnoreInjectionError(err)) {
              report(err, 'Injecting Hypothesis sidebar', {
                url: tab.url
              });
            }
            state.errorTab(tabId, err);
          });
        } else if (state.isTabInactive(tabId) && isInstalled) {
          sidebar.removeFromTab(tab).then(function () {
            state.setState(tabId, {
              extensionSidebarInstalled: false
            });
          });
        }
      }
      async function updateAnnotationCountIfEnabled(tabId, url) {
        // If user disabled the badge count, this call to `sync.get` will
        // return `{ badge: false}`
        const {
          badge
        } = await chromeAPI.storage.sync.get({
          badge: true // the default value `true` is returned only if `badge` is not yet set.
        });

        if (badge) {
          state.updateAnnotationCount(tabId, url);
        }
      }

      /**
       * Initialize the extension.
       *
       * This queries the state of the extension in existing tabs and sets up
       * event listeners to respond to future tab changes.
       *
       * If the extension's state in a particular tab cannot be determined,
       * the extension is assumed not to be loaded in that tab.
       *
       * @return - A promise that resolves once listeners have been set up and
       *   the state of existing tabs has been determined.
       */
      this.init = async () => {
        chromeAPI.browserAction.onClicked.addListener(onBrowserActionClicked);

        // Set up listeners for tab events.
        chromeAPI.tabs.onCreated.addListener(onTabCreated);

        // When a user navigates within an existing tab, onUpdated is fired in most cases
        chromeAPI.tabs.onUpdated.addListener(onTabUpdated);

        // ... but when a user navigates to a page that is loaded
        // via prerendering or instant results, onTabReplaced is
        // fired instead. See https://developer.chrome.com/extensions/tabs#event-onReplaced
        // and https://code.google.com/p/chromium/issues/detail?id=109557
        chromeAPI.tabs.onReplaced.addListener(onTabReplaced);
        chromeAPI.tabs.onRemoved.addListener(onTabRemoved);

        // Determine the state of the extension in existing tabs.
        await initTabStates();
      };
    }
  }

  async function init() {
    var _chromeAPI$runtime$re, _chromeAPI$runtime;
    const extension = new Extension();
    const initialized = extension.init();

    // Tokens indicating which features the current extension supports.
    const allFeatures = [
    // "activate" message to activate extension on current tab and
    // optionally first navigate to a different URL.
    'activate'];
    chromeAPI.runtime.onInstalled.addListener(async installDetails => {
      // Check whether this is the inital installation or an update of an existing
      // installation.
      if (installDetails.reason === 'install') {
        const extensionInfo = await chromeAPI.management.getSelf();
        extension.firstRun(extensionInfo);
      }
    });

    // Respond to messages sent by the JavaScript from https://hyp.is.
    // This is how it knows whether the user has this Chrome extension installed.
    chromeAPI.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
      switch (request.type) {
        case 'ping':
          {
            const queryFeatures = request.queryFeatures ?? [];
            const features = allFeatures.filter(f => queryFeatures.includes(f));
            sendResponse({
              type: 'pong',
              features
            });
          }
          break;
        case 'activate':
          {
            var _sender$tab;
            if (typeof ((_sender$tab = sender.tab) === null || _sender$tab === void 0 ? void 0 : _sender$tab.id) !== 'number') {
              return;
            }
            const {
              url,
              query
            } = request;
            if (url) {
              chromeAPI.tabs.update(sender.tab.id, {
                url
              });
            }
            extension.activate(sender.tab.id, {
              afterNavigationTo: url,
              query
            });
            sendResponse({
              active: true
            });
          }
          break;
      }
    });
    (_chromeAPI$runtime$re = (_chromeAPI$runtime = chromeAPI.runtime).requestUpdateCheck) === null || _chromeAPI$runtime$re === void 0 ? void 0 : _chromeAPI$runtime$re.call(_chromeAPI$runtime).then(() => {
      chromeAPI.runtime.onUpdateAvailable.addListener(() => chromeAPI.runtime.reload());
    });
    await initialized;
  }

  if (settings.raven) {
    init$1(settings.raven);
  }
  init();

})();
