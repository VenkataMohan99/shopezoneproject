import React, { useContext } from "react"
import { userDetails } from "../App"
import AfterLoginTopNavBar from "./AfterLoginTopNavBar";
import BeforeLoginTopNavBar from "./BeforeLoginTopNavBar";
function TopNavgation() {
  const [state]=useContext(userDetails);
   return (
    <div>
      {state.length>0?<AfterLoginTopNavBar></AfterLoginTopNavBar>:<BeforeLoginTopNavBar></BeforeLoginTopNavBar>}
    </div>
  )
}

export default TopNavgation