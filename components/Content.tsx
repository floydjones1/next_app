import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Imeme } from '../pages'
import Link from 'next/link'
import { memoryUsage } from 'node:process';


const style:{ [key: string]: React.CSSProperties} = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
};

interface Props {
  id: number
  data: Imeme
}

export default function Content(props: Props): JSX.Element {
  const { id, data } = props
  const { title, preview, nsfw, author } = data

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={style.card}>
        <CardMedia
          style={style.cardMedia}
          image={preview[0]}
          title="Image title"
        />
        <CardContent style={style.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
            {author} - {nsfw && 'Not Safe For Work!'}
          </Typography>
        </CardContent>
        <CardActions>
        <Link href={`/meme/${id}`}>
        <Button size="small" color="primary">
            View
                    </Button>
  </Link>
          
        </CardActions>
      </Card>
    </Grid>
  )
}