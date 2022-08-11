# Bookmark App

## Table of Contents
+ [About](#about)
+ [Installation](#getting_started)
+ [Usage](#usage)

## About <a name = "about"></a>
Bookmark App is very straightforward fullstack application powered by Google's BookAPI. 

## Project Structure <a name = "project-structure"></a>

Most of the code lives in 'client/src' and 'service' folders and looks like this:

```sh
client
    +--src
        |
        +-- assets          # assets folder can contain all the static files such as images, fonts, etc.
        |
        +-- components      # shared components used across the entire application
        |
        +-- context         # all the global configuration. get exported from here and used in the app
        |
        +-- helpers         # shared helper functions
        |
        +-- pages           # page components of the application
        |
        +-- services        # shared api calls across the project
server
    +---+
        |
        +-- config          # all the global configuration, env variables etc. get exported from here and used in the app
        |
        +-- controllers     # controller functions, crud operations etc.
        |
        +-- models          # database models
        |
        +-- routes          # shared hooks used across the entire application
```


### Prerequisites

make sure to install up-to-date versions of;

node.js__
MySql Server__

### Installing

1- cd into 'server' from root folder of the project.__
2- Run 'npm i' to install npm dependencies in the 'server' directory.__
3- Repeat the same process for client side by running 'npm i' in the 'client' directory.__
4- Create '.env' file in the server directory to provide database informations.__
5- Provide below informations according to your database configurations;__
```
HOST= "localhost"
USER= "root"
PASSWORD= "PASSWORD"
DB= "DBNAME"
```
6- Start both server and client side applications seperately with 'npm start' command in their root directories.


## Usage <a name = "usage"></a>

You can search books by their name or authors in the homepage search section or searchbar in the header. In the search results user can add or remove books to the bookmarks. Also it is possible to list user's previous bookmarks in the 'Bookmarks' section.