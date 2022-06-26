import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0.5rem 1rem",
        backgroundColor: theme?.colors.gray300.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pikachu"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okedex
      </Text>
      <Text color="white"> - by @panchocorderos</Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};
