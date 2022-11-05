import axios from 'axios'

// let token=''
// token = localStorage.getItem('token') || ''

export default axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        "Content-Type": "application/json"
    }
})
