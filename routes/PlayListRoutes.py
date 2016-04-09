import flask
import Constants
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import requests


playListRoutes = Blueprint('playListRoutes', __name__,
                        template_folder='templates')

ip=Constants.getServer()
@playListRoutes.route('/createPlayList')
def createPlayList():
     playListName= flask.request.args.get('nume')
     userId= flask.request.args.get('userId')
     parameters={'userId':userId,'nume':playListName}
     req = requests.get(ip+":8080/createPlayList",params=parameters);
     return  req.text



@playListRoutes.route('/getTracksPlayList')
def getTracksPlayList():
     playId = flask.request.args.get('playId')
     parameters={'playId':playId}
     req = requests.get(ip+":8080/tracksofPlayList",params=parameters)
     return  req.text




@playListRoutes.route('/addToPLayList')
def addToPLayList():
     playId = flask.request.args.get('playId')
     trackId= flask.request.args.get('trackId')
     parameters={'playId':playId,'trackId':trackId}
     req = requests.get(ip+":8080/addToPlayList",params=parameters);
     return  req.text


@playListRoutes.route('/getPlayLists')
def getPlayLists():
     req = requests.post(ip+":8080/playlist")
     return  req.text

@playListRoutes.route('/getUserPlayLists')
def getUserPlayLists():
     userId = flask.request.args.get('userId')
     parameters={'userId':userId}
     req = requests.get(ip+":8080/userPlayLists",params=parameters)
     print(ip+"/userPlayLists")
     return  req.text

@playListRoutes.route('/deletePlayList')
def deletePlayLists():
     playId=flask.request.args.get('playId')
     parameters={'playId':playId}
     req = requests.get(ip+":8080/deletePlayList",params=parameters)
     return  req.text

@playListRoutes.route('/checkTrackFromPlayList')
def checkUserLikedTrack():
    trackId = flask.request.args.get('trackId')
    playId = flask.request.args.get('playId')
    parameters={'trackId':trackId,"playId":playId}
    req = requests.get(ip+":8080/checkTrackFromPlayList?",params=parameters)
    return  req.text

@playListRoutes.route('/deleteTrackFromPlayList')
def deleteTrackFromPlayList():
    trackId = flask.request.args.get('trackId')
    playId = flask.request.args.get('playId')
    parameters={'trackId':trackId,"playId":playId}
    req = requests.get(ip+":8080/deleteTrackFromPlayList?",params=parameters)
    return  req.text

@playListRoutes.route('/playLists')

def playLists():
    return render_template('HomePage.html')

@playListRoutes.route('/wall')

def Wall():
    return render_template('HomePage.html')





