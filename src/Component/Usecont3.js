import React, { useContext } from 'react'
import { biodata } from './Usecont1'

const Usecont3 = () => {
  const name=useContext(biodata)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Usecont3





















// import React, { useContext } from 'react'
// import { biodata } from './Usecont1'
// const Usecont3 = () => {
//   const name=useContext(biodata)
//   return (
//     <div>
//       <p>{name}</p>
//     </div>
//   )
// }

// export default Usecont3
