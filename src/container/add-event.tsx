import * as React from "react";
import { addEvent } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

interface IProps {
     addEvent  ? (event : any) : any ,
     history : any
}

class AddNewEvent extends React.Component<IProps>{
    constructor(props : any){
        super(props)
    }

    render(){
        const handleSubmit =(event :any) =>{
            this.props.addEvent(event)
            this.props.history.push('/');
        }
        return (
                <div className="row add-from-padding">
                    <div className="col-4">
                        
                    </div>
                    <div className="col-4 add-form-padding">
                        <form onSubmit={handleSubmit} className="row">
                            <div className ="row content-padding">
                                <div className ="col-3 center">
                                    <label htmlFor="startDate">Start Date</label>
                                </div>
                                <div className="col-7">
                                    <input id="startDate" name="startDate" type="datetime-local"/>
                                </div>
                            </div>

                            <div className="row content-padding">
                                <div className="col-3 center">
                                    <label htmlFor="endDate">End Date</label>
                                </div>
                                <div className="col-7">
                                    <input id="endDate" name="endDate" type="datetime-local"/>
                                </div>
                            </div>

                            <div className="row content-padding">
                                <div className ="col-3 center">
                                    <label htmlFor="agenda">Agenda</label>
                                </div>
                                <div className="col-7">
                                    <input id="agenda" name="agenda" type="text" autoComplete="off"/>
                                </div>
                            </div>

                            <div className="row center content-padding">
                                <div className="col-3"></div>
                                <div className="col-7 left">
                                    <input type="submit" className="save-btn" value="submit"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
        )
    }
}



const mapDispatchToProps = (dispatch : any) => {
    return bindActionCreators({addEvent : addEvent}, dispatch)
}

export default connect(null,mapDispatchToProps)(AddNewEvent)