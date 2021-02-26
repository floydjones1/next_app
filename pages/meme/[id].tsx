import Router, { useRouter } from 'next/router'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container'
import React from 'react'
import { Typography } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Imeme } from '..'


const style: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: '2rem',
    margin: '3rem'
  },
  paper: {
    height: '100%',
    padding: '3rem'
  },
  link: {
    color: 'blue'
  },
  textCenter: {
    textAlign: 'center'
  },
  backButton: {
    marginBottom: '1rem'
  }
}


export default function Meme(props) {
  const router = useRouter()
  const { meme } = props
  const { preview, author, nsfw, title, ups, postLink } = meme

  const img = preview[2]
  return (
    <Container style={style.container}>
      <Fab style={style.backButton} onClick={() => Router.back()} color="primary" aria-label="back">
  <KeyboardBackspaceIcon />
</Fab>
      <Paper elevation={3} style={style.paper}>
        <Grid container>
          <Grid item xs={8}><Typography component="h4" variant="h4">Author: {author}</Typography>
            <Typography component="h6" variant="h6">NSFW: {nsfw ? 'YES' : 'NO'}</Typography></Grid>
          <Grid container justify="flex-end" item xs={4}><Typography component="body1" variant="body1">{ups}</Typography><StarIcon /></Grid>

        </Grid>
        <Grid container spacing={2} justify="center" direction="column" alignItems="center">
          <Grid item><img src={img} /></Grid>
          <Grid item>
            <Typography component="body1" variant="body1">Click here to view original link <a style={style.link} href={postLink} target="_blank">here</a></Typography>
            </Grid>
            <Grid item><Typography style={style.textCenter} component="h3" variant="h3">{title}</Typography></Grid>
        </Grid>

      </Paper>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(`http://localhost:3000/api/memes/${id}`)
  const meme: Imeme = await res.json()

  return {
    props: {
      meme,
    },
  }
}