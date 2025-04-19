// import { useState } from 'react';
// import axios from 'axios';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [msg, setMsg] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8081/api/auth/register', { email, password });
//       setMsg(res.data);
//     } catch (err) {
//       setMsg("Registration failed");
//     }
//   };

//   return (


//     <div>
//         <div className="blackfieldfornav">

// </div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Register</button>
//       </form>
//       <p>{msg}</p>
//     </div>
//   );
// }

// export default Register;
