import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';





const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

function List({data}) {
  const [spacing, setSpacing] = React.useState(2);
  console.log(data);
  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

 const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
     <Grid item xs={12}>
       <Grid container justify="center" spacing={spacing}>
        <Container maxWidth="sm">
           {data.map((res, index)=>
             <Card className={classes.card} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              src={res.Poster}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {res.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
           )}
        </Container>
        </Grid>
          </Grid>
            </Grid>
  );
}

export default List;
