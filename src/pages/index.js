import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const indexPage = () => {
	return (
		<div>
			<Layout>
				<Head title='Home' />
				<h1>Hello</h1>
				<h2>I'm Shubham</h2>
				<p>
					Need a developer? <Link to='/contact'>Contact me.</Link>
				</p>
			</Layout>
		</div>
	);
};

export default indexPage;
