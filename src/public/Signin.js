import './Signin.css'

function SigninEventHandler () {
    alert('test')
}

function Signin () {
    return (
        <div className="Signin">
            <button type="button" className="Signin-button" onClick={SigninEventHandler}>
                로그인
            </button>
        </div>
    );
}

export default Signin;