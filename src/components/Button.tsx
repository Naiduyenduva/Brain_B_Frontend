import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    onClick?: () => void;
    startIcon?: ReactElement
}
const variantStyles = {
    "primary": "bg-purple-700 text-white",
    "secondary": "bg-purple-200 text-purple-500"
}

export function Button ({variant,startIcon,text,onClick}: ButtonProps) {
    return (
        <button onClick={onClick} className={` rounded-md p-1 font-normal flex gap-1 justify-center items-center px-2 ${variantStyles[variant]}`}>
        {startIcon}
        {text}</button>
    )

}