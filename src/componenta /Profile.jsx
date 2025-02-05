import React from "react";
import { useState } from "react";
import UseProfile from "../store/Profile";

function Profile() {
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [fileValue, setFileValue] = useState("");
	const [styleForm, setStyleFOrm] = useState(false);
	const [styleDiv, setStyleDiv] = useState(true);

     function hendalEdit(){
        setStyleDiv(true);
		setStyleFOrm(false);

     }

     const {values,add} = UseProfile()

     console.log(values);
     

	function hendalSubmit(e) {
		e.preventDefault();
		const data = {
			nameValue,
			emailValue,
			fileValue,
		};
        add(data)
		setStyleDiv(false);
		setStyleFOrm(true);
	}

	return (
		<div>
			<form
				style={styleForm ? { display: "none" } : { display: "block" }}
				onSubmit={hendalSubmit}
				className='flex flex-col items-center gap-2 border p-4 '>
				<input
					onChange={(e) => {
						setNameValue(e.target.value);
					}}
					type='text'
					className='border  p-2 '
					placeholder='Name'
				/>
				<input
					onChange={(e) => {
						setEmailValue(e.target.value);
					}}
					type='email'
					className='border p-2'
					placeholder='Email'
				/>
				<input
					onChange={(e) => {
						setFileValue(URL.createObjectURL(e.target.files[0]));
					}}
					type='file'
                    accept="image/*"
					className='border p-2'
				/>
				<button
					className='border px-4 py-2 bg-blue-500 text-white'
					type='submit'>
					Add
				</button>
			</form>
			<div style={styleDiv ? { display: "none" } : { display: "block" }}>
                {
                    values.length > 0 && values.map((item, index) => {
                        return <div key={index}>
                            <img src={item.fileValue} alt=""  className="w-20 rounded-full"/>
                            <h1>{item.nameValue}</h1>
                            <p>{item.emailValue}</p>
                        </div>
                    })

                }
				<button onClick={hendalEdit}>Edit</button>
			</div>
		</div>
	);
}

export default Profile;
