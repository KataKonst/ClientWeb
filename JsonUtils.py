import json
class JsonUtils(object):
    @staticmethod
    def getMd5Hash(jsonString):
     parsed_json = json.loads(jsonString)
     return parsed_json[0]['md5Hash']

    @staticmethod
    def getTracks(jsonString):
     parsed_json = json.loads(jsonString)
     return parsed_json