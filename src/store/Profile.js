import { create } from "zustand";

const UseProfile =create((set)=>({
   values : [],
   add: (value)=>{
    set(function (state) {
      return {values: [...state.values,value]}
    })
   }
}))

export default UseProfile