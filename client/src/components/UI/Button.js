import React, { Children, useState } from 'react'

export function Button({children, ...rest}) {
    return (
        <button className='btn btn-primary shadow' {...rest}>
            {children}
        </button>
    )
}