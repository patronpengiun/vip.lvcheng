start:
	docker run --name travel -v `pwd`:/usr/share/nginx/html:ro -d -p 80:80 nginx
