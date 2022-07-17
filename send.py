import json
import requests

url = 'http://192.168.1.168/sony/system'
DEFAULT_HEADER = {"X-Auth-PSK": "1234"}
data = {"method":"setPowerStatus","version":"1.0","id":1,"params":[{"status":False}]}
data = json.dumps(data)
r = requests.post(url, data=data, headers=DEFAULT_HEADER)
print(r.text)