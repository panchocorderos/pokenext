import { Box, Grid, Typography } from "@mui/material";
import { PokemonType } from "@/components/PokemonType/PokemonType";
import Image from "next/image";

interface Props {
  pokemon: {
    name: string;
    id: number;
    types: string[];
    number: string;
    image: string;
  };
}
export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      xl={3}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "227px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#F1F0F0",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={227}
            height={227}
          />
        </Box>
        <Box
          sx={{
            paddingLeft: "1rem",
          }}
        >
          <Typography
            variant="body2"
            color={"#919191"}
            fontWeight={"500"}
            lineHeight={"125%"}
          >
            N.º{pokemon.number}
          </Typography>
          <Typography variant="h5">{pokemon.name}</Typography>
          <Box display={"flex"} gap={1}>
            {pokemon.types.map((type) => {
              return <PokemonType type={type} key={pokemon.id} />;
            })}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
