import React, { Component } from 'react';
import { FormFeedback, Input, Label, Form, FormGroup } from 'reactstrap';
import FieldWrapper from './fieldWrapper';

export default class WeightField extends Component {
	render() {
		return (
			<FieldWrapper label="Weight (g)">
				<Input name="weightGrams" type="number" />
			</FieldWrapper>
		);
	}
}