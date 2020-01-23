import sys
import json
import time
import urllib.request
from bs4 import BeautifulSoup


MAPPING = {
    'og:image': 'image',
    'og:url': 'url',
    'og:title': 'title'
}


def scrap(url, name):
    try:
        result = {}
        url += name.replace(' ', '_')

        req = urllib.request.Request(url, headers={'User-Agent': 'x'})
        f = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(f, "html.parser")

        for meta in soup.select('meta'):

            prop, value = meta.get('property'), meta.get('content')
            if prop in MAPPING:
                result[MAPPING[prop]] = value

        return result
    except urllib.error.HTTPError:
        return None


if __name__ == '__main__':
    url = sys.argv[1]
    names = []
    for line in sys.stdin.readlines():
        names.append(line.strip())

    try:
        results = []
        for i, name in enumerate(names[1:]):
            sys.stderr.write(f"{i+1}/{len(names)-1}: {name}\n")
            data = scrap(url, name)
            if data:
                results.append(data)
            sys.stderr.write(f"{data}\n\n")
            time.sleep(2)
    finally:
        print("const data = %s;" % (json.dumps(results),))
