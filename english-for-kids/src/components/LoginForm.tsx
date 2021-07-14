import PropTypes from 'prop-types';

export const LoginForm = () => {
    return (
        <div className="content-wrapper">
            <div className="login-wrapper">
                <h1>Please Log In</h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password"/>
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired,
};
