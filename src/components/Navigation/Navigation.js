import React, { useContext, useRef } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap';
// import styled from '@emotion/styled/macro';
import styles from '../navigation.module.css'

import NavContext from '../../context/NavContext';

const Navigation = () => {
  const { menuOpen } = useContext(NavContext);

  const tween = useRef(null);
  const tweenLinks = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    tween.current = gsap.to(navRef.current, {
      height: '26rem',
      duration: 0.75,
      paused: true,
      delay: 0.25,
    });

    tweenLinks.current = gsap.to(linksRef.current.children, {
      opacity: 1,
      stagger: 0.15,
      paused: true,
    });

    return () => {
      tween.current.kill();
      tweenLinks.current.kill();
    };
  });

  useEffect(() => {
    if (menuOpen) {
      gsap.delayedCall(0.25, () => {
        tween.current.play();
        tweenLinks.current.play();
      });
    } else {
      tween.current.reverse();
      tweenLinks.current.reverse();
    }
  }, [menuOpen]);

  return (
    <>
      {/* <nav role="navigation">
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav> */}
      <Navbar role="navigation" ref={navRef}>
        <Links ref={linksRef}>
          <li>
            <Link to="/" activeClassName="active">
              <span className="link">Home</span>
            </Link>
          </li>
        </Links>
      </Navbar>
    </>
  )
}

export default Navigation;
