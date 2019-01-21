export default function(state : any = null, action : any){
    switch(action.type){
        case  "EVENT_SELECTED" :
            return action.payload
            break;
    }
    return state
}