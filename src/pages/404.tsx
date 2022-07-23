import React from "react";
import { motion } from "framer-motion"

const Page404: React.FC = () => {
    return (
        <motion.div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl">Nothing to see here...</h1>
        </motion.div>
    )
}

export default Page404;