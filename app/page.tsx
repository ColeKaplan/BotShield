'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';


const Index = () => {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();


    return (
        <div className="min-h-screen minimal-background font-['Times_New_Roman']">
            <div className="">
                <Header />

                <div className="flex-col px-4">

                    <div className='flex flex-row justify-between items-center mt-16'>
                        <div className="mb-4 ml-32">
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <p className="text-2xl text-accent1 mb-2 text-center">
                                LLMs Are Taking Your Data
                            </p>
                            <p className="text-lg text-accent1 text-center">
                                What Will You Do To Stop It?
                            </p>

                            <div className="mt-6 grid grid-cols-1 gap-4">
                                <div className="bg-gradient-to-b from-[#30717b] to-[#344047] text-white p-4 rounded-2xl shadow-md text-center">
                                    <p className="text-3xl font-bold">70%</p>
                                    <p className="mt-2 text-sm">Less site visits when an AI overview is given</p>
                                </div>
                                <div className="bg-gradient-to-b from-[#5b294f] to-[#344047] text-white p-4 rounded-2xl shadow-md text-center">
                                    <p className="text-3xl font-bold">77%</p>
                                    <p className="mt-2 text-sm">Of site visits can come from web scrapers</p>
                                </div>
                                <div className="bg-gradient-to-b from-[#417258] to-[#344047] text-white p-4 rounded-2xl shadow-md text-center">
                                    <p className="text-3xl font-bold">~50%</p>
                                    <p className="mt-2 text-sm">Of all internet traffic is due to bots</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <img
                                src="/badbot.png"
                                alt="LLM Image"
                                width={600}
                                height={200}
                                className="mr-32 rounded-lg"
                            />
                            {/* <p className='text-white'>
                                source
                            </p> */}
                        </div>
                    </div>

                    <div className="space-y-4 flex align-middle justify-center items-center mt-24 text-white">
                        <Button onClick={() => {
                            router.push("/defenses");
                        }} className='!normal-case !text-white !px-12 !py-5 !rounded-md bg-gradient-to-b from-[#363e50] to-[#344047] hover:from-[#454c5c] hover:to-[#4a5861] '>
                            Learn About Defenses
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;