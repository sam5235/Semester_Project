export const patients = (state = [], action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_PATIENT':
            return state.push(action.payload);
        case 'ADD_ALL_PATIENTS':
            return [...state, ...action.payload];
        default:
            return state;
    }
}