import { Box, Grid, Typography } from "@mui/material";

// interface Props {
// pokemon: SmallPokemon;
// }

// lg;
// md;
// sm;
// xl;
// xs;
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
          }}
        >
          <img src={pokemon.image} />
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
              return <Typography variant="body1">{type}</Typography>;
            })}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
