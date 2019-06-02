import React, {Component} from 'react';

class ClockApp extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
        date: new Date()
        });
    
    //setState can accept previuos state values also
    // this.setState((prevstate, props)=>{
    //     console.log('prevstate', prevstate);
    //     console.log('props', props);
    // })

    }
    render(){
        return (
            <div>
            <h1>Clock App</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ClockApp;