import React, { useEffect, useRef } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export function Page() {
    return (
        <>
            <Header />
            <Main />
            <Footer style={{color: "#000"}}/>
        </>
    )
}