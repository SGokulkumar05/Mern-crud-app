import React from "react";
import axios from 'axios';
import Messageform from "./form.js";
import Table from "./table.js";
import "./App.css"
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      edit:[]
    }
  }
  create=(data)=>{
    if(!data.idedit){
      axios.post("/",{Notes:data}).then(res=>{
      this.getall();
      })
    }
    else{
      axios.put("/update",{Notes:data}).then(res=>{
      this.getall();
      })
    }
  }
  componentDidMount(){
    this.getall();
  }
  getall(){
    axios.get("/").then(res=>{
      this.setState({
        data:res.data
      })
    })
  }
  update=(data)=>{
    this.setState({
      edit:data
    })
    this.getall();
  }
  delete=(data)=>{
    var option=window.confirm(`Are You want's to Delete this Data Permanently ${data.Notes}`)
    if(option){
      axios.delete(`/delete/${data._id}`).then(res=>{
      this.getall();
    })
    }
  }
  render(){
    return(
      <div className="body">
        <div className="container m-3">
          <div className="row">
            <div className="col-6">
                <Messageform mydata={this.create}  setform={this.state.edit}/>
            </div>
            <div className="col-6">
                <Table getdata={this.state.data} setdata={this.update} del={this.delete}/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
