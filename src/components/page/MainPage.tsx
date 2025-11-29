"use client";

import { useState } from "react";

import Image from "next/image";

import { Header } from "@/src/components/header/Header";
import { List } from "@/src/components/list/List";
import topDecorationImage from "@/src/assets/images/bg-decoration.svg";
import bottomDecoration from "@/src/assets/images/bg-decoration-bottom.svg";

export const MainPage = () => {
    const [toValue, setToValue] = useState<Date | null>(new Date());

    return (
        <div className="relative pb-[63px] md:min-h-[1200px] overflow-x-hidden">
            <div className="absolute right-[40%] md:right-[55%] lg:right-[unset] top-0 lg:left-0 -z-1 w-full h-auto lg:w-[630px] lg:h-[398px]">
                <Image
                    src={topDecorationImage}
                    alt=""
                    aria-hidden
                    className="w-full"
                    width={630}
                    height={398}
                />
            </div>
            <Header toValue={toValue} setToValue={setToValue} />
            <main>
                <section>
                    <List toValue={toValue} />
                </section>
            </main>
            <div className="absolute right-0 bottom-[10px] lg:bottom-[45px] w-[100px] md:w-[170px] h-auto lg:w-[210px]">
                <Image
                    src={bottomDecoration}
                    alt=""
                    aria-hidden
                    className="w-full relative -z-1"
                    width={210}
                    height={368}
                />
            </div>
        </div>
    );
};
