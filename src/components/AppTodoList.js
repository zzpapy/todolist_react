import React, {Component} from 'react'
import ItemList from './ItemList'

let count = 0
class AppTodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            inputVal : "",
            message : ""
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.done = this.done.bind(this);
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
        console.log(this.state.inputVal.length)
        if(this.state.inputVal.length !== 0){
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
        getCount(){
            return count++
        }
        rotateLeft = (arr, old_index, new_index) => {
            if (new_index >= arr.length) {                
                new_index = 0
            }
            
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
            
            this.setState({list: arr});
        }
        done(event,item){
            event.preventDefault();
            document.getElementById(item).classList.add("done")
              
          }
      Boucle(){
          let list = this.state.list
        
          return list.map((item,index) => 
          <div key={index}>
            <div key={index} className="delete">
                <form  className="flexList">
                    <table id={index} className="tableList">
                        <tbody>
                            <tr className="tableItem">
                                 <td onClick={this.rotateLeft.bind(this,list,index,(index - 1))}><i className="fas fa-arrow-up "></i></td>
                                 <td onClick={this.rotateLeft.bind(this,list,index,(index + 1))}><i className="fas fa-arrow-down "></i></td>           
                                <td>
                                    {item}
                                </td>
                                <td>
                                    <button className={!this.state.hide ? "":"hide"} onClick={(e) => this.done(e,index)} >ok</button>
                                </td>
                                <td>
                                    <input type="hidden" name="item" value={index}/>
                                    <button onClick={this.delItem.bind(this,item)} type="submit">X</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form> 
                {/* {console.log(item.props)} */}
            </div>
         </div>
        )
      }
      delItem(item,event){
        event.preventDefault();
        let list = this.state.list
        let index = list.indexOf(item)
        console.log(index)
        delete list[index]
        console.log(list)
        this.setState({list : list})
      }

    render(){
        let length = 0
        let list = this.state.list
        for( let i= 0;i<list.length;i++){
            if(typeof list[i] != "undefined"){
                length++
            }
        }
        return(
           <div className="container">
               
               <h1>{length === 0 ? "Ajouter une tâche":("j'ai "+length+ (length > 1 ? " tâches":" tâche"))}  à réaliser </h1>
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