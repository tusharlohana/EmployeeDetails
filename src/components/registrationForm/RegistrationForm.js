import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { EmpData } from '../../action/action';
import { useHistory } from 'react-router';

const RegistrationForm = (props) => {
    // debugger
    const history = useHistory()
    console.log(props)
    const [state, setstate] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setstate(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendDetailsToServer()
        history.push('/details')
        // if (state.password === state.confirmPassword) {
        //     sendDetailsToServer()
        // }
        // else {
        //     props.showError('Passwords do not match');
        // }
    }

    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            // props.showError(null);
            const payload = {
                "email": state.email,
                "password": state.password,
            }
            axios.post('http://localhost:8000/data/', payload)
                .then(function (response) {
                    if (response.status === 201) {
                        props.submitFun(response.data)
                        setstate(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..'
                        }))
                        // redirectToHome();
                        // props.showError(null)
                    } else {
                        // props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            // props.showError('Please enter valid username and password')
        }

    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-3 p-2 hv-center">
            <form className="p-3">
                <div className="form-group text-left ">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control mt-2"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control mt-2"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>               
                <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        number: state
    };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    submitFun: (data) => dispatch(EmpData(data))
  })


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForm);
