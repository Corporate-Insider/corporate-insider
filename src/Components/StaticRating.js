import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
function StaticRating({defaultRating}) {

    
    return (
			<div className='star'>
				<Box align='left' component='fieldset' mb={3} borderColor='transparent'>
					<Rating
						defaultValue={defaultRating ? defaultRating : 0}
						name='readonly-rating'
						readOnly
					/>
				</Box>
			</div>
		);
}

export default StaticRating;