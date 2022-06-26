import { useGetPokemons } from "@/api/pokeApi";
import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { Button, Grid } from "@mui/material";
import type { NextPage, GetServerSideProps } from "next";

interface Props {
  currentPage: number;
  increasePage: () => void;
  pokemons: any[];
}
const HomePage: NextPage<Props> = ({ pokemons, increasePage, currentPage }) => {
  const pokemonsToRender = pokemons.filter((pokemon, index) => {
    return index >= 12 * currentPage ? false : pokemon;
  });

  return (
    <>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {pokemonsToRender.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
        {currentPage < 76 ? (
          <Button
            variant="contained"
            onClick={increasePage}
            sx={{ marginTop: "16px" }}
          >
            Cargar más Pokémon
          </Button>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pokemons = await useGetPokemons();
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
