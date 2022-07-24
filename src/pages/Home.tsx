import React from "react";
import HomeSection from '../components/HomeSection'
import Footer from "../components/Footer";
import { motion } from "framer-motion"

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
                    <img src="/images/bg.png" className="w-screen h-[80vh] absolute object-cover object-center blur-sm bg-black scale-110" alt='' />
                </div>

                <div className="absolute bg-black/60 h-[84.5vh] w-screen z-3" />

                <div className="absolute h-[90vh] w-full">

                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="font-mono text-6xl w-3/5 p-5 text-white bold text-center">
                            Welcome to CodeBro.
                        </h1>


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