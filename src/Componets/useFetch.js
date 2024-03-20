import { useState,useEffect } from "react";

const useFetch = (url) => {
    const[data,setData]= useState(null)
    const[loadMessage,setLoadMessage] = useState(true)
    const[isError,setisError]=useState(null);

useEffect(()=>{
  const aborted = new AbortController();
  setTimeout(()=>{ 
    fetch(url)
    .then(res=>{
      if(!res.ok){
        throw Error('Couldnot fetch the data')
      }
       return res.json();
    })
    .then(data=>
      {
    setLoadMessage(false);
    setData(data)
        setisError(null)
    }).catch(err=>{
      if(err.name ==='Abort Error')
      {
        console.log('Fetch Aborted');

      }else{
      setLoadMessage(false)
      setisError(err.message);
      }
    })
    
  },1000)
  return ()=> aborted.abort();
},[url])
  return ( 
    
    {data,loadMessage,isError}
    
   );
}
 
export default useFetch;


// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loadMessage, setLoadMessage] = useState(true);
//   const [isError, setIsError] = useState(null);

//   useEffect(() => {
//     const aborted = new AbortController();
//     setTimeout(() => {
//       fetch(url)
//         .then((res) => {
//           if (!res.ok) {
//             throw Error('Could not fetch the data');
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setLoadMessage(false);
//           setData(data);
//           setIsError(null);
//         })
//         .catch((err) => {
//           if (err.name === 'AbortError') {
//             console.log('Fetch Aborted');
//           } else {
//             setLoadMessage(false);
//             setIsError(err.message);
//           }
//         });
//     }, 1000);

//     return () => aborted.abort();
//   }, [url]);

//   // Return the object directly without wrapping it in curly braces
//   return { data, loadMessage, isError };
// };

// export default useFetch;
