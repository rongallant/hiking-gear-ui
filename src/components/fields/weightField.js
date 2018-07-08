import React, { Component } from 'react';
import { Input } from 'reactstrap';
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