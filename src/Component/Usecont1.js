

import React, { createContext } from 'react'
import Usecont2 from './Usecont2';
const biodata=createContext();

const Usecont1 = () => {
  return (
    <div>
      <biodata.Provider value={"hey how are you"}>
        <Usecont2/>
      </biodata.Provider>
    </div>
  )
}

export default Usecont1
export {biodata}
