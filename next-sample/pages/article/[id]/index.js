import { server } from '../../../config';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta';


const article = ({ article }) => {
    return (
        <div>
            <Meta title={article.title} description={article.excerpt}/>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <br />

            <Link href="/">Go Back</Link>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json();

    const ids = articles.map((article) => article.id);

    const paths = ids.map((id) => ({params : {id: id.toString()}}))

    return { paths, fallback: false}

}

// export async function getStaticProps(context) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// export async function getStaticPaths() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json();

//     const ids = articles.map((article) => article.id);

//     const paths = ids.map((id) => ({params : {id: id.toString()}}))

//     return { paths, fallback: false}

// }

export default article
