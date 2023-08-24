import { gql } from "graphql-request";
import sortNews from "./sortNews";
const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQl query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "gb"
            sort: "published_desc"
            keywords: $keywords
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `;
    // Fetch function
    const res = await fetch(`https://yangsan.stepzen.net/api/wayfaring-goat/__graphql`, {
        method: 'POST',
        cache: isDynamic ? 'no-cache' : 'default',
        next: isDynamic ? {revalidate: 0} : {revalidate: 20},
        headers: {
            "Content-Type": "application/json",
            Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            }

        })
    })

    const newResponse = await res.json();
    // Sort function by images or not images
    const news = sortNews(newResponse.data.myQuery);
    // return response
    return news;
}

export default fetchNews;