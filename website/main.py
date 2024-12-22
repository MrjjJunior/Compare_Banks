from flask import Blueprint
from models import Banks

main = Blueprint('main', __name__)

@main.route()
def get_itmes():
    """ gest items """
    banks = Banks.query.all()
    bank_list = [{"id": bank.id,
                  "name": bank.name,
                  "website": bank.website
                  } for bank in banks]
    
    
