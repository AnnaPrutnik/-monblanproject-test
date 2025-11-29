"use client";

import { Sprite } from "../shared/Sprite";
import { ModeEnum } from "./List";
import { twMerge } from "tailwind-merge";

interface ViewSwitcherProps {
    mode: ModeEnum;
    changeMode: (value: ModeEnum) => void;
}

export const ViewSwitcher = ({ changeMode, mode }: ViewSwitcherProps) => {
    return (
        <div className="flex justify-end items-center gap-[21px] mb-[23px]">
            <label className="cursor-pointer">
                <input
                    type="radio"
                    name="viewMode"
                    value={ModeEnum.ROW}
                    checked={mode === ModeEnum.ROW}
                    onChange={() => changeMode(ModeEnum.ROW)}
                    className="sr-only peer"
                    aria-label="Switch to row view"
                />
                <div
                    className={twMerge(
                        "transition-colors duration-500 peer-hover:text-neutral-60 peer-focus-visible:text-accent",
                        mode === ModeEnum.ROW
                            ? "text-accent"
                            : "text-neutral-40"
                    )}
                >
                    <Sprite
                        name="icon-row"
                        className="w-4 h-[15px] md:w-5 md:h-[18px] lg:w-6 lg:h-[22px]"
                    />
                </div>
            </label>

            <label className="cursor-pointer">
                <input
                    type="radio"
                    name="viewMode"
                    value={ModeEnum.TILES}
                    checked={mode === ModeEnum.TILES}
                    onChange={() => changeMode(ModeEnum.TILES)}
                    className="sr-only peer"
                    aria-label="Switch to tiles view"
                />
                <div
                    className={twMerge(
                        "transition-colors duration-500 peer-focus-visible:text-accent",
                        mode === ModeEnum.TILES
                            ? "text-accent"
                            : "text-neutral-40"
                    )}
                >
                    <Sprite
                        name="icon-tiles"
                        className="w-4 h-[15px] md:w-5 md:h-[18px] lg:w-6 lg:h-[22px]"
                    />
                </div>
            </label>
        </div>
    );
};
