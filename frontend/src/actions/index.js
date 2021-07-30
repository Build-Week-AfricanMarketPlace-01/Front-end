import axiosWithAuth from "../utilis/axiosWithAuth";

export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const FINISHED_EDIT = 'FINISHED_EDIT';
export const ADDING_NEW_ITEM = 'ADDING_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (item, id)  =>{
    return (dispatch) =>{
        axiosWithAuth()
        .post(`/items/user/${id}`, item)
        .then(res=>{
            dispatch({type:ADD_ITEM, payload:res.data})
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const getItem = () =>{
    return (dispatch) =>{
        axiosWithAuth()
        .get('/items')
        .then(res =>{
            dispatch({type: GET_ITEM, payload: res.data})
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const getItemDetails =(id) =>{
    return(dispatch)  =>{
        axiosWithAuth()
        .get(`/items/${id}`)
        .then(res =>{
            dispatch({type: GET_ITEM, payload: res.data})
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const editItem = (id, item) => (disptach) =>{
    disptach({type:EDIT_ITEM})
    return axiosWithAuth()
    .put(`/items/${id}`, item)
    .then(res =>{
        disptach({type:EDIT_ITEM, payload: res.data})
    })
    .catch(err =>{
        console.log(err)
    })
}

export const editDone = () =>{
    return{type: FINISHED_EDIT}
}
export const deleteItem = (userId, itemId) => (dispatch)=>{
    dispatch({type: DELETE_ITEM})
    return axiosWithAuth()
    .delete(`/item/${userId}/${itemId}`)
    .then(res =>{
        dispatch({type: DELETE_ITEM, payload:res})
    })
    .catch(err =>{
        console.log(err)
    })
}