# RSPO GOV API

Łatwy sposób na pobieranie listy wszystkich szkół oraz informacji o pojedynczej szkole w Polsce.

## Korzystanie

### Pobieranie listy szkół

```ts
import { getManySchools } from "rspo-gov-api";

const schools = await getManySchools(OPTIONS);
```

### Pobieranie informacji o pojedynczej szkole

```ts
import { getOneSchool } from "rspo-gov-api";

const school = await getOneSchool(SCHOOL_ID);
```

## Opcje

### Dostępne opcje podczas korzystania z funkcji `getManySchools`

- `schoolTypes` - typy placówek, które chcesz pobrać
- `offset` - nr szkoły, od której zacząć listę
- `items` - liczba szkół do pobrania

### Typy szkół

Wszystkie typy szkół są dostępne w `enum`ie `SchoolType` ([tutaj](./src/types.ts#L3)).
