#!/usr/bin/env python3
import sys
from bs4 import BeautifulSoup

flatten = lambda t: [item for sublist in t for item in sublist]
soup = BeautifulSoup(sys.stdin, 'html.parser')
for tr in soup.tbody.find_all('tr')[1:]:
    vals = [x.get_text() for x in reversed(tr.find_all('td')[1:])]
    mid = list(map(int, vals[1].split('–')))
    mid = int((mid[0] + mid[1]) / 2)
    vals = flatten([reversed(vals[0].split('–')), [str(mid)], reversed(vals[2].split('–'))])
    print(f'[{",".join(vals)}],')
