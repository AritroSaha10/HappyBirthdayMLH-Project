import react from 'react'
import { classNames } from "../lib/cssTools";

import {
    Link
} from "react-router-dom";

import { motion } from "framer-motion"

type HomeProps = {
    title: string;
    description: string;
    subheading: string;
    image: string;
    reversed: boolean;
    buttonLabel: string;
    buttonLink: string;
}

export const HomeSection = (props: HomeProps) => {
    return (
        <motion.section
            className={classNames(
                "p-12 gap-12 flex justify-around md:items-center flex-col",
                (props.reversed ? "md:flex-row-reverse" : "md:flex-row"),
            )}
            initial={{
                opacity: 0,
                x: props.reversed ? -500 : 500,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
            }}
            viewport={{ once: true }}
        >
            <div>
                <h1 className="font-mono text-7xl font-bold">{props.title}</h1>
                <h3 className="font-mono text-4xl font-bold text-zinc-500 mt-6">
                    {props.subheading}
                </h3>

                <p className="font-mono text-zinc-900 text-3xl mt-6">{props.description}</p>
                <Link to={props.buttonLink}>
                    <button className="font-mono w-56 text-2xl text-white rounded-3xl p-5 bg-gradient-to-r from-blue-800/[.7] to-blue-400/[.7] mt-10 shadow-2xl">
                        {props.buttonLabel}
                    </button>
                </Link>
            </div>

            <img
                src={props.image}
                alt="title"
                className="max-w-[700px] shadow-2xl rounded-lg"
            />
        </motion.section>
    );
};

export default HomeSection;