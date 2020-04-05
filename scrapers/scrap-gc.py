import argparse
import json
import sys
import requests
import time

import urllib.request
from bs4 import BeautifulSoup


def get_souvenirs_links():
    url = f"https://thea-team.net/souvenirs/allsouvenirs"

    req = urllib.request.Request(url, headers={'User-Agent': 'x'})
    f = urllib.request.urlopen(req).read()
    soup = BeautifulSoup(f, "html.parser")

    for a in soup.select('.souvenirimagecell a'):
        yield a['href']

def get_souvenir_image(url):
    req = requests.get(url,  headers={'User-Agent': 'x'}, cookies={'gspkauth': '<PUT YOUR COOKIE HERE>'})
    soup = BeautifulSoup(req.text, "html.parser")

    title = soup.select('#ctl00_ContentBody_SouvenirDisplayControl1_uxTitle')[0].text
    img = soup.select('.img-souvenir-full-size')

    if len(img) == 1:
        img = img[0]
        return {
            'title': title,
            'image': img['src'],
            'url': url
        }
    else:
        print('!!!!!', url)

if __name__ == '__main__':
    results = []
    for link in get_souvenirs_links():
        item = get_souvenir_image(link)
        if item:
            results.append(item)
        time.sleep(1)

    print("const data = %s;" % (json.dumps(results),))