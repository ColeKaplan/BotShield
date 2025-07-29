'use client';
import React from "react";
import { Button } from "@mui/material";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col h-[100dvh]" >
            <Header />
            <div className="flex flex-col items-center justify-between mt-8">
                <div className="flex flex-col">
                    <p className="text-xl text-white mb-2 text-center">
                        Robots.txt is effective against 87% of tested crawlers
                    </p>
                    <p className="text-2xl text-white mb-2 text-center">
                        HOWEVER
                    </p>
                    <p className="text-xl text-white mb-2 text-center">
                        Smaller creators disproportionately lack knowledge or use of Robots.txt
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-gradient-to-b from-[#8fc7d1] to-[#344047] text-white p-4 rounded-2xl shadow-md text-center">
                        <p className="text-3xl font-bold">46%</p>
                        <p className="mt-2 text-sm">Newspapers</p>
                    </div>
                    <div className="bg-gradient-to-b from-[#d8a8ce] to-[#344047] text-white p-4 rounded-2xl shadow-md text-center">
                        <p className="text-3xl font-bold">45.9%</p>
                        <p className="mt-2 text-sm">Universities</p>
                    </div>
                    <div className="bg-gradient-to-b from-[#add9c3] to-[#344047] text-white p-4 rounded-2xl shadow-md text-center">
                        <p className="text-3xl font-bold">44%</p>
                        <p className="mt-2 text-sm">Government</p>
                    </div>
                    <div className="bg-gradient-to-b from-[#8e2a2a] to-[#344047] text-white p-4 rounded-2xl shadow-md text-center">
                        <p className="text-3xl font-bold">10%</p>
                        <p className="mt-2 text-sm">Total Website Implementation</p>
                    </div>
                </div>
                <div className="text-white flex flex-row gap-16">
                    <div className="flex flex-col align-middle items-center justify-center">
                        <p>
                            Table of AI Crawlers’ Respect of Robots.txt
                        </p>
                        <img
                            src="/graph2.png"
                            alt="LLM Image"
                            width={500}
                            height={200}
                            className="rounded-lg mt-2"
                        />
                    </div>

                    <div className="flex flex-col align-middle items-center justify-center">
                        <p>
                            Percent of Sites that Implement Robots.txt
                        </p>
                        <img
                            src="/graph1.png"
                            alt="LLM Image"
                            width={520}
                            height={200}
                            className="rounded-lg mt-2"
                        />
                    </div>
                </div>
                <Button onClick={() => {
                    router.push("/paywall");
                }} className=' !mt-8 !text-white !px-12 !py-5 !rounded-md bg-gradient-to-b from-[#363e50] to-[#344047] hover:from-[#454c5c] hover:to-[#4a5861] !normal-case '>
                    Explore Further Options
                </Button>

            </div>
        </div>
    );
}
export default SignUpPage;