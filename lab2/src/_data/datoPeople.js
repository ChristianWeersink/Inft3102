import 'dotenv/config'; 
import fetch from 'node-fetch';


// Query to fetch from Dato. Edit this if more fields are added in the future. Then make the required changes to the map function below
const query = 
`{
  allPeople {
    id
    name
    city
    colour {
      hex
    }
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
      return data.allPeople.map((allPeople) => {
        return {
          // Add any future fields here, as well as in the query 
            name: allPeople.name,
            city: allPeople.city,
            colour: allPeople.colour.hex
        } 
        
      })
}