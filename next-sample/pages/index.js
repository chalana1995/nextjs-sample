import Head from 'next/head';
import ArticleList from '../components/ArticleList';


export default function Home({ articles }) {
  return (
    <div>

      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <h1>Wlecome to Next js</h1>

     <ArticleList articles={articles}/>
    </div>

  )
}

export async function getStaticProps() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  console.log("resss====", res);
  const articles = await res.json()
  console.log("articles====", articles);


  return {
    props: {
      articles
    }
  }
}
