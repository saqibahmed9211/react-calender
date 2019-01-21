import * as React from "react";
import "../app.css";
import { BrowserRouter as Router, Route,Link, withRouter } from 'react-router-dom';

export const details_of_event = (events : any, delete_fun : any, updateFun : any) =>{
    return (
        events.map((event : any, index : any) => {
            return <div className = "row green-background">
                        <div className ="col-6 content-padding">
                            {index + 1} {event.agenda || ""}
                        </div>
                        <div className ="col-3 content-padding">
                            <button onClick={delete_fun} data-val = {event.id}>Delete</button>
                            <Link to={{
                                pathname : "/update",
                                params : {event : event, updateFun : updateFun}
                            }}><button>Update</button></Link>
                        </div>
                   </div>
        })
    )
}