import { Component } from "react";

class CalcButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>{this.props.value}</button>
      </div>
    );
  }
}
export default CalcButton;
