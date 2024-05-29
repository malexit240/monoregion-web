import { useNavigate } from 'react-router-dom';
import { createElement, useEffect } from 'react';

export function Redirect(to: string) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(to);
    });

    return createElement('div');
}
