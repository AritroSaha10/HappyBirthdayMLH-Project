import React from "react";
import HomeSection from '../components/HomeSection'
import Footer from "../components/Footer";
import { motion } from "framer-motion"

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const topLineVariants = {
    initial: {
    },
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
};
const characterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { ...transition }, }
};

const line = "Welcome to CodeBro".split(' ');

const Home: React.FC = () => {
    return (
        <motion.div className="overflow-hidden bg-slate-800 flex-grow"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            }}
            exit={{
                opacity: 0,
            }}
        >
            <div className="flex flex-col h-[80vh] relative mb-12">
                <div className="w-full overflow-hidden" style={{ boxShadow: "inset 0 0 200px #000000" }}>
                    <img src="/HappyBirthdayMLH-Project/images/bg.png" className="w-screen h-[80vh] absolute object-cover object-center blur-sm bg-black scale-110" alt='' />
                </div>

                <div className="absolute bg-black/60 h-[84.5vh] w-screen z-3" />

                <div className="absolute h-[90vh] w-full">

                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="font-mono text-6xl w-3/5 p-5 text-white bold text-center">
                            <motion.div variants={topLineVariants} initial="initial" animate="animate" className="text-white flex flex-wrap justify-center gap-4">
                                {line.map(char => <motion.span className="inline-block relative whitespace-pre-line" variants={characterVariants} key={char}>{char}</motion.span>)}
                            </motion.div>
                        </h1>
                    </div>
                </div>
            </div>

            <HomeSection title="Web-Dev" subheading="Test your CSS limits" description="Recreate a randomly generated picture with HTML and CSS!" image="/HappyBirthdayMLH-Project/images/web-dev-pic.png" reversed={false} buttonLabel="Try it Out!" animate-fade-in-down buttonLink="/web-dev" />
            <HomeSection title="Algorithms" subheading="Practice competitive programming questions!" description="Create logical solutions using Javascript" image="/HappyBirthdayMLH-Project/images/comp-prog-2.png" reversed={true} buttonLabel="Try it Out!" buttonLink="/algorithms" animate-fade-in-down />

            <Footer />
        </motion.div>

    )
}

export default Home;