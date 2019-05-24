import React, { Component } from "react";

export const AppContext = React.createContext({});

export class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "andrew"
        }
    }

    render() {
        return (
            <AppContext.Provider value={{name: this.state.name}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
