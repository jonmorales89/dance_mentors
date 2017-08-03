import React from 'react';
import firebase from 'firebase';
import { provider, auth } from '../firebase';
import { Route } from 'react-router-dom';
import Home from './home';
import Search from './search_list';
import Login from './authentication/login';
import MentorsSignUp from './authentication/mentor_signup_form';

const App = () =>
	<div>
		<Route exact path="/login" component={Login} />
		<Route path="/mentors/signup" component={MentorsSignUp} />
		<Route path="/results" component={Search} />
		<Route exact path="/" component={Home} />
	</div>;

export default App;
