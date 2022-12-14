import React, {useState} from 'react';

export function FclickCounter() { 
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>{count}</p>
			<button onClick = {() => setCount(count + 1)}>More</button>
		</div>
	);
}