import config from '../config';

const ApiServices = {
    getCurrentDog() {
        return fetch(`${config.API_ENDPOINT}/dog`)
        .then( res=> 
            (!res.ok)
            ? res.json().then(e=> Promise.reject(e))
            : res.json()
        )
    },
    getCurrentCat() {
        return fetch(`${config.API_ENDPOINT}/cat`)
        .then( res=> 
            (!res.ok)
            ? res.json().then(e=> Promise.reject(e))
            : res.json()
        )
    },
    getCurrentUser() {
        return fetch(`${config.API_ENDPOINT}/user`)
        .then( res=> 
            (!res.ok)
            ? res.json().then(e=> Promise.reject(e))
            : res.json()
        )
    },
    getAllUser() {
        return fetch(`${config.API_ENDPOINT}/user/all`)
        .then( res=> 
            (!res.ok)
            ? res.json().then(e=> Promise.reject(e))
            : res.json()
        )
    },
    removeDog() {
        return fetch(`${config.API_ENDPOINT}/dog` ,
        {
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json'
        }})
            .then( res=> 
                (!res.ok)
                ? res.json().then(e=> Promise.reject(e))
                : res.json()
            )
        
    },
    removeCat() {
        return fetch(`${config.API_ENDPOINT}/cat` ,
        {
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json'
        }})
            .then( res=> 
                (!res.ok)
                ? res.json().then(e=> Promise.reject(e))
                : res.json()
            )
        
    },
    removeUser() {
        return fetch(`${config.API_ENDPOINT}/user` ,
        {
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json'
        }})
            .then( res=> 
                (!res.ok)
                ? res.json().then(e=> Promise.reject(e))
                : res.json()
            )
        
    },
    addNewUser() {
        return fetch(`${config.API_ENDPOINT}/user` ,
        {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
        }})
            .then( res=> 
                (!res.ok)
                ? res.json().then(e=> Promise.reject(e))
                : res.json()
            )
        
    }
}

export default ApiServices;