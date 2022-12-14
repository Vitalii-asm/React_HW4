import React from "react";

const Listitem = props => { 
	const value = props.value;
	return <li>{value}</li>
}

export const List = ({ items }) => { 
	
	return (
		<ul>
			{items.map(item => <Listitem key={item.toString()} value = {item}/>)}
		</ul>
	);
}
