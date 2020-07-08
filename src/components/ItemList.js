import React, {Component} from 'react';

class Itemlist extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          done : props.done,
          hide: false,
          text : props.text
        };
      }
      done(event){
        event.preventDefault();
        this.setState({
            done : true,
            hide:true
        })
        console.log(event.target.value)
      }
    render(){
        let tern = this.state.done ? "done":""
        return (
            <div>
                <span className={"item "+tern}>{ this.state.text }</span>
                <button className={!this.state.hide ? "":"hide"} onClick={(e) => this.done(e)} >ok</button>
            </div>
        )
    }    
}

export default Itemlist
