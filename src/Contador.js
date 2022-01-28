import React, {useState} from "react";



 function Contador() {
      const [contador, setContador]= useState(0)
     return (

         <div className="Contador">
             <h1> {contador} </h1>
             <button>Start</button>

         </div>

     );

 }


 export default Contador














