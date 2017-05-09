export default function (state=null, action) {
    switch(action.type) {
        case "RESUME_CREATED": return action.payload;
    }
    return state;
}