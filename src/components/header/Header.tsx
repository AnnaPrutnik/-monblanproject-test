import Image from "next/image";
import { siteText } from "@/src/assets/data/text";
import logo from "@/src/assets/images/logo.svg";
import { PickDateBlock } from "./PickDateBlock";
import { Dispatch, SetStateAction } from "react";

const { name, badge, statistics } = siteText;

interface HeaderProps {
    toValue: Date | null;
    setToValue: Dispatch<SetStateAction<Date | null>>;
}

export const Header = ({ setToValue, toValue }: HeaderProps) => {
    return (
        <header className="shadow-header bg-white-opacity">
            <div className="box pt-[6px] pb-[28px] flex gap-3 lg:gap-[86px] md:justify-evenly lg:justify-start">
                <div className="ml-3 md:ml-[55px] shrink-0 absolute top-3 left-5 md:static">
                    <Image
                        src={logo}
                        alt={`${name} logo`}
                        width={138}
                        height={138}
                        className="size-15 md:size-24 lg:size-[138px] object-contain"
                    />
                </div>

                <div className="pb-[3px] pt-3 md:pt-0 flex flex-col justify-end">
                    <div className="flex gap-4 mb-4 items-center flex-col lg:flex-row ml-24 md:ml-0 ">
                        <h1 className="font-montserrat font-medium logo-text tracking-[-0.01em]">
                            {name}
                        </h1>

                        <p className="border border-accent text-accent rounded-xs px-1 lg:px-3 py-[6px] text-[11px] lg:text-[13px] tracking-[-0.03em]">
                            {badge}
                        </p>
                    </div>
                    <ul className="flex gap-[17px] mb-[19px] flex-wrap">
                        {statistics.map(({ label, total }, index) => (
                            <li key={index} className="lg:min-w-[74px]">
                                <p className="flex gap-1 small-text ">
                                    <span className="font-bold"> {total}</span>
                                    <span className="font-medium">{label}</span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    <PickDateBlock toValue={toValue} setToValue={setToValue} />
                </div>
            </div>
        </header>
    );
};
