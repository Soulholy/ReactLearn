# ReactLearn

## ขั้นตอน เริ่มต้น Project

```console
npx create-react-app [ชื่อโปรเจค]
```

ทำการเข้า Folder ที่ได้ Create 

ตัวอย่าง
```bash
cd .\week2react\
```

**Folder ที่ต้องสนใจ** 
* Public
  * Images  
* src
  * Components
  * data


**--- src directory ---**

ในไฟล์ **-- App.js --**

ทำการ Import

```javascript
import "./App.css";
import React from "react";
import AppHeader from './components/AppHeader'
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import boxDatas from "./data/data";
import { useState } from "react";
import AppSearch from './components/AppSearh'
```

Code ในส่วนของ 
```Javascript
function App() {
  return(
   <div> </div>
  )
  );
}
```

ทำการเพิ่ม
```javascript
  function App() {
  return(
   <div> <AppHeader /> </div>   --- เพื่อเรียกใช้Header Components
  )
  );
}
```

**src/components/AppHeader**
```Javascript
import React from 'react'

import './AppHeader.css'

export default function AppHeader() {
  return (
    <header className='app-header'>
        <img className='app-header-logo' src="/images/logo.png" alt="" />
    </header>
  )
}
```


**ขั้นตอนถัดมา เพิ่ม AppSearch TattooElement **
```javascript
<div className="App">

      <AppHeader />   --- Header Component ---
      
      <section className="app-section">

        <div className="app-container">

          <AppSearch value={searchText} onValueChange={setSearchText}/>       ----- AppSearch Component -----
          <div className="app-grid">
          {tattooElement}  ----- tattooo Component -----
          </div>

        </div>
      </section>

      {getPost}
      
    </div>
```






