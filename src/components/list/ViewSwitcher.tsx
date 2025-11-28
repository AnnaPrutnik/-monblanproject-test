"use client";
import { Dispatch, SetStateAction } from "react";

import { Sprite } from "../shared/Sprite";
import { ModeEnum } from "./List";

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
                    className="hidden"
                    aria-label="Row view"
                />
                <div
                    className={
                        "transition-colors " +
                        (mode === ModeEnum.ROW
                            ? "text-accent"
                            : "text-neutral-40")
                    }
                >
                    <Sprite name="icon-row" className="w-6 h-[22px]" />
                </div>
            </label>

            <label className="cursor-pointer">
                <input
                    type="radio"
                    name="viewMode"
                    value={ModeEnum.TILES}
                    checked={mode === ModeEnum.TILES}
                    onChange={() => changeMode(ModeEnum.TILES)}
                    className="hidden"
                    aria-label="Tiles view"
                />
                <div
                    className={
                        " transition-colors " +
                        (mode === ModeEnum.TILES
                            ? "text-accent"
                            : "text-neutral-40")
                    }
                >
                    <Sprite name="icon-tiles" className="w-6 h-[22px]" />
                </div>
            </label>
        </div>
    );
};
