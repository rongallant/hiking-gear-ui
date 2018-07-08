import React, { Component } from 'react';
import { Input } from 'reactstrap';
import FieldWrapper from './fieldWrapper';

export default class RatingField extends Component {
	render() {
		return (
			<FieldWrapper label="Rating">
				<Input type="select" name="rating">
					<option value=""></option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Input>
			</FieldWrapper>
		);
	}
}