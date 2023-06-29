import { Link } from '@remix-run/react';

export function Header() {
    return <header>
        <nav className="flex gap-3">
            <Link className="text-primary" to={'/'}>Home</Link>
            <Link className="text-primary" to="/imprint">Imprint</Link>
        </nav>
    </header>
}