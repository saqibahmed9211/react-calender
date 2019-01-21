import  * as React from "react";
import { bindActionCreators } from "redux"; 
import { connect } from "react-redux";
import "../app.css"
import { details_of_event } from "../components/event-details"
import { timeLine, getRecordsWithinTimeRange, getTodaysRecords } from "../components/component-index";
import { increamentDate, decrementDate, deleteEvent, updateEvent } from "../actions/index"

interface IProps {
    events : [],
    currentSelectedDate : any
    deleteEvent ? (event : any) : any,
    updateEvent ? (event :any): any,
}

class EventDetails extends React.Component<IProps>{
    createList = () =>{
        let todaysRecords = getTodaysRecords(this.props.events, this.props.currentSelectedDate)
        return timeLine.map((time : any) => {
            let recordWithInTimeRange = getRecordsWithinTimeRange(todaysRecords,time)
            return <div className = "row">
                        <div className = "col-3 time-line content-padding center">
                            {time.hour} {time.type}
                        </div>
                        <div className = "col-7">
                            {details_of_event(recordWithInTimeRange, this.props.deleteEvent, this.props.updateEvent)}
                        </div>
                    </div>
        })
    }

    render(){
        const { events } = this.props
        return(
            <div className= "row data-container ">
                {this.createList()} 
            </div>
        )
    }
}

let mapStateToProp = (state : any) => {
    let events = state.actionReducer.events
    let currentSelectedDate = state.actionReducer.currentSelectedDate
    return {
        events : events,
        currentSelectedDate : currentSelectedDate
    }
}

const matchDispatchToProps = (dispatch : any) => {
    return bindActionCreators({deleteEvent : deleteEvent, updateEvent : updateEvent}, dispatch)
}

export default connect(mapStateToProp, matchDispatchToProps)(EventDetails)