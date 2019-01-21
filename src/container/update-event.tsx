import * as React from "react";
import { addEvent } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { adjustDatepickerTime } from "../actions/index"

const updateComponent = (event: any, updateFun : any) => {
    let startPickerValue = adjustDatepickerTime(event.location.params.event.startTime)
    let endPickerValue = adjustDatepickerTime(event.location.params.event.endTime)
    let handleSubmit = (data :any) => {
        try {
            event.location.params.updateFun(data)
            event.history.push('/');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="row add-from-padding">
            <div className="col-4">            
            </div>
            <div className="col-4 add-form-padding">
                <form onSubmit = {handleSubmit}>
                    <div className= "row content-padding">
                        <div className ="col-3 center">
                            <label htmlFor="startDate">Start Date</label>
                        </div>
                        <div className="col-7">
                            <input id="startDate" name="startDate" type="datetime-local" defaultValue={startPickerValue}/>
                        </div>
                    </div>

                    <div className="row content-padding">
                        <div className ="col-3 center">
                            <label htmlFor="endDate">End Date</label>
                        </div>
                        <div className="col-7">
                            <input id="endDate" name="endDate" type="datetime-local" defaultValue={endPickerValue}/>
                        </div>
                    </div>

                    <div className="row content-padding">
                        <div className ="col-3 center">
                            <label htmlFor="agenda">Agenda</label>
                        </div>
                        <div className="col-7">
                            <input id="agenda" name="agenda" type="text" defaultValue={event.location.params.event.agenda || ""} autoComplete="off"/>   
                        </div>
                    </div>
                    <input type="hidden" name="id" id="id" defaultValue={event.location.params.event.id}></input>

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

const mapDispatchToProps = (dispatch : any) => {
    // return bindActionCreators({updateFun : this.updateFun}, dispatch)
}

export default connect(null,mapDispatchToProps)(updateComponent)