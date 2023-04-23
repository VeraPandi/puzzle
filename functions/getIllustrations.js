const axios = require("axios");

exports.handler = async (event) => {
   try {
      const { keyword } = event.queryStringParameters;
      const response = await axios.get(
         `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${keyword}&image_type=illustration&safesearch=true&orientation=horizontal&per_page=12`,

         {
            headers: {
               Accept: "application/json",
               "Accept-Encoding": "identity",
            },
         }
      );

      const datas = response.data.hits;

      return {
         statusCode: 200,
         body: JSON.stringify({ datas }),
      };
   } catch (error) {
      return {
         statusCode: 500,
         body: JSON.stringify({ error }),
      };
   }
};
