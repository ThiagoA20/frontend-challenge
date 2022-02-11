import json

from flask import request

from . import create_app, database
from .models import Users

app = create_app()


@app.route('/', methods=['GET'])
def fetch():
    users = database.get_all(Users)
    all_users = []
    for user in users:
        new_user = {
            "id": user.id,
            "email": user.email,
            "password": user.password,
        }

        all_users.append(new_user)
    return json.dumps(all_users), 200


@app.route('/register', methods=['POST'])
def add():
    data = request.get_json()
    email = data['email']
    password = data['password']

    database.add_instance(Users, email=email, password=password)
    return json.dumps("Added"), 200


# @app.route('/remove/<cat_id>', methods=['DELETE'])
# def remove(cat_id):
#     database.delete_instance(Cats, id=cat_id)
#     return json.dumps("Deleted"), 200


# @app.route('/edit/<cat_id>', methods=['PATCH'])
# def edit(cat_id):
#     data = request.get_json()
#     new_price = data['price']
#     database.edit_instance(Cats, id=cat_id, price=new_price)
#     return json.dumps("Edited"), 200