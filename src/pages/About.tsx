import React from "react";
import { motion } from "framer-motion"

const AboutCard = ({ name, img, description }: { name: string, img: string, description: string }) => (
    <div className="flex flex-col items-center p-10 bg-gradient-to-r from-sky-500 to-blue-500 rounded-3xl">
        <img
            src={img}
            className="w-32 h-32 rounded-full object-cover"
            height={200}
            width={200}
            alt={name}
        />
        <h3 className="text-2xl font-bold text-black mt-2">{name}</h3>
        <h4 className="mt-2 text-gray-800 text-center">{description}</h4>
    </div>
);

const AboutPage: React.FC = () => (
    <motion.div
        initial={{}}
        animate={{}}
        exit={{}}>
        <h1 className="text-4xl font-bold text-black text-center mt-8 mb-4">
            What is this?
        </h1>

        <p className="text-2xl text-center text-gray-700">
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </p>

        <h1 className="text-4xl font-bold text-black text-center mt-8 mb-4">
            Why?
        </h1>

        <p className="text-xl px-8 lg:px-16 xl:px-32 text-center text-gray-700">
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </p>

        <h1 className="text-4xl font-bold text-black text-center my-8">
            About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-8 gap-8 lg:gap-16">
            <AboutCard
                name="Aritro Saha"
                img="/images/bulb.jpeg"
                description="Hi! I'm Aritro. I'm in Grade 11, and I enjoy biking during the summer!"
            />
            <AboutCard
                name="Stephen Ni"
                img="/images/panch.webp"
                description="Hey there! My name is Stephen, I'm in the 112"
            />
            <AboutCard
                name="Sophie Yang"
                img="/images/panch.webp"
                description="Hey there! My name is Sophie, I'm in the 11th grade studying at John Fraser Secondary School and I have a soft spot for MLH :)"
            />
        </div>
    </motion.div>
);

export default AboutPage;