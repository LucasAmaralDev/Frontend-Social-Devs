'use strict';

const URL = 'https://backend.devlucas.online/';
//const URL = 'http://localhost:8080/';

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


export async function getPosts(){

    try {

        const token = localStorage.getItem('token');

        if (!token) {
            return window.location.href = '/login';
        }

        const response = await fetch(URL + 'posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    
        const json = await response.json();
    
        return json;
        
    } catch (error) {

        return ({ error });
        
    }

}