

import flask
import Constants
import hashlib
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import requests


tracksRoutes = Blueprint('tracksRoutes', __name__,
                        template_folder='templates')

ip=Constants.getServer()


@tracksRoutes.route('/userUploadedTracks', methods=['GET', 'POST'])
def userUploadedTracks():
        userId = flask.request.args.get('userId')
        data={'userId' : userId}
        r = requests.get(ip+':8080/userUploadedTracks',params=data)
        return  r.text;

@tracksRoutes.route('/deleteTrack', methods=['GET', 'POST'])
def deleteTrack():
        trackId = flask.request.args.get('trackId')
        data={'trackId' : trackId}
        r = requests.get(ip+':8080/deleteTrack',params=data)
        return  r.text;

@tracksRoutes.route('/getUserFollowingTracks', methods=['GET', 'POST'])
def getUserFollowingTracks():
        userId = flask.request.args.get('userId')
        data={'userId' : userId}
        r = requests.get(ip+':8080/getUserFollowingTracks',params=data)
        return  r.text;

@tracksRoutes.route('/getFollowers', methods=['GET', 'POST'])
def getFollowers():
        userId = flask.request.args.get('userId')
        data={'userId' : userId}
        r = requests.get(ip+':8080/getFollowers',params=data)
        return  r.text;

@tracksRoutes.route('/getFollowing', methods=['GET', 'POST'])
def getFollowing():
        userId = flask.request.args.get('userId')
        data={'userId' : userId}
        r = requests.get(ip+':8080/getFollowing',params=data)
        return  r.text;

@tracksRoutes.route('/Upload', methods=['GET', 'POST'])
def Upload():
    return  render_template("HomePage.html")

