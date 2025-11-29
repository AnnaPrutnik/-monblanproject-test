import { twMerge } from "tailwind-merge";

interface SpriteProps {
    name: string;
    className?: string;
    decorative?: boolean;
}

export const Sprite = ({
    name,
    className = "",
    decorative = true,
}: SpriteProps) => {
    const ariaHidden = decorative ? true : undefined;

    return (
        <svg
            className={twMerge("w-full h-full", className)}
            aria-hidden={ariaHidden}
            focusable={decorative ? "false" : undefined}
            role={decorative ? undefined : "img"}
        >
            <use href={`/images/sprite.svg#${name}`} />
        </svg>
    );
};
