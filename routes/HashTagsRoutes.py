import flask
import Constants
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import requests

hashTagRoutes = Blueprint('hashTagRoutes', __name__,
                        template_folder='templates')

ip=Constants.getServer()
@hashTagRoutes.route('/getHashOfTrack')
def getHashOfTrack():
     print(ip)
     trackId= flask.request.args.get('trackId')
     parameters={'trackId':trackId}
     req = requests.get(ip+":8080/getHashOfTrack",params=parameters);
     return  req.text

@hashTagRoutes.route('/getTracksOfHash')
def getTracksOfHash():
     print(ip)
     hashId= flask.request.args.get('hashId')
     parameters={'hashId':hashId}
     req = requests.get(ip+":8080/getTracksOfHash",params=parameters);
     return  req.text
@hashTagRoutes.route('/getAllHashs')
def getAllHashs():
     req = requests.get(ip+":8080/getAllHashs");
     return  req.text

