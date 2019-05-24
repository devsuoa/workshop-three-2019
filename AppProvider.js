import React, { Component } from "react";

export const AppContext = React.createContext({});

export class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    updateJobs = (jobs) => {
        console.log(jobs);
        this.setState({
            jobs: jobs
        })
        
    }

    render() {
        return (
            <AppContext.Provider value={{jobs: this.state.jobs, updateJobs: this.updateJobs}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
