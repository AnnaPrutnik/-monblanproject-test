"use client";

import { Dispatch, useRef, SetStateAction } from "react";

import { Sprite } from "../shared/Sprite";
import DatePicker from "react-datepicker";
import type { DatePicker as DataPickerType } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DataRangeInput.css";

interface DateRangeInputProps {
    id: string;
    name: string;
    value: Date | null;
    setValue: Dispatch<SetStateAction<Date | null>>;
    minValue?: Date | undefined;
    maxValue?: Date | undefined;
}

export const DateRangeInput = ({
    id,
    name,
    value,
    setValue,
    maxValue,
    minValue,
}: DateRangeInputProps) => {
    const inputRef = useRef(null);
    const isFrom = name === "from";
    const clearLabel = isFrom ? "Clear start date" : "Clear end date";
    const calendarLabel = isFrom
        ? "Open start date calendar"
        : "Open end date calendar";

    const onClickClearBtn = () => {
        if (inputRef.current) {
            const picker = inputRef.current as DataPickerType;
            picker.clear();
        }
    };

    const onClickCalendar = () => {
        if (inputRef.current) {
            const picker = inputRef.current as DataPickerType;
            picker.setFocus();
        }
    };

    return (
        <div className="relative ">
            <DatePicker
                id={id}
                ref={inputRef}
                popperPlacement="bottom-start"
                minDate={minValue}
                maxDate={maxValue}
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => {
                    return (
                        <div className="flex justify-between items-center pl-[13px] pr-[9px]">
                            <button
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                            >
                                <Sprite
                                    name="icon-arrow"
                                    className="size-[14px] "
                                />
                            </button>

                            <span className="small-text font-bold">
                                {date.toLocaleString("en", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>

                            <button
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                            >
                                <Sprite
                                    name="icon-arrow"
                                    className="size-[14px] rotate-180"
                                />
                            </button>
                        </div>
                    );
                }}
                popperClassName="custom-popper font-roboto "
                weekDayClassName={() => {
                    return "custom-dayweek";
                }}
                dayClassName={d => {
                    return d.getDay() === 0
                        ? "sunday-highlight "
                        : d.toDateString() === value?.toDateString()
                          ? "custom-selected"
                          : "";
                }}
                selected={value}
                onChange={setValue}
                placeholderText={name}
                dateFormat={"dd_MM_yyyy"}
                className="bg-white border border-neutral-20 rounded-sm w-[162px] h-[28px] shrink pl-2 text-[13px] text-neutral-70 placeholder:text-neutral-70 focus:outline-none "
            />

            <div className="flex absolute top-px right-px">
                <button
                    aria-label={clearLabel}
                    className="size-[26px] shrink-0  border-l border-r border-neutral-20 bg-neutral-10 text-neutral-80"
                    onClick={onClickClearBtn}
                    data-type={name}
                >
                    <Sprite name="icon-plus" className="size-6" />
                </button>
                <button
                    aria-label={calendarLabel}
                    className="size-[26px]  shrink-0 bg-neutral-10 text-neutral-80 rounded-br-sm rounded-tr-sm"
                    data-type={name}
                    onClick={onClickCalendar}
                >
                    <Sprite name="icon-calendar" className="size-6" />
                </button>
            </div>
        </div>
    );
};
