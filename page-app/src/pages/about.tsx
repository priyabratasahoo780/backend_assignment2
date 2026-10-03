// import React from 'react'

// export default function about() {
//   return (
//     <div>
//         <h1>About Page</h1>
//         <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam consequuntur quas repellendus, rem possimus enim earum nesciunt, commodi ipsa iusto corrupti distinctio sequi vel harum! Obcaecati error doloremque illum.
//     Eum exercitationem laborum rem possimus debitis vel praesentium quo, dolorum similique veritatis blanditiis commodi ipsam sunt itaque cum sapiente eius dignissimos ab quae laudantium labore doloribus! Quo eos unde repudiandae.
//     Quibusdam itaque, explicabo cum facilis vero velit! Inventore porro eveniet voluptas, cupiditate laudantium voluptate tenetur adipisci minima obcaecati nulla ullam nemo modi odit dicta quam in sequi, quaerat accusantium esse.
//     Quis cupiditate totam, perspiciatis quos eaque corrupti officiis iste beatae fuga veniam consequatur eos illo quas officia, veritatis in excepturi eius expedita dignissimos deleniti repellendus modi? Itaque incidunt quis reprehenderit?</h3></div>
//   )
// }

import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async(context) => {
  console.log(context)
  const {query} = context
  console.log(query);
  console.log("===>", query.name, typeof(query.name))
  let name = [];
  if(typeof(query?.name) === "string"){
    name = [query.name]
  } else {
    name = query?.name || []
  }
  // return {
  //   props: {
  //     name: query?.name || null,
  //     age:query?.age || null
  //   }
  // }

  return {
    props:{
      name,
      age: query?.age || null
    }
  }
}

type AboutPageProps = {
  name: string
  age: number
}
const AboutPage = ({name, age}: AboutPageProps) =>{
  return(
    <div>
      <h1>About Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default AboutPage