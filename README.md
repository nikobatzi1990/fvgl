# My-Favorite-Video-Games-List

UPDATE 04/16/25: I have just finished migrating this project to Vite from the depreciated CRA. I am currently working on adding Bootstrap styles to improve the overall look of the application.

This is a project I created as part of the Code Chrysalis curriculum. For Polyglottal week, 
I independently studied a new language of my own choice; for this project I selected Python along with the Django framework. I made simple a RESTful API that saves my favorite video game titles into my local database. The included input fields are the title, release year, developer, genre, and image for each game. 

In the future, I would like to add an individual page for each game and make certain data values into clickable tags that function as query parameters. I am also considering adding a comment field where a user could discuss what aspects they enjoyed about the game.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Python](https://www.python.org/)
* [Node](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/)

### Installing

#### 1. Clone repo and Setup Python Virtual Environment

- Clone the repo to your local machine using the following command:
```bash
  git clone <insert SSH URL here>
```

- Create a python virtual environent with the following command:
 ```bash
    python -m venv venv
  ```

  NOTE: depending on the version of python you are using, it may be necessary to type "python3" at the start of the command!

- Activate the virtual enviroment by running the following command:
```bash
  source venv/bin/activate
```
- Deactivate the virtual enviroment with this command:
```bash
  deactivate
```

Be sure to check that you are working in the virtual enviroment before moving on to the next step!

#### 2. Install requirements.txt
- Run the following command to install the necessary dependencies:
```bash
  pip install -r requirements.txt
```

#### 3. Initialize a PostgreSQL Database
- Run PostgreSQL in the terminal and create a new database with the following command:
```bash
  CREATE DATABASE <database_name_here>;
```

#### 4. Create .env files and .gitignore
- Create a new .env file in the root repository and copy-paste the data from .env.example

  - SECRET_KEY= [Generate a Django Secret Key and copy-paste it here](https://medium.com/django-unleashed/securing-django-applications-best-practices-for-managing-secret-keys-and-environment-variables-f10f5a53490b)

  - DB_NAME= copy-paste the name you gave your database that you created in Step 3

  - DB_USER= your postgreSQL username goes here

  - DB_PASSWORD= your postgreSQL password goes here

- Create a new file called .gitignore and make sure to add .env to it; any filename added to .gitignore will prevent it from being added to your remote repository. This is important to prevent your PostgreSQL user credentials from being shared!

#### 5. Run migrations
- Run the following command to add tables to your database:
```bash
  python manage.py migrate
```

#### 6. Install dependencies in client repository
- Navigate to the client repository in your terminal and install dependencies with the following command:
```bash
  cd client && npm install
```
- Create a new .gitignore file in the client repository and add "node_modules" to it.

#### 7. Run server
- Open two terminals and run the backend server with the following command in your terminal:
```bash
  python manage.py runserver
  ```
- Run the client server in the second terminal with this command:
```bash
  npm run start
```
- Stop either server with Ctrl + C

## License

MIT License

Copyright © FVGL 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
