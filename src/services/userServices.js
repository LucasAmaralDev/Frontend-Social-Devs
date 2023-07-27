import { verificarToken } from "./verifyToken";
let objeto = {};

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

        objeto = verificarToken(json)

        return objeto;

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

        objeto = verificarToken(json);

        return objeto;

    } catch (error) {

        return ({ error });

    }

}


export async function getPosts() {

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

        objeto = verificarToken(json);

        return objeto;

    } catch (error) {

        return ({ error });

    }

}

export async function getMyProfile() {

    try {

        const token = localStorage.getItem('token');

        if (!token) {
            return window.location.href = '/login';
        }

        const response = await fetch(URL + 'myprofile', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const json = await response.json();

        objeto = verificarToken(json);

        return objeto;

    } catch (error) {

        return ({ error });

    }

}


export async function getUserProfile(username) {

    try {

        const token = localStorage.getItem('token');

        if (!token) {
            return window.location.href = '/login';
        }
        
        const response = await fetch(URL + `profile/${username}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const json = await response.json();

        objeto = verificarToken(json);

        return objeto;

    } catch (error) {

        return ({ error });

    }

}

export async function getMyInfo() {

    const token = localStorage.getItem('token');

    const respultado = await fetch(URL + 'myInfo', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`}
    });
    
    const json = await respultado.json();

    objeto = verificarToken(json);

    return objeto;

}



export async function editProfile(data){

    const token = localStorage.getItem('token');

    const resultado = await fetch(URL + 'editProfile', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    const json = await resultado.json();

    objeto = verificarToken(json);

    return objeto;
}