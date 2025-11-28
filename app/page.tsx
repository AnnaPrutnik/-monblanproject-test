import Image from "next/image";

import { Header } from "@/src/components/header/Header";
import { List } from "@/src/components/list/List";
import topDecorationImage from "@/src/assets/images/bg-decoration.svg";

export default function Home() {
    return (
        <div className="relative ">
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
            <Header />
            <main className="">
                <List />
            </main>
        </div>
    );
}
