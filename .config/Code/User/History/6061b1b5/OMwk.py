from tqdm import tqdm
for i in tqdm(range(10000)):
    print(i)
with open('readme.txt', 'w') as f:
        f.write('readme')
