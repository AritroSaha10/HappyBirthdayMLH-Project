import react from 'react'
import { classNames } from "../lib/cssTools";

import {
    Link
} from "react-router-dom";

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
        <section
            className={classNames(
                "p-12 gap-12 flex justify-around md:items-center flex-col",
                (props.reversed ? "md:flex-row-reverse" : "md:flex-row"),
        )}
        >
            <div>
                <h1 className="text-7xl font-bold">{props.title}</h1>
                
                    <h3 className="text-4xl font-bold text-zinc-500 mt-6">
                        {props.subheading}
                    </h3>
            
                <p className="text-zinc-900 text-3xl mt-6">{props.description}</p>
                <Link to={props.buttonLink}>
                    <button className="w-56 text-4xl text-white rounded-3xl p-5 bg-gradient-to-r from-blue-800/[.7] to-blue-400/[.7] mt-10 shadow-2xl">
                        {props.buttonLabel}
                    </button>
                </Link>
            </div>
           
            <img
                src={props.image}
                alt="title"
                className="max-w-[700px] shadow-2xl rounded-lg"
            />
        </section>
    );
};

export default HomeSection;