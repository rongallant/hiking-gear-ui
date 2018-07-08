import React, { Component } from 'react';
import {Button, Form, FormFeedback, Input, Label, FormGroup} from 'reactstrap';

import PanelDefault from './components/panels/panelDefault';
import AppHeader from './components/panels/appHeader'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <div className="container">
        <Form method="post">
            <PanelDefault headerText="Add Gear">
              <FormGroup>
                <Label>Category</Label>
                <Input type="select" name="category" required>
                  <option></option>
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
                <Input name="description" type="textarea" required />
              </FormGroup>
              <FormGroup>
                <Label>Weight (g)</Label>
                <Input name="weightGrams" type="number" />
              </FormGroup>
              <FormGroup>
                <Label>Rating</Label>
                <Input type="select" name="rating">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Input>
              </FormGroup>
              <Button type="submit" color="primary">Add Gear</Button>
            </PanelDefault>
          </Form>
        </div>
    </div>
    );
  }
}

export default App;
