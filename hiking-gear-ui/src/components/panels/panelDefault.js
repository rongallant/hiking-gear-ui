import React, { Component } from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

class PanelDefault extends Component {
  
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            {this.props.headerText}
          </CardTitle>
          {this.props.children}
        </CardBody>
      </Card>
    );
  }
}

export default PanelDefault;