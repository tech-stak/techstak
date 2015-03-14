##Tech Stack

####PURPOSE
This project was born out of our own frustrations locating startups hiring for the technologies we're most interested in working with. Querying AngelList for specific technologies is a haphazard process at best that often yields inaccurate results. Worse, there is no way saving our results with any degree of organization. So we decided to build an Tech Stack to make this process much easier.

The purpose of this project is to help job seekers find the jobs they're most interested in pursuing. Specifically, locating startups using their favorite tech stack. 

For example, if you're a big fan of React.js, typing React in the search bar will produce a list of React-based startups. You can save your favorite companies to a list which you can later reference. You can also tag your lists. For example, we might tag are favorite React companies under #React. 

Not only does this streamline the job search process but it also allows job seekers to quickly locate companies that they may be better suited to working for. 

###SETUP: Familiarize Yourself with Code Base
  * Fork this repo and clone your fork
  * run ```npm install```
  * Familiarize yourself with the given code and file structure

For reference the final folder structure will look something like this:

####FILE STRUCTURE

###Step 1: Code Architecture
Let's get familiar with the code we're given.

The default folder structure should look like this
```
├── app/
│   ├── App.js
|   ├── actions/
|   ├── ├── FavoritesActions.js
|   ├── ├── GithubActions.js
|   ├── ├── SearchActions.js
|   ├── components/
|   ├── ├── login-register/
|   ├── ├── ├── Login.js
|   ├── ├── ├── Logout.js
|   ├── ├── ├── Register.js
|   ├── ├── Main.js
|   ├── ├── Home.js
|   ├── constants/
|   ├── ├── AppConstants.js
|   ├── config/
|   ├── dispatcher/
|   ├── stores/
|   ├── ├── FavoritesStore.js
|   ├── ├── GithubStore.js
|   ├── ├── SearchStore.js
|   ├── utils/
|   ├── ├── FirebaseUtils.js
|   ├── ├── GithubUtils.js
├── public/
│   ├── index.html
|   ├── images/
│   ├── ├── spritesheet.png
├── webpack.config.js
├── package.json
├── README.md
├── .gitignore
```