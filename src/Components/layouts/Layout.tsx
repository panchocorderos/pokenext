import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/container_bg.png)",
            minHeight: 400,
          }}
        >
          <Container
            maxWidth="lg"
            disableGutters
            sx={{ backgroundColor: "white", padding: "1rem" }}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
};
