import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
function StarRating({ setValue, value, handleRateChange}) {
  
    return (
			<div className='star'>
				<Box align='left' component='fieldset' mb={3} borderColor='transparent'>
					<Rating
						value={value}
						name='rating'
						precision={0.5}
						onChange={(event, newValue) => {
							setValue(newValue);
							handleRateChange(newValue);
						}}
					/>
				</Box>
			</div>
		);
}

export default StarRating;