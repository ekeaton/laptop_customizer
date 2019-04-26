import React, { Component } from 'react';
import './SummaryOption.css';

class SummaryOptions extends Component {
  render() {
    return(
      <div className="summary__option">
          <div className="summary__option__label">{this.props.typeName}  </div>
          <div className="summary__option__value">{this.props.name}</div>
          <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(this.props.cost) }
          </div>
      </div>
  )
  }
}

export default SummaryOptions;