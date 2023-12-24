from tqdm import tqdm
for i in tqdm(range(1000000)):
    print(i)
with open('readme.txt', 'w') as f:
        f.write('readme')
