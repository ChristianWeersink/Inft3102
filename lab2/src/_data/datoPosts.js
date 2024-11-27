import 'dotenv/config'; 
import fetch from 'node-fetch';

// Query to fetch from Dato. Edit this if more fields are added in the future. Then make the required changes to the map function below
const query = 
`{
  allPosts(orderBy: _firstPublishedAt_DESC) {
    id
    title
    permalink
    pageControl
    description
    tags
    section {
      title
      body
      carousel{
        carouselid
        images{
          src{
            url
          }
          alt
          title
          description
          
        }
      }
		}
    _publishedAt
    _status
    _firstPublishedAt
  }
}`;

export default async function(){
    const response = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DATO_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });
      const { data } = await response.json();
      
      return data.allPosts.map((posts) => {
        return {
          // Add any future fields here, as well as in the query 
            title: posts.title,
            id: posts.id,
            permalink: posts.permalink,
            page_control: posts.pageControl,
            tags: posts.tags,
            description: posts.description,
            section: posts.section.map((section) => ({
                title: section.title,
                body: section.body,
                carousel: section.carousel ? {
                    carouselID: section.carousel.carouselid,
                    images: section.carousel.images ? section.carousel.images.map((image) => ({
                        src: image.src.url,
                        alt: image.alt,
                        title: image.title,
                        description: image.description
                    })) : []
                } : null
            }))
        };
    });
    
}