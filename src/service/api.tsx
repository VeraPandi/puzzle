import { create } from "zustand";
import axios from "axios";

export interface ImageType {
   id: number;
   webformatURL: string;
}

export interface ImageCategoryType {
   animal: ImageType[];
   city: ImageType[];
   monument: ImageType[];
   oilPainting: ImageType[];
   illustration: ImageType[];
   iaIllustration: ImageType[];
   nature: ImageType[];
}

export interface ImageSliceType {
   imageDatas: ImageCategoryType;
   fetchImages: () => void;
}

export const createImageSlice = create<ImageSliceType>((set) => ({
   imageDatas: {
      animal: [],
      city: [],
      monument: [],
      oilPainting: [],
      illustration: [],
      iaIllustration: [],
      nature: [],
   },

   fetchImages: async () => {
      try {
         // Animal
         const animalResponse = await axios.get(
            "/.netlify/functions/getImages?keyword=animal photography"
         );
         const animal: ImageType[] = animalResponse.data.datas;

         // City
         const cityResponse = await axios.get(
            "/.netlify/functions/getImages?keyword=city"
         );
         const city: ImageType[] = cityResponse.data.datas;

         // Monument
         const monumentResponse = await axios.get(
            "/.netlify/functions/getImages?keyword=monuments -sculpture -van -façade"
         );
         const monument: ImageType[] = monumentResponse.data.datas;

         // OilPainting
         const oilPaintingResponse = await axios.get(
            "/.netlify/functions/getImages?keyword=oil on canvas -célèbre"
         );
         const oilPainting: ImageType[] = oilPaintingResponse.data.datas;

         // Illustration
         const illustrationResponse = await axios.get(
            "/.netlify/functions/getIllustrations?keyword=illustration -virus -portrait -présentation"
         );
         const illustration: ImageType[] = illustrationResponse.data.datas;

         // IaIllustration
         const iaIllustrationResponse = await axios.get(
            "/.netlify/functions/getIllustrations?keyword=ai généré"
         );
         const iaIllustration: ImageType[] = iaIllustrationResponse.data.datas;

         // Nature
         const natureResponse = await axios.get(
            "/.netlify/functions/getImages?keyword=countryside"
         );
         const nature: ImageType[] = natureResponse.data.datas;

         set({
            imageDatas: {
               animal,
               city,
               monument,
               oilPainting,
               illustration,
               iaIllustration,
               nature,
            },
         });
      } catch (error) {
         console.error(error);
      }
   },
}));
