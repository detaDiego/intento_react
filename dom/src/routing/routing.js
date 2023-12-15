import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home} from '../pages/home';
import { Page1 } from '../pages/page1';

export default function Routing () {


    return (
        <>
            < Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/page1" element={<Page1/>}></Route>
                
            </Routes>
        </>
    );
}