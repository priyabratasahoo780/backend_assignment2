import react from 'react';
import { useState, useEffect } from 'react';
export default function ApiFetch() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const handleApi = async () => {
      setLoading(true);
      setTimeout(async () => {
         try {
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const dataJson = await res.json();
            setData(dataJson);

         }
         catch (error) {
            console.log("error", error.message);
         } finally {
            setLoading(false);
         }
      }, 2000);
   }
   console.log(data);

   useEffect(() => {
      handleApi();
   }, []);
   return (
      <div>
         <h1>Hello world</h1>

         {loading &&
            <h1>loading....</h1>
         }



         {

            data &&




            <div>
               <img src={data.message} alt="image" width="300" height="200" />
            </div>

         }
      </div>
   )
}