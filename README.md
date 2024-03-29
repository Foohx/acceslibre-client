# acceslibre-client

acceslibre-client fournit un client minimaliste autour de l'API de la plateforme [acceslibre](https://acceslibre.beta.gouv.fr/).

## Installation

En utilisant npm:

```sh
  npm install acceslibre-client
```

En utilisant yarn:

```sh
  yarn add acceslibre-client
```

## Exemples

Node.js :

```javascript
const { getEstablishments } = require("acceslibre-client");

const API_KEY = "YOUR_KEY"

(async () => {
  const erps = await getEstablishments(API_KEY, { page: 1 });
)
```

React (Js) :

```js
import { getEstablishments } from "acceslibre-client";
import { useEffect, useState } from "react";

const API_KEY = "YOUR_KEY";

function App() {
  const [erps, setErps] = useState(undefined);

  useEffect(() => {
    (async () => {
      const erps = await getEstablishments(API_KEY);
      setErps(erps);
    })();
  }, []);

  if (erps === undefined) {
    return <p>Chargment..</p>;
  }

  if (erps === null) {
    return <p>Impossible de récupérer les ERPs ... </p>;
  }

  return (
    <div>
      <h1>ERPs</h1>
      <b>{erps.count} résultats</b>
      {erps.results.map((erp) => (
        <div>
          <h2>{erp.nom}</h2>
          <span>{erp.adresse}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
```

## API

### Activités :

> **ENDPOINT:** `/api/activites`

Obtenir une liste d'activités d'ERP :

```ts
const activities = await getActivities(API_KEY);
```

Obtenir une activité particulière par le biais de son slug :

```ts
const activity = await readActivity(API_KEY, "accessoires");
```

Demander une page spécifique d'une liste d'activités :

```ts
const activities = await getActivities(API_KEY, { page: 2 });
```

Récupérer la activités de l'ensemble des ERP de la ville de Bordeaux :

```ts
const activities = await getActivities(API_KEY, { commune: "Bordeaux" });
```

### ERPs :

> **ENDPOINT:** `/api/erps`

Obtenir une liste d'ERP :

```ts
const erps = await getEstablishments(API_KEY);
```

Obtenir un ERP en particulier par le biais de son slug :

```ts
const erp = await readEstablishment(API_KEY, "acdp-formation-82");
```

Demander une page spécifique d'une liste d'ERP :

```ts
const erps = await getEstablishments(API_KEY, { page: 2 });
```

Rechercher les ERPs contenant le terme "impôts" dans leur nom ou activité :

```ts
const erps = await getEstablishments(API_KEY, { q: "impôts" });
```

Récupérer les ERPs de la ville de Bordeaux :

```ts
const erps = await getEstablishments(API_KEY, { commune: "Bordeaux" });
```

La liste complète des paramètres de `getErps()` est disponible dans la [Documentation de l'API](https://acceslibre.beta.gouv.fr/api/docs/).

### Accessibilité :

> **ENDPOINT:** `/api/accessibilite`

Obtenir une liste des critères d'accessibilité de plusieurs ERPs :

```ts
const erpsRequirements = await getAccessibilites(API_KEY);
```

Obtenir les critères d'accessibilité d'un ERP spécifique en utilisant le slug d'un critère :

```ts
const requirements = await readAccessibilite(API_KEY, "1234");
```

Demander une page spécifique d'une liste des critères d'accessibilité d'ERPs :

```ts
const erpsRequirements = await getAccessibilites(API_KEY, { page: 1 });
```

### Utilitaires :

Les utilitaires sont disponibles dans `acceslibre-client/dist/utils`.

La méthode `readAccessibilite()` a besoin d'un `id` que vous pouvez récupérer dans l'url disponible via la propriété `accessibilite` du type `IErp`.

```ts
import { IEstablishment readEstablishment, readAccessibility } from "acceslibre-client";
import { extractAccessibilitiesSlugFromApiUrl } from "acceslibre-client/dist/utils";

const API_KEY = "YOUR_KEY"

const erp: IEstablishment | null = await readEstablishment("erp-slug");
if (erp !== null) {
  const requirementsId = extractAccessibiliteSlugFromApiUrl(erp.accessibilite);
  if (requirementsId !== null) {
    const erpRequirements = await readAccessibilite(requirementsId);
    // ...
  }
}
```

Il est également possible d'extraire le slug de l'url (web) d'un ERP par le biais d'une fonction utilitaire :

```ts
// imports..

const erpSlug: string | null = extractErpSlugFromUrl(
  "https://acceslibre.beta.gouv.fr/app/33-begles/a/informatique/erp/mobalib/"
);
if (erpSlug !== null) {
  console.log(erpSlug); // -> mobalib
}
```

## Ressources

- [Documentation de l'API (Acceslibre)](https://acceslibre.beta.gouv.fr/api/docs/)
- [Schema (Standard CNIG)](https://github.com/MTES-MCT/acceslibre-schema)
- [Description des champs acceslibre](https://acceslibre.beta.gouv.fr/contrib/documentation/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
