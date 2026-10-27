# Dépannage : images non visibles sur GitHub Pages

Les pages HTML utilisent des chemins relatifs explicites, par exemple `./images/nageur-atlantique.jpg`.

## Structure à conserver dans le dépôt

À la racine du dépôt GitHub (au même niveau que `index.html`), vous devez voir :

- `index.html`
- `evenement.html`
- `programme.html`
- `infos-pratiques.html`
- `inscriptions.html`
- `style.css`
- `script.js`
- le dossier `images/`

Dans `images/`, vérifiez la présence exacte de ces fichiers (GitHub Pages est sensible aux majuscules/minuscules) :

- `nageur-atlantique.jpg`
- `groupe-nageurs.jpg`
- `baie-basque.jpg`

Ne téléversez pas seulement les fichiers HTML : le dossier `images/` doit lui aussi être ajouté et envoyé (commit/push) sur GitHub. Ne placez pas les images dans un autre dossier, comme `assets/` ou `les-courants-de-la-baie/images/`, à moins d'adapter les chemins HTML.

## Vérification rapide

1. Ouvrez le dépôt GitHub et vérifiez que `images/` apparaît à la racine.
2. Cliquez sur chaque fichier image et vérifiez qu'il s'ouvre.
3. Dans le navigateur, ouvrez directement l'URL de l'image. Pour un site projet, l'adresse ressemble à `https://UTILISATEUR.github.io/NOM-DU-DEPOT/images/nageur-atlantique.jpg`. Remplacez les parties en majuscules par vos informations.
4. Si l'image ne s'ouvre pas, comparez le chemin, le nom exact, l'extension et les majuscules/minuscules.
5. Vérifiez dans les réglages GitHub Pages que la source de publication est bien la branche et le dossier où se trouvent `index.html` et `images/`.
6. Après un nouveau commit, attendez le déploiement, puis actualisez la page avec `Ctrl+F5` (Windows) ou `Cmd+Shift+R` (Mac).

Le dossier contient les images locales ; il n'est pas nécessaire que les visiteurs téléchargent les images séparément depuis un autre site.
