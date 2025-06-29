import React from 'react'
import styles from "../styles/ListArticle.module.css"
import { Link } from 'react-router-dom'

const articles = [
    { id: "1", title: "Article one" },
    { id: "2", title: "Article two" },
    { id: "3", title: "Article three" },
    { id: "4", title: "Article four" },
    { id: "5", title: "Article five" }
]

const ListArticle = () => {
  return (
    <div className={styles.container}>
      <h2>List of articles</h2>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`} className={styles.linkList}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListArticle