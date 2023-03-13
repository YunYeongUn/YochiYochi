import React from "react";
import { Head } from '@inertiajs/inertia-react';
import Header from '../components/common/Header';
import Logo from '../components/common/img/yochiyochi-big2.png';
import styled from "styled-components";
import MainSlider from "@/components/common/MainSlider";

const Img = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFE600;
`;

export default function MainPage(props) {
    return(
        <>
            <Head title="Main" />
                <Header auth={props.auth} errors={props.errors}  />
            <MainSlider />
           {/*  <Img>
                <img src={Logo} alt="1" />
            </Img> */}
        </>
    );
}