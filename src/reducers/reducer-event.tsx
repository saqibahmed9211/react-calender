import { any } from "prop-types";
import { getTimezoneDifference } from "../actions/index"

const dataArray = [
    {
        "startTime": "Sun Jan 20 2019 14:39:02 GMT+0530 (India Standard Time)",
        "endTime": "Sun Jan 20 2019 14:52:02 GMT+0530 (India Standard Time)",
        "title": "Event 1091",
        "id": 1091,
        "agenda" : "Meeting with zz"
    },
    {
        "startTime": "Sun Jan 21 2019 17:39:02 GMT+0530 (India Standard Time)",
        "endTime": "Sun Jan 21 2019 17:52:02 GMT+0530 (India Standard Time)",
        "title": "Event 1091",
        "id": 1092,
        "agenda" : "Meeting with zz"
    },
    {
        "startTime": "Sun Jan 22 2019 20:39:02 GMT+0530 (India Standard Time)",
        "endTime": "Sun Jan 22 2019 20:52:02 GMT+0530 (India Standard Time)",
        "title": "Event 1091",
        "id": 1093,
        "agenda" : "Meeting with zz"
    }
]

let initialState = {
    events : dataArray,
    currentSelectedDate : new Date()
}

export const actionReducer = (state : any, action :any) => {
    switch(action.type){
        case "INCREMENT_DATE_CLICKED" :
            let incSelDate = new Date(action.payload);
            let incCurrentSelectedDate =  new Date(new Date(action.payload).setDate(incSelDate.getDate() + 1))
            return {...state, currentSelectedDate: incCurrentSelectedDate}
        
        case "GET_TODAYS_DATA" : 
            return {...state, currentSelectedDate: new Date()} 
        
        case "DECREMENT_DATE_CLICKED" : 
            let decSelDate = new Date(action.payload);
            let decCurrentSelectedDate =  new Date(new Date(action.payload).setDate(decSelDate.getDate() - 1))
            return {...state, currentSelectedDate: decCurrentSelectedDate}  
            
        case "ADD_EVENT" :
            let startDate = new Date(action.payload.startDate)
            let endDate = new Date(action.payload.endDate)
            let eventObj = {
                startTime : startDate,
                endTime : endDate,
                id : state.events[state.events.length -1 ].id + 1,
                title : "new Event added",
                agenda : action.payload.agenda
            } 
            return { ...state, events : [...state.events,eventObj]}
        
        case "DELETE_EVENT" : 
            let filteredArray = state.events.filter((ele :any) => ele.id != parseInt(action.payload))
            return { ...state, events : filteredArray}
        
        case "UPDATE_EVENT" : 
            let updateObj = {
                startDate : new Date(getTimezoneDifference(action.payload.target["0"].valueAsNumber)).toString() || "",
                endDate : new Date(getTimezoneDifference(action.payload.target["1"].valueAsNumber)).toString() || "",
                agenda : action.payload.target["2"].value || "",
                id : parseInt(action.payload.target["3"].value) || ""
            }
            let foundItem = state.events.find((ele :any)=> ele.id == updateObj.id)
            foundItem.id = updateObj.id;
            foundItem.startTime = updateObj.startDate;
            foundItem.endTime = updateObj.endDate;
            foundItem.agenda = updateObj.agenda
            state.events = state.events.filter((ele : any)=> ele.id != updateObj.id)
            return { ...state, events : [...state.events,foundItem]}

        default :
            return initialState
        
    }
}