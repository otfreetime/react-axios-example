import React, { useState } from 'react';
import axios from 'axios';
import PersonList from './PersonList';

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function PersonAdd({ addUser }) {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: name
        };

        
        addUser(user)
    }
    return (
        <div>
            <div>User Add</div>
            <form onSubmit={handleSubmit}>

                <label>
                    Person Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}


// export default class PersonAdd extends React.Component {
//   state = {
//     name: ''
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();



//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
    //   <div>
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         Person Name:
    //         <input type="text" name="name" onChange={this.handleChange} />
    //       </label>
    //       <button type="submit">Add</button>
    //     </form>
    //   </div>
//     )
//   }
// }
