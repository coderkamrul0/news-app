import React from 'react'
import { categories } from '../../constants'
import fetchNews from '../../Utility/fetchNews'

 async function HomePage() {

  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','))
  console.log(news);
  return (
    <div>
      {/* NewsList  */}
    </div>
  )
}

export default HomePage
