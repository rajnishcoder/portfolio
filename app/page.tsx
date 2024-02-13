'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {


  useEffect(()=> {

  }, [])


  return (
    <main className="flex min-h-screen flex-col justify-between p-60">
      <div className="">
        <h1 className="text-6xl font-thin">Rajnish Rajput</h1>
        <p className="mt-4 text-xl italic">Interactive Front-end Developer</p>

      </div>
    </main>
  );
}
