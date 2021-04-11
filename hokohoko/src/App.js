// React
import { React, Component } from 'react';
// Others

// Components
import Header from './components/Header';
import Router from './components/Router';
// CSS
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            nextId: 0
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        const inputs = e.target.getElementsByTagName('input');
        let newItems = this.state.items;

        if (e.target[0].value.length !== 0) {
            newItems.push({ name: inputs.itemName.value, id: this.state.nextId, platforms: [] });
            this.setState({
                items: newItems,
                nextId: this.state.nextId + 1
            });
        }
    }

    handleUpload(e) {
        e.preventDefault();
        const inputs = e.target.getElementsByTagName('input');
        let newItems = this.state.items;

        console.log(inputs.platform.value)
        console.log(inputs.endPrice.value)

        if (e.target[0].value.length !== 0) {
          newItems = newItems.map(item => {
        // ID of selected item here (replace 0)
            if (item.id === 0) {
              item.platforms.push({ name: inputs.platform.value, end_price: inputs.endPrice.value })
            }
            return item;
          });
        }
    
        this.setState({
          items: newItems
        });

        console.log(this.state.items)

    }

    render() {
        return (
            <div>
                <Header />
                <Router
                    items={this.state.items}
                    onAdd={this.handleAdd}
                    onDelete={this.handleDelete}
                    onUpload={this.handleUpload}
                    onEdit={this.handleEdit}
                />
            </div>
        );
    }
}

export default App;