'use client';

import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { Hash } from '../../../utils/types';

interface ScrollToViewProps {
    hash: Hash;
}

export function ScrollToView({ hash, children }: PropsWithChildren<ScrollToViewProps>) {
    const ref = useRef<HTMLDivElement>(null);

    const handleHashChange = () => {
        if (!ref.current) {
            return;
        }
        const isActive = window.location.hash === hash;
        if (isActive) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            document.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return <div ref={ref}>{children}</div>;
}