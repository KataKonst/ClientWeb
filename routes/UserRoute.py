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

@userRoutes.route('/searchUser')
def searchUserrId():
       searchText = flask.request.args.get('searchText')
       parameters={'searchText':searchText}
       req= requests.get(ip+':8080/searchUser',params=parameters)
       return  req.text

@userRoutes.route('/getUserById')
def getUserById():
     userId=flask.request.args.get('userId')
     parameters={'userId':userId}
     req=requests.get(ip+':8080/getUserById',params=parameters)
     return  req.text



@userRoutes.route('/followUser')
def followUser():
     userId=flask.request.args.get('userId')
     followId=flask.request.args.get('followId')
     parameters={'userId':userId,'followUser':followId}
     req=requests.get(ip+':8080/followUser',params=parameters)
     return  req.text

@userRoutes.route('/unfollowUser')
def unfollowUser():
     userId=flask.request.args.get('userId')
     followId=flask.request.args.get('followId')
     parameters={'userId':userId,'followUser':followId}
     req=requests.get(ip+':8080/unfollowUser',params=parameters)
     return  req.text

@userRoutes.route('/isUserFollowing')
def isUserFollowing():
     userId=flask.request.args.get('userId')
     followId=flask.request.args.get('followId')
     parameters={'userId':userId,'followUser':followId}
     req=requests.get(ip+':8080/isUserFollowing',params=parameters)
     return  req.text

@userRoutes.route('/track/ss')
def track():

   return  render_template("HomePage.html")

@userRoutes.route('/profile')
def profile():

   return  render_template("HomePage.html")

