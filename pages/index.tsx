import { useGetPokemons } from "@/api/pokeApi";
import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { Grid } from "@mui/material";
import type { NextPage, GetServerSideProps } from "next";

const HomePage: NextPage = ({ pokemons }) => {
  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
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
