import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import LinkButton from '@/components/LinkButton';

const ErrorPage: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center p-16">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p className="mt-3 text-2xl">
                Sorry, we couldn't find the page you were looking for.
            </p>
            <p className="mt-3 text-xl">
                Please check the URL in the address bar and try again.
            </p>
            <LinkButton href="/">Go back to home</LinkButton>
        </main>
        </div>
    );
};

export default ErrorPage;