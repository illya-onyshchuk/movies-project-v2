import { useState } from "react";
import { Box, Grid, Paper, styled, Pagination } from "@mui/material";
import { MovieCard, MovieCardSelected } from "../../components";

import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "./queries";
import { useMovies } from "../../hooks/useMovies";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 140px)",
  position: "sticky",
  top: theme.spacing(2),
}));

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  const { selectedMovies, selectetMovie, deleteMovie } = useMovies();

  if (error) return "Error";

  const hendlerPagination = (event, page) => {
    setPage(page);
  };

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filter section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              {loading && "Loading"}
              {data && (
                <Grid container spacing={1}>
                  {data.movies.results.map((movie) => (
                    <Grid key={movie.id} item xs={16} sm={6} md={4} lg={3}>
                      <MovieCard movie={movie} onCardSelect={selectetMovie} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            {!loading && (
              <Box
                mt={2}
                mb={2}
                spacing={2}
                sx={{
                  padding: "10px 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  count={pagesCount}
                  page={page}
                  color="primary"
                  size="large"
                  onChange={hendlerPagination}
                />
              </Box>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>
            <Box sx={{ maxHeight: "70vh", overflow: "auto" }}>
              {selectedMovies.length ? (
                selectedMovies.map((movie) => (
                  <MovieCardSelected
                    key={movie.id}
                    movie={movie}
                    onCardDelete={deleteMovie}
                  />
                ))
              ) : (
                <h3>Selected your favorite films</h3>
              )}
            </Box>
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
