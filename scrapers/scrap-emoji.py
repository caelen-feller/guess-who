import argparse
import json
import sys
import requests
import time
import re

import urllib.request
from bs4 import BeautifulSoup


def get_emojis():
    req = requests.get('https://emojipedia.org/google/android-10.0/show_all/',  headers={'User-Agent': 'x'})
    soup = BeautifulSoup(req.text, "html.parser")

    for link in soup.select('ul.emoji-grid a'):
        img = link.select('img')[0]
        if 'skin-tone' in link['href']:
            continue
        if '/flag-' in link['href']:
            continue
        if re.search('japanese.*button', link['href']):
            continue
        yield {
            'title': img['alt'],
            'image': img['srcset'].split()[0],
            'url': "https://emojipedia.org" + link['href']
        }

if __name__ == '__main__':
    results = list(get_emojis())

    print("const data = %s;" % (json.dumps(results),))