import React, { useContext } from 'react';
import Navigation from '../Navigation';
import NavContext from '../../context/NavContext';

const Header = () => {
    // const { menuOpen, setMenuOpen } = useContext(NavContext);

    // useEffect(() => {
    //     if (menuOpen) {
    //         gsap.from(burger.current, { opacity: 0, rotate: -360, ease: 'power3' });
    //         gsap.to('.brandedBg', { opacity: 1, ease: 'power3' });
    //     } else {
    //         gsap.from(burger.current, { opacity: 0, rotate: -360, ease: 'power3' });
    //         // gsap.to('.brandedBg', { opacity: 0, ease: 'power3' });
    //     }
    // }, [menuOpen]);

    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}

export default Header;


