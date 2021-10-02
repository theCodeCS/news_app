import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";

const NewsCard = ({ article, i }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} key={i}>
      <CardActionArea href={article.url} target="_blank">
        <CardMedia
          className={classes.media}
          image={article.urlToImage || "https://picsum.photos/200/300"}
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(article.publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {article.source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {article.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" text="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button href={article.url} target="_blank" size="small" color="primary">
          Learn More
        </Button>
        <Typography component="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
