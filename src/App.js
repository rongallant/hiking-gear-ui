import React, { Component } from 'react';
import { Button, FormFeedback, Input, Label, Form, FormGroup } from 'reactstrap';

import AppHeader from './components/panels/appHeader';
import GearForm from './components/forms/gearForm';

import './App.css';

class App extends Component {

	render() {
		return (
			<div>
				<AppHeader/>
				<div className="container">
					<GearForm/>
				</div>
			</div>
		);
	}
}

export default App;