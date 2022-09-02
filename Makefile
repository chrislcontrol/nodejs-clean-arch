PROJECT_NAME := nodejs-clean-arch
DATABASE_PASS := postgres


run-postgres:
	docker start $(PROJECT_NAME)-postgres 2>/dev/null || docker run --name $(PROJECT_NAME)-postgres -p 5432:5432 -e POSTGRES_PASSWORD='$(DATABASE_PASS)' -d postgres:10-alpine

setup-dev: 
	npm i

containers-up: run-postgres

containers-down:
	docker stop $$(docker ps -aq)

containers-reset: containers-down containers-up


make update-db: 
	npx prisma generate