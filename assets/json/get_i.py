import json
from pprint import pprint

def proc(type, j):
    with open(f'rank_{type}.json', encoding='utf-8') as json_file:
        data = json.load(json_file)
        for item in data:
            print(f"({item['i']}, 0, {j}),")

proc('pet', 3)
proc('hair', 0)
proc('clothes', 2)
proc('face', 1)