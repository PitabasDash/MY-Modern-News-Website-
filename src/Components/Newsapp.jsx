import React, { useEffect, useState } from 'react'
import Card from './Card'
const Newsapp = ()  => {

    const [search, setSearch] = useState("india")
    const [newsData, setNewsData] = useState ([])
   const API_KEY = "e51746ad5ba54663b66d242454cc9143";
   const getData =  async() =>{
   const responce = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
   const jsonData = await responce.json();
   console.log(jsonData.articles);
   setNewsData(jsonData.articles)
   }
   
   useEffect(() => {
    getData()
   },[])

   const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
   }

   const userInput = (event) => {
    setSearch(event.target.value)
   }
     
    return (
        <div>
            <nav>
                <div>
                    <h1>My News</h1>
                </div>
                <ul>
                    <a>All News</a>
                    <a>Treanding</a>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News'value={search} onChange={handleInput}/>
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Update with TrendyNews</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
                <button onClick={userInput} value="weather">Weather</button>
            </div>
            <div>
                
             <Card data={newsData}/>
            </div>
        </div>
    )
}

export default Newsapp