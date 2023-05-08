// import React, { useState } from "react";
// import {Images} from './Images.jsx'

// function App(){

//     const [images, setImages] = useState([]);
    
//     const fetchAPI = async() => {
//         const response = await axios.get('https://api.unsplash.com/photos/?client_id=YSexKELn-mXRWy1yfTan8vUGj7oX_WjgAs2_VXjGZoI');
//         const data = await response.data;
//         setImages(data);
//     }

//     return(
//         <>
//         <h1>Image Gallery</h1>
//         <h2>Search Image</h2>
//         <form>
//             <input type='text' name='searchbar'/>
//             <input type='button' value='Search' onClick={fetchAPI}/>
//         </form>
//         <div className="photos">
//             <Images images = {images}/>;
//         </div>
//         </>
//     )
// }

// export default App;