"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LoadMoreBtn } from "./LoadMoreBtn";
import * as motion from "motion/react-client";
import { listData } from "@/src/assets/data/listData";
import { Card } from "./Card";
import { ViewSwitcher } from "./ViewSwitcher";

export enum ModeEnum {
    ROW = "rows",
    TILES = "tiles",
}

interface ListProps {
    toValue: Date | null;
}

export const List = ({ toValue }: ListProps) => {
    const [mode, setMode] = useState<ModeEnum>(ModeEnum.TILES);

    const [isAnimating, setIsAnimating] = useState(false);

    const listForRender =
        mode === ModeEnum.TILES ? listData.slice(0, 8) : listData;

    const onChangeMode = (nextMode: ModeEnum) => {
        if (nextMode === mode) return;
        setIsAnimating(true);

        setTimeout(() => {
            setMode(nextMode);
        }, 300);
    };
    return (
        <div className="box pt-[19px]">
            <ViewSwitcher mode={mode} changeMode={onChangeMode} />
            <motion.ul
                animate={{
                    opacity: isAnimating ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={twMerge(
                    "grid gap-2 lg:min-w-[836px]",
                    mode === ModeEnum.ROW ? "mb-[33px]" : "grid-cols-4 mb-4"
                )}
            >
                {listForRender.map((item, index) => (
                    <motion.li
                        key={index}
                        layout
                        onLayoutAnimationComplete={() => {
                            setIsAnimating(false);
                        }}
                        className={twMerge(
                            mode === ModeEnum.ROW ? "" : "max-w-[203px]"
                        )}
                    >
                        <Card {...item} mode={mode} toValue={toValue} />
                    </motion.li>
                ))}
            </motion.ul>
            <div className="text-center">
                <LoadMoreBtn />
            </div>
        </div>
    );
};
