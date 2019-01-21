export const selectedEvent = (event : any) => {
    console.log("event clicked");
    return{
        type : "EVENT_SELECTED",
        payload : event
    }
}

export const increamentDate = (date : any) => {
    return {
        type : "INCREMENT_DATE_CLICKED",
        payload : date.target.dataset.val
    }
}

export const decrementDate = (date : any) => {
    return {
        type : "DECREMENT_DATE_CLICKED",
        payload : date.target.dataset.val
    }
}

export const getTodaysData = (date : any) => {
    return {
        type : "GET_TODAYS_DATA",
        payload : date.target.dataset.val
    }
}

export const getInitialData = () => {
    return {
        type : "GET_TODAYS_DATA",
        payload : ""
    }
}

export const addEvent = (event : any) => {
    let eventObj = {
        startDate : new Date(getTimezoneDifference(event.target["0"].valueAsNumber)) || "",
        endDate : new Date(getTimezoneDifference(event.target["1"].valueAsNumber)) || "",
        agenda : event.target["2"].value || ""
    }
    return {
        type : "ADD_EVENT",
        payload : eventObj
    }
}

export const deleteEvent = (event : any) =>{
    return {
        type : "DELETE_EVENT",
        payload : event.target.attributes[0].value
    }
}

export const updateEvent = (event : any) => {
    return {
        type : "UPDATE_EVENT",
        payload : event
    }
}

export const getTimezoneDifference = (time : any) =>{
    return time + new Date().getTimezoneOffset()*60*1000
}

export const adjustDatepickerTime = (date : any) => {
    let myDate = new Date(date);
    let month = (myDate.getMonth() + 1) < 10 ? `0${myDate.getMonth() + 1}` : `${myDate.getMonth() + 1}`
    let hours = (myDate.getHours()) < 10 ? `0${myDate.getHours()}` : `${myDate.getHours()}`
    let minuts = (myDate.getMinutes()) < 10 ? `0${myDate.getMinutes()}` : `${myDate.getMinutes()}`
    let seconds = (myDate.getSeconds()) < 10 ? `0${myDate.getSeconds()}` : `${myDate.getSeconds()}`
    return `${myDate.getFullYear()}-${month}-${myDate.getDate()}T${hours}:${minuts}:${seconds}.${myDate.getMilliseconds()}`
}