import Content from '../components/Content'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const styleObj: { [key: string]: React.CSSProperties} = {
  cardGrid: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: '3rem',
  },
}

interface Props {
  memes: Array<Imeme>
}

export default function Home({ memes }: Props) {

  return (
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://github.com/floydjones1" target="_blank">Floyd Jones</a> Website
        </h1>
          <h5 className={styles.title2}>
            Feel free to visit my Yotube channel <a href="https://www.youtube.com/channel/UCUwA7VxRo-uw2eQJ52EkKlQ" target="_blank">here</a>!
        </h5>

          <Container style={styleObj.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {memes && memes.length && memes.map((meme, i) => (
                <Content key={`${meme.ups}${meme.title}`} data={meme} id={i} />
              ))}
            </Grid>
          </Container>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
  )
}



export interface Imeme {
  postLink: string,
  subreddit: string,
  title: string,
  url: string,
  nsfw: boolean,
  spoiler: boolean,
  author: string,
  ups: number,
  preview: Array<string>
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/memes')
  const { memes }: { memes: Array<Imeme> } = await res.json()

  return {
    props: {
      memes,
    },
  }
}