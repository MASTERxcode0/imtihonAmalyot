import React from "react";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
function Todolist() {
   const [todos, setTodos] = useState('');
   const [chekked , setChecked] =useState(false);

function hendalDelete(id) {
	axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
	  .then(() => {
 	   });
}

  const { mutate } = useMutation({
mutationFn: () => {
  return axios.post('https://jsonplaceholder.typicode.com/todos', {
	title: todos,
	completed: chekked,
	id: new Date().getTime() 
  });
},
  });

const hendalClisc = (e) => {
	e.preventDefault();
	mutate();
};

	function TodolistGet() {
		return axios.get('https://jsonplaceholder.typicode.com/todos')
	}
	const {data} = useQuery({
		queryKey: ["name"],
		queryFn: TodolistGet,
		refetchInterval: 3000000,
	});
    
    
	return <div className="container mx-auto flex flex-col gap-3">
		<form className="flex flex-col gap-4 justify-between p-20 max-w-2xl border mx-auto mt-5">
			<input className="border p-2"  placeholder="Matn kiritin" type="text" onChange={(e)=>{setTodos(e.target.value)}} />
			<input   type="checkbox" className="border" onChange={(e)=>{setChecked(e.target.checked)}} />
			<button className="border px-5 py-2 bg-blue-500" onClick={hendalClisc}>Submit</button>
		</form>

		<div>
			<h1>Data: {data?.data.length}</h1>
		</div>
       <div className="container mx-auto flex flex-wrap gap-2">
	   {data?.data.map((item) => (
            <div key={item.id} className="p-4 border-2 border-black max-w-sm w-full">
                <h1 className="text-2xl">{item.title}</h1>
				<button className="border bg-red-500 p-2 rounded mt-3"  onClick={hendalDelete}>Delete</button>
            </div>
        ))}
	   </div>
    </div>;
}

export default Todolist;
