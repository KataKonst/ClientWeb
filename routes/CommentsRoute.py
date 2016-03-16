import flask
import Constants
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import requests


commentsRoutes = Blueprint('commentsRoutes', __name__,
                        template_folder='templates')

ip=Constants.getServer()

@commentsRoutes.route('/addComment', methods=['GET', 'POST'])
def AddComment():
        userid = flask.request.args.get('userid')
        text = flask.request.args.get('text')
        trackId = flask.request.args.get('trackId')
        data={'trackId' : trackId,'userid':userid,'text':text}
        r = requests.get(ip+':8080/addComent',params=data)
        return  r.text;


@commentsRoutes.route('/getComments', methods=['GET', 'POST'])
def GetComments():
        trackId = flask.request.args.get('trackId')
        data={'trackId' : trackId}
        r = requests.get(ip+':8080/getComments',params=data)
        return  r.text;
