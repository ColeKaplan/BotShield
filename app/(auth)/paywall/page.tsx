'use client';
import React from "react";
import { LoginForm } from "./components/loginForm";
import { Button } from "@mui/material";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

const steps = [
    {
        title: "GATEKEEP",
        desc: "Introduce a small payment gate (via Stripe or API) for bots wanting content",
        color: "bg-[#1a7b96]",
        textColor: "text-white",
        numberColor: "text-white",
    },
    {
        title: "AUTHORIZE",
        desc: "Upon successful payment the site will issue a time-limited JWT",
        color: "bg-[#74b44b]",
        textColor: "text-black",
        numberColor: "text-black",
    },
    {
        title: "VERIFY",
        desc: "Bot identity is logged and abuse can be blocked",
        color: "bg-[#1a7b96]",
        textColor: "text-white",
        numberColor: "text-white",
    },
    {
        title: "MONETIZE",
        desc: "Sites can charge differently for training vs one-time use",
        color: "bg-[#74b44b]",
        textColor: "text-black",
        numberColor: "text-black",
    },
];

const PaywallPage = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col h-[100dvh]" >
            <Header />
            <p className="text-center text-white text-2xl mt-8">
                How To Implement A Web Crawler Paywall
            </p>
            <div className="flex flex-col items-center justify-between mt-4">
                <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-6xl mx-auto mt-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-between ${step.color} ${step.textColor} p-6 rounded-none first:rounded-l-3xl last:rounded-r-3xl w-full md:w-1/4`}
                        >
                            <div>
                                <h2 className="text-2xl font-extrabold mb-4">{step.title}</h2>
                                <p className="font-mono text-sm leading-snug">{step.desc}</p>
                            </div>
                            <div className={`text-3xl font-extrabold mt-6 self-end ${step.numberColor}`}>
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="bg-[#1a7b96] w-full">
                    <p>Testing</p>
                </div> */}
                <div className="w-[1150px] bg-white rounded-3xl items-center flex justify-center mt-8">
                    <img
                        src="/crawler.png"
                        alt="Paywall Functionality"
                        width={500}
                        height={200}
                        className="rounded-lg mt-2"
                    />
                </div>

                <Button onClick={() => {
                    router.push("/");
                }} className=' !mt-8 !text-white !px-12 !py-5 !rounded-md bg-gradient-to-b from-[#363e50] to-[#344047] hover:from-[#454c5c] hover:to-[#4a5861] !normal-case '>
                    Return To Home
                </Button>

            </div>
        </div>
    );
}
export default PaywallPage;