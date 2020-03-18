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

def scrap(url):
    try:
        result = {}

        req = urllib.request.Request(url, headers={'User-Agent': 'x'})
        f = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(f, "html.parser")

        for meta in soup.select('meta'):
            prop, value = meta.get('property'), meta.get('content')
            if prop in MAPPING:
                result[MAPPING[prop]] = value

        if any(pattern in result.get('image','') for pattern in ('Wiki.png', '_Art.jpg')):
            return None
        
        return result
    except urllib.error.HTTPError:
        return None

def scrap_urls(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'x'})
        f = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(f, "html.parser")
        for a in soup.select('a[title]'):
            href = a.get('href')
            if not href.startswith('/wiki/'):
                continue
            if any(href.startswith(f"/wiki/{pattern}") for pattern in ['Szablon:', 'Specjalna:', 'Kategoria:']):
                continue
            yield f"https://gwint.fandom.com{href}"

    except urllib.error.HTTPError:
        return None

if __name__ == '__main__':
    urls = []
    for url in sys.argv[1:]:
        urls.extend(scrap_urls(url))
    
    # for url in urls:
    #     print(url)
    # print(len(urls))

    # for url in sys.argv[1:]:
    #     for url2 in scrap_urls(url):
    #         data = scrap(url, name)
    # url = sys.argv[1]
    # names = []
    # for line in sys.stdin.readlines():
    #     names.append(line.strip())

    try:
        results = []
        for i, url in enumerate(urls):
            sys.stderr.write(f"{i+1}/{len(urls)}: {url}\n")
            data = scrap(url)
            if data:
                results.append(data)
            sys.stderr.write(f"{data}\n\n")
            time.sleep(2)
    finally:
        print("const data = %s;" % (json.dumps(results),))
