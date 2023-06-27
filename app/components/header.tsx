import { Link } from '@remix-run/react';

export function Header() {
    return <header>
        <nav style={{display: 'flex', gap: '10px'}}>
            <Link to={'/'}>Home</Link>
            <Link to="/imprint">Imprint</Link>
        </nav>
    </header>
}