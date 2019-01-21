import * as React from "react";
import EventList from "../container/event-list";
import "C:/Users/Saqib.Ahmed/Desktop/todo-react/src/app.css";
import  HeaderComp  from "./header_component"
import EventDetails from "../container/timeline"

const App = () => (
    <div className="row container">
        <HeaderComp></HeaderComp>
        <EventDetails></EventDetails>
    </div>
)

export default App