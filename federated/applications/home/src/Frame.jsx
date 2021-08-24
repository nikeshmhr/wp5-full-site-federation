import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { Cart } from "react-bootstrap-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("home/Home"));
const Search = React.lazy(() => import("search/Search"));
const Checkout = React.lazy(() => import("checkout/Checkout"));
const Mine = React.lazy(() => import("mine/Mine"));

const HomeRoute = () => (
  <React.Suspense fallback={<div />}>
    <Home />
  </React.Suspense>
);
const SearchRoute = () => (
  <React.Suspense fallback={<div />}>
    <Search />
  </React.Suspense>
);
const CheckoutRoute = () => (
  <React.Suspense fallback={<div />}>
    <Checkout />
  </React.Suspense>
);
const MineRoute = () => (
    <React.Suspense fallback={<div />}>
        <Mine />
    </React.Suspense>
);

const Frame = ({ page = "home" }) => {
    const items = useSelector(state => state.items);
    return (
            <Router>
                <Container>
                    <Navbar bg="dark" expand="lg">
                        <Navbar.Brand>
                            <Link to="/" style={{ color: "white" }}>
                                Pokeshop
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <Link to="/" style={{ color: "white" }}>
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/search" style={{ color: "white" }}>
                                        Search
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/mine" style={{ color: "white" }}>
                                        Mine
                                    </Link>
                                </Nav.Link>
                            </Nav>
                            <Link
                                    to="/checkout"
                                    style={{
                                        paddingLeft: 10,
                                        paddingBottom: 15,
                                    }}
                            >
                                <Cart color="white" size={30} />
                                <span
                                        style={{ color: "white", fontWeight: "bold", paddingLeft: 5 }}
                                >
              {items.reduce((a, { count }) => a + count, 0)}
            </span>
                            </Link>
                        </Navbar.Collapse>
                    </Navbar>
                    <Container>
                        <Switch>
                            <Route path="/" exact>
                                <HomeRoute />
                            </Route>
                            <Route path="/search">
                                <SearchRoute />
                            </Route>
                            <Route path="/checkout">
                                <CheckoutRoute />
                            </Route>
                            <Route path="/mine">
                                <MineRoute />
                            </Route>
                        </Switch>
                    </Container>
                </Container>
            </Router>
    );
}

export default Frame;
