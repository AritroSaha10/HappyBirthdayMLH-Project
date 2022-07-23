import React from "react";
import HomeSection from '../components/HomeSection'
import Footer from "../components/Footer";
import { motion } from "framer-motion"

const Home: React.FC = () => {
    return (
        <motion.div className="overflow-hidden"
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
            <div className="flex flex-col h-screen relative">
                <div className="w-full overflow-hidden" style={{ boxShadow: "inset 0 0 200px #000000" }}>
                    <img src="/images/bg.png" className="w-screen h-[80vh] absolute object-cover object-center blur-sm bg-black scale-110" alt='' />
                </div>

                <div className="absolute h-screen w-full">

                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-6xl w-2/5 p-5 bg-blue-900/[.4] text-white text-center">
                            Name
                        </h1>


                        <button className="w-56 text-4xl text-white mt-10 rounded-3xl p-5 bg-gradient-to-r from-blue-1000/[.7] to-blue-400/[.7] shadow-2xl">
                            Learn More
                        </button>

                    </div>
                </div>
            </div>

            <HomeSection title="Web-Dev" subheading="Test your CSS limits" description="Recreate a randomly generated picture with HTML and CSS!" image="/images/bg.png" reversed={false} buttonLabel="Try it Out!" animate-fade-in-down buttonLink="/web-dev" />
            <HomeSection title="Algorithms" subheading="Practice competitive programming questions!" description="Create logical solutions using Javascript" image="/images/bg.png" reversed={true} buttonLabel="Try it Out!" buttonLink="/algorithms" animate-fade-in-down />

            <Footer />
        </motion.div>

    )
}

export default Home;