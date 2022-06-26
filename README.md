# Introducción 📄

Explorar las diferentes herramientas de Next para poder crear una Pokedex

# How to run 🚀

- Clona el proyecto en tu local

```
  git clone https://github.com/panchocorderos/pokenext.git
```

- Instala las dependecias del proyecto

```
  yarn install
```

- Corre el servidor en tu terminal

```
  yarn dev
```

# TODO 📝

- [x] Buscar las diferentes APIs de pokemon
- [x] Evaluar los tradeoffs de las apis
- [x] Instalar dependecias necesarias y setear el boilerplate
- [x] Setear Prettier y extensiones del workspaces del proyecto
- [x] Definir arquitectura del proyecto
- [x] Crear un Figma para analizar los componentes
- [x] Crear el Layout principal
- [x] Consumir la API seleccionada
- [x] Crear el componente PokemonCard para mostrar los datos del pokemón
- [x] "Paginar" los pokemones
- [x] Agregar interfaces
- [ ] Mostrar los detalles del pokemon, consumiendo la pokeapi
- [ ] Agregar animaciones:
  - [ ] on mount
  - [ ] on hover
- [ ] Agregar Loading states
- [ ] Agregar Husky para CI
- [x] Deploy en un free hosting

# TradeOffs

Análisis de las diversas apis que existen y sus respectivas consecuencias

- La clásica [Pokeapi](https://pokeapi.co/), n + 1 queries por cada página, ya que el response de https://pokeapi.co/api/v2/pokemon/ tiene el nombre y una url a las demás características del pokemon

- La api de la [página oficial](https://www.pokemon.com/us/api/pokedex/kalos), está expuesta en el network de la página.
  - 1 sola query, pero contiene todo el contenido necesario para mostrar en las cards
  - La query no tiene parametros para limitar los datos, por ende, es pesada
  - Errores de tipado como: los tipos de los pokemones y pokemones repetidos (se eliminaron los pokemones repetidos en `src/api/pokeApi.ts`)
- Pokeapi versión [Graphql](https://beta.pokeapi.co/graphql/console/)
  - Está en su versión 1 y aun está en beta
  - Facilidad para consumir datos

# Links útiles 🤩

- Se analizaron los componentes aquí 👉🏻 [Figma](https://www.figma.com/file/XKA15sfQTXdVmZqoPVnpiv/Pokedex?node-id=0%3A1)
- Patrones que me gustaron [DevTickets Conference App](https://github.com/dev-tickets/devtickets)
