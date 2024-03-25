import { StaticImageData } from "next/image";

export type Member = {
    id: string;
    name: string;
    position: string;
    email: string;
    phone: string;
    image: string | StaticImageData;
};