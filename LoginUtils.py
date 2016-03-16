import hashlib

class LoginUtils(object):
    @staticmethod
    def checkLogin(password,md5Hash):
       return hashlib.md5(password).hexdigest()==md5Hash;