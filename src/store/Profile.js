import { create } from "zustand";

const UseProfile =create((set)=>({
   values : [],
   add: (value)=>{
    set(function (state) {
      return {values: [...state.values,value]}
    })
   },
   remove:(id)=>{
    set(function (state) {
      return {values: state.values.filter((item) => item.id !== id)}
    })
   },
   edit:(id,newValue)=>{
    set(function (state) {
      return {values: state.values.map((item) => item.id === id ? newValue : item)}
    })
   }
}))

export default UseProfile