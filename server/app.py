import json
import bcrypt
import re
import os, sys

from flask import request
from flask_mail import Mail, Message

from . import create_app, database
from .models import Users

app = create_app()


def encrypt_password(password) -> str:
    salt = bcrypt.gensalt()
    encrypted_password = bcrypt.hashpw(password, salt)
    return encrypted_password


def isEmailValid(email) -> bool:
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if (re.fullmatch(regex, email)):
        return True
    else:
        return False


def isEmailRegistered(email) -> bool:
    user = database.get_user(Users, email)
    if user != None:
        return True
    else:
        return False


@app.route('/', methods=['GET'])
def fetch():
    users = database.get_all(Users)
    all_users = []
    for user in users:
        new_user = {
            "id": user.id,
            "email": user.email,
            "password": user.password,
            "autenticated": user.autenticated,
            "validated_email": user.validated_email
        }

        all_users.append(new_user)
    return json.dumps(all_users), 200


@app.route('/register', methods=['POST'])
def register():
    """
    call the function to check if the email is valid, call the function to check if the email isn't already
    registered and finally Call the function to encrypt the password and register the user if the none of the first two
    functions return false.
    """
    data = request.get_json()
    email = data['email']
    if not isEmailValid(email):
        return json.dumps("Email isn't valid"), 403
    elif isEmailRegistered(email):
        return json.dumps("Email already registered"), 401
    else:
        password = encrypt_password(data['password'])

        database.add_instance(Users, email=email, password=password)
        return json.dumps("Added"), 200


@app.route('/login', methods=['POST'])
def login():
    """
    Call the function to check if the email is registered and call the function to check if the password hash match with 
    the hash stored in the database. If none of the functions return false, set the user authentication to true, otherwise,
    return that email or password is wrong. 
    """
    data = request.get_json()
    email = data['email']
    password = data['password']


# @app.route('/edit/<cat_id>', methods=['PATCH'])
# def edit(cat_id):
#     data = request.get_json()
#     new_price = data['price']
#     database.edit_instance(Cats, id=cat_id, price=new_price)
#     return json.dumps("Edited"), 200