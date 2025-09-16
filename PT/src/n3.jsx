import React from "react";

class n extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.state = {
      secretMessage: "El águila vuela a medianoche",
    };
    return (
      <>
        <p>Cofre del tesoro</p>
      </>
    );
    
  }
}

export default n;