# Bookmark App

## Table of Contents
+ [About](#about)
+ [Installation](#getting_started)
+ [Usage](#usage)

## About <a name = "about"></a>
Bookmark App is very straightforward fullstack application powered by Google's BookAPI. 
## Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## Project Structure <a name = "project-structure"></a>

Most of the code lives in the client/src folder and looks like this:

```sh
client
    +--src
        |
        +-- assets             # assets folder can contain all the static files such as images, fonts, etc.
        |
        +-- components         # shared components used across the entire application
        |
        +-- context            # all the global configuration, env variables etc. get exported from here and used in the app
        |
        +-- helpers            # shared helper functions
        |
        +-- pages              # shared hooks used across the entire application
        |
        +-- services           # re-exporting different libraries preconfigured for the application
server
    +---+
        |
        +-- config             # all the global configuration, env variables etc. get exported from here and used in the app
        |
        +-- controllers        # feature based modules
        |
        +-- models             # shared hooks used across the entire application
        |
        +-- routes             # shared hooks used across the entire application
```


### Prerequisites

Up-to-date versions of;

node.js
npm
MySql Server

### Installing

1- cd into 'server' from root folder of the project.
2- Run 'npm i' to install npm dependencies in the 'server' directory.
3- Repeat the same process for client side by running 'npm i' in the 'client' directory.
4- Create '.env' file in the server directory to provide database informations.
5- Provide below informations according to your database configurations;
```
HOST= "localhost"
USER= "root"
PASSWORD= "PASSWORD"
DB= "DBNAME"
```
6- Start both server and client side applications with 'npm start' command in their root root directories.


## Usage <a name = "usage"></a>

You can search books by their name or authors in the homepage search section or searchbar in the header. In the search results user can add or remove books to the bookmarks. Also it is possible to list user's previous bookmarks in the 'Bookmarks' section.