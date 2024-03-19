import React from 'react'
import NavBar from './NavBar'
import data from './image'
import Content  from './content'
export default function Main()
{
    const array=data.map(item=>item)


    return (
        <div className='main-tag'>
            <NavBar/>
            
            {/* <img src={array[0]} alt=''></img> */}
            <Content />
        </div>
    )
} 