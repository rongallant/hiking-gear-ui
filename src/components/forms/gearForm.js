import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

import PanelDefault from '../panels/panelDefault';
import CategoryField from '../fields/categoryField';
import NameField from '../fields/nameField';
import DescriptionField from '../fields/descriptionField';
import WeightField from '../fields/weightField';
import RatingField from '../fields/ratingField';

export default class GearForm extends Component {
		
	constructor(props) {
		super(props);
		this.state = {
			formFields: props.formFields
		};
		this.formHandler = this.formHandler.bind(this);
	}

	formHandler(e) {
		e.preventDefault();
		console.log('formHandler', e.target);
	}

	render() {
		return (
			<Form onSubmit={(e) => this.formHandler(e)}>
				<PanelDefault headerText="Add Gear">
					<CategoryField/>
					<NameField/>
					<DescriptionField/>
					<WeightField/>
					<RatingField/>
					<Button type="submit" color="primary">
						Add Gear
					</Button>
				</PanelDefault>
			</Form>
		);
		
	}
}