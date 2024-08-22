#!/usr/bin/make

include .env

#----------- Make Environment ----------------------
SHELL= /bin/sh
docker_bin= $(shell command -v docker 2> /dev/null)
docker_compose_bin= $(shell command -v docker-compose 2> /dev/null)


COMPOSE_CONFIG=--env-file .env -f docker-compose.yml
USER_CONFIG=--user="1000:1000"

check: ## Check your configuration
	$(docker_compose_bin) $(COMPOSE_CONFIG) config
create-networks:
	$(docker_bin) network create www-calendar || true
up: create-networks ## Start all containers (in background)
	"$(docker_compose_bin)" $(COMPOSE_CONFIG) up --no-recreate -d
down: ## Stop all started for development containers
	"$(docker_compose_bin)" $(COMPOSE_CONFIG) down || true
restart: ## Restart all started for development containers
	$(docker_compose_bin) $(COMPOSE_CONFIG) restart
install: ## Install dependencies
	"$(docker_compose_bin)" $(COMPOSE_CONFIG) run --rm ${USER_CONFIG} app npm install
sh-app: ## Run node container bash
	"$(docker_compose_bin)" $(COMPOSE_CONFIG) run --rm ${USER_CONFIG} app bash
seed: ## Run database seed
	"$(docker_compose_bin)" $(COMPOSE_CONFIG) exec app npm run seed