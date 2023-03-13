import React from 'react';
import styled from "styled-components";
import ApplicationLogo from '@/components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/inertia-react';

const Block = styled.div`
    height: 100vh;
    display: flex;
`;

const Aside = styled.div`
    width: 50%;
    background-color: rgba(255, 255, 194, 0.2);

    .pageSwitcher {
        display: flex;
        justify-content: center;
        margin: 10% 0;
    }

    .pageSwitcherItem {
        background-color: #DCDCDC;
        color: #707c8b;
        padding: 1rem 2rem;
        cursor: pointer;
        font-size: 1.2rem;
        border: none;
        outline: none;
        display: inline-block;
    }

    .pageSwitcherItemActive {
        background-color: #FFE600;
        padding: 1rem 2rem;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: 600;
        border: none;
        outline: none;
        display: inline-block;
    }

    .pageSwitcherItem:first-child, .pageSwitcherItemActive:first-child {
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
    }

    .pageSwitcherItem:last-child, .pageSwitcherItemActive:last-child {
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    @media (max-width: 1174px) {
        width: 0;
    }
`;

const Form = styled.div`
    width: 50%;
    background-color: white;
    padding: 1.5rem;

    .formTitle {
        color: #707c8b;
        font-weight: 300;
        margin-top: 6%;
        text-align: center;
        padding-bottom: 6%;
        border-bottom: 1px solid lightgray;
    }

    .formTitle span {
        display: none;
    }

    .formTitleLink {
        color: #707c8b;
        display: none;
        font-size: 1.7rem;
        margin: 0 5%;
        line-height: 0rem;
    }

    .formTitleLinkActive {
        color: black;
        border-bottom: 20px solid rgba(60, 179, 113, 0.4);
        display: inline-block;
        font-size: 2rem;
        line-height: 0rem;
    }

    @media (max-width: 1174px) {
        width: 100%;   
    }
`;

export default function Guest({ children }) {
    const { url } = usePage();

    return (
        // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        //     <div>
        //         <Link href="/">
        //             <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        //         </Link>
        //     </div>

        //     <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        //         {children}
        //     </div>
        // </div>
        <Block>
            <Aside>
                <div className='pageSwitcher'>
                    <Link href='/login' className={url === '/login' ? 'pageSwitcherItemActive' : 'pageSwitcherItem'}>Log In</Link>
                    <Link href='/register' className={url === '/register' ? 'pageSwitcherItemActive' : 'pageSwitcherItem'}>Register</Link>
                </div>
                <ApplicationLogo className="w-40 h-40 fill-current text-gray-500" />    
            </Aside>
            <Form>
                <div className='formTitle'>
                    <Link href='/login' className={url === '/login' ? 'formTitleLinkActive' : 'formTitleLink'}>Log In</Link>
                    <span>{" "}or{" "}</span>
                    <Link href='register' className={url === '/register' ? 'formTitleLinkActive' : 'formTitleLink'}>Register</Link>
                </div>
                <div>
                    {children}
                </div>
            </Form>
        </Block>
    );
}
