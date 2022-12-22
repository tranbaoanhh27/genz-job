import React from 'react';

export function RadioButton( {label, id, name, curValue} ) {

    return (
        <div>
            { label.map( (value, id) => {
                return (
                    <>
                        <input className={id === 0 ? '' : 'ml-5'} type="radio" id={id} name={name} value={id} defaultChecked={id === 0 ? true : false} />
                        <label for={name}>{value}</label>
                    </>
                )
            })
        }
        </div>
    )
}