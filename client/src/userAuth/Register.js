// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle, faC } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from '../api/axios';
// import { Link } from "react-router-dom";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const Register = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(USER_REGEX.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(PWD_REGEX.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd, matchPwd])
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//         }
//         try {
//             const response = await axios.post(REGISTER_URL, 
//                 JSON.stringify({user, pwd}),
//                 {
//                     headers: {'Content-Type': 'application/json'},
//                     withCredentials: true
//                 }
//                 );
//                 console.log(response?.data);
//                 console.log(response?.accessToken);
//                 console.log(JSON.stringify(response))
//                 setSuccess(true);
//                 setUser('');
//                 setPwd('');
//                 setMatchPwd('');
//         } catch (err) {
//             if(!err?.response) {
//                 setErrMsg('Không có phản hồi từ server')
//             }
//             else if (err.response?.status === 409) {
//                 setErrMsg('Tên tài khoản trùng')
//             }
//             else {
//                 setErrMsg('Đăng kí thất bại')
//             }
//             errRef.current.focus();
//         }
//     }
//     return (
//         <>
//         {success ? (
//             <section>
//                 <h1>Đăng kí thành công!</h1>
//                 <p>
//                     <a href="">Đăng nhập</a>
//                 </p>
//             </section>
//         ) : (<section
//             className='px-5 py-5 bg-red-300'
//         >
//             <p 
//                 ref={errRef} 
//                 className = {errMsg ? "errmsg" : "offscreen"} 
//                 aria-live="assertive"
//             >
//                 {errMsg}
//             </p>
//             <h1
//                 className='
//                     text-stone-900
//                     font-bold
//                     mb-3
//                 '   
//             >
//                 Đăng kí
//             </h1>
//             <form
//                 className='
//                     flex
//                     flex-col
//                     justify-center
//                     items-center
//                     max-w-lg
//                     mx-auto
//                     my-0
//                 '
//                 onSubmit={handleSubmit}
//             >
//                 <label 
//                     htmlFor="username"
//                     className="mb-3"
//                 >
//                     Tên đăng nhập:
//                     <span className = {validName ? "valid" : "hide"}>
//                         <FontAwesomeIcon icon = {faCheck} />
//                     </span>
//                     <span className = {validName || !user ? "hide" : "invalid"}>
//                         <FontAwesomeIcon icon = {faTimes} />
//                     </span>
//                 </label>
//                 <input 
//                     type="text" 
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e) => setUser(e.target.value)}
//                     value={user}
//                     required
//                     aria-invalid={validName ? "false" : "true"}
//                     aria-describedby="userIdNote"
//                     onFocus={() => setUserFocus(true)}
//                     onBlur={() => setUserFocus(false)}
//                     className="mb-3"
//                 />
//                 <p 
//                     id="userIdNode"
//                     className={userFocus && user && !validName ? 'font-bold text-xs bg-black text-white px-1 py-2' : 'offscreen'}
//                 >
//                     <FontAwesomeIcon 
//                         icon={faInfoCircle} 
//                         className='mr-1'
//                     />
//                     Tên tài khoản phải có từ 4 - 24 kí tự. <br />
//                     Phải bắt đầu bằng chữ cái (in hoa hoặc in thường).
//                     Các kí tự được cho phép: chữ cái, số, gạch dưới và gạch ngang.
//                 </p>
//                 <label 
//                     htmlFor="password"
//                     className="mb-3"
//                 >
//                     Mật khẩu:
//                     <span className={validPwd ? "valid" : "hide"}>
//                         <FontAwesomeIcon icon={faCheck} />
//                     </span>
//                     <span className={validPwd || !pwd ? "hide" : "invalid"}>
//                         <FontAwesomeIcon icon={faTimes} />
//                     </span>
//                     <span></span>
//                 </label>
//                 <input 
//                     type="password"
//                     id="password"
//                     required
//                     value={pwd}
//                     onChange={(e) => setPwd(e.target.value)}
//                     aria-invalid={pwd ? "false" : "true"}
//                     aria-describedby="pwdIdNote"
//                     onFocus={() => setPwdFocus(true)}
//                     onBlur={() => setPwdFocus(false)}
//                     className="mb-3"
//                 />
//                 <p
//                     id = "pwdIdNote"
//                     className={pwdFocus && !validPwd ? "font-bold text-xs bg-black text-white px-1 py-2" : "offscreen"}
//                 >
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     Mật khẩu phải có 8-24 kí tự. <br />
//                     Phải bao gồm chữ cái in hoa và chữ cái thường, số và kí tự đặc biệt. <br />
//                     Phải Bao gồm các kí tự đặc biệt
//                 </p>
//                 <label 
//                     htmlFor="confirm_password"
//                     className="mb-3"
//                 >
//                     Xác nhận mật khẩu:
//                     <span className = {validMatch && matchPwd ? "valid" : "hide"}>
//                         <FontAwesomeIcon icon={faCheck} />
//                     </span>
//                     <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
//                         <FontAwesomeIcon icon={faTimes} />
//                     </span>
//                 </label>
//                 <input 
//                     type="password"
//                     id="confirm_password"
//                     onChange={(e) => setMatchPwd(e.target.value)}
//                     value={matchPwd}
//                     required
//                     aria-invalid={validMatch ? "false" : "true"}
//                     aria-describedby="matchPwdIdNote"
//                     onFocus={() => setMatchFocus(true)}
//                     onBlur={() => setMatchFocus(false)}
//                 />
//                 <p id="matchPwdIdNote" className={matchFocus && !validMatch ? "font-bold text-xs bg-black text-white px-1 py-2" : "offscreen"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     Phải khớp với mật khẩu bạn đã cung cấp
//                 </p>
//                 <button 
//                     disabled={!validName || !validPwd || !validMatch ? true : false}
//                     className="m-3 w-full bg-black text-white px-1 py-2 rounded-md cursor-pointer"
//                 >
//                     Đăng kí
//                 </button>
//             </form>
//             <p>
//                 Đã có tài khoản?<br/>
//                 <span
//                     className="underline"
//                 >
//                     <Link to="/">Đăng nhập</Link>
//                 </span>
//             </p>
//         </section>
//         )}
//         </>
//     );
// }

// export default Register;
