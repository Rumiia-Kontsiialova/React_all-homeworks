import React from 'react'
import styles from '../styles/Article.module.css'
import { useNavigate, useParams } from 'react-router-dom'

const articleData = {
  "1": {title: "Article 1", content: "Сontent of the article 1", path: "/articles/1"}, // articleData["1"] получим всю строку, которая за двоеточием
  "2": {title: "Article 2", content: "Сontent of the article 2", path: "/articles/2"},
  "3": {title: "Article 3", content: "Сontent of the article 3", path: "/articles/3"},
  "4": {title: "Article 4", content: "Сontent of the article 4", path: "/articles/4"},
  "5": {title: "Article 5", content: "Сontent of the article 5", path: "/articles/5"}
}

const Article = () => {
  const params = useParams();
  const navigate = useNavigate()

  // Используем параметр, чтобы найти нужную статью
  const article = articleData[params.id];

  // Если статья не найдена — показываем сообщение
  if (!article) {
    return <p>Статья не найдена.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <p>Сurrent path: {article.path}</p>
      {/* кнопка назад к списку статей */}
      <button onClick={() => navigate("/articles")} className={styles.btn}>
        Назад
      </button>
    </div>
  )
}

export default Article