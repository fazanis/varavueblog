start:
	@ cd laradock && sudo docler-compose up -d nginx mysql phpmyadmin workspace
stop:
	@ cd laradock && sudo docker-compose down
ssh:
	@ cd laradock && sudo docker-compose exec workspace bash
db:
	@ cd laradock && sudo docker-compose exec mysql bash
