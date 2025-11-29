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
        <section
            className="flex gap-[11px] items-baseline"
            aria-label={dateLabel}
        >
            <p className="normal-text ">{dateLabel}</p>
            <div className="flex gap-[22px]">
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
        </section>
    );
};
