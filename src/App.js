import React, { Component } from 'react';
import { Button, Form, FormFeedback, Input, Label, FormGroup } from 'reactstrap';

import PanelDefault from './components/panels/panelDefault';
import AppHeader from './components/panels/appHeader';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formFields: props.formFields
		};
		this.formHandler = this.formHandler.bind(this);
	}

	inputChangeHandler(e) {
		let formFields = { ...this.state.formFields };
		formFields[e.target.name] = e.target.value;
		this.setState({
			formFields
		});
	}

	formHandler(e) {
		e.preventDefault();
		console.log('formHandler', e.target);
	}

	render() {
		return (
			<div>
				<AppHeader />
				<div className="container">
					<Form onSubmit={(e) => this.formHandler(e)}>
						<PanelDefault headerText="Add Gear">
							<FormGroup>
								<Label>Category</Label>
								<Input type="select" name="category" required>
									<option />
									<option>Gear</option>
									<option>Food</option>
									<option>Water</option>
								</Input>
								<FormFeedback>Required.</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label>Name</Label>
								<Input name="name" required />
							</FormGroup>
							<FormGroup>
								<Label>Description</Label>
								<Input name="description" type="textarea" />
							</FormGroup>
							<FormGroup>
								<Label>Weight (g)</Label>
								<Input name="weightGrams" type="number" />
							</FormGroup>
							<FormGroup>
								<Label>Rating</Label>
								<Input type="select" name="rating">
									<option />
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
							<Button type="submit" color="primary">
								Add Gear
							</Button>
						</PanelDefault>
					</Form>
				</div>
			</div>
		);
	}
}

export default App;