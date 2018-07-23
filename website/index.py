#!/usr/bin/python3.6
from simplerr.web import web

@web('/', 'home.html')
def index(request): pass
