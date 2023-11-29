import { CssBaseline, Container, Box } from "@mui/material";
import { Navigation } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Settings, Recommend } from "./pages";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <CssBaseline />
          <Navigation />

          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.grey[100],
            }}
          >
            <Container maxWidth="xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="settings" element={<Settings />} />
                <Route path="recommend" element={<Recommend />} />
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
