import Image from "next/image";
import { siteText } from "@/src/assets/data/text";
import logo from "@/src/assets/images/logo.svg";
import { PickDateBlock } from "./PickDateBlock";

const { name, badge, statistics } = siteText;

export const Header = () => {
    return (
        <header className="shadow-header bg-white-opacity">
            <div
                className="box pt-[6px] pb-[28px] flex gap-[86px] 
            -end"
            >
                <div className="ml-[55px]">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={138}
                        height={138}
                        className="size-[138px] object-contain"
                    />
                </div>
                <div className="pb-[3px] flex flex-col justify-end">
                    <div className="flex gap-4 mb-4">
                        <p className="font-montserrat font-medium text-[24px] tracking-[-0.01em]">
                            {name}
                        </p>

                        <p className="border border-accent text-accent rounded-xs px-3 py-[6px] text-[13px] tracking-[-0.03em]">
                            {badge}
                        </p>
                    </div>
                    <ul className="flex gap-[17px] mb-[19px]">
                        {statistics.map(({ label, total }, index) => (
                            <li key={index} className="min-w-[74px]">
                                <p className="flex gap-1 text-[14px] ">
                                    <span className="font-bold"> {total}</span>
                                    <span className="font-medium">{label}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                    <PickDateBlock />
                </div>
            </div>
        </header>
    );
};
