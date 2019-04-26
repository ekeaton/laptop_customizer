import React, { Component } from 'react';



class FeatureOption extends Component {
  render() {
      
      const selectedClass = this.props.item.name === this.props.selected.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;

 return ( 
   <li className="feature__item">
      <div 
        className={featureClass}
        onClick={e => this.props.handleUpdate(this.props.featureType, this.props.item)}>
            { this.props.item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.item.cost) })
      </div>
    </li>
  )
 }
}


export default FeatureOption;