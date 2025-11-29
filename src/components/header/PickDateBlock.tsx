"use client";

import { useState, SetStateAction, Dispatch, useEffect } from "react";
import { siteText } from "@/src/assets/data/text";
import { DateRangeInput } from "./DateRangeInput";
import * as motion from "motion/react-client";

const { dateLabel } = siteText;

interface ToValueProps {
    toValue: Date | null;
    setToValue: Dispatch<SetStateAction<Date | null>>;
}

export const PickDateBlock = ({ setToValue, toValue }: ToValueProps) => {
    const [fromValue, setFromValue] = useState<Date | null>(null);
    const [openDateTab, setOpenDateTab] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const handle = () => setIsMobile(mq.matches);

        handle();
        mq.addEventListener("change", handle);

        return () => mq.removeEventListener("change", handle);
    }, []);

    const buttonLabel = openDateTab
        ? "close tab with dates"
        : "open tab with dates";

    return (
        <div className="relative">
            <motion.button
                layout
                className="border rounded-md px-3 py-2 border-neutral-60 text-neutral-80 w-[180px] md:hidden bg-neutral-0"
                onClick={() => setOpenDateTab(prev => !prev)}
            >
                {buttonLabel}
            </motion.button>
            <motion.div
                className="absolute top-[40px] bg-neutral-0 p-4 shadow-neutral-50 shadow-md md:static md:bg-transparent md:shadow-none md:p-0 md:opacity-100"
                initial={isMobile ? { opacity: 0 } : false}
                animate={
                    isMobile ? { opacity: openDateTab ? 1 : 0 } : { opacity: 1 }
                }
                transition={{ duration: 0.25, ease: "easeInOut" }}
            >
                <div
                    className="flex gap-[11px] items-baseline"
                    aria-label={dateLabel}
                >
                    <p className="normal-text ">{dateLabel}</p>
                    <div className="flex gap-[22px] flex-col md:flex-row">
                        <div className="flex flex-col gap-[4px]">
                            <label
                                className="small-text text-neutral-80"
                                htmlFor="from-date"
                            >
                                <DateRangeInput
                                    id="from-date"
                                    name="from"
                                    value={fromValue}
                                    setValue={setFromValue}
                                    maxValue={toValue || undefined}
                                />
                            </label>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <label
                                className="small-text text-neutral-80"
                                htmlFor="to-date"
                            >
                                <DateRangeInput
                                    id="to-date"
                                    name="to"
                                    value={toValue}
                                    setValue={setToValue}
                                    minValue={fromValue || undefined}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
