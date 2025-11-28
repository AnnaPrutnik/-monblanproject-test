import { StaticImageData } from "next/image";

import row1 from "@/src/assets/images/card-images/row-1.jpg";
import row3 from "@/src/assets/images/card-images/row-3.jpg";
import row4 from "@/src/assets/images/card-images/row-4.jpg";
import row5 from "@/src/assets/images/card-images/row-5.jpg";
import row6 from "@/src/assets/images/card-images/row-6.jpg";
import row7 from "@/src/assets/images/card-images/row-7.jpg";
import row8 from "@/src/assets/images/card-images/row-8.jpg";
import row9 from "@/src/assets/images/card-images/row-9.jpg";
import tiles1 from "@/src/assets/images/card-images/tiles-1.jpg";
import tiles2 from "@/src/assets/images/card-images/tiles-2.jpg";
import tiles3 from "@/src/assets/images/card-images/tiles-3.jpg";
import tiles5 from "@/src/assets/images/card-images/tiles-5.jpg";
import tiles6 from "@/src/assets/images/card-images/tiles-6.jpg";
import tiles7 from "@/src/assets/images/card-images/tiles-7.jpg";
import tiles8 from "@/src/assets/images/card-images/tiles-8.jpg";

export type ListCardType = {
    imageTiles: StaticImageData;
    imageRow: StaticImageData;
    today: {
        likes: number;
        messages: number;
    };
    currentDay: {
        likes: number;
        messages: number;
    };
    imageUpload: string;
};

export const listData = [
    {
        imageTiles: tiles1,
        imageRow: row1,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles2,
        imageRow: tiles1,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles3,
        imageRow: row3,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles1,
        imageRow: row4,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles5,
        imageRow: row5,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles6,
        imageRow: row6,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles7,
        imageRow: row7,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles8,
        imageRow: row8,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 67,
            messages: 22,
        },
        imageUpload: "11-04-2016",
    },
    {
        imageTiles: tiles8,
        imageRow: row9,
        today: {
            likes: 128,
            messages: 31,
        },
        currentDay: {
            likes: 55,
            messages: 15,
        },
        imageUpload: "11-04-2016",
    },
];
