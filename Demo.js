import React, { Component } from "react";
import Tasks from "./Tasks";
class ToDo extends Component {

    state= {
        tasks: [ ],
        inputValue:" ",
    }

    handleChange=(event)=> {
       this.setState( {
         inputValue: event.target.value  
       })
    }
       addTask=()=> {
           const{inputValue}=this.state;
           const newTasks=[...this.state.tasks];
           newTasks.push(inputValue)
           this.setState({
               tasks: newTasks,
               inputValue: " ",
           })

       }
    
    render () {
        const {inputValue, tasks}=this.state
        return (
         <div>
            <input type="text" placeholder="Add new task" value={inputValue} onChange={this.handleChange}/>
            <input type="button" value="Add" onClick={this.addTask}/> 
            <ol>
            {tasks.map((task)=>{
                return <Tasks data={task}/>
    })
    } 
            </ol>
         </div>
            
        )
}
}


export default ToDo;
