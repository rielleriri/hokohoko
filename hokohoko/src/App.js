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
            nextId: 0,
            selectedId: 0
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(itemToBeDeleted) {
        const newItems = this.state.items.filter(item => {
          return item.id !== itemToBeDeleted.id;
        });
        this.setState({
          items: newItems
        });
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
        // ID of selected item here
            if (item.id.toString() === this.state.selectedId.toString()) {
              item.platforms.push({ name: inputs.platform.value, end_price: inputs.endPrice.value })
            }
            return item;
          });
        }
    
        this.setState({
          items: newItems
        });
    }

    handleSelect(e) {
        e.preventDefault();
        let newSelected = e.target.id;

        this.setState({
            selectedId: newSelected
          });
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
                    onSelect={this.handleSelect}
                />
            </div>
        );
    }
}

export default App;