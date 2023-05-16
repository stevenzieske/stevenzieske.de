import React from 'react'

function BtnCustom({ text = "Button", href = "#", additionalClassNames = "", textSize = "" }) {
    return (
        <a
            className={`${additionalClassNames} ${textSize} px-4 py-2 border-none rounded-md hover:shadow-lg transform transition duration-300 hover:scale-110  select-none`}
            href={href}
        >
            {text}
        </a >
    )
}

export default BtnCustom