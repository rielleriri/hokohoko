import { React, Component } from 'react';

class Comparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: '',
      price: ''
    };
  }

  render() {
    return (
      <div>
      <div>The price is: {this.props.price}</div>
      <div>The platform is: {this.props.platform}</div>
    </div>
    )
  }

}
export default Comparison;