import React, { useEffect, useRef } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

import { compare } from '../util/compareImage';

const squareDimension = 500;

const WebDev: React.FC = () => {
    const [code, setCode] = React.useState(
        `<div />wow<style></style>`
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

    const renderUserCode = () => {
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
    }

    useEffect(() => {
        renderUserCode()
    }, [code]);

    return (
        <div className='flex flex-col gap-4 p-4 items-center'>
            <div className='flex gap-4 w-full justify-between'>
                <div className='w-2/3 border-2 border-gray-500 code-area'>
                    <Editor
                        value={code}
                        onValueChange={code => setCode(code)}
                        highlight={code => Prism.highlight(code, Prism.languages.html, "html")}
                        padding={14}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 14,
                        }}
                    />
                </div>

                <div className='flex gap-2'>
                    <div className='flex flex-col'>
                        <img className='w-full aspect-square border-2 border-gray-500' ref={imageRef} src={emptyImg} alt='img' />
                        <p>Your image</p>
                    </div>

                    <div className='flex flex-col'>
                        <img className='w-full aspect-square border-2 border-gray-500' src={referenceImage} alt='img' />
                        <p>Reference image</p>
                    </div>
                </div>
            </div>

            <p>Score: {Math.round((10000 - difference * 100) / 100)}%</p>
        </div>
    );
}

export default WebDev;