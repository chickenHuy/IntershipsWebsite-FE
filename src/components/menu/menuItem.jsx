import React from 'react'

const MenuItem = ({
    menuIcon = null,
    menuContext = '',
    otherComponent = null,
    onClick = () => { },
}) => {

    return (
        <div className='flex flex-row justify-start items-center gap-4 w-full h-fit px-6 py-[10px] hover:bg-white-secondary hover:shadow-md rounded-[4px] cursor-pointer' onClick={onClick}>
            {menuIcon}
            <span className='text-[15px] flex-grow'>
                {menuContext}
            </span>
            {otherComponent}
        </div>
    )
}

export default MenuItem;