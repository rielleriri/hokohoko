import { Button } from 'react-bootstrap';
import { React, Component } from 'react';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <Button>{number}</Button>
);

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        };
    }

    render() {
        return (
            <div>
                {listItems}
            </div>
        )
    }

}
export default Lists;