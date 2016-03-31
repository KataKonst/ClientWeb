import flask
import requests
import json
from JsonUtils import JsonUtils
from LoginUtils import LoginUtils
from flask import render_template
from flask.ext.bower import Bower
from routes.PlayListRoutes import playListRoutes
from routes.CommentsRoute  import commentsRoutes
from routes.likeRoute  import likeRoutes
from routes.UserRoute  import userRoutes
from routes.ViewsRoutes  import viewRoutes
from routes.HashTagsRoutes  import hashTagRoutes

app = flask.Flask(__name__)
app.secret_key = 'boss'
app.register_blueprint(playListRoutes)
app.register_blueprint(commentsRoutes)
app.register_blueprint(likeRoutes)
app.register_blueprint(userRoutes)
app.register_blueprint(viewRoutes)
app.register_blueprint(hashTagRoutes)



ip="http://127.0.0.1"

import flask.ext.login as flask_login

login_manager = flask_login.LoginManager()

login_manager.init_app(app)

users = {'test': {'pw': 'test'}}

class User(flask_login.UserMixin):
    pass


@app.route('/', methods=['GET', 'POST'])
@flask_login.login_required
def home():
    name = flask.request.args.get('search')
    if(name==None):
      r = requests.get(ip+':8080/tracks')
    else:
      r= requests.get(ip+':8080/search?nume='+name)

    loggedUserId=flask.ext.login.current_user.id
    posts=JsonUtils.getTracks(r.text);
    return  render_template("HomePage.html",
                             tracks=posts,
                             userId=loggedUserId)




@app.route('/test', methods=['GET', 'POST'])
def test():
    return  render_template("test.html")

@app.route('/save', methods=['GET', 'POST'])
def save():
    return  render_template("Upload.html",uploadip=ip)

@app.route('/search', methods=['GET', 'POST'])
def react():
     name = flask.request.args.get('searchText')
     if(name==None):
      r = requests.get(ip+':8080/tracks')
     else:
      r= requests.get(ip+':8080/search?nume='+name)
      print(r.text)

     return  r.text


@app.route('/tracksJson', methods=['GET', 'POST'])
def trackJson():
     name = flask.request.args.get('search')
     if(name==None):
      r = requests.get(ip+':8080/tracks')
     else:
      r= requests.get(ip+':8080/search?nume='+name)

     return  r.text


@app.route('/results', methods=['GET', 'POST'])
def results():
    name = flask.request.args.get('nume')
    parameters={'nume':name}
    req = requests.get(ip+':8080/match',params=parameters)
    posts=JsonUtils.getTracks(req.text);
    return  render_template("MatchResults.html",
                            tracks=posts)

@app.route('/jsonResults', methods=['GET', 'POST'])
def jsonResults():
    name = flask.request.args.get('nume')
    req = requests.get(ip+':8080/match?nume='+name)
    posts=JsonUtils.getTracks(req.text);
    return  req.text;




@login_manager.user_loader
def user_loader(email):
    user = User()
    user.id = email
    return user


@login_manager.request_loader
def request_loader(request):
    email = request.form.get('email')
    if email not in users:
        return

    user = User()
    user.id = email


    user.is_authenticated = request.form['pw'] == users[email]['pw']

    return user



@app.route('/login', methods=['GET', 'POST'])
def login():
    if flask.request.method == 'GET':
      return  render_template("Login.html")

    email = flask.request.form['login']
    print ip+':8080/login?nume='+email
    r = requests.get(ip+':8080/login?nume='+email)
    result= LoginUtils.checkLogin(flask.request.form['password'],JsonUtils.getMd5Hash(r.text))
    print  result

    if result:
        print "sss"
        user = User()
        user.id = JsonUtils.getid(r.text)
        flask_login.login_user(user)
        return flask.redirect(flask.url_for('home'))

    return 'Bad login'


@app.route('/protected')
@flask_login.login_required
def protected():
 files = {'file': open('/home/katakonst/Downloads/50 Cent - In Da Club San Holo Remix -[ mymp3download.info ].mp3', 'rb')}
 r = requests.post(ip+":8080/email", files=files)
 return r.text



@app.route('/play')
@flask_login.login_required
def boss():
    r = requests.get('"http://192.168.1.24:8080/play')
    return  r.text






if __name__ == '__main__':
    app.run()
