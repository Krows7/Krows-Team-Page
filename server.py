import http.server
import socketserver

from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler

PORT = 80

class CustomHandler(SimpleHTTPRequestHandler):
	def send_error(self, code, message=None):
		if code == HTTPStatus.NOT_FOUND:
			self.error_message_format = open("404.html").read()
		SimpleHTTPRequestHandler.send_error(self, code, message)

Handler = CustomHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()