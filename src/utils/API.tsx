import axios from "axios";

const API = () => {
    axios
        .get("https://randomuser.me/api/?results=200&nat=us")
        .then(res => {
            const users = res.data;
            console.log(users);
            // const results = users.map(user => {
            //     return {
            //         login: user.login,
            //         image: user.avatar_url,
            //         language: language
            //     };
            // });
            // resolve(results);
        })
        .catch(err => console.log(err));
}; 

export default API;