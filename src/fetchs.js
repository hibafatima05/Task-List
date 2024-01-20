// const Sfc = () => {
//   const data = fetch("https://my.api.mockaroo.com/books?key=fd6e0830").then(res=>{
//    return res.json()
//   }).then(data=>{
//     return data
//   })
//   console.log(data);
//   return (  


// <h1></h1>

//   );
// }
 
// export default Sfc;


// import React, { useEffect, useState } from "react";

// const Sfc = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://my.api.mockaroo.com/books?key=fd6e0830");
//         const response = await fetch("http://localhost:8000/books/3");

//         if (!response.ok) {
//           throw new Error('Could not fetch the data');
//         }

//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(data);

//   return (
//     <div>
//       <h1>Data fetched:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };
// }
// export default Sfc;
