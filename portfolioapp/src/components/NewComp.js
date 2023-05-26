import React, {Component} from 'react';
import one from "./img/one.jpg"
import two from "./img/two.jpg"

class NewComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "subscribe to me",
            sub: "Subscribe",
            imageURL: one
        }
    }
    style={
        fontStyle: "italic",
        color:"purple"
    }
    Buttonchange=()=>{
        this.setState({
            message: "hit the bell icon",
            sub: "Subscribed"
        })
    }
    imageChange=()=> {
        this.setState({
            imageURL: two,
            message: "Thanks you perv"
        })
    }
    render(){
        return (
            <div className="App">
                <h3 style={this.style}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p></p>
                <img style={{width: "30px", height: "30px"}} src={this.state.imageURL} onClick={this.imageChange} alt="" />
            </div>
        )
    }
}

export default NewComp