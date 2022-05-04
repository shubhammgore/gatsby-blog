import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
	return (
		<div>
			<Layout>
				<Head title='Contact' />
				<h1>Contact Page </h1>
				<p> the best way to meet me is via shubhamgore129@gmail.com</p>
				<p>
					contact me via social{' '}
					<a href='https://www.reddit.com' target='_blank'>
						reddit
					</a>{' '}
				</p>
			</Layout>
		</div>
	);
};

export default ContactPage;
