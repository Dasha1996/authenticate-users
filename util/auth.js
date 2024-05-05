import axios from 'axios'

const API_KEY = 'AIzaSyAo_r7LsO_I9_RqiBgiDhYuu_XRW03NzGw'

async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response = await axios.post(url,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    )
    const token = response.data.idToken;
    console.log('token',token);
    return token;
}

export function createUser(email, password) {
    return  authenticate('signUp',email, password)
}


export function login(email, password) {
   return  authenticate('signInWithPassword',email, password)
}