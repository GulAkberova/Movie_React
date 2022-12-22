import React from "react";

function Product({movie,loading,setLoading,whislist,setWhislist,show,setShow}) {
    const handleHeart=(item)=>{
      setWhislist(() => {
        if (whislist.includes(item)) {
            return whislist.filter(q => q !== item)
        } else {
            return [...whislist, item]
        }
    })
    }
    
  return (
    <>
        <section className="product_div">
      <div className="product_minidiv">
        {
            loading?<div class="container">
            <div class="box">
              <div class="loader"><span></span></div>
              <div class="loader"><span></span></div>
              <div class="loader"><i></i></div>
              <div class="loader"><i></i></div>
            </div>
          </div>: !show ? movie && movie?.Search?.map((i,key)=>{
                return(
                    <div className="product" key={i.imdbID}>
                    <div className="product_img">
                        <img src={i.Poster}/>
                    </div>
                    <div className="product_text">
                     <h1>{i.Title}</h1>
                    </div>
                    <div className="product_year">
                    <p>{i.Year}</p>
                    <i className={whislist.includes(i) ? 'fa-solid fa-heart':'fa-regular fa-heart'} onClick={()=>handleHeart(i)}></i>
                                      
                    </div>
                    
                  </div>

                )
            }) : whislist.length? whislist.map((t,key)=>{
              return(
                <div className="product" key={t.imdbID}>
                <div className="product_img">
                    <img src={t.Poster}/>
                </div>
                <div className="product_text">
                 <h1>{t.Title}</h1>
                </div>
                <div className="product_year">
                <p>{t.Year}</p>
                <i className="fa-regular fa-heart" ></i>
                </div>
                
              </div>
              )
            }): <div>
              <div className="section">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="col-sm-12 col-sm-offset-1 text-center">
                    <div class="bg-img">
                      <h1 class="text-center">404</h1>
                    </div>
                    <div class="content">
                      <h3 class="h2">Page not found!</h3>
                      <p>are you sure you want to be here?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            </div>   
        }
       
      </div>
    </section>
  </>
  )
}

export default Product;
