import { authHeader } from '../_helpers';
import React from 'react';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function getProfileData(username, password) {

    const data = username;

    axios.post('LIEN ',{data})
    .then(res=> {
        console.log(res);
        console.log(res.data);
    })
    .catch(handleErrors)

    //axios.post('LIEN/${user} ', { data }).then() or axios.post('LIEN ',{params:{ postId:id}} ).then...
}



function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function handleErrors(err){
    if(err.response){
        console.log("probleme with the response : ", err.response.status);
    } else if (err.request) {
        console.log("probleme with the request !! ");
    }
    else{
        console.log("ERROR !! ", err.message);
    }
}