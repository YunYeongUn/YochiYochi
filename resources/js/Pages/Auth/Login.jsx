import React, { useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from '@/components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';


const FormCenter = styled.div`
    width: 100%;
    margin: 8% 0;
    padding: 0 26%;
    justify-content: center;

    .formField {
        margin: 4% 0;
        align-items: center;
    }

    .formFieldLabel {
        display: block;
        text-transform: uppercase;
        font-size: 1rem;
        padding-top: 1rem;
    }

    .formFieldInput {
        width: 100%;
        background-color: transparent;
        border: 1px solid lightgray;
        font-size: 1rem;
        font-weight: 300;
        padding: 1rem;
        margin-top: 0.5rem;
    }

    .formFieldButton {
        float: left;
        background-color: #FFE600;
        color: black;
        border: none;
        outline: none;
        border-radius: 25px;
        padding: 0.9rem 4rem;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .formFieldLink {
        margin-top: 2%;
        float: right;
        display: inline-block;
        border-bottom: 1.5px solid gray;
    }

    .formFieldCheckbox {
        position: relative;
    }

    .formFieldCheckboxLabel {
        line-height: 7rem;
        font-size: 0.9rem;
        color: #646f7d;
    }

    @media (max-width: 1405px) {
        .formFieldButton {
            padding: 0.8rem 3rem;
        }
    }

    @media (max-width: 1286px) {
        .formFieldCheckboxLabel {
            font-size: 0.8rem;
        }

        .formFieldButton {
            padding: 0.8rem 2rem;
            font-size: 0.7rem;
            font-weight: 600;
        }
    
        .formFieldLink {
            margin-top: 2%;
            float: right;
            display: inline-block;
            border-bottom: 1.5px solid gray;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1174px) {
        .formFieldButton {
            padding: 0.9rem 4rem;
            font-size: 0.8rem;
            font-weight: 600;
        }
    }

    @media (max-width: 668px) {
        .formFieldButton {
            padding: 0.8rem 2.5rem;
            font-size: 0.7rem;
        }
        
        .formFieldLink {
            font-size: 0.8rem;
        }
    }

    .socialMediaButtons {
        display:flex;
        flex-wrap:wrap;
        align-items:flex-start;
        margin:50px 0;
        
    }

`;

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <FormCenter>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <form className='formFields' onSubmit={submit}>
                <div className='formField'>
                    <InputLabel className="formFieldLabel" forInput="email" value="Email" />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="formFieldInput"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                        />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="formField">
                    <InputLabel className="formFieldLabel" forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="formFieldInput"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                        />
                        {canResetPassword && (
                            <Link
                            href={route('password.request')}
                            className="formFieldLink"
                            >
                                Forgot your password?
                            </Link>
                        )}

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="formField">
                    <label className='formFieldCheckboxLabel'>
                        <Checkbox className="formFieldCheckbox" name="remember" value={data.remember} handleChange={onHandleChange} />
                        &nbsp;Remember me
                    </label>
                </div>

                <div className="formField">
                    <PrimaryButton className="formFieldButton" processing={processing}>
                        Log in
                    </PrimaryButton>
                    <Link href='/register' className='formFieldLink'>Create an account</Link>
                </div>

                <div className='socialMediaButtons'>
                    <div className="googleLogin">
                        <a type="button" href='/login/google' className="btm_image" id="googleL"><img src="/assets/google.png" alt="1"/></a>
                    </div>
                    <div className="naverLogin">
                        <a type="button" href='/login/naver' className="btm_image" id="naverL"><img src="/assets/naver.png" alt="1"/></a>
                    </div>
                    <div className="lineLogin">
                        <a type="button" href='/login/line' className="btm_image" id="lineL"><img src="/assets/line.png" alt="1"/></a>
                    </div>
                </div>
            </form>
            </FormCenter>
        </GuestLayout>
    );
}
