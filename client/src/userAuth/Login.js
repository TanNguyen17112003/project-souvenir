// import { useRef, useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// import axios from '../api/axios';

// const LOGIN_URL = '/auth';

// function Login() {

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";
//     const userRef = useRef();
//     const errRef = useRef();
//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [success, setSuccess] = useState(false);
//     const [errMsg, setErrMsg] = useState('');

//     useEffect(() => {
//         userRef.current.focus();
//     },[])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(LOGIN_URL, 
//                 JSON.stringify({user, pwd}),
//             {
//                 headers: {'Conten-type': 'application/json'},
//                 withCredentials: true
//             }
//             );
//             console.log(JSON.stringify(response?.data));
//             // 
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             // setAuth({ user, pwd, roles, accessToken });
//             setUser('');
//             setPwd('');
//             navigate(from, { replace: true });
//         }
//         catch (err) {
//             if (!err?.response) {
//                 setErrMsg('Không có phản hồi từ server')
//             }
//             else if (err?.respone?.status === 400) {
//                 setErrMsg('Tên đăng nhập hoặc mật khẩu không hợp lệ')
//             }
//             else if (err?.respone?.status === 401) {
//                 setErrMsg('Truy cập trái phép')
//             } 
//             else {
//                 setErrMsg('Đăng nhập thất bại')
//             }
//             errRef.current.focus();
//         }
//     }
//     return (
//         <>
//         {success ? (
//             <section>
//                 Đăng nhập thành công!
//                 <br />
//                 <p>
//                     <a href="#">Về trang chủ</a>
//                 </p>
//             </section>
//         ) : (
//          <section
//             className='px-5 py-5 bg-red-300'
//         >
//             <p
//                 ref={errRef}
//                 className={errMsg ? "errmsg" : "offscreen"}
//                 aria-live="assertive"
//             >
//                 {errMsg}
//             </p>
//             <h1 
//                  className='
//                  text-stone-900
//                  font-bold
//                  mb-3
//              '   
//             >
//                 Đăng nhập
//             </h1>
//             <form 
//                 className='
//                 flex
//                 flex-col
//                 justify-center
//                 items-center
//                 max-w-lg
//                 mx-auto
//                 my-0
//                 '
//                 onSubmit={handleSignIn}
//             >
//                 {/* For userName */}
//                 <label htmlFor="userIdNote" className='mb-3'> 
//                     Tên Đăng Nhập:
//                 </label>
//                 <input 
//                     type="text" 
//                     id="userIdNote"
//                     ref={userRef}
//                     onChange={(e) => setUser(e.target.value)}
//                     autoComplete="off"
//                     value={user}
//                     required
//                     className='mb-3'
//                 />
//                 {/* For password */}
//                 <label htmlFor="passwordIdNote" className="mb-3">
//                     Mật khẩu:
//                 </label>
//                 <input 
//                     type="password"
//                     id = "passwordIdNote"
//                     onChange={(e) => setPwd(e.target.value)}
//                     required
//                     value={pwd}
//                     className="mb-3"
//                 />
//                 <button
//                     className="m-3 w-full bg-black text-white px-1 py-2 rounded-md cursor-pointer"
//                 >
//                     Đăng nhập
//                 </button>
//             </form>
//             <p>
//                 Chưa có tài khoản
//                 <span>
//                     <Link to="/register">Đăng kí ngay</Link>
//                 </span>
//             </p>
//         </section>
//         )}
//         </>
       
//     )
// }

// export default Login;