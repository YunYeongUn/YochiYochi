import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import styled from 'styled-components';

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
        padding: 0.9rem 3rem;
        font-size: 0.8rem;
        font-weight: 600;
        margin-top: 2%;
    }

    .formFieldLink {
        margin-top: 4%;
        float: right;
        display: inline-block;
        border-bottom: 1.5px solid gray;
    }

    @media (max-width: 1424px) {
        .formFieldButton {
            padding: 0.8rem 2rem;
        }
    }

    @media (max-width: 1286px) {
        .formFieldButton {
            padding: 0.8rem 1.5rem;
            font-size: 0.6rem;
            font-weight: 600;
        }

        .formFieldLink {
            margin-top: 2%;
            float: right;
            display: inline-block;
            border-bottom: 1.5px solid gray;
            font-size: 0.8rem;
        }
    }

    @media (max-width: 1174px) {
        .formFieldButton {
            padding: 0.9rem 4rem;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .formFieldLink {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 725px) {
        .formFieldButton {
            padding: 0.8rem 2rem;
            font-size: 0.7rem;
        }
        
        .formFieldLink {
            font-size: 0.8rem;
        }
    }
    `;

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('email', 'password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('api.jwt.register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <FormCenter>
                <form onSubmit={submit}>
                    <div className='formField'>
                        <InputLabel className="formFieldLabel" forInput="name" value="Name" />

                        <TextInput
                            type="text"
                            name="name"
                            value={data.name}
                            className="formFieldInput"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="formField">
                        <InputLabel className="formFieldLabel" forInput="email" value="Email" />

                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="formFieldInput"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
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
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="formField">
                        <InputLabel className="formFieldLabel" forInput="password_confirmation" value="Confirm Password" />

                        <TextInput
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="formFieldInput"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="formField">
                        <Link
                            href={route('login')}
                            className="formFieldLink"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="formFieldButton" processing={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </FormCenter>
        </GuestLayout>
    );
}
