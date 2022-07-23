import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import CodeEditorTheme from "../util/CodeEditorTheme"
import Editor from '../components/Editor'
import useLocalStorage from '../hooks/useLocalStorage'

  
const Algorithms = () => {
    const [code, setCode] = useLocalStorage('js', '');
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <script>${code}</script>
        </html>
      `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [code])

    return (
        <motion.div className=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <h1 className='text-4xl'>Algorithms</h1>

            <div className='flex'>
                <CodeMirror
                    value={code}
                    height="40rem"
                    extensions={[javascript()]}
                    onChange={setCode}
                    className='bg-blue-900 w-1/2 code-editor'
                    theme={CodeEditorTheme}
                />
                
                <div className='flex flex-col mx-10'> 
                  <div className='p-32 bg-black'></div>
                    <button className="font-mono w-full text-l text-white p-3 rounded-3xl bg-gradient-to-r from-blue-800/[.7] to-blue-400/[.7] my-7 shadow-2xl">
                      Run
                    </button>
                  <div className='p-32 bg-black'></div>
                    <button className="font-mono w-full text-l text-white p-3 rounded-3xl bg-gradient-to-r from-blue-800/[.7] to-blue-400/[.7] my-7 shadow-2xl">
                      Generate Problem
                    </button>
                </div>
            </div>

            <div className='pane'>
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>

        </motion.div>
    )
}

export default Algorithms