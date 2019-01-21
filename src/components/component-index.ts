export const timeLine = [
    {hour : 9, type : "am"},{hour : 10, type : "am"},
    {hour : 11, type : "am"},{hour : 12, type : "pm"},
    {hour : 13, type : "pm"},{hour : 14, type : "pm"},
    {hour : 15, type : "pm"},{hour : 16, type : "pm"},
    {hour : 17, type : "pm"},{hour : 18, type : "pm"},
    {hour : 19, type : "pm"},{hour : 20, type : "pm"},
    {hour : 21, type : "pm"},
]


export const getRecordsWithinTimeRange = (records : any, time : any) => {
    return records.filter((rec : any) => {
        return (new Date(rec.startTime).getHours() == time.hour)
    })
}

export const getTodaysRecords = (events :any, currentSelectedDate : any) => {
    let todaysDate = currentSelectedDate.toLocaleDateString()
    return events.filter((event : any) => {
        let eventStartDate = new Date(event.startTime).toLocaleDateString();
        let eventEndDate = new Date(event.endTime).toLocaleDateString();
        return (eventStartDate === todaysDate && eventEndDate == todaysDate)
    })
}

export const formatDate = (date : Date) => {
    let month = date.toLocaleString('en-us',{month : 'short'})
    let day = date.getDate();
    let year = date.getFullYear()
    return `${day} ${month}, ${year}`
}