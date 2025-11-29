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
                isRow ? "items-center" : "flex-col items-center pb-[18px]"
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
                    "flex",
                    isRow ? "" : "p-3 pb-6 justify-between w-full"
                )}
            >
                <div className={twMerge(isRow ? "mr-[160px]" : "")}>
                    <p className={twMerge("normal-text mb-[7px]")}>
                        {todayLabel}
                    </p>
                    <ul
                        className={twMerge(
                            "flex  ",
                            isRow
                                ? "gap-[18px] items-center"
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
                                .toLocaleString("en", {
                                    month: "numeric",
                                    year: "numeric",
                                    day: "numeric",
                                })
                                .replaceAll("/", "-")}
                        </p>
                        <ul
                            className={twMerge(
                                "flex ",
                                isRow
                                    ? "items-center gap-[26px]"
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
                    isRow ? "" : "flex justify-between items-center w-full p-3"
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
    );
};
