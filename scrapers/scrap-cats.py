import re
import urllib.request
import json
import time
import sys

CAT_URL = 'https://theoldreader.com/kittens/200/300/js'
CAT_NAMES = [
    'Nala', 'Luna', 'Bella', 'Daisy', 'Willow', 'Cleo', 'Hazel', 'Addie', 'Kiki', 'Rose', 'Angel', 'Coco', 'Bambi', 'Oreo', 'Ava',
    'Biscuit', 'Kiki', 'Cookie', 'Bean', 'Belle', 'Alice', 'Buttercup', 'Jinx', 'Pixie', 'Autumn', 'Cora', 'Roxy', 'Olive', 'Dixie',
    'Kit Kat', 'Lola', 'Amber', 'Honey', 'Gracie', 'Violet', 'Zoey', 'Kiwi', 'Piper', 'Chloe', 'Moon', 'Bailey', 'Harper', 'Millie',
    'Ellie', 'Lulu', 'Mia', 'Clover', 'April', 'Ella', 'Skittles', 'Simba', 'Milo', 'Alfie', 'Felix', 'Archie', 'Binx', 'Bear', 'Jasper',
    'Finn', 'Charlie', 'Biscuit', 'Oreo', 'Arlo', 'Blue', 'Gizmo', 'Tiger', 'Casper', 'Bailey', 'Caesar', 'Coco', 'Yoshi', 'Meeko', 'Otis',
    'Nugget', 'Bacon', 'Waffles', 'Oscar', 'Ziggy', 'Tigger', 'Chewie', 'Cookie', 'Louie', 'Angel', 'Banjo', 'Whiskers', 'Bingo', 'Buddy',
    'Teddy', 'Figaro', 'Mr. Bigglesworth', 'Angus', 'Barney', 'Boots', 'Moon', 'Axel', 'Ali', 'Percy', 'Bowie', 'Brownie', 'Amos'
]


def scrap(n=100):
    try:
        results = []
        for i in range(n):
            sys.stderr.write(f"{i}\n")
            req = urllib.request.Request(CAT_URL, headers={'User-Agent': 'x'})
            f = urllib.request.urlopen(req).read().decode('utf-8')
            # soup = BeautifulSoup(f, "html.parser")
            url = re.search('href="([^"]+)"', f)
            img = re.search('src="([^"]+)"', f)
            assert url and img
            results.append({
                'title': CAT_NAMES[i],
                'url': url[1],
                'image': 'https://theoldreader.com' + img[1]
            })
            time.sleep(1)

    except Exception as e:
        sys.stderr.write(e)
    finally:
        return results


if __name__ == '__main__':
    results = scrap()
    print('const data = %s;' % (json.dumps(results), ))
