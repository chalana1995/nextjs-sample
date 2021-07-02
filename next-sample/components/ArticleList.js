import articleStyle from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticleList
