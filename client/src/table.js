import React from "react";
import "./App.css"
class Table extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
        <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Notes</th>
            <th scope="col">NotesDate</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {
            this.props.getdata.length > 0 ?
                (
                    this.props.getdata.map(e => 
                        <tr key={e._id}>
                            <td>{e.Notes}</td>
                            <td>{e.Time.slice(0,10)}</td>
                            <td><button className="btn btn-primary"
                            onClick={event => { this.props.setdata(e)}}>
                                ✎</button></td>
                            <td><button className="btn btn-primary" 
                            onClick={event => { this.props.del(e)}}>
                              X</button></td>
                        </tr>
                    )
                )
                :
                (
                    <tr>
                        No Data
                    </tr>
                )
        }
        </tbody>
      </table>
    )
  }
}

export default Table;
