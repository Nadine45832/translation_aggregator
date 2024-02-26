import "./signInDialog.css"

export const SignInDialog = () => {
    return <div className="signin-dialog">
        <label>
            <span>Email</span>
            <input type="text" />
        </label>
        <label>
            <span>Password</span>
            <input type="password" />
        </label>

        <div>
            <button>Sign in</button>
            <button>Sign in with a passkey</button>
        </div>
    </div>
}