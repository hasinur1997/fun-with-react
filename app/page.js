'use client'

import Image from "next/image";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import { useState } from "react";

export default function Home() {

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Counter/>
        <Switch isOn={isOn} handleToggle={handleToggle}/>
      </main>
    </div>
  );
}
