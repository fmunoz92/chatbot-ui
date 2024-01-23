"use client"

import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"
import Image from "next/image"
import ToptivePng from "@/components/icons/toptive.png"

export default function HomePage() {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <Image src={ToptivePng} width={200} height={200} alt="toptive logo" />
      </div>

      <div className="text-4xl font-bold">ChatGPT</div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/chat"
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
