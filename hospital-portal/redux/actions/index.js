export const increment = () =>{
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () =>{
    return{
        type: 'DECREMENT'
    }
}

export const addPatient = (payload) =>{
    return{
        type: 'ADD_PATIENT',
        payload
    }
}

export const addPatients = (payload) =>{
    return{
        type: 'ADD_ALL_PATIENTS',
        payload
    }
}