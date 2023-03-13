import React from "react";
import { Head } from '@inertiajs/inertia-react';
import Header from '../components/common/Header';

export default function ServicePage(props) {
    return(
        <>
            <Head title="Services" />
                <Header props={props} />
                <div>서비스페이지</div>
        </>
    );
}