import { Link } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<div>
			<Layout>
				<Head title='About' />
				<h1>About Page</h1>
				<p>we develop web apps</p>
				<p>
					<Link to='/contact'>Want to work with me? Reach out</Link>
				</p>
			</Layout>
		</div>
	);
};

export default AboutPage;
