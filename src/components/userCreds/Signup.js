import React, { useEffect, useState } from 'react';
import Login from './Login';
import './Signup.css';
import validation from './validation';

function Signup() {

    // Storing Form Field Values
    const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});

    // Flag for Form Submission Status
    const [isSubmit, setIsSubmit] = useState(false); 

    // Manage Field Change
    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }

    // Manage Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrorValues).length === 0 && isSubmit) {
            alert("success");
        }
    }, [formErrorValues]);

    return (
        <div>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login />) : (<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>)}
                {/* Signup */}
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange} />
                        <p className='error'>{formErrorValues.username}</p>
                        <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
                        <p className='error'>{formErrorValues.email}</p>
                        <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                        <p className='error'>{formErrorValues.password}</p>
                        <button>Sign up</button>

                    </form>
                </div>
            </div>
        </div>

        
    );
}

export default Signup;