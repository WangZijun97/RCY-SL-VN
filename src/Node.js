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

    imggen(obj) {
        if (obj instanceof Function) {
            return obj();
        } else if (obj === undefined) {
            return <React.Fragment />;
        } else return obj;
    }
    
    textgen(txt) {
        if (txt instanceof Function) {
            return txt()
        } else {
            return (<p>{txt}</p>)
        }
    }
    
    imggen(img) {
        if (img instanceof Function) {
            return img()
        }
        return img
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
                {this.imggen(this.props.data.img)}
                {this.textgen(this.props.data.text)}
                <div class="btn-container">{this.props.data.option.map(opt => this.buttongen(opt))}</div>
            </div>)
    }
}

export default Node
