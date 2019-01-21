import  * as React from "react";
import { bindActionCreators } from "redux"; 
import { connect } from "react-redux";
import { selectedEvent } from "../actions/index"


interface IProps {
    events : [],
    selectedEvent ? (event : any)  : any 
}

class EventList extends React.Component<IProps> {
    createList = () =>{
        const {events, selectedEvent} = this.props
        return events.map((event : any) => {
            return <li
                key = {event.id}
                onClick = {selectedEvent}
            >
                {event.startTime}
            </li>
        })
    }
    render(){
        return (
            <ul>
                {this.createList()}
            </ul>
        )
    }
}

const mapStateToProps = (state : any) => {
    return {
        events : state.events
    }
}

const matchDispatchToProps = (dispatch : any) => {
    return bindActionCreators({selectedEvent : selectedEvent}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventList)