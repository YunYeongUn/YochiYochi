import styled from "styled-components";
import Responsive from './Responsive';
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Dropdown from '@/components/Dropdown';
import menuOpenImg from './img/noun-menu-942376.png';
import menuCloseImg from './img/noun-close-1473861.png';
import profileImg from './img/noun-profile-4017445.png';
import searchImg from './img/noun-search-4017452.png';
import LogoImg from './img/yochiyochi.png';

const HeaderBlock = styled.div`
    position: relative;
    background: white;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 2;
    `;

/**
 * Responsive 컴포넌트 속성에 스타일 추가해 새 컴포넌트 생성
 */

const Wrapper = styled(Responsive)`
    height: 5.5rem;
    display: flex;
    align-items: center;
    margin: 0 3%;
    width: 100%;
    z-index: 3;

    .logo-container {
        display: flex;
    }

    .logo-container img {
        width: 160px;
    }

    .nav-container {
        display: flex;
        align-items: center;
        margin: 0 4.5%;
        width: 50%;
    }

    .nav-container ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .nav-container li {
        float: left;
        padding: 0;
    }

    .nav-link {
        display: flex;
        text-align: center;
        margin: 0 1rem;
        padding: 0 1rem;
        font-weight: 500;
        font-size: 1.125rem;
        transition: color ease-in 0.2s;
    }

    .nav-link:hover, nav-container ul li:hover .nav-link {
        color: gray;
        font-weight: 700;
    }

    .nav-link:hover span, nav-container ul li:hover .nav-link span {
        color: gray;
        font-weight: 900;
        transform: rotate(180deg);
        transition-duration: 1s;
    }

    .nav-container li ul {
        background: white;
        display: none;
        height: auto;
        margin: 0;
        padding: 1rem 0;
        border: 2px solid rgba(60, 179, 113, 0.7);
        border-radius: 0 10px 0 10px;
        position: absolute;
        width: 200px;
    }
    
    .nav-container li:hover ul {
        display: block;
    }
    
    .nav-container li li {
        display: block;
        float: none;
        width: 200px;
        margin: 0;
        padding: 1rem 2.5rem;
    }

    .dropdown-item {
        display: block;
        font-size: 1rem;
        font-weight: 200;
        line-height: 1.75rem;
        text-align: center;
    }

    .dropdown-item:hover {
        font-weight: 700;
        border-bottom: 3px solid #FFE600;
    }

    .arrow {
        font-weight: 550;
    }

    .user-container {
        dieplay: flex;
        margin: 0 auto;
    }
    
    .right {
        display: flex;
        float: right;
        padding: 1rem;
        margin: 1rem 0;
    }

    .right span {
        margin-top: 0.2rem;
    }

    .right2 {
        display: flex;
        float: right;
        padding: 1rem;
        margin: 1rem 0;
    }

    .right2 span {
        margin-top: 0.2rem;
    }

    .user-container img {
        width: 36px;
        height: auto;
    }

    .nav-menu {
        display: none;
    }

    .search-box {
        float: left;
        display: flex;
        margin-top: 1.4rem;
        background-color: none;
        border: 1px solid gray;
        border-radius: 40px;
        transition: 0.5s;
    }

    .search-box button {
        float: right;
        display: flex;
        margin: 0.4rem 0.6rem;
    }

    .search-box input {
        float: left;
        padding: 0 1rem;
        background: none;
        border: none;
        outline: none;
        font-size: 1rem;
        line-height: 3rem;
        width: 0;
        transition: 0.5s;
    }

    .search-box:hover > form input {
        width: 200px;
    }

    .search-box:hover + .right span {
        display: none;
    }

    @media (max-width: 1099px) {
        width: 100%;
        height: 4rem;

        .nav-link {
            font-size: 1rem;
        }

        .nav-menu {
            display: none;
        }

        .user-container {
            margin-right: 5%;
        }

        .user-container img {
            width: 30px;
            height: auto;
        }

        .search-box input {
            float: left;
            padding: 0 1rem;
            background: none;
            border: none;
            outline: none;
            font-size: 1rem;
            line-height: 2rem;
            width: 0;
            transition: 0.5s;
        }

        .search-box:hover > form input {
            width: 120px;
        }
    }

    @media (max-width: 1037px) {
        width: 100%;
        height: 4rem;

        .logo {
            font-size: 1rem;
        }

        .nav-container {
            display: none;
        }
        
        .user-container {
            margin-right: 6%;
        }

        .nav-menu {
            display: block;
            margin-right: 4%;
        }

        .nav-menu img {
            width: 26px;
            height: auto;
        }

        .search-box:hover > form input {
            width: 80px;
        }

        @media (max-width: 294px) {
            .search-box {
                display: none;
            }
        }
    }
    `;

const Toggle = styled.div`
    @media (max-width: 1037px) {
        width: 100%;

        .nav-menu {
            display: block;
            margin-right: 4%;
        }

        .nav-menu img {
            width: 10px;
            height: auto;
        }

        .nav-toggle {
            width: 100%;
            display: flex;
        }

        .nav-toggle ul {
            width: 100%;
        }

        .toggle-link {
            display: flex;
            justify-content: center;
            font-weight: 500;
            font-size: 1.25rem;
            padding: 1.2rem 0;
            border-bottom: 1px solid lightgray;
        }

        .toggle-link:hover, nav-toggle ul li:hover .toggle-link {
            color: gray;
            font-weight: 700;
        }
    
        .toggle-link:hover span, nav-toggle ul li:hover .toggle-link span {
            color: gray;
            font-weight: 900;
            transform: rotate(180deg);
            transition-duration: 1s;
        }
    
        .nav-toggle li ul {
            display: none;
            height: auto;
            margin: 0;
            padding: 0;
        }
    
        .nav-toggle li:hover ul {
            display: block;
        }
    
        .nav-toggle li li {
            display: block;
            float: none;
            margin: 0;
        }
    
        .toggle-dropdown {
            display: block;
            font-size: 1rem;
            font-weight: 200;
            line-height: 2.5rem;
            text-align: center;
        }
    
        .toggle-dropdown:hover {
            font-weight: 700;
        }
    
        .plus {
            font-weight: 550;
        }
    }

`;

/**
 * 헤더가 fixed 되어 있어서 페이지 콘텐츠가 4rem 아리에 나타나도록 하는 컴포넌트
 */
const Spacer = styled.div`
    height: 5.5rem;

    @media (max-width: 1038px) {
        height: 4rem;
    }
`;

const Header = ({ auth }) => {
    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <button className="nav-menu" onClick={() => setMenuToggle(!menuToggle)}>{menuToggle ? (<img src={menuCloseImg} />) : (<img src={menuOpenImg} />)}</button>
                    <div className="logo-container">
                        <Link href='/' className="logo">
                            <img src={LogoImg} alt=""/>
                        </Link>
                    </div>
                    <div className="nav-container">
                        <ul>
                            <li><Link href="/about" className="nav-link" id="about">About&nbsp;<span className="arrow">&#8744;</span></Link>
                            <ul>
                                <li><Link href="#" className="dropdown-item" id="aboutus">About Us</Link></li>
                                <li><Link href="#" className="dropdown-item" id="news">News</Link></li>
                            </ul>
                            </li>
                            <li><Link href="/services" className="nav-link" id="services">Services&nbsp;<span className="arrow">&#8744;</span></Link>
                            <ul>
                                <li><Link href="#" className="dropdown-item" id="aboutservices">Yochi-Yochi</Link></li>
                                <li><Link href="#" className="dropdown-item" id="events">Events</Link></li>
                                <li><Link href="#" className="dropdown-item" id="store">Store</Link></li>
                            </ul>
                            </li>
                            <li><Link href={route('board.index', 1)} className="nav-link" id="community">Community</Link></li>
                            <li><Link href={route('board.index', 2)} className="nav-link" id="qna">QnA</Link></li>
                        </ul>
                    </div>
                    <div className="user-container">
                        <div className="search-box">
                            <form action="#" method="post">
                                <input type="text" name="search" id="search" placeholder="검색" />
                                <button className="search-btn"><img src={searchImg} /></button>
                            </form>
                        </div>
                        {auth.user ? (
                                <div className="right">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {auth.user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('dashboard')}>MyPage</Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                        ) : (
                            <>
                                <Link href={route('login')} className="right">
                                    <img src={profileImg} alt="" />
                                </Link>
                                
                                {/* <Link
                                    href={route('register')}
                                    className="right"
                                >
                                    Register
                                </Link> */}
                            </>
                        )}
                    </div>
                </Wrapper>
            </HeaderBlock>
            {/* <Spacer /> */}
            {menuToggle &&
                <Toggle>
                    <div className="nav-toggle">
                        <ul>
                            <li><Link href='/about' className="toggle-link" id="about">About&nbsp;<span className="plus">+</span></Link>
                            <ul>
                                <li><Link href="#" className="toggle-dropdown" id="aboutus">About Us</Link></li>
                                <li><Link href="#" className="toggle-dropdown" id="news">News</Link></li>
                            </ul>
                            </li>
                            <li><Link href='/services' className="toggle-link" id="services">Services&nbsp;<span className="plus">+</span></Link>
                            <ul>
                                <li><Link href="#" className="toggle-dropdown" id="aboutservices">Yochi-Yochi</Link></li>
                                <li><Link href="#" className="toggle-dropdown" id="events">Events</Link></li>
                                <li><Link href="#" className="toggle-dropdown" id="store">Store</Link></li>
                            </ul>
                            </li>
                            <li><Link href="/board/1" className="toggle-link" id="community">Community</Link></li>
                            <li><Link href="/board/2" className="toggle-link" id="qna">QnA</Link></li>
                        </ul>
                    </div>
                </Toggle>
            }
        </>
    );
};

export default Header;