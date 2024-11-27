import "dotenv/config";
import fetch from "node-fetch";

// Query to fetch from Dato. Edit this if more fields are added in the future. Then make the required changes to the map function below
const query = `{
  allQuizzes {
    id
    quiztitle
    questions{
      questionnumber
      picture {
        url
      }
      alt
      questiontext
      options {
        option
      }
      correctanswer
      description
}
    _publishedAt
    _status
    _firstPublishedAt
  }
}`;

export default async function () {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DATO_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });
  const { data } = await response.json();

  return data.allQuizzes.flatMap((quiz) => {
    return quiz.questions.map((question) => ({
      // Add any future fields here, as well as in the query 
      quizId: quiz.id,
      quizTitle: quiz.quiztitle,
      questionNumber: question.questionnumber,
      picture: question.picture.url,
      alt: question.alt,
      questionText: question.questiontext,
      options: question.options,
      correctAnswer: question.correctanswer,
      description: question.description,
    }));
  });
  
  
  
}
