import { Component } from "react";

import "./search-panel.css";

// The component is responsible for the employee search panel
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        // The component's local state stores the entered search text
        this.state = {
            term: ""
        }
    }

    // The method is called when the text in the input field changes
    // It updates the local state and passes the search term to the parent component via onUpdateSearch
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            // Input field to search for employees
            <input
                type="text"
                placeholder="Find employee"
                className="form-control search-input"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
    }
}

export default SearchPanel;