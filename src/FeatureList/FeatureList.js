import React, { Component } from 'react';
import FeatureOption from '../FeatureOption/FeatureOption';
import './FeatureList.css';


class FeatureList extends Component {
  render() {
    const options = this.props.feature.map((item, index) => {
      return (
      <div key={index}>
                <FeatureOption 
                   featureType={this.props.index}
                    cost={item.cost} 
                    selected={this.props.selected[this.props.index]} 
                    item={item} 
                    handleUpdate={this.props.handleUpdate}
                />
            </div> 
          )
       });

     return ( 
      <div>
        { options }
      </div>
  )
 }
}


export default FeatureList;

