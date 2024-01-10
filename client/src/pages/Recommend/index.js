import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS_QUERY } from "./queries";
import { MovieCard, Loading } from "../../components";

const Recommend = () => {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState({ ids: [], title: "" });

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: { ids: params.ids.map(Number) },
  });

  useEffect(() => {
    let ids = searchParams.get("ids");
    let title = searchParams.get("title");

    setParams({
      ids: ids.split(","),
      title,
    });
  }, [searchParams]);

  if (error) {
    <div>Error. Try again!</div>;
  }

  return (
    <>
      {loading && <Loading />}
      <Typography variant="h2" component="h2" gutterBottom>
        {params.title}
      </Typography>

      {data?.moviesByIds && (
        <Grid container spacing={1}>
          {data.moviesByIds.map((movie) => (
            <Grid key={movie.id} item xs={16} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} isPreviewMode />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Recommend;
