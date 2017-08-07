import React from 'react';
import firebase from 'firebase';
import { provider, auth } from '../firebase';
import { Route } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Home from './home';
import Search from './search_list';
import Login from './authentication/login';
import MentorsSignUp from './authentication/mentor_signup_form';
import MentorsRegister from './authentication/register';
import ContactForm from './contact_mentor.js';

const App = () => {
	return (
		<div>
			<Navbar />
			<Route path="/mentors/register" component={MentorsRegister} />
			<Route path="/mentors/signup" component={MentorsSignUp} />
			<Route exact path="/login" component={Login} />
			<Route path="/results/:id" component={Search} />
			<Route exact path="/" component={Home} />
			<Route exact path="/contact" component={ContactForm} />
			<Footer />
		</div>
	);
};

export default App;
