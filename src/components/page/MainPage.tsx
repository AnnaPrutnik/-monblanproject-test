"use client";

import { useState } from "react";

import Image from "next/image";

import { Header } from "@/src/components/header/Header";
import { List } from "@/src/components/list/List";
import topDecorationImage from "@/src/assets/images/bg-decoration.svg";
import bottomDecoration from "@/src/assets/images/bg-decoration-bottom.svg";

export const MainPage = () => {
    const [toValue, setToValue] = useState<Date | null>(new Date("09-08-2016"));

    return (
        <div className="relative pb-[63px] min-h-[1200px]">
            <div className="absolute top-0 left-0 -z-1 w-[630px] h-[398px]">
                <Image
                    src={topDecorationImage}
                    alt="image for decoration"
                    aria-hidden
                    className="w-full"
                    width={630}
                    height={398}
                />
            </div>
            <Header toValue={toValue} setToValue={setToValue} />
            <main>
                <List toValue={toValue} />
            </main>
            <div className="absolute right-0 bottom-[45px]">
                <Image
                    src={bottomDecoration}
                    alt="image for decoration"
                    aria-hidden
                    className="w-full"
                    width={210}
                    height={368}
                />
            </div>
        </div>
    );
};
