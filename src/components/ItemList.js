import React, {Component} from 'react';

class Itemlist extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          done : props.done,
          hide : false,
          text : props.text
        };
      }
     
         sendData = async () => {
          this.props.parentCallback(this.props = (this.state));
      }
    render(){
        let tern = this.state.done ? "done":""

        return (
          <span>
              <span className={"item "+tern}>{ this.props.text }</span>
              
          </span>
        )
    }    
}

export default Itemlist
