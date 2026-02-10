import { StaticImageData } from "next/image";
import img1 from "./image/perfume1.jpg";
import img2 from "./image/perfume2.jpg";
import img3 from "./image/perfume3.jpg";
import img4 from "./image/perfume4.jpg";

export type Perfume = {
  id: string;
  name: string;
  image: StaticImageData;
  price: string;
  rating: number;
};

export const perfumeImages: Perfume[] = [
  { id: "1", name: "Chanel No. 5", image: img1, price: "749.00",  rating: 5 },
  { id: "2", name: "Chanel No. 5 – Flat Lay", image: img2, price: "749.00", rating: 4 },
  { id: "3", name: "Bleu de Chanel", image: img3, price: "749.00",  rating: 5 },
  { id: "4", name: "Bleu de Chanel Intense", image: img4, price: "749.00", rating: 4 },
];