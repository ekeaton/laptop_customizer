import React, { Component } from 'react';
import './Summary.css';
import SummaryOptions from '../SummaryOptions/SummaryOptions';
import SummaryTotal from '../SummaryTotal/SummaryTotal';



class Summary extends Component {
    render() {
        const summary = Object.keys(this.props.selected)
        .map((key, index) => 
          <div key={index}>
            <SummaryOptions cost={this.props.selected[key].cost} name={this.props.selected[key].name} typeName={key} />
          </div>
        )

        const total = Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);

          return (
            <section className="main__summary">
               <h3>NEW GREENLEAF 2018</h3>
               {summary}
               <SummaryTotal total={total} />
              </section>
        );
    }
}


export default Summary; 


