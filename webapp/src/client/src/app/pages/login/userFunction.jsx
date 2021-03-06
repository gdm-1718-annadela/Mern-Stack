import axios from 'axios'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



export const login = user => {
    return axios
    .post('api/v1/login/local', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('userToken', res.data.token)
        console.log(res.data)
        localStorage.setItem('userId', res.data.email.id)
        return res.data.token
    })
    .catch(err => {
        console.error('😥 WRONG EMAIL OR PASSWORD' ,err)
        console.log(err)
    })
}