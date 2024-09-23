PORT = 3030
START_CMD = node app.js

all: install info start

install:
	npm install

start:
	$(START_CMD)

stop:
	@echo "Pour arrêter le serveur, utilisez Ctrl+C"

clean:
	npm cache clean --force
	rm -rf node_modules

info:
	@echo "Ce projet est un service de stockage de fichiers en ligne."
	@echo "1. Déposez vos fichiers dans le dossier '/files'."
	@echo "2. Ajoutez les détails du fichier dans 'config.json'."
	@echo "3. Accédez à la page principale pour rechercher un fichier par ID."
	
help:
	@echo "Cibles disponibles :"
	@echo "  all     - Installer les dépendances et démarrer le serveur"
	@echo "  install - Installer les dépendances"
	@echo "  start   - Démarrer le serveur"
	@echo "  stop    - Arrêter le serveur (Ctrl+C pour interrompre)"
	@echo "  clean   - Nettoyer les dépendances"
	@echo "  info    - Afficher les informations sur le projet"
	@echo "  help    - Afficher l'aide"

.PHONY: all install start stop clean info help