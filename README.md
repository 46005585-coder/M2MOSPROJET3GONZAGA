# Les Courants de la Baie

Site web statique de cinq pages consacré à un concept fictif de nage en eau libre dans la baie de Saint-Jean-de-Luz. Projet pédagogique pour le M2 STAPS MOS.

**Slogan :** « L'océan se partage. La côte se respecte. »

> La manifestation, la date du 20 juin 2027, les parcours, les horaires et le formulaire sont fictifs. Le site n'ouvre aucune inscription réelle et aucune autorisation d'événement n'est annoncée.

## Structure

```text
les-courants-de-la-baie/
├── index.html
├── evenement.html
├── programme.html
├── infos-pratiques.html
├── inscriptions.html
├── style.css
├── script.js
├── NOTE_IA.md
├── SOURCES_IMAGES.md
├── README.md
└── images/
    ├── nageur-atlantique.jpg
    ├── groupe-nageurs.jpg
    └── baie-basque.jpg
```

## Lancer le site en local

1. Décompresser le ZIP si nécessaire.
2. Ouvrir `index.html` dans un navigateur.
3. Parcourir le menu pour vérifier les cinq pages.
4. Sur la page « Préinscription », tester le formulaire avec des données fictives. Aucun envoi ni stockage n'a lieu.

Le site n'utilise ni framework ni bibliothèque externe ; les images sont locales. Une connexion Internet est uniquement requise pour ouvrir les liens vers des pages officielles externes.

## Personnalisation intégrée

La page `index.html` est personnalisée avec les informations communiquées :
- Enguerrand Gonzaga, 24 ans.
- Master 2 STAPS MOS.
- Université Paris Nanterre.

L'année universitaire peut être ajoutée si elle est requise par l'enseignant. Relire les textes et effectuer des modifications manuelles visibles, conformément à la consigne. Décrire uniquement les changements réellement effectués dans `NOTE_IA.md`.

## Sources d'information sur le lieu

- Grande Plage de Saint-Jean-de-Luz, Office de tourisme du Pays basque : https://www.saint-jean-de-luz.com/activites-et-loisirs/les-plages-protegees-de-la-cote-basque/la-grande-plage-de-saint-jean-de-luz/
- Conditions de baignade et activités nautiques, Ville de Saint-Jean-de-Luz : https://www.saintjeandeluz.fr/fr/tourisme/plages/conditions-de-baignade-et-activites-nautiques/

Ces pages servent de repères d'information sur le littoral. Elles ne confirment pas l'organisation ou l'autorisation de l'événement fictif.

## Publication via GitHub Pages

1. Créer un dépôt GitHub (par exemple `les-courants-de-la-baie`).
2. Téléverser tous les fichiers et le dossier `images/`, en conservant la structure.
3. Ouvrir les paramètres du dépôt (`Settings`) puis la rubrique `Pages`.
4. Dans la section de génération/déploiement, sélectionner le déploiement depuis une branche (`Deploy from a branch`), puis choisir la branche principale (souvent `main`) et le dossier `/ (root)`.
5. Enregistrer et attendre la fin du déploiement automatique.
6. Ouvrir l'URL GitHub Pages affichée par GitHub ; tester tous les liens, les images, la mise en page mobile et le formulaire.
7. Envoyer à l'enseignant le lien du dépôt et l'URL GitHub Pages.

Ne pas inventer les URL du dépôt et du site : elles seront connues après création du dépôt et publication.

## Limite du formulaire

Le formulaire de `inscriptions.html` est une démonstration côté navigateur. Il ne transmet aucune donnée et n'enregistre aucune inscription. Un formulaire réel nécessiterait un service autorisé ou un backend et des mesures appropriées de protection des données.
