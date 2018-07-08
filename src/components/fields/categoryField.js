import React, { Component } from 'react';
import { Input } from 'reactstrap';
import FieldWrapper from './fieldWrapper';

export default class CategoryField extends Component {
	render() {
		return (
			<FieldWrapper label="Category">
				<Input type="select" name="category" required>
					<option />
					<option>Gear</option>
					<option>Food</option>
					<option>Water</option>
				</Input>
			</FieldWrapper>
		);
	}
}