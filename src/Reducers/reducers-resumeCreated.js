export default function (state=null, action) {
    console.log(action.payload)
    switch(action.type) {
        case "RESUME_CREATED": return action.payload;
    }
    return state;
}