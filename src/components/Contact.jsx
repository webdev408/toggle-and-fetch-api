import React from 'react';
import {useForm} from 'react-hook-form';

const Contact = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="container my-5">
            <h1 className="text-center my-4">Contact us virtually anytime</h1>
            <p>Whether you need basic online integration or a complete digitization, we are here. We can give a boost to your career and business with putting you online and securing search engine optimization. We will assist you in your operational management by routinizing daily tasks ensuring compliance is never overlooked.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="email" name="email" ref={register}/>
                <input type="password" placeholder="password" name="password" 
                ref={register({required: "PASSWORD REQUIRED", minLength: {value: 8, message:"TOO SHORT" }})}
                 />
                 <br/>
                 <br/>
                <input type="submit" className="mx-auto" />
                {errors.password && <p>{errors.password.message}</p>}
            </form>
        </div>
    )
}

export default Contact;

