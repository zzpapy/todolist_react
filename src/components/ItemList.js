import React, {Component} from 'react';

class Itemlist extends Component{
    constructor(props) {
        let text = props.text
        let done = props.done
        super(props);
        this.state = {
          count: 0,
          done : props.done,
          text : props.text
        };
      }
      done(event){
        event.preventDefault();
        this.setState({
            done : true,
        })
        console.log(event.target.value)
      }
    render(){
        let tern = this.state.done ? "done":""
        return (
            <div>
                <span className={"item "+tern}>{ this.state.text }</span>
                <button onClick={(e) => this.done(e)} >ok</button>
            </div>
        )
    }    
}

export default Itemlist
