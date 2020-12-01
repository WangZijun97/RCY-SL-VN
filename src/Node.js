import React from 'react';
import './App.css';
//import pic from './bridge.jpg';

export class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
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
    
    render() {
        
        function textgen(txt) {
            if (txt instanceof Function) {
                return txt()
            } else {
                return (<p>{txt}</p>)
            }
        }
        
        return (
            <div className="Node">
                {this.props.data.img}
                {textgen(this.props.data.text)}
                <div class="btn-container">{this.props.data.option.map(opt => {return (<button onClick={this.handleClick(opt)}>{textgen(opt.text)}</button>)})}</div>
            </div>)
    }
}

export default Node
