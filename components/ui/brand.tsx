"use client"

import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import ToptivePng from "../icons/toptive.png"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://chatgpt.toptive.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="">
        <Image src={ToptivePng} width={200} height={200} alt="toptive logo" />
      </div>

      <div className="text-4xl font-bold tracking-wide">ChatGPT</div>
    </Link>
  )
}
