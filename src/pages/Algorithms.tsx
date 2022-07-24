import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import CodeEditorTheme from "../util/CodeEditorTheme"

// import useLocalStorage from '../hooks/useLocalStorage'

import ProblemsData from '../Data/ProblemsData'

function argumentsToStr(args: any[]) {
    let output = "["
    args.forEach(arg => {
        if (typeof arg == "string") {
            output = output + `'${arg}'`
        } else {
            output = output + `${arg}`
        }

        output = output + ", "
    })

    output = output + "]"

    return output
}

const compareArray = (array1: any[], array2: any[]) => array1.length === array2.length && array1.every(function (value: any, index: any) { return value === array2[index] })

interface SlideInfo {
    title: string,
    description: string,
    sampleInput: string,
    sampleOutput: string,
}

const squareDimension = 500;
const Algorithms = () => {

    const [code, setCode] = React.useState(
        `function run(input) {\n    const output = input\n    return output\n}`
    );

    const [current, setCurrent] = useState(0);
    const length = ProblemsData.length;

    const [logger, setLogger] = useState("Run your code to see something here!");

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const runCode = (input: any, expectedResponse: any) => {
        console.log(input)
        try {
            // Extract function code
            const functionCodeSplit = code.split("\n")
            const functionCode = functionCodeSplit.slice(1, functionCodeSplit.length - 1).join("\n")
            const resp = new Function('input', functionCode)(input);

            const formatVariable = (arr: any) => Array.isArray(arr) ? `\n${arr.join("\n")}` : arr;

            if (typeof expectedResponse === "object") {
                console.log(`Response is a ${typeof expectedResponse}, perhaps an array?`)
                if (!compareArray(resp, expectedResponse)) {
                    setLogger(`Your response doesn't match the expected response :(\n\nYour response: ${formatVariable(resp)}\n\nExpected response: ${formatVariable(expectedResponse)}`)
                } else {
                    setLogger(`Good job! Your code matches our test cases! :)\nYour response: ${formatVariable(resp)}`)
                }
            } else {
                if (resp !== expectedResponse) {
                    setLogger(`Your response doesn't match the expected response :(\n\nYour response: ${formatVariable(resp)}\n\nExpected response: ${formatVariable(expectedResponse)}`)
                } else {
                    setLogger(`Good job! Your code matches our test cases! :)\nYour response: ${formatVariable(resp)}`)
                }
            }
        } catch (e) {
            alert(`Something went wrong while running your code: ${e}`)
        }
    }

    return (
        <motion.div className='flex flex-col bg-slate-800 w-full h-full flex-grow items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}>

            <div className='flex justify-center gap-4 p-4 h-full'>
                <CodeMirror
                    value={code}
                    height="45rem"
                    extensions={[javascript()]}
                    onChange={setCode}
                    className='bg-blue-900 w-3/4 code-editor'
                    theme={CodeEditorTheme}
                />

                <div className='flex flex-col'>
                    <div className='text-xl whitespace-pre-line font-mono bg-black p-2 text-white h-64 overflow-x-hidden overflow-y-auto'>
                        {logger}
                    </div>
                    <button className="font-mono w-full text-l text-white p-3 rounded-3xl bg-gradient-to-r from-blue-800/[.7] to-blue-400/[.7] my-7 shadow-2xl" onClick={() => runCode(ProblemsData[current].functionInput, ProblemsData[current].functionOutput)}>
                        Run
                    </button>

                    <div>
                        <section className="slider flex w-full flex-col overflow-x-hidden overflow-y-auto h-64">
                            {ProblemsData.map((slide: SlideInfo, index: number) => {
                                return (
                                    <div
                                        className={
                                            index === current
                                                ? "opacity-100 flex flex-wrap"
                                                : " flex flex-wrap opacity-100"
                                        }
                                        key={index}
                                    >
                                        {index === current && (
                                            <div className='bg-white flex items-center flex-col rounded-xl pb-40 w-full h-full'>
                                                <h1 className='text-4xl m-10 mb-0'>{slide.title}</h1>
                                                <h3 className='text-xl m-10 whitespace-pre-line'>{slide.description}</h3>
                                                <h2 className='text-2xl'>Sample Input</h2>
                                                <h3 className='text-xl m-10 whitespace-pre-line font-mono w-1/2 bg-gray-800 p-2 text-white'>
                                                    {slide.sampleInput}
                                                </h3>
                                                <h2 className='text-2xl'>Sample Output</h2>
                                                <h3 className='text-xl m-10 whitespace-pre-line font-mono w-1/2 bg-gray-800 p-2 text-white'>
                                                    {slide.sampleOutput}
                                                </h3>
                                            </div>
                                        )}

                                    </div>
                                );
                            })}
                        </section>
                        <button className='font-mono w-full text-l text-white p-3 rounded-3xl bg-gradient-to-r from-blue-800/[.7] to-blue-400/[.7] my-7 shadow-2xl' onClick={nextSlide}>
                            Generate Problem
                        </button>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Algorithms