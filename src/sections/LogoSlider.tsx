"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { SiNike, SiAmazon, SiBox, SiBytedance, SiChase, SiCloudbees, SiBurton, SiBmw, SiHeroku, SiBuildkite, SiCouchbase, SiDailymotion, } from "react-icons/si";

interface TranslateWrapperProps {
    children: React.ReactNode;
    reverse?: boolean;
}

const TranslateWrapper: React.FC<TranslateWrapperProps> = ({ children, reverse }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex px-2"
        >
            {children}
        </motion.div>
    );
};

interface LogoItemProps {
    Icon: IconType;
    name: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ Icon, name }) => {
    return (
        <a
            href="/"
            rel="nofollow"
            target="_blank"
            className="flex items-center justify-center gap-4 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6"
        >
            <Icon className="text-3xl md:text-4xl" />
            <span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">
                {name}
            </span>
        </a>
    );
};

const LogoItemsTop: React.FC = () => (
    <>
        <LogoItem Icon={SiNike} name="Nike" />
        <LogoItem Icon={SiAmazon} name="Amazon" />
        <LogoItem Icon={SiBox} name="Box" />
        <LogoItem Icon={SiBytedance} name="Bytedance" />
        <LogoItem Icon={SiChase} name="Chase" />
        <LogoItem Icon={SiCloudbees} name="Cloudebees" />
    </>
);

const LogoItemsBottom: React.FC = () => (
    <>
        <LogoItem Icon={SiBmw} name="BMW" />
        <LogoItem Icon={SiBurton} name="Burton" />
        <LogoItem Icon={SiBuildkite} name="Buildkite" />
        <LogoItem Icon={SiCouchbase} name="Couchbase" />
        <LogoItem Icon={SiDailymotion} name="Dailymotion" />
        <LogoItem Icon={SiHeroku} name="Heroku" />
    </>
);

const LogoSlider: React.FC = () => {
    return (
        <section className="bg-red-orange-500 py-24 overflow-hidden">
            <h2 className="mx-4 mb-12 text-center text-2xl font-medium text-neutral-200 md:text-4xl">
                An in-depth toolkit proving high quality
            </h2>
            <div className="flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
                <TranslateWrapper>
                <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                <LogoItemsTop />
                </TranslateWrapper>
            </div>
            <div className="flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
                <TranslateWrapper reverse>
                <LogoItemsBottom />
                </TranslateWrapper>
                <TranslateWrapper reverse>
                <LogoItemsBottom />
                </TranslateWrapper>
                <TranslateWrapper reverse>
                <LogoItemsBottom />
                </TranslateWrapper>
            </div>
        </section>
    );
};

export default LogoSlider;
