import React, { useCallback, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html'

import { compare } from '../util/compareImage';

const squareDimension = 500;

const WebDev: React.FC = () => {
    const [code, setCode] = React.useState(
        `<div /> Start Typing ...<style></style>`
    );

    const [difference, setDifference] = React.useState(0)

    const imageRef = useRef<HTMLImageElement>(null);

    const referenceImage = 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="${squareDimension}" height="${squareDimension}">
            <foreignObject width="100%" height="100%">
            <body xmlns="http://www.w3.org/1999/xhtml" style="width: ${squareDimension}px; height: ${squareDimension}px;">
                <div/>
                <style>
                    div { width:200px; height:200px; background: #b5e0ba; }
                    body { background: #5d3a3a; margin: 0; }
                </style>
            </body>
            </foreignObject>
        </svg>
    `);

    const emptyImg = 'data:image/svg+xml,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="${squareDimension}" height="${squareDimension}">

                </svg>
            `);

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

            compare(referenceImage, src1, (res: any) => {
                console.log(res)
                setDifference(res)
            })

            imageRef.current.src = src1;
        }
    }, [code, referenceImage])

    useEffect(() => {
        renderUserCode()
    }, [code, renderUserCode]);

    return (
        <div className='flex flex-row gap-4 items-center p-4 bg-slate-800'>
            <div className='w-full border-2 border-gray-500 code-area h-full'>
                <CodeMirror
                    value={code}
                    height="89vh"
                    extensions={[html({ matchClosingTags: true, autoCloseTags: true })]}
                    onChange={setCode}
                />
            </div>

            <div className='flex gap-4 w-full justify-between'>
                <div className='flex flex-col gap-4 justify-between w-1/2'>
                    <img className='aspect-square border-2 border-gray-500 bg-white' ref={imageRef} src={emptyImg} alt='img' />

                    <img className='aspect-square border-2 border-gray-500' src={referenceImage} alt='img' />
                </div>

                <div className='flex flex-col gap-4 justify-between w-1/2 '>
                    <div className='flex flex-col aspect-square p-4 w-full bg-blue-900 rounded-xl justify-center'>
                        <h3 className='text-2xl text-gray-300 justify-self-start self-start'>Accuracy</h3>
                        <h1 className='text-4xl text-white self-center '>91%</h1>
                    </div>
                    <div className=' font-bold text-center bg-gradient-to-r from-blue-800/[.7] to-blue-400/[.7] mt-10 shadow-2xl rounded-xl'>
                    <button> Next </button>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default WebDev;