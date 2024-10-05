function getArticleGenerator(articles) {

    return () => {
      
        if(articles.length > 0){
            let curArticle = articles.shift()
            let article = document.createElement('article')
            article.innerText = curArticle
            document.querySelector('#content').appendChild(article)
        }      
    }
}
