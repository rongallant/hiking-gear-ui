import React, { Component } from 'react';
import { FormFeedback, Label, FormGroup } from 'reactstrap';

export default class FieldWrapper extends Component {

	render() {
		const {label, children} = this.props; 
		return (
			<FormGroup>
				<Label>
					{label}
				</Label>
				{children}				
				<FormFeedback>
					{label} Required.
				</FormFeedback>
			</FormGroup>
		);
	}
}