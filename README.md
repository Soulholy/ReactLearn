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

