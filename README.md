# My-Favorite-Video-Games-List

This is a project I created as part of the Code Chrysalis curriculum. For Polyglottal week, 
I independently studied a new language of my own choice; for this project I selected Python along with the Django framework. I made simple a RESTful API that saves my favorite video game titles into my local database. The included input fields are the title, release year, developer, and genre for each game. 

In the future, I would like to improve the frontend, add a list of the current games in the database, and add an individual page for each game. I am also considering adding a comment field where a user could discuss what aspects they enjoyed about the game.

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

  - SECRET_KEY= [Generate a Django Secret Key and copy-paste it here](https://codinggear.blog/django-generate-secret-key/#generate-secret-key-in-django-using-getrandomsecretkeynbspfunction)  

  - DB_NAME= copy-paste the name you gave your database that you created in Step 3

  - DB_USER= your postgreSQL username goes here

  - DB_PASSWORD= your postgreSQL password goes here

- Create a new file called .gitignore and make sure to add .env to it; any filename added to .gitignore will prevent it from being added to your remote repository. This is important to prevent your PostgreSQL user credentials from being shared!

#### 5. Run migrations
- Run the following command to add tables to your database:
```bash
  python manage.py migrate
```



## Built With

* [Django REST Framework](https://www.django-rest-framework.org/)  
* [Python Dotenv](https://pypi.org/project/python-dotenv/)  
* [Psycopg2](https://pypi.org/project/psycopg2/)  
* [VirtualEnv](https://virtualenv.pypa.io/en/latest/)

## License

MIT License

Copyright © FVGL 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.