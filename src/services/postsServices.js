const URL = 'http://localhost:8080/';

export async function createPost(data){
    try {

        const token = localStorage.getItem('token');

    const response = await fetch(URL + 'posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    const json = await response.json();

    return json;
        
    } catch (error) {

        return ({ error });
        
        
    }
    

}