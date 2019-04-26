import React, { Component } from 'react';
import './Features.css';
import FeatureList from '../FeatureList/FeatureList';


class Features extends Component {
  render() {
    const features = Object.keys(this.props.feature)
    .map(key => {
        return <div className="feature" key={key}>
                <div className="feature__name">{key}</div>
                <ul className="feature__list">
                  <FeatureList 
                    index={key} 
                    feature={this.props.feature[key]} 
                    selected={this.props.selected} 
                    handleUpdate={this.props.handleUpdate}
                  />
                </ul>
                </div>
            })

    return(
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    )
  }
}

export default Features;