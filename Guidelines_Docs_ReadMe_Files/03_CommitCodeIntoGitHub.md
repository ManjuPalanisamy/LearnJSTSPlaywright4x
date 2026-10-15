Steps to commit code for the first time into Git Hub repository:
1. Create a new repository on GitHub by clicking the "+" icon in the top right corner and selecting "New repository". Give your repository a name and click "Create repository".
2. Open your terminal or command prompt and navigate to the local project directory that you want to commit to GitHub.
3. Initialize a new Git repository in your project directory by running the command: `git init`.
	4. Add the files you want to commit to the staging area by running the command: `git add .` (this adds all files in the directory).
	=> Note: You may get access denied error here: 
	• Solution 1: Create a .gitignore file to tell Git to ignore them.
	1. In VS Code, create a new file named exactly .gitignore in your main folder.
	2. Add the names of folders you want Git to skip (for example, type node_modules/ or venv/ on a line).
	3. Save the file and try running git add . again

	• Solution 2: Check the terminal output to see which exact file caused the error. If it is a file you don't need, you can delete it. If you do need it, right-click the folder, go to Properties > Security > Advanced, and ensure your current Windows user account has "Full Control" permissions.

5. Commit the changes with a descriptive message by running the command: `git commit -m "Initial commit"`.
6. Link your local repository to the remote GitHub repository by running the command: `git remote add origin <repository_url>`, replacing `<repository_url>` with the URL of your GitHub repository.
7. Push the changes to the remote repository by running the command: `git push -u origin master` (or `main`, depending on your default branch name).
8. If prompted, enter your GitHub username and password or personal access token to authenticate the push.
9. Your code is now committed to the GitHub repository. You can verify this by visiting your repository on GitHub and checking for the committed files.
10. For subsequent commits, you can repeat steps 4-7 to add, commit, and push changes to the repository.
11. You can also use `git status` to check the status of your changes and `git log` to view the commit history.

Tips:
1. Make sure to write clear and descriptive commit messages to help you and others understand the changes made in each commit.
2. Regularly commit your code to avoid losing work and to maintain a history of changes.
3. Use branches for new features or bug fixes to keep your main branch stable and organized.
4. Consider using a .gitignore file to exclude files and directories that you don't want to commit to the repository, such as node_modules or temporary files.
5. If you encounter any issues with Git commands, refer to the official Git documentation or seek help from online communities and forums.