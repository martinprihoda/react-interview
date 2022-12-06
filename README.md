## Instalace

### `yarn`

Instalace závislostí

### `yarn start`

Spuštění aplikace

## Technologie

Není nutné řešit vizuální stránku aplikace, na vše lze využít připravený design systém MUI https://mui.com/ jehož použití se nijak nehodnotí, nepředpokládá se žádná znalost MUI.

Základ aplikace je již připravený a obsahuje react-router a redux. Očekává se, že se při implementaci zvolí odpovídající způsob komunikace s api včetně cachování s využitím externí knihovny k tomu určené.

Při hodnocení se zaměříme a společně pak diskutujeme způsob ukládání vnitřních stavů aplikace (redux/context/state), kompozici komponent, organizaci kodu, optimalizaci.

## Zadání

Cílem je vytvořit jednoduchou aplikaci se seznamem charakterů ze seriálu Rick and Morty o 2 stránkách:

1. Seznam charakterů (api: https://rickandmortyapi.com/api/character)

   - stránka by měla obsahovat 2 inputy pro filtrování charakterů podle "status" a "gender" (MUI: Select) a tlačítko "použít filtry" (MUI: Button), které provede upravený dotaz na api.
   - použité filtry se po kliknutí na tlačítko "použít filtry" pamatují po celý běh aplikace
   - seznam charakterů (MUI: Card) na základě výsledku z api s výpisem: "image" (MUI: Avatar), "name", "status" a "species"
   - lazy loading nebo stránkování (api vrací max 20 záznamů)

2. Detail charakteru (api: https://rickandmortyapi.com/api/character/{number})

   - stránka by měla obsahovat rozšířenou kartu použitou v seznamu, obsahující zbylé údaje
   - tlačítko zpět pro návrat na výpis

Api dokumentace: https://rickandmortyapi.com/documentation/

MUI dokumentace: https://mui.com/material-ui/
