"use client";

import { useState, SetStateAction, Dispatch } from "react";
import { siteText } from "@/src/assets/data/text";
import { DateRangeInput } from "./DateRangeInput";

const { dateLabel } = siteText;

interface ToValueProps {
    toValue: Date | null;
    setToValue: Dispatch<SetStateAction<Date | null>>;
}

export const PickDateBlock = ({ setToValue, toValue }: ToValueProps) => {
    const [fromValue, setFromValue] = useState<Date | null>(null);

    return (
        <div className="flex gap-[11px] items-baseline">
            <p className="normal-text ">{dateLabel}</p>
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
