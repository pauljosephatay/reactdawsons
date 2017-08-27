import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardHeader, CardContent, CardMedia } from "material-ui/Card";

import Typography from "material-ui/Typography";

import { homeCardStyleSheet } from "../../styles/app-classes";

class HomeCard extends Component {
  render() {
    const classes = this.props.classes;
    const { title, image, headline, paragraph, btmNav, content } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            title={
              <span className={classes.title}>
                {title}
              </span>
            }
          />

          {image
            ? <CardMedia className={classes.imgMedia}>
                <img src={image} alt={title} className={classes.img} />
              </CardMedia>
            : ""}

          {content ? content : ""}
          <CardContent className={classes.cardContent}>
            <Typography type="headline" component="h2">
              {headline}
            </Typography>
            <Typography component="p">
              {paragraph}
            </Typography>
          </CardContent>

          {btmNav}
        </Card>
      </div>
    );
  }
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(homeCardStyleSheet)(HomeCard);
