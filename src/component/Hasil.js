import React, { Component } from 'react';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';


const Hasil = (props) => {
	return (
		<div> 
			<div>
				{ 
					props.hasil > 100 ? 
					(
						 <h1>Besar</h1>
					) 
					: 
					(
						<h6>{props.hasil}</h6>
					)  
				}
			</div>
		</div>	
		)
}

export default Hasil