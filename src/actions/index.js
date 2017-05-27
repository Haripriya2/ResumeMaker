export const selectUser = (user) =>{
    console.log('You clicked on user : ', user.first);
    return{
        type: "USER_SELECTED",
        payload: user
    }
}

export const formSubmission = (formEntry) =>{
    console.log('You have submitted form for : ', formEntry.first);
    console.log(formEntry)
    return{
        type: "RESUME_CREATED",
        payload: formEntry
    }
}