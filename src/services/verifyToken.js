
export function verificarToken(data) {

    if (data.error) {
        if (data.error === "Token inválido") {
            localStorage.removeItem('token');
            window.location.href = '/login';
            return;
        }
    }

    return data;



}