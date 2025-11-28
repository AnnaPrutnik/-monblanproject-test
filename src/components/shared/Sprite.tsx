import { twMerge } from "tailwind-merge";

interface SpriteProps {
    name: string;
    className?: string;
}

export const Sprite = ({ name, className = "" }: SpriteProps) => {
    return (
        <svg className={twMerge("w-full h-full", className)}>
            <use href={`/images/sprite.svg#${name}`} />
        </svg>
    );
};
