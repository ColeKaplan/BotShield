'use client';
import React from "react";
import Header from "@/components/Header";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const DefensesPage = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col h-[100dvh]" >
            <Header />
            <div className="w-full items-center justify-center align-middle flex mt-16">
                <div className=" text-lg bg-gradient-to-r from-[#003366] to-[#7FB3D5] text-white text-center transform -skew-x-6 p-6 w-1/2 rounded-md shadow-md">
                    BotShield Recommends
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-8">
                <div className=" flex flex-col">
                    <p className="text-2xl text-white mb-2 text-center">
                        Robots.txt
                    </p>
                    <ul className="text-white list-disc">
                        <li>Set general restrictions and permissions for crawlers</li>
                        <li>Allows explicit instructions for individual crawlers</li>
                        <li>Set general restrictions and permissions for crawlers</li>
                    </ul>

                </div>
                <img
                    src="/robot-image.png"
                    alt="LLM Image"
                    width={300}
                    height={200}
                    className="rounded-lg"
                />
                <div className="flex align-middle justify-center items-center text-white">
                    <Button onClick={() => {
                        router.push("/robots");
                    }} className='!text-white !px-12 !py-5 !rounded-md bg-gradient-to-b from-[#363e50] to-[#344047] hover:from-[#454c5c] hover:to-[#4a5861] !normal-case '>
                        Read More About Robots.txt
                    </Button>
                </div>

            </div>
            <div className="w-full items-center justify-center align-middle flex">
                <div className="text-white text-lg mb-[-30px] mt-8">
                    Know Your Options
                </div>
            </div>
            <div className="flex justify-center items-start gap-0 mt-10 px-4 flex-wrap h-screen">
                {/* Card 1: Robots.txt */}
                <div className="bg-[#003366] text-white transform -skew-x-6 p-6 w-64 rounded-md shadow-md">
                    <div className="transform skew-x-6">
                        <h3 className="text-lg font-bold mb-4">Robots.txt</h3>
                        <ul className="space-y-2 text-sm list-disc list-inside">
                            <li>Most popular</li>
                            <li>Well respected</li>
                            <li>Easy to implement</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2: Active Blocking */}
                <div className="bg-[#00509E] text-white transform -skew-x-6 p-6 w-64 rounded-md shadow-md">
                    <div className="transform skew-x-6">
                        <h3 className="text-lg font-bold mb-4">Active Blocking</h3>
                        <ul className="space-y-2 text-sm list-disc list-inside">
                            <li>Not accessible</li>
                            <li>False positives</li>
                            <li>Hard to implement</li>
                        </ul>
                    </div>
                </div>

                {/* Card 3: NoAI Meta Tag */}
                <div className="bg-[#4B9CD3] text-white transform -skew-x-6 p-6 w-64 rounded-md shadow-md">
                    <div className="transform skew-x-6">
                        <h3 className="text-lg font-bold mb-4">NoAI Meta Tag</h3>
                        <ul className="space-y-2 text-sm list-disc list-inside">
                            <li>Rarely used</li>
                            <li>Unknown impact</li>
                            <li>Easy to implement</li>
                        </ul>
                    </div>
                </div>

                {/* Card 4: ai.txt */}
                <div className="bg-[#7FB3D5] text-white transform -skew-x-6 p-6 w-64 rounded-md shadow-md">
                    <div className="transform skew-x-6">
                        <h3 className="text-lg font-bold mb-4">ai.txt</h3>
                        <ul className="space-y-2 text-sm list-disc list-inside">
                            <li>Very new</li>
                            <li>Legal focus</li>
                            <li>Quicker to update</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default DefensesPage;