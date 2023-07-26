'use strict';

const URL = 'https://backend.devlucas.online/';

export async function login(data) {

    try {

        const response = await fetch(URL + 'login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const json = await response.json();
    
        return json;
        
    } catch (error) {

        return ({ error });
        
    }

}

export async function registerAccount(data) {

    try {

        const response = await fetch(URL + 'signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const json = await response.json();
    
        return json;
        
    } catch (error) {

        return ({ error });
        
    }

}