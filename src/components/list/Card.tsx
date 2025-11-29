import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { ListCardType } from "@/src/assets/data/listData";
import { siteText } from "@/src/assets/data/text";
import { Sprite } from "../shared/Sprite";
import { ModeEnum } from "./List";

const { todayLabel, imageUploadLabel } = siteText;

interface CardProps extends ListCardType {
    mode: ModeEnum;
    toValue: Date | null;
}

export const Card = ({
    currentDay,
    imageRow,
    imageTiles,
    imageUpload,
    today,
    mode,
    toValue,
}: CardProps) => {
    const currentDayDataArray = Object.entries(currentDay);
    const todayDataArray = Object.entries(today);

    const isRow = mode === ModeEnum.ROW;

    return (
        <div
            className={twMerge(
                "bg-white flex small-text font-medium",
                isRow ? "items-start lg:items-center" : "flex-col items-center "
            )}
        >
            {isRow ? (
                <Image
                    src={imageRow}
                    alt={`poster for current post`}
                    width={86}
                    height={86}
                    className="w-[86px] aspect-square object-cover mr-[30px]"
                />
            ) : (
                <Image
                    src={imageTiles}
                    alt={`poster for current post`}
                    width={203}
                    height={203}
                    className="w-[203px] aspect-square object-cover "
                />
            )}
            <div
                className={twMerge(
                    "flex ",
                    isRow
                        ? "flex-col gap-3 pb-2 pt-2 lg:pt-0 lg:pb-0 lg:gap-0 md:flex-row grow lg:grow-0 md:pr-10 lg:pr-0"
                        : "flex-col w-full px-3 pt-3 pb-[18px]"
                )}
            >
                <div
                    className={twMerge(
                        "flex",
                        isRow
                            ? "justify-evenly grow lg:justify-start"
                            : " mb-6 justify-between w-full "
                    )}
                >
                    <div
                        className={twMerge(isRow ? "mr-4 lg:mr-[160px] " : "")}
                    >
                        <p className={twMerge("normal-text mb-[7px]")}>
                            {todayLabel}
                        </p>
                        <ul
                            className={twMerge(
                                "flex  ",
                                isRow
                                    ? "gap-3 lg:gap-[18px] items-center flex-col lg:flex-row"
                                    : "flex-col gap-[6px]"
                            )}
                        >
                            {todayDataArray.map(([key, value]) => (
                                <li key={key}>
                                    <p className="flex items-center gap-[6px]">
                                        <Sprite
                                            name={`icon-${key}`}
                                            className="size-[18px]"
                                        />
                                        <span>{value}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {toValue && (
                        <div className={twMerge(isRow ? "mr-[168px]" : "")}>
                            <p className="normal-text mb-[7px]">
                                {toValue
                                    .toLocaleString("uk", {
                                        month: "numeric",
                                        year: "numeric",
                                        day: "numeric",
                                    })
                                    .replaceAll(".", "-")}
                            </p>
                            <ul
                                className={twMerge(
                                    "flex ",
                                    isRow
                                        ? "items-center gap-3 lg:gap-[26px] flex-col lg:flex-row"
                                        : "flex-col gap-[6px]"
                                )}
                            >
                                {currentDayDataArray.map(([key, value]) => (
                                    <li key={key}>
                                        <p className="flex items-center gap-[6px]">
                                            <Sprite
                                                name={`icon-${key}`}
                                                className="size-[18px]"
                                            />
                                            <span>{value}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div
                    className={twMerge(
                        isRow
                            ? "flex md:flex-col gap-2 items-baseline lg:gap-0 "
                            : "flex justify-between items-center w-full p-3 md:p-0"
                    )}
                >
                    <p
                        className={twMerge(
                            " ",
                            isRow ? "mb-2 normal-text" : "small-text"
                        )}
                    >
                        {imageUploadLabel}
                    </p>
                    <p
                        className={twMerge(
                            " ",
                            isRow ? "small-text" : "smallest-text"
                        )}
                    >
                        {imageUpload}
                    </p>
                </div>
            </div>
        </div>
    );
};
