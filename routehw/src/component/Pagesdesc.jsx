import React from 'react'

function Pagesdesc({ title, text, color, positionx, postiony }) {
    return (
        <>
            <div
                className={title === 'Rome' ?
                    `absolute ${positionx} transform ${postiony}  p-8 text-center max-sm:static max-sm:top-2 max-sm:left-0 max-sm:-translate-x-0 max-sm:-translate-y-0 max-sm:p-4 max-sm:max-w-full max-sm:pt-12`
                    : title === "ABU DHABI" ?
                    `absolute top-1/4 ${positionx} transform ${postiony} -translate-y-1/2 p-8 text-center max-sm:static max-sm:top-2 max-sm:left-0 max-sm:-translate-x-0 max-sm:-translate-y-0 max-sm:p-4 max-sm:max-w-full max-sm:pt-12`
                    :
                    `absolute top-1/2 ${positionx} transform ${postiony} -translate-y-1/2 p-8 text-center max-sm:static max-sm:top-2 max-sm:left-0 max-sm:-translate-x-0 max-sm:-translate-y-0 max-sm:p-4 max-sm:max-w-full max-sm:pt-12`
                }
                style={{ color }}

            >
                <h1 className="text-6xl font-bold pb-3 max-sm:text-3xl max-sm:pl-2">{title}</h1>
                <h3 className="text-xl font-semibold pl-4 max-sm:text-base max-sm:pl-2">{text}</h3>
            </div>

        </>
    )
}

export default Pagesdesc