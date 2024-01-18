"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <h2> Auth Header</h2>
      {children}
      {input}
      <div><input value={input} onChange={(e)=> setInput(e.target.value)}/></div>
      <h2> Auth Footer</h2>
      <div>
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              style={{ backgroundColor: isActive ? "yellow" : "red" }}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
