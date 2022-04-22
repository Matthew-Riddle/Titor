import MainContainer from "../components/MainContainer"
import ContentContainer from "../components/ContentContainer"
import "./Login.css"
const Login = () => {
    return (
        <>
            <MainContainer>
                <div className="logo-container">
                    <div className="logo"/>
                </div>
                <div className="login-wrangler">
                    <form className="login">
                        <label className="login-label text-yellow" htmlFor="fname"><p>Username    </p></label>
                        <input className="login-field" type="text" id="fname"></input>
                        <label className="login-label text-yellow" htmlFor="fpass"><p>Password    </p></label>
                        <input className="login-field" type="text" id="fpass"></input>
                    </form>
                </div>
            </MainContainer>
        </>
    )
}

export default Login