import { ImageCategoriesType } from "../../types";

export const createPuzzleCategories = (images: ImageCategoriesType) => {
   const properties: string[] = images && Object.keys(images);

   // Firebase doesn't support empty arrays or types "null"
   // and "undefined". So, we replaced these values ​​with "false".
   const objectOfCategories: { [key: string]: false } = properties.reduce(
      (acc: any, property: string) => ({
         ...acc,
         [property]: false,
      }),
      {}
   );

   return objectOfCategories;
};
