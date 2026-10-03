// import React from 'react'
// import {useRouter} from 'next/router'
// const about = () => {
//     const router = useRouter()
//     const {name, age, brand} = router.query
//     console.log(router.query);
//     console.log(name, age, brand);
//     // const params = router.query
//     // const id = params.id
//     // console.log(id);
//   return (
//     <div>
//         This about Page
//         <h1>Hello {name}</h1>
//         <h1>{age}</h1>  
//         <h1>{brand}</h1>
//     </div>
//   )
// }

// export default about










import React from 'react'
import {useRouter} from 'next/router'
import {GetServerSideProps} from 'next'
export const getServerSideProps:GetServerSideProps= async({
    query
}) => {
    return{
        props:{
            name: query?.name || null,
            brand: query?.brand || null,
            age: query?.age || null
        }
    }
}
      interface AboutPageProps {
            name: string | null;
            brand: string[] | null;
            age: string | null;
      }

      const AboutPage = ({
        name, brand, age
      }:AboutPageProps) => {
        return(
            <div>
                <h1>About Page</h1>
                <h1>Hello {name}</h1>
                <h1>{age}</h1>
                <h1>{brand}</h1>
            </div>
        )
      }

      export default AboutPage;
    