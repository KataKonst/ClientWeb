import flask
import Constants
import hashlib
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import requests


userRoutes = Blueprint('userRoutes', __name__,
                        template_folder='templates')

ip=Constants.getServer()

@userRoutes.route('/register')
def registerRoute():
    name = flask.request.args.get('name')
    print("SS")
    password = flask.request.args.get('password')
    print(name+" "+password)
    md5=hashlib.md5(password).hexdigest()
    print(name+" "+password)
    parameters={'name':name,"md5":md5}
    req= requests.get(ip+':8080/register',params=parameters)
    return  req.text


@userRoutes.route('/getUserId')
def getUserId():
    return   flask.ext.login.current_user.id
