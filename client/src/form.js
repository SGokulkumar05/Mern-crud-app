import React,{Component} from "react";
import "./App.css";
class Messageform extends Component{
  constructor(){
    super();
    this.state={
        _id:"",
        Notes:"",
        idedit:false 
    }
  }
  infochange=(e)=>{
     const notes = e.target.value
      this.setState({
          Notes:notes     
        })

  }
  infosubmit=(e)=>{
      if(!this.state.idedit){
        let value={
            idedit:this.state.idedit,
            _id:this.state._id,
            Notes:this.state.Notes
          }
         this.props.mydata(value);
      }
      else{
          e.preventDefault();
          let value={
            idedit:this.state.idedit,
            _id:this.state._id,
            Notes:this.state.Notes
          }
          console.log(value)
         this.props.mydata(value);
      }
    
  }
  componentWillReceiveProps(props){
    if(props.setform._id!=null){
      this.setState({
        idedit:true,
        Notes:props.setform.Notes,
        _id:props.setform._id
      })
    }
  }
  render(){
    return(

            <form onSubmit={this.infosubmit}>
                <div className="form-group">
                    <input className="form-control" id="notes" placeholder="Enter Today's Notes" 
                    onChange={this.infochange}
                    value={this.state.Notes}
                    notes="Notes"
                    />
                </div>
                <button className="submit" className="btn btn-primary">{this.state.idedit ? "Update":"Create"}</button>
            </form>
    

    )
  }
}

export default Messageform;
