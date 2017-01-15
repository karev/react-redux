import React, { Component } from 'react';


class TableColumn extends Component{
  constructor(props) {
    super(props);
  }

  renderColumn(column, label, fixed = false) {
    return (
      <table ref={fixed ? 'fixed' : ''} className={fixed ? 'table-fixed_column carousel-cell' : 'carousel-cell'}>
        <tbody>
          <tr>
            <th>{label}</th>
          </tr>
          {data.map((item, i) => {
            return(<tr key={i}><td>{item[column]}</td></tr>);
          })}
        </tbody>
      </table>
    );
  }

  render () {
    return(

    );
  }
}
