import React from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../src/supabase"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })





const navigate = useNavigate();

async function handleSubmit(e) {
  e.preventDefault();

  const { email, password } = loginFormData;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert(error.message);
  } else {
    navigate("/shop");
  }
}

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
            <div className="demo-credentials">
                <p><strong>Demo Credentials:</strong></p>
                <p>Email: i@k.com</p>
                <p>Password: ik123</p>
            </div>
        </div>
    )

}