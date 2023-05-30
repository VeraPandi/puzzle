const axios = require("axios");

exports.handler = async (event) => {
   try {
      const { id } = event.queryStringParameters;
      const response = await axios.get(
         `https://api.unsplash.com/collections/${id}/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=24`,

         {
            headers: {
               Accept: "application/json",
               "Accept-Encoding": "identity",
            },
         }
      );

      const datas = response.data;

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
