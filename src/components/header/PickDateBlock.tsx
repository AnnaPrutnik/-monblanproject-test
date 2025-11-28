"use client";

import { useState } from "react";
import { siteText } from "@/src/assets/data/text";
import { DateRangeInput } from "./DateRangeInput";

const { dateLabel } = siteText;

export const PickDateBlock = () => {
    const [fromValue, setFromValue] = useState<Date | null>(null);
    const [toValue, setToValue] = useState<Date | null>(null);

    return (
        <div className="flex gap-[11px] items-baseline">
            <p className="text-[16px] ">{dateLabel}</p>
            <div className="flex gap-[22px]">
                <DateRangeInput
                    name="from"
                    value={fromValue}
                    setValue={setFromValue}
                    maxValue={toValue || undefined}
                />
                <DateRangeInput
                    name="to"
                    value={toValue}
                    setValue={setToValue}
                    minValue={fromValue || undefined}
                />
            </div>
        </div>
    );
};
