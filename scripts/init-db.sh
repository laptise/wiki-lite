source ./.env
docker pull mysql
docker run --name wiki-lite-db -e MYSQL_ROOT_PASSWORD=$DB_PASS -e MYSQL_DATABASE=wiki_lite_db -d -p $DB_PORT:3306 mysql
