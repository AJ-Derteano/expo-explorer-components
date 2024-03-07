git add .

# enter message
echo "Enter commit message: "
read commitMessage

git commit -m "$commitMessage"

# push to branch
echo "Enter branch name: "
read branchName

git push origin $branchName
