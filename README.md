
# GitHub OAuth mini project

GitHub Oauth is a protocol that lets external apps request authorization to private details in your GitHub account without getting your password. All developers need to register their application before getting started.

This react app is all about testing GitHub OAuth functionality with our own registered OAuth.
## Authors

- [@VIVEK-JS](https://github.com/VIVEK-JS)

  
## Tech Stack

**UI library:** React JS


**Other Libraries Used:** 

Axios : To manage GET and POST requsest. 

Redux :- For state managment which can be used as DB.

React-router : To define multiple routes.

  
## Project system requirments and prerequisites
- You have to install NODE package manager to your system to run this project.
- You can follow - https://treehouse.github.io/installation-guides/windows/node-windows.html this step by step guide to install NPM on windows and https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/ for MAC OS.
- Some basic familiarity of NCL

## Deployment
Step by step guide to run this project:
- You have to create your own OAuth app with: 

      Homepage URL : http://localhost:3000/

      Authorization callback URL: http://localhost:3000/oauth

   for more detail about how to create OAuth app please visit - https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app


- Clone this project using https://github.com/VIVEK-JS/legendary-octo-guide.git using this link or you can download zip file and extract to workplace.
- Change directory to project directory and install all dependencies using
     
      npm install
- Now,we have to config this app with our OAuth app - 
    for that copy Client ID from OAuth app and assign it to REACT_APP_CLIENT_ID which is in .env file in project  
  
    Simillarly, Genrate Client secrets , copy it and assign this key to REACT_APP_CLIENT_SECRET which is in .env file in project. 

- After succesfully completing above steps we can run project using

        npm run start




  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_CLIENT_ID` :- Clinet ID of your OAuth app

`REACT_APP_CLIENT_SECRET ` : Genrated Clinet Secret ID 

  
