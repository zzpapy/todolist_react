import React, {Component} from 'react'
import ItemList from './ItemList'

class AppTodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            inputVal : ""
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.delItem = this.delItem.bind(this)
    }
    ChangedHandler = (e) => {
        let inputVal = e.target.value;
        this.setState({
            inputVal:inputVal
        })
        console.log(e.target.value)
        // May be call for search result
    }
    handleSubmit(event) {
        event.preventDefault();
        let list = this.state.list
        list.push(<ItemList 
            key = {event.target.value}
            text = {this.state.inputVal} 
            done = {false}
            />)
       console.log(event.target.value)
       this.setState({
           list : list,
           inputVal:""
        })
       console.log(this.state.list)
      }
      Boucle(){
          let list = this.state.list
         return list.map((item,index) => 
            <div key={index} className="delete">
                <form  className="flexList" onSubmit={this.delItem.bind(this,item)}>
                    {item}
                    <input type="hidden" name="item" value={index}/>
                    <button type="submit">X</button>
                </form>                
            </div>
        )

      }
      delItem(item,event){
        event.preventDefault();
        let list = this.state.list
        let index = list.indexOf(item)
        list.splice(index, 1)
        this.setState({list : list})
      }

    render(){
        return(
           <div className="container">
               <h1>{this.state.list.length > 1 ? "Tâches":"Tâche"}  à réaliser : {this.state.list.length} </h1>
               <div>               
               {this.Boucle()}
               </div>
               <form >
                <input 
                onChange={(e)=>this.ChangedHandler(e)}
                type="text" 
                value={this.state.inputVal}
                
                />
                <button onClick={(e) => this.handleSubmit(e)} >valider</button>
            </form>
           </div>
        )
    }
}

export default AppTodoList