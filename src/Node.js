import React from 'react';
import './App.css';
import {getNode} from './data';
//import pic from './bridge.jpg';

export class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.textgen = this.textgen.bind(this)
        this.buttongen = this.buttongen.bind(this)
        this.doBgmChange = this.doBgmChange.bind(this)
    }

    doBgmChange(next, flags) {
        const bgm = getNode(next).bgm;
        if (bgm !== undefined) {
            this.props.onMusicChange(bgm, flags);
        }
    }
    
    handleClick(opt) {
        let next = opt.next
        if (opt.next instanceof Function) {
            next = opt.next(this.props.flags)
        }

        if ("fx" in opt) {
            return () => {
                this.props.trigger(next);
                this.props.dispatch(opt.fx);
                this.doBgmChange(next, this.props.flags)
            }
        }
        
        return () => { 
            this.props.trigger(next) ;
            this.doBgmChange(next, this.props.flags)
        }
    }

    imggen(obj) {
        if (obj instanceof Function) {
            return obj(this.props.flags);
        } else if (obj === undefined) {
            return <React.Fragment />;
        } else return obj;
    }
    
    textgen(txt) {
        if (txt instanceof Function) {
            return txt(this.props.flags);
        } else {
            return (<p>{txt}</p>)
        }
    }
    
    buttongen(opt, i) {
        if ("condition" in opt) {
            if (!opt.condition(this.props.flags)) {
                return
            }
        }
        return (<button key={i} onClick={this.handleClick(opt)}>{opt.text instanceof Function ? opt.text(this.prop.flags) : opt.text}</button>)
    }
    
    render() {
        
        return (
            <div className="Node">
                {this.imggen(this.props.data.img)}
                {this.textgen(this.props.data.text)}
                <div className="btn-container">{this.props.data.option.map((opt, i) => this.buttongen(opt, i))}</div>
            </div>)
    }
}

export default Node
