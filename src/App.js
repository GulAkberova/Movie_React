import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("harry")
  const[loading,setLoading]=useState(false)
  const[show,setShow]=useState(false)
  const[whislist,setWhislist]=useState([])
 
  useEffect(() => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?s=${query || 'harry'}&apikey=e26cef7e`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
        setLoading(false)

      })
      .catch((err)=>{
        console.log(err)
      })
  }, [query]);

  return (
    <div>
    <Header
    query={query} 
    setQuery={setQuery} 
    show={show}
    setShow={setShow}
    whislist={whislist}
    setWhislist={setWhislist}/>
      <Product
       movie={movie}
        loading={loading} 
        setLoading={setLoading}
         query={query}
          setQuery={setQuery}
          show={show}
    setShow={setShow}
  whislist={whislist}
  setWhislist={setWhislist}
  
  />
  
    </div>
  );
}

export default App;
