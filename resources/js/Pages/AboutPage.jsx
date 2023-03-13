import React from "react";
import { Head } from '@inertiajs/inertia-react';
import Header from '../components/common/Header';

export default function AboutPage(props) {
    return(
        <>
            <Head title="About" />
                <Header props={props} />
                <div>소개페이지</div>
        </>
    );
}