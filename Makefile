# Makefile

# Dossier où les fichiers React sont construits (directement dans public)
BUILD_DIR = backend/public

# Commande par défaut (lance le processus complet)
all:
	@echo "Nettoyage du build existant..."
	cd $(BUILD_DIR) && find . -mindepth 1 -maxdepth 1 ! -name 'api' ! -name 'index.php' -exec rm -rf {} +
	@echo "Création du build React..."
	cd frontend && npm run build
	@echo "Lancement du serveur PHP..."
	php -S localhost:8000 -t backend/public