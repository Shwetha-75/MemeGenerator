import React from 'react'
import data from './image'
export default function Content()
{
    
    return(
        <div className='meme-tag'>
            <form className='form-tag'>
              <input type="text" placeholder='Top Content' className='input1-tag'></input>
              <input type="text" placeholder='Bottom Content' className='input2-tag'></input><br></br>
              <button>GET ME IMAGE</button>
            </form>
            <img></img>
            
        </div>

    )
} 