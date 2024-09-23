# hostCode

## Description

Ce projet permet de crée des URLs afin de partager des fichiers. Il suffis de déposer vos fichier dans le dossier \`/files\` et en ajoutant les détails du fichier dans le fichier de configuration \`config.json\`. Les utilisateurs peuvent accéder aux fichiers via une URL unique basée sur un identifiant de fichier.

## Fonctionnalités

- **Déposer des fichiers** : Placez vos fichiers dans le dossier \`/files\` du projet.
- **Configurer les fichiers** : Ajoutez une entrée dans \`config.json\` avec un ID unique, le nom du fichier et une description.
- **Accéder aux fichiers** : Les fichiers peuvent être consultés en accédant à une URL basée sur leur ID unique.

## Installation

1. Clonez le dépôt du projet :

   ```bash
   git clone <URL_DU_DEPOT>
   cd <NOM_DU_REPERTOIRE>
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Démarrez le serveur :

   ```bash
   node app.js
   ```
   ou
   ```bash
   make all
   ```

Le serveur démarrera sur le port \`3030\`.

## Utilisation

### Déposer un fichier

1. Placez votre fichier dans le dossier \`/files\`.
2. Ouvrez le fichier \`config.json\` et ajoutez une nouvelle entrée pour le fichier comme suit :

   ```json
   {
     "routes": [
       {
         "id": "ID_UNIQUE",
         "file": "NOM_DU_FICHIER",
         "description": "DESCRIPTION_DU_FICHIER"
       }
     ]
   }
   ```

   Remplacez \`ID_UNIQUE\` par un identifiant unique, \`NOM_DU_FICHIER\` par le nom du fichier, et \`DESCRIPTION_DU_FICHIER\` par une brève description du fichier.

### Accéder aux fichiers

- Accédez à la page principale de l'application en allant sur [http://localhost:3030](http://localhost:3030).
- Vous y trouverez un formulaire pour rechercher un fichier par son ID unique.

### Routes

- \`/\` : Page d'accueil où vous pouvez rechercher un fichier par son ID.
- \`/:route\` : Affiche le fichier correspondant à l'ID spécifié dans l'URL.

## Makefile

Vous pouvez utiliser le \`Makefile\` pour simplifier les tâches courantes. Voici comment lancer les commandes via le \`Makefile\` :

1. Pour installer les dépendances et démarrer le serveur, exécutez :

   ```bash
   make all
   ```

2. Pour installer uniquement les dépendances, exécutez :

   ```bash
   make install
   ```

3. Pour démarrer le serveur, exécutez :

   ```bash
   make start
   ```

4. Pour arrêter le serveur, utilisez :

   ```bash
   make stop
   ```

5. Pour nettoyer les dépendances, exécutez :

   ```bash
   make clean
   ```

6. Pour afficher les informations sur le projet, utilisez :

   ```bash
   make info
   ```

7. Pour afficher l'aide sur les cibles disponibles, exécutez :

   ```bash
   make help
   ```

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre vos pull requests ou ouvrir des issues pour discuter des modifications.

## Licence

Ce projet est sous licence MIT. Voir le fichier \`LICENSE\` pour plus d'informations.