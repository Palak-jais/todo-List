import React from "react";
import {deleteTodo,doneTodo} from './api'
import Task from './Task';
import Loading from './Loading';
function List({list,loading,setList,setisUpdate,setName,setTodoid}){
    const updateMode=(_id,name)=>{
        setisUpdate(true)
        setName(name)
        setTodoid(_id);
      }
    return(
        <div className='todos'>
     {
      
      loading?<Loading/>:
      list.map((item) =>{
        return <Task item={item} setList={setList} key={item._id}
        deleteTodo={()=>deleteTodo(item._id,setList)}
        updateTodo={()=>updateMode(item._id,item.name)}
        doneTodo={()=>doneTodo(item._id,setList)}

        />
        
      })
     }
     </div>
    )
}
export default List;