import React, { useCallback, useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';

import { motion } from 'framer-motion';

import { compare } from '../util/compareImage';

import CodeEditorTheme from "../util/CodeEditorTheme"

import party from "party-js";

const squareDimension = 500;

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
const calculateScore = (newDiff: number) => clamp(Math.floor(100 - Math.pow(newDiff, 2)), 0, 100);

const prepareImageCode = (html?: string) => 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${squareDimension}" height="${squareDimension}">
        <foreignObject width="100%" height="100%">
        <body xmlns="http://www.w3.org/1999/xhtml" style="width: ${squareDimension}px; height: ${squareDimension}px;">
            ${html}
        </body>
        </foreignObject>
    </svg>
`);



const levels = [
    {
        referenceImage: prepareImageCode(`
            <div />
            <style>
                div { 
                    width:200px; 
                    height:200px; 
                    background: #b5e0ba; 
                }
                body { 
                    background: #5d3a3a; 
                    margin: 0; 
                }
            </style>
        `),
        colorsToChooseFrom: [
            "#5D3A3A",
            "#B5E0BA"
        ],
    },
    {
        referenceImage: prepareImageCode(`
            <div class="div3"> 
                <div class="div2">
                    <div class="div1"></div>
                </div>
            </div>
            <style>
                .div3 { 
                    width: 300px;
                    height: 300px;
                    background: #B5E0BA
                }

                .div2 {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width:300px; 
                    height:300px; 
                    background: #fff; 
                    border-radius: 50%
                }

                .div1 {
                    width: 100px;
                    height: 100px;
                    background: #5d3a3a;
                    border-radius: 50%
                }

                body { 
                    background: #5d3a3a; 
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center; 
                }
            </style>
        `),
        colorsToChooseFrom: [
            "#FFFFFF",
            "#5d3a3a",
            "#B5E0BA"
        ],
    },
    {
        referenceImage: prepareImageCode(`
        <div class="container">
            <div class="bdayCake">
            <div class="plate"></div>
            <div class="cream"></div>
            <div class="candle"></div>
            <div class="flame">
                <div class="one">+</div>
                <div class="two">+</div>
                <div class="three">+</div>
            </div>
            </div>
        </div>
        
        <style>
            .container {
            position: relative;       
            padding: 200px;
        }
        
        .bdayCake {
            position: relative;
            left:-100px;
            top:100px;
        }
        
        .plate {
            position: absolute;
            width: 242px;
            height:10px;
            border-radius:10px;
            background-color: #2a9d8f;
        }
        
        .plate:before {
            content:"";
            position: absolute;
            width:195px;
            height:90px;
            background-color: #9c6644;
            top:-90px;
            left:25px;  
        }
        
        .plate:after {
            content:"";
            position: absolute;
            width:195px;
            left:25px;
            height:10px;
            background-color: #ffd166;
            top:-60px;
            box-shadow: 0px 25px #f4978e;
        }
        
        .cream {
            position: absolute;
            background-color: #f08080;
            width:195px;
            height:20px;
            left:25px;
            top:-110px;
            border-radius:20px 20px 0 0;
        }
        
        .cream:before {
            content:"";
            position: absolute;
            background-color: #f08080;
            width:15px;
            height:30px;
            top:10px;
            border-radius:20px;
            box-shadow: 15px 5px #9c6644, 30px -5px #f08080, 45px 0px #9c6644, 60px 4px #f08080, 75px 3px #9c6644, 90px -5px #f08080, 105px 5px #9c6644, 120px -5px #f08080, 135px 0px #9c6644, 150px 4px #f08080, 165px 0px #9c6644, 180px 3px #f08080;
        }
        
        .cream:after {
            position: absolute;
            content:"";
            background-color: rgba(0,0,0,0.1);
            width: 97.5px;
            height:110px;
            left:98px;
            border-radius: 0 20px 0 0;
        }
        
        .candle {
            position: absolute;
            width: 10px;
            height:40px;
            background: repeating-linear-gradient(#fae0e4,
            #fae0e4 5px, #ff0a54 5px, #ff0a54 10px);
            box-shadow: inset -5px 0px rgba(0,0,0,0.1);
            top: -150px;
            left:118px;
        }
        
        .candle:before {
            content:"";
            position: absolute;
            background-color: #333;
            width:2px;
            height:10px;
            top:-10px;
            left:4px;
        }
        
        .candle:after {
            content:"";
            position: absolute;
            width:20px;
            height: 20px;
            background-color:#fcca46;
            border-radius: 80% 15% 55% 50% / 55% 15% 80% 50%;
            box-shadow: inset -3px 3px #fe7f2d;
            transform: rotate(-45deg);
            top:-28px;
            left:-5px;
            opacity:0.9;
            animation: scale .5s ease-out infinite;
        }
        
     
        
        .flame {
            position: absolute; 
        }
        
     
        .one {
            position: absolute;
            color: #fcca46;
            font-size:20px;
            top:-160px;
            left: 100px;
            text-shadow: 33px -30px #fcca46;
            animation: flash .5s ease infinite alternate;
        }
        
        .two {
            position: absolute;
            color: #fcca46;
            font-size:15px;
            top:-180px;
            left: 100px;
            text-shadow: 35px 30px #fcca46;
            animation: flash .8s ease infinite alternate;
        }
        
        .three {
            position: absolute;
            color: #fcca46;
            font-size:10px;
            top:-195px;
            left: 110px;
            text-shadow: 30px 30px #fcca46;
            animation: flash .4s ease infinite alternate;
        }
        </style>
        `),
        colorsToChooseFrom: [
            "🥳",
        ],
    },
]
const WebDev: React.FC = () => {
    const [code, setCode] = useState(
        `<div>
            Start typing...
        </div>
        <style>
        </style>`
    );
    
    const [levelIdx, setLevelIdx] = useState(0);

    const [difference, setDifference] = useState(0)
    const [score, setScore] = useState(0)

    const imageRef = useRef<HTMLImageElement>(null);

    const emptyImg = prepareImageCode()

    const btnRef = useRef<HTMLButtonElement>(null);

    const renderUserCode = useCallback(() => {
        if (imageRef && imageRef.current) {
            const src1 = 'data:image/svg+xml,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="${squareDimension}" height="${squareDimension}">
                    <foreignObject width="100%" height="100%">
                    <body xmlns="http://www.w3.org/1999/xhtml" style="width: ${squareDimension}px; height: ${squareDimension}px;">
                        ${code}
                    </body>
                    </foreignObject>
                </svg>
            `);

            compare(levels[levelIdx].referenceImage, src1, (newDiff: any) => {
                setDifference(newDiff)

                console.log("Difference:", newDiff)
                if (newDiff !== 0) {
                    setScore(calculateScore(newDiff))
                } else {
                    setScore(100)
                    btnRef.current && party.confetti(btnRef.current)
                }
            })

            imageRef.current.src = src1;
        }
    }, [code, levelIdx])

    useEffect(() => {
        renderUserCode()
    }, [code, renderUserCode]);

    return (
        <motion.div className='bg-slate-800 flex-grow'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className='flex flex-row gap-4 items-start p-5'>
                <div className='w-full border-2 border-gray-500 code-area h-full flex-grow'>
                    <CodeMirror
                        value={code}
                        height="43.7rem"
                        extensions={[html({ matchClosingTags: true, autoCloseTags: true })]}
                        onChange={setCode}
                        theme={CodeEditorTheme}
                    />
                </div>

                <div className='flex gap-4 w-2/3 items-start'>
                    <div className='flex flex-col gap-4 justify-between w-1/2'>
                        <img className='aspect-square border-2 border-gray-500 bg-white' ref={imageRef} src={emptyImg} alt='img' />

                        <div className='flex flex-col aspect-square p-4 w-full bg-blue-900 rounded-xl justify-start'>
                            <h3 className='font-mono text-2xl text-gray-300 justify-self-start self-start absolute'>Accuracy:</h3>

                            <div className='flex gap-4 self-center justify-self-center my-auto h-1/2'>
                                <div className="flex items-end h-full bg-gray-200 rounded-full w-3 dark:bg-gray-700">
                                    <div className="bg-green-600 w-3 rounded-full" style={{ height: `${score}%` }}></div>
                                </div>
                                <h1 className='font-mono text-7xl text-white self-center justify-self-center'>{score}%</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 justify-between w-1/2'>
                        <img className='aspect-square border-2 border-gray-500' src={levels[levelIdx].referenceImage} alt='img' />

                        <div className='flex flex-col aspect-square p-4 w-full bg-blue-900 rounded-xl justify-start'>
                            <h3 className='font-mono text-xl text-gray-300 justify-start absolute'>Colours To Choose From</h3>
                            <ol className='font-mono text-4xl text-white self-center my-auto'>
                                {levels[levelIdx].colorsToChooseFrom.map(color => (
                                    <li key={color}>{color.toUpperCase()}</li>
                                ))}
                            </ol>
                        </div>
                        <div>
                            <h1 className='text-6xl text-white'>Level: {levelIdx + 1}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-4 justify-center'>
                <button ref={btnRef} className='px-6 py-3 bg-gradient-to-r from-blue-800/70 to-blue-400/70 rounded-lg font-semibold text-white' onClick={() => {
                    if (difference === 0) {
                        if (levelIdx === levels.length - 1) {
                            alert("🎉 You've gone through all of our levels, congrats!")
                        } else {
                            setLevelIdx(levelIdx + 1)
                        }
                    }
                }}>
                    {difference === 0 ? "Next" : "Skip"}
                </button>
            </div>
        </motion.div>
    );
}

export default WebDev;