#!/usr/bin/env python
"""Simplerr Configuration."""
import sys
sys.path.append('./website/')
import click
import os
from simplerr import dispatcher
from playhouse.dataset import DataSet
from website.config import Config
from website.common.models import main

"""
Example usage
./manage.py runserver
"""

@click.group()
def cli(): pass

@cli.command()
@click.option('-s', '--site', type=str, default='./website/', help='/app_path')
@click.option('-h', '--hostname', type=str, default='127.0.0.1', help="127.0.0.1")
@click.option('-p', '--port', type=int, default=5000, help="5000")
@click.option('--reloader', is_flag=True, default=True)
@click.option('--debugger', is_flag=True)
@click.option('--evalex', is_flag=True, default=False)
@click.option('--threaded', is_flag=True)
@click.option('--processes', type=int, default=1, help="1")
def runserver(site, hostname, port, reloader, debugger, evalex, threaded, processes):
    """Start a new development server."""
    app = dispatcher.wsgi(site, hostname, port,
                          use_reloader=reloader,
                          use_debugger=debugger,
                          use_evalex=evalex,
                          threaded=threaded,
                          processes=processes)  # ssl_context=(crt, key)

    app.serve()

if __name__ == '__main__':
    cli()
