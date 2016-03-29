import flask
import Constants
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import requests


likeRoutes = Blueprint('likeRoutes', __name__,
                        template_folder='templates')

ip=Constants.getServer()
@likeRoutes.route('/getTrackLikes')
def getTrackLikes():
     print(ip)
     trackId= flask.request.args.get('trackId')
     parameters={'trackId':trackId}
     req = requests.get(ip+":8080/getTrackLikes",params=parameters);
     return  req.text



@likeRoutes.route('/likeTrack')
def likeTrack():
     trackId = flask.request.args.get('trackId')
     userId = flask.request.args.get('userId')
     parameters={'trackId':trackId,'userId':userId}
     req = requests.get(ip+":8080/likeTrack",params=parameters)
     return  '{["id":'+req.text+"]}"




@likeRoutes.route('/getUserLikedTracks')
def getUserLikedTracks():
     userId = flask.request.args.get('userId')
     parameters={'userId':userId}
     req = requests.get(ip+":8080/getUserLikedTracks",params=parameters)
     return  req.text


@likeRoutes.route('/getUserTrackLiked')
def getPlayLists():
    trackId = flask.request.args.get('trackId')
    parameters={'trackId':trackId}
    req = requests.get(ip+":8080/getUserTrackLiked",params=parameters)
    return  req.text

@likeRoutes.route('/getTrackNrLikes')
def getTrackNrLikes():
    trackId = flask.request.args.get('trackId')
    parameters={'trackId':trackId}
    req = requests.get(ip+":8080/getTrackNrLikes?",params=parameters)
    return  req.text

@likeRoutes.route('/checkUserLikedTrack')
def checkUserLikedTrack():
    trackId = flask.request.args.get('trackId')
    userId = flask.request.args.get('userId')
    parameters={'trackId':trackId,"userId":userId}
    req = requests.get(ip+":8080/checkUserLikedTrack?",params=parameters)
    return  req.text

@likeRoutes.route('/unlike')
def unlike():
    trackId = flask.request.args.get('trackId')
    userId = flask.request.args.get('userId')
    parameters={'trackId':trackId,"userId":userId}
    req = requests.get(ip+":8080/unlike?",params=parameters)
    return  req.text