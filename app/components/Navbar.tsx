"use client";

import Image from "next/image";
import React, { useState } from "react";
import { navLinks } from "../navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  

    return (
        <nav className="sticky z-99 bg-[#fff] flex justify-between items-center px-4 py-2">
            <Link href="/" className="md:ml-16 z-20">
                <Image
                    src="/logo.png"
                    alt="Homebiro Logo"
                    width={200}
                    height={200}
                    className=""
                />
            </Link>

            <div className="hidden md:flex gap-14 text-[#222222] font-medium">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={isActive(link.href) ? "border-b-[3px] border-b-[#E2753A]" : "border-none"}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="hidden md:block md:mr-16">
                <Link href="/join-us">
                    <div className="bg-[#fff] border border-[#164CA4] rounded-full px-3 py-2 flex gap-2">
                        <div>
                            <Image
                                src="/user-icon.svg"
                                alt="User Icon"
                                width={25}
                                height={25}
                            />
                        </div>
                        <div className="font-semibold text-[#164CA4] text-center">
                            Join us
                        </div>
                    </div>
                </Link>
            </div>

            <button className="md:hidden z-20" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
                ) : (
                    <Menu className="w-6 h-6 transition-transform duration-300 rotate-0" />
                )}
            </button>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-10 flex flex-col mt-24 ml-10">
                    <div className="flex flex-col gap-8 text-[#222222] font-medium text-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={isActive(link.href) ? "" : "border-none"}
                                onClick={toggleMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/join-us" onClick={toggleMenu}>
                            <div className="bg-[#fff] border border-[#164CA4] rounded-full px-3 py-2 flex gap-3 items-center justify-center mr-10">
                                <div>
                                    <Image
                                        src="/user-icon.svg"
                                        alt="User Icon"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <div className="font-medium text-[18px] text-[#164CA4] text-center">
                                    Join us
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;