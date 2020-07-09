import React, {Component} from 'react'
import ItemList from './ItemList'

class AppTodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            inputVal : "",
            message : ""
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.delItem = this.delItem.bind(this)
    }
    ChangedHandler = (e) => {
        let inputVal = e.target.value;
        this.setState({
            inputVal:inputVal
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        let list = this.state.list
        if(this.state.inputVal != 0){
            list.push(<ItemList parentCallback = {this.callbackFunction}
                key = {event.target.value}
                text = {this.state.inputVal} 
                done = {false}
                message =  ""
                />)
           this.setState({
               list : list,
               inputVal:""
            })
       }
       else{
          document.getElementById('error').innerHTML = "Veuillez renseigner une tâche avant de valider"
          setTimeout(function(){ document.getElementById('error').innerHTML = ""}, 3000);
       }
      }
      callbackFunction = (childData) => {
            this.setState({message: childData})
        }
      Boucle(){
          let list = this.state.list
          console.log(list)
         return list.map((item,index) => 
            <div key={index} className="delete">
                {index}
                <form  className="flexList" >
                    {item}
                    <input type="hidden" name="item" value={index}/>
                    <button onClick={this.delItem.bind(this,item)} type="submit">X</button>
                </form> 
                {/* {console.log(item.props)} */}
            </div>
        )

      }
      delItem(item,event){
        event.preventDefault();
        let list = this.state.list
        let index = list.indexOf(item)
        console.log(list)
        list.splice(index, 1)
        console.log(list)
        this.setState({list : list})
      }

    render(){
        return(
           <div className="container">
               <h1>{this.state.list.length === 0 ? "Ajouter une tâche":("j'ai "+this.state.list.length+ (this.state.list.length > 1 ? " tâches":" tâche"))}  à réaliser </h1>
               <form >
                    <input 
                    onChange={(e)=>this.ChangedHandler(e)}
                    type="text" 
                    value={this.state.inputVal}
                    
                    />
                    <button onClick={(e) => this.handleSubmit(e)} >valider</button>
                </form>
               <div>               
                    {this.Boucle()}
               </div>
           </div>
        )
    }
}

export default AppTodoList