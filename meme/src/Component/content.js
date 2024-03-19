import React from 'react'
import data from './image'
export default function Content()
{
   

    const [image,setImage]=React.useState();

    const handleOnClick=()=>
    {
        const images=[...data]
        const random=Math.floor(Math.random()*(images.length));
        console.log(random);
        setImage(images[random]);
    }
    return(
        <div className='meme-tag'>
            <div className='form-tag'>
              <input type="text" placeholder='Top Content' className='input1-tag'></input>
              <input type="text" placeholder='Bottom Content' className='input2-tag'></input><br></br>
              <button onClick={handleOnClick}>GET ME IMAGE</button>
              <img src={image} alt=''></img>
            </div>
            
            
            
        </div>

    )
} 
