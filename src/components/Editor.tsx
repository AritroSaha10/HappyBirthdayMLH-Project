import React, { useState } from 'react'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';



const Editor = () => {
    const [code, setCode] = useState("");

    return (
        <CodeMirror
            value={code}
            height="25rem"
            extensions={[javascript()]}
            onChange={setCode}
        />
    )
}

export default Editor