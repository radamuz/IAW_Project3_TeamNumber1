# How to resolve massive file conflicts in the event that it cannot be done with the GitHub online editor:
## Step 1: From your project repository, check out a new branch and test the changes.

git checkout -b carlosaguilar1993-main main  
git pull https://github.com/carlosaguilar1993/IAW_Project3_TeamNumber1.git main

## Step 2: Merge the changes and update on GitHub.

git checkout main  
git merge --no-ff carlosaguilar1993-main  
git push origin main