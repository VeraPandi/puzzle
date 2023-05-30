import React from "react";
import axios from "axios";

export interface ImageAuthorType {
   user: {
      name: string;
      username: string;
      links: {
         html: string;
      };
   };
}

export interface ImageType {
   id: number;
   urls: {
      regular: string;
      small: string;
   };
}

export interface ImageCategoriesType {
   [key: string]: ImageType[];
   animal: ImageType[];
   landscape: ImageType[];
   painting: ImageType[];
   digitalArt: ImageType[];
   graffiti: ImageType[];
   nature: ImageType[];
}

export const getImages = async () => {
   const animalPromise = axios.get(
      "/.netlify/functions/getImages?id=9GH0AmAJLsg"
   );
   const landscapePromise = axios.get(
      "/.netlify/functions/getImages?id=hgb0CJiiFiw"
   );
   const paintingPromise = axios.get(
      "/.netlify/functions/getImages?id=1rifeM_ikm8"
   );
   const digitalArtPromise = axios.get(
      "/.netlify/functions/getImages?id=vWAH0KiI1_Q"
   );
   const graffitiPromise = axios.get(
      "/.netlify/functions/getImages?id=VCM5n9FO3Dw"
   );
   const naturePromise = axios.get(
      "/.netlify/functions/getImages?id=gBS2EHlUWSo"
   );

   const promises = [
      animalPromise,
      landscapePromise,
      paintingPromise,
      digitalArtPromise,
      graffitiPromise,
      naturePromise,
   ];

   try {
      const results = await Promise.all(promises);

      const images: ImageCategoriesType = {
         animal: results[0].data.datas,
         landscape: results[1].data.datas,
         painting: results[2].data.datas,
         digitalArt: results[3].data.datas,
         graffiti: results[4].data.datas,
         nature: results[5].data.datas,
      };

      return images;
   } catch (error) {
      console.error("ERROR. API request did not work properly : ", error);
   }
};
