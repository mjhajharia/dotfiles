#!/bin/bash

SBATCH --partition=ccm -N1 --job-name='summary'
source /mnt/home/mjhajaria/miniconda3/etc/profile.d/conda.sh
onda activate stan
cd /mnt/home/mjhajaria/simplex-transforms
python3 get_stuff.py