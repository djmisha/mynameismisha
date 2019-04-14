import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import HamburgerMenu from "./hamburger-menu"

const HeaderWrapper = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  margin-bottom: 40px;
  .hamburger {
    z-index: 20;
  }
`

const SiteTitle = styled.span`
  margin: 0;
  a {
    color: black;
    text-decoration: none;
    font-family: Oswald;
    font-weight: 400;
    font-size: 1.2em;
  }
`

// const Nav = styled.nav``

const NavItems = styled.ul`
  margin: 0;
  list-style-position: unset;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  padding-left: 20px;
  background: white;
  border: 10px solid #eee;
  z-index: 10;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-top: 100px;
  @media (min-width: 5000px) {
    padding-top: 0;
    position: static;
    background: transparent;
    flex-direction: row;
  }
`

const NavItem = styled.li`
  margin: 10px 0;
  a {
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 1.4em;
    color: #000;
  }
`
/* Main Navigation and Site Title */

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: [false, true, false, true],
      isDesktop: false,
    }
    this.windowResize = this.windowResize.bind(this)
  }

  handleClick(id) {
    let { open } = this.state
    this.setState({
      open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)],
    })
  }

  componentDidMount() {
    this.windowResize()
    window.addEventListener("resize", this.windowResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize)
  }

  windowResize() {
    this.setState({
      isDesktop: window.innerWidth >= 5000,
      open: window.innerWidth >= 5000 ? [1] : [0],
    })
  }

  navItemClicked() {
    this.setState({
      open: window.innerWidth >= 5000 ? [1] : [0],
    })
  }

  render() {
    const isDesktop = this.state.isDesktop
    return (
      <HeaderWrapper>
        <SiteTitle>
          <Link to="/">{this.props.siteTitle}</Link>
        </SiteTitle>
        <nav>
          {!isDesktop ? (
            <HamburgerMenu
              isOpen={this.state.open[0]}
              menuClicked={this.handleClick.bind(this, 0)}
              width={36}
              height={20}
              strokeWidth={2}
              rotate={0}
              color={this.state.open[0] ? "#000" : "#000"}
              borderRadius={5}
              animationDuration={0.3}
            />
          ) : null}
          {this.state.open[0] ? (
            <NavItems>
              <NavItem onClick={this.navItemClicked.bind(this)}>
                <Link to="/">Home</Link>
              </NavItem>
              {this.props.menu.map(item =>
                item.object_slug !== "home" ? (
                  <NavItem onClick={this.navItemClicked.bind(this)}>
                    <Link to={`/${item.object_slug}`} key={item.wordpress_id}>
                      {item.title}
                    </Link>
                  </NavItem>
                ) : null
              )}
            </NavItems>
          ) : null}
        </nav>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
