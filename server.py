import http.server
import socketserver
import sqlite3
import sys

from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler
from sqlite3 import Error

PORT = 80

def create_connection(path):
	connection = None
	try:
		connection = sqlite3.connect(path)
		print("Connected to SQLite DB.")
	except Error as e:
		printf(f"Error '{e}' has occured")

	return connection

def init_db():
	db.execute('''CREATE TABLE events(title text, start datetime, end datetime)''')
	db.commit()

db = create_connection("db/base.db")

if len(sys.argv) > 1:
	for arg in sys.argv:
		if(arg == "init"):
			init_db()

class CustomHandler(SimpleHTTPRequestHandler):

	def send_error(self, code, message=None):
		if code == HTTPStatus.NOT_FOUND:
			self.error_message_format = open("404.html").read()
		SimpleHTTPRequestHandler.send_error(self, code, message)

Handler = CustomHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:

    print(f"Serving at port '{PORT}'...")
    httpd.serve_forever()