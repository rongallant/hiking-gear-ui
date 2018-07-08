import React, { Component } from 'react';
import { Input } from 'reactstrap';
import FieldWrapper from './fieldWrapper';

export default class DescriptionField extends Component {
	render() {
		return (
			<FieldWrapper label="Description">
				<Input name="description" type="textarea" />
			</FieldWrapper>
		);
	}
}