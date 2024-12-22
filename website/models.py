from . import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150))
    firstName = db.Column(db.String(150))

class Banks(db.Model):
    __tablename__ = 'banks'

    id = db.Column(db.Integer, primary_key=True)
    bankName = db.Column(db.String(100), nullable=False)
    website =  db.Column(db.String(500))

class Package():
    pass
