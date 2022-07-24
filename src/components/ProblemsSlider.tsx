import React from 'react'
import ProblemsData from '../Data/ProblemsData'
import { useState } from 'react'

interface SlideInfo {
    title: string,
    description: string,
    sampleInput: string,
    sampleOutput: string,
}

type HomeProps = {
    slides: SlideInfo[];
}

const ImageSlider = (props: HomeProps) => {
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1);
    };

    return (
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
    );
};

export default ImageSlider;