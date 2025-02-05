import React from "react";
import { useState } from "react";
import UseProfile from "../store/Profile";

function Profile() {
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [fileValue, setFileValue] = useState("");

	const { values, add, remove, edit } = UseProfile();

	function hendalEdit() {
		edit(values.id, { nameValue, emailValue, fileValue });
	}
   function hendalDelit(id) {
       remove(id)
   }
	function hendalSubmit(e) {
		e.preventDefault();
		const data = {
			nameValue,
			emailValue,
			fileValue,
		};
		add(data);
	}

	return (
		<div>
			<form
				onSubmit={hendalSubmit}
				className='flex flex-col items-center gap-2 border p-4  '>
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
					accept='image/*'
					className='border p-2'
				/>
				<button
					className='border px-4 py-2 bg-blue-500 text-white'
					type='submit'>
					Add
				</button>
			</form>
			<div className='flex flex-wrap mt-10 gap-4'>
				{values.length > 0 &&
					values.map((item, index) => {
						return (
							<div
								className='flex flex-col items-center shadow-lg p-4 w-3/10'
								key={index}>
								<img
									src={item.fileValue}
									alt=''
									className='w-20 rounded-full h-20'
								/>
								<h1 className='text-2xl'>{item.nameValue}</h1>
								<p>{item.emailValue}</p>
								<button
									className='border px-4 py-2 bg-blue-500 text-white rounded-3xl'
									onClick={() => hendalEdit(item)}>
									Edit
								</button>
                                <button
    									className='border px-4 py-2 bg-blue-500 text-white rounded-3xl'
									onClick={() => hendalDelit(item)}>
									Delit
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Profile;
