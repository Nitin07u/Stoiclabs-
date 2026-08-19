#!/usr/bin/env python3
"""
STOICLABS Lightweight Photo CMS Server
Run: python3 cms-server.py [port] (default: 8080)
Allows browsing the site and uploading/replacing photos in assets/
"""

import http.server
import socketserver
import os
import json
import base64
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CMSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == '/api/upload-photo':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode('utf-8'))
                filename = data.get('filename')
                image_base64 = data.get('image_base64')

                if not filename or not image_base64:
                    self._send_json({'error': 'Missing filename or image data'}, 400)
                    return

                # Clean filename to prevent directory traversal
                safe_name = os.path.basename(filename)
                target_path = os.path.join(DIRECTORY, 'assets', safe_name)

                # Decode base64 data
                if ',' in image_base64:
                    image_base64 = image_base64.split(',', 1)[1]
                
                image_bytes = base64.b64decode(image_base64)
                with open(target_path, 'wb') as f:
                    f.write(image_bytes)

                print(f'[CMS] Successfully updated {safe_name} ({len(image_bytes)} bytes)')
                self._send_json({'success': True, 'filename': safe_name, 'size': len(image_bytes)})
            except Exception as e:
                print(f'[CMS Error] {e}')
                self._send_json({'error': str(e)}, 500)
        else:
            self._send_json({'error': 'Not found'}, 404)

    def _send_json(self, data, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(('', PORT), CMSRequestHandler) as httpd:
        print(f'=================================================')
        print(f'  STOICLABS CMS Server running on http://localhost:{PORT}')
        print(f'  Dashboard: http://localhost:{PORT}/admin/')
        print(f'  Website:   http://localhost:{PORT}/case-study.html')
        print(f'=================================================')
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("
Shutting down server.")
