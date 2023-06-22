import React, { useContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { Progress } from 'flowbite-react';

const Main = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <Progress progress={45} />
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;