import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type Product = {
    id: string;
    title: string;
    description: string;
    category: string;
    price: ReactNode;
    images: {
        [x: string]: any;
        color: string;
        colorCode: string;
        image: string | StaticImageData;
    }[];
    reviews: ReactNode;
  };