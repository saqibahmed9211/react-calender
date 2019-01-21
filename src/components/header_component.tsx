import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formatDate } from "../components/component-index"
import { increamentDate, decrementDate, getTodaysData } from "../actions/index"
import { BrowserRouter as Router, Route,Link, withRouter } from 'react-router-dom';
import "../app.css"

interface IProps {
    currentSelectedDate ? : any,
    increamentDate ? (event : any ): any,
    decrementDate ?  (event : any) : any,
    getTodaysData ? (event : any) : any
}

class HeaderComp extends React.Component<IProps>{
    render(){
        let date = formatDate(this.props.currentSelectedDate)
        return(
            <div className="row container">
                <div className="col-3 center">
                   <button className="add-btn" onClick={this.props.getTodaysData} data-val = {this.props.currentSelectedDate}>Today</button>
                </div>
                <div className="col-3">
                    <button className="navigate-btn" onClick={this.props.decrementDate} data-val = {this.props.currentSelectedDate}>Prev</button>
                    <button className="navigate-btn" onClick={this.props.increamentDate} data-val={this.props.currentSelectedDate}>Next</button>
                </div>
                <div className="col-3 date-padding">{formatDate(this.props.currentSelectedDate)}</div>
                <div className="col-3">
                    <Link to='/addEvent'><button className="add-btn">Add Me</button></Link>
                </div>
            </div>
        )
    }
}

const matchStateToProps = (state : any) => {
    return {
        currentSelectedDate : state.actionReducer.currentSelectedDate
    }
}

const matchDispatchToProps = (dispatch : any) => {
    return bindActionCreators({increamentDate : increamentDate, decrementDate : decrementDate, getTodaysData : getTodaysData}, dispatch)
}



export default connect(matchStateToProps, matchDispatchToProps)(HeaderComp)

