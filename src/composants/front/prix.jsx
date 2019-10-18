import React, { Component } from "react";

class Prix extends Component {
  state = {};

  style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2>{this.props.tutu}</h2>
        </div>
        <div className="card-body" style={this.style}>
          <ul className="list-unstyled">
            {this.props.description.map(d => {
              return <li key={d}>{d}</li>;
            })}
          </ul>
          <button className={this.classBtn()}>texte</button>
        </div>
      </div>
    );
  }

  classBtn() {
    if (this.props.btn === false) {
      return "btn btn-primary btn-lg";
    } else {
      return "btn btn-warning btn-lg";
    }
  }
}

export default Prix;
