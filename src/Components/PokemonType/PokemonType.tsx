import { typesColors } from "@/utils/typesColors";
import { Box, Typography } from "@mui/material";
import React from "react";

export const PokemonType = ({ type }) => {
  return (
    <Box
      sx={{
        background: typesColors[type].backgrounColor,
        width: "75px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: typesColors[type].fontColor,
        borderRadius: "3px",
      }}
    >
      <Typography variant="body2">{typesColors[type].name}</Typography>
    </Box>
  );
};
