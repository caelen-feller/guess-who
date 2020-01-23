import json
import urllib.request
from bs4 import BeautifulSoup

CIA_URL = 'https://www.cia.gov/library/publications/the-world-factbook/'


def scrap():
    req = urllib.request.Request(CIA_URL, headers={'User-Agent': 'x'})
    f = urllib.request.urlopen(req).read()
    soup = BeautifulSoup(f, "html.parser")

    results = []
    for option in soup.select('select#search-place option'):
        if option['value']:
            results.append({
                'title': option.text.strip(),
                'image': "https://www.cia.gov/library/publications/the-world-factbook/attachments/flags/%s-flag.gif" % option['data-place-code'].upper(),
                'url': "https://www.cia.gov/library/publications/the-world-factbook/%s" % option['value']
            })

    return results


if __name__ == '__main__':
    print('const data = %s;' % (json.dumps(scrap()), ))
