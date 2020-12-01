import React from 'react';
import './App.css';
//import pic from './bridge.jpg';

export class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.textgen = this.textgen.bind(this)
        this.buttongen = this.buttongen.bind(this)
    }
    
    handleClick(opt) {
        if ("fx" in opt) {
            return () => {
                this.props.trigger(opt.next)
                opt.fx()
            }
        }
        return () => this.props.trigger(opt.next)
    }
    
    textgen(txt) {
        if (txt instanceof Function) {
            return txt()
        } else {
            return (<p>{txt}</p>)
        }
    }
    
    buttongen(opt) {
        if ("condition" in opt) {
            if (!opt.condition()) {
                return
            }
        }
        return (<button onClick={this.handleClick(opt)}>{this.textgen(opt.text)}</button>)
    }
    
    render() {
        
        return (
            <div className="Node">
                {this.props.data.img}
                {this.textgen(this.props.data.text)}
                <div>{this.props.data.option.map(opt => this.buttongen(opt))}</div>
            </div>)
    }
}

export default Node