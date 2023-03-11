import { useRouter } from "next/router";
import { useState } from "react"
import { useLoginData } from "@/stores/loginData";

export default function Login(){
    const router = useRouter();
    const [state, setState] = useState({
        username: '',
        password: '',
    });
    const loginData = useLoginData(); 

    const handleOnChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

    const handleSignInClicked = () => {
        router.push('/');
        loginData.setData({ 
            username: state.username,
            password: state.password,
            otherDetails: state.username.split(''),
        });
    }

    return(
        <div className="p-20">
            <div className="max-w-[200px] flex flex-col gap-4 border border-gray-400 p-4 rounded-md">
                <h1 className="uppercase font-bold">Login</h1>
                <input 
                    className="input" 
                    name="username"
                    value={state.username}
                    onChange={handleOnChange}
                />
                <input 
                    className="input" 
                    name="password"
                    value={state.password}
                    onChange={handleOnChange}
                />
                <button 
                    onClick={handleSignInClicked} 
                    className="button">
                    Sign In
                </button>
            </div>
        </div>
    )
}