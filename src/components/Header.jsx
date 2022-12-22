import React,{useRef} from 'react'


function Header({query,setQuery,show,setShow, whislist, setWhislist}) {

    const inpRef=useRef()
    const handleClick=(value)=>{
        inpRef.current.focus()
        setQuery(value)
        console.log(query)

    }
   const handleShow=()=>{
    setShow(!show)
    console.log('shodfkdg',show)

   }
  return (
    <>
    <header>
        <h1>Movie</h1>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i>
            <input ref={inpRef} placeholder='Search' 
            value={query}
             type={'text'} onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={()=>handleClick(query)}>Search</button>
        </div>
        <p>
       <button className='icon_color' onClick={()=>handleShow()}><i className="fa-regular fa-heart"></i>&nbsp;{whislist.length}</button> 
        </p>
    </header>

    </>
  )
}

export default Header