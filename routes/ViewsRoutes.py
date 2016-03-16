import flask
import Constants
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import requests


viewRoutes = Blueprint('viewRoutes', __name__,
                        template_folder='templates')

ip=Constants.getServer()


@viewRoutes.route('/getVis', methods=['GET', 'POST'])
def getVis():
    id = flask.request.args.get('id')
    parameters={'id':id}
    req= requests.get(ip+':8080/getVis',params=parameters)
    return  req.text

@viewRoutes.route('/addVis', methods=['GET', 'POST'])
def addVis():
    id = flask.request.args.get('id')
    parameters={'id':id}
    req= requests.get(ip+':8080/addVis',params=parameters)
    return  req.text
