export type Film = {
    title: string;
    role: string;
    description: string;
    trailer: string;
    festivals: string[]
    director: string;
    cast: string;
    info: string;
    photos: string[];
    leftImageAngle?: number;
    topRightImageAngle?: number;
    bottomRightImageAngle?: number;
    leftImageSize?: number;
    topRightImageSize?: number;
    bottomRightImageSize?: number;
  };