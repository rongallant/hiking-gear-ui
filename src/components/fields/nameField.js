import React, { Component } from 'react';
import { Input } from 'reactstrap';
import FieldWrapper from './fieldWrapper';

export default class NameField extends Component {
	render() {
		return (
			<FieldWrapper label="Category">
				<Input name="name" required />
			</FieldWrapper>
		);
	}
}