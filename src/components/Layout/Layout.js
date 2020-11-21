import React, { useMemo, useState } from 'react'
import { Link } from 'gatsby'
import NavContext from '../../context/NavContext'
import Header from '../Header/Header'
import Scan from '../Scan'

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(props)
  const NavProvider = useMemo(
    () => ({
      menuOpen,
      setMenuOpen,
    }),
    [menuOpen, setMenuOpen],
  );
  // render() {
  //   const { location, children } = this.props
  //   let header

  //   let rootPath = `/`
  //   if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
  //     rootPath = __PATH_PREFIX__ + `/`
  //   }

  //   return (
  //     <Container>
  //       <Navigation />
  //       {children}
  //     </Container>
  //   )
  // }

  return (
    <>
      <NavContext.Provider value={NavProvider}>
        <Header />
        <Scan />
      </NavContext.Provider>
    </>
  )
}

export default Layout

