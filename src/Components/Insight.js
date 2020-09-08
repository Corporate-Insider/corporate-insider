import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
function Insight({ match, companies }) {
	const [key, setKey] = useState('insights');

	let company;
	companies.forEach((comp) => {
		if (comp.name === match.params.company) {
			company = comp;
		}
	});
	console.log(company);

	return company ? (
		<Container>
			<h1>{company.name}</h1>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='insights' title='Company Insights'>
					<h2>Insight Page</h2>
                    
				</Tab>
			</Tabs>
		</Container>
	) : (
		<></>
	);
}

export default Insight;
