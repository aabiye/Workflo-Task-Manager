import React from 'react';
import './popup.css';


export const Popup2 = () => {
	
	const [showPopUp, setPopUp] = useState(false)

	handleClick(){
		setPopUp(true)
	}

	return (
		<div>

			<button onClick={handleClick}>
				Click to see Popup!
			</button>
			{
				showPopUp ? <Popup /> : 'no pop up'
			}
		</div>
	)
}