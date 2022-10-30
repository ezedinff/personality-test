import React from "react";
import Link from "next/link";

type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
}
const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
    return (
        <Link href={href}>
            <button className="mt-5 text-2xl font-bold text-white bg-purple-600 rounded-md p-3 hover:bg-purple-700 cursor-pointer" >
                {children}
            </button>
        </Link>
    )
}

export default LinkButton;