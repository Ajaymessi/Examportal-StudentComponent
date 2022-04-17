import React, { Component } from 'react'

class StudentComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            studentName:'',
            password:'',
            emailId:'',
            mobileNo:'',
            city:'',
            country:'',
            zipCode:'',
            
        }

        this.changeStudentNameHandler=this.changeStudentNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeMobileNoHandler=this.changeMobileNoHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);               
        this.changeCountryHandler=this.changeCountryHandler.bind(this);
        this.changeZipCodeHandler=this.changeZipCodeHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    changeStudentNameHandler=(event)=>{
        this.setState({studentName: event.target.value});
    }

    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }

    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }

    changeMobileNoHandler=(event)=>{
        this.setState({mobileNo: event.target.value});
    }
    changeCityHandler=(event)=>{
        this.setState({city: event.target.value});
    }
    changeCountryHandler=(event)=>{
        this.setState({country: event.target.value});
    }
    changeZipCodeHandler=(event)=>{
        this.setState({zipCode: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={studentName: this.state.studentName,password: this.state.password,emailId: this.state.emailId, mobileNo: this.state.mobileNo,city: this.state.city,country: this.state.country,zipCode:this.state.zipCode};
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel(){
        this.props.history.push();
    }

    render(){
        return(
            <div>

            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Student Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Student Name:</label>
                                    <input type ="text" placeholder="Student Name" name="firstName" className="form-control"
                                    value={this.state.studentName} onChange={this.changeStudentNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type ="email" placeholder="Email" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type ="password" placeholder="Password" name="Password" className="form-control"
                                    value={this.state.password} onChange={this.changePasswordHandler}/>
                                </div>
                                
                                <div className="form-group">
                                    <label>MobileNo:</label>
                                    <input type="number" placeholder="MobileNo" name="MobileNo" className="form-control"
                                    value={this.state.mobileNo} onChange={this.changeMobileNoHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>City:</label>
                                    <input type ="text" placeholder="City" name="City" className="form-control"
                                    value={this.state.city} onChange={this.changeCityHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Country:</label>
                                    <input type ="text"  placeholder="Country" name="Country" className="form-control"
                                    value={this.state.country} onChange={this.changeCountryHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>ZipCode:</label>
                                    <input type="number" placeholder="ZipCode" name="ZipCode" className="form-control"
                                    value={this.state.zipCode} onChange={this.changeZipCodeHandler}/>
                                </div>
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default StudentComponent
