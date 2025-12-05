import '@/app/ui/global.css';
import {inter, lusitana} from '@/app/ui/fonts';
import React from 'react';

export default function Layout({

    children}: {children: React.ReactNode}){
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}
        </body>
        </html>

    );
}
