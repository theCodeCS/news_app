import React from "react";
import { Grid, Grow } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./style";

const NewsCards = ({ news }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {news.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard key={i} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
