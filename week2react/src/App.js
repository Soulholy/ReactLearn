import "./App.css";
import React from "react";
import AppHeader from './components/AppHeader'
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import boxDatas from "./data/data";
import { useState } from "react";
import AppSearch from './components/AppSearh'

function App() {

  const [dataselect, setDataselect] = useState(null)

  const [searchText,setSearchText] = useState('')


  function whenClickimages(value){
    setDataselect(value)
  }

  function whenCloseClick(){
    setDataselect(null)
  }


  // *! กรองข้อมูลในInput
  const fliterInput = boxDatas.filter(function(data)
  {
    return data.title.includes(searchText)
  })

  // console.log(fliterInput);


  // *! ลูปข้อมูล และส่งPropsไป ให้ ไฟล์ TattooItem.jsx
  const tattooElement = fliterInput.map((data,index)=>(
        <TattooItem key={index} passData={data} onclickImg={whenClickimages}/>
    ))


    let getPost = null

    if(!!dataselect){
        getPost = <TattooPost tattoo={ dataselect } onBgclick={whenCloseClick}/>
    }

  return (
    <div className="App">

      <AppHeader />
      {/* <button onClick={whenClickimages}>Test Click</button> */}
      <section className="app-section">

        <div className="app-container">

          <AppSearch value={searchText} onValueChange={setSearchText}/>
          <div className="app-grid">
          {tattooElement}  
          </div>

        </div>
      </section>

      {getPost}
      
    </div>
  );
}

export default App;
 