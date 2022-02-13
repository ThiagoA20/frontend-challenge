import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200))
    password = db.Column(db.String(200))
    autenticated = db.Column(db.Boolean, default=False)