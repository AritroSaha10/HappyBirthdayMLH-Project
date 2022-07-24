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
    <motion.div className='w-full h-full bg-slate-800 flex-grow'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}>

        <h1 className="text-4xl font-bold text-gray-100 text-center mt-8 mb-4">
            What is CodeBro?
        </h1>

        <p className="text-2xl text-center text-gray-200">
            CodeBro is an offline programming suite that allows users to practice both their web design and competitive problem-solving skills.
        </p>

        <h1 className="text-4xl font-bold text-gray-100 text-center mt-8 mb-4">
            Why?
        </h1>

        <p className="text-xl px-8 lg:px-16 xl:px-32 text-center text-gray-300">
            Learning code can, well, be kinda boring. Not everyone learns efficiently through 10-hour tutorials or endless documentation sites, 
            thus our idea partly stemmed from a shared struggle that there is a lack of variety when it comes to learning and practicing code.
        </p>

        <h1 className="text-4xl font-bold text-white text-center my-8">
            Meet the Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-8 gap-8 lg:gap-16">
            <AboutCard
                name="Aritro Saha"
                img="/HappyBirthdayMLH-Project/images/charamander.png"
                description="Hi! I'm Aritro. I'm in Grade 11, and I love racoons!"
            />
            <AboutCard
                name="Stephen Ni"
                img="/HappyBirthdayMLH-Project/images/panch.webp"
                description="Hey there! My name is Stephen, I'm in the 12th grade. I LOVE turtles and learning more about code!"
            />
            <AboutCard
                name="Sophie Yang"
                img="/HappyBirthdayMLH-Project/images/snorlax.png"
                description="Yo, my name is Sophie, I'm in grade 11, and I love ducks. :)"
            />
        </div>
    </motion.div>
);

export default AboutPage;