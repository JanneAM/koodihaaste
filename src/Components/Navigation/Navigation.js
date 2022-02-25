import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='dropdown'>
            <p>Menu</p>
            <ul className='dropdown-content'>
                <li>Auto A</li>
                <li>Auto B</li>
                <li>Auto C</li>
            </ul>
        </nav>
    );
};

export default Navigation;