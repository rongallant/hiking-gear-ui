import React, { Component } from 'react';

class AppInputField extends Component {
  
  render() {
    
    return (
      <div>
        <label>{this.props.label}<label>
        <input {...this.props.attributes} />
      </div>
    );
  }
}

export default AppInputField;