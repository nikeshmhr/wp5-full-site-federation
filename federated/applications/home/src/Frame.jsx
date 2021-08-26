import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { Cart } from "react-bootstrap-icons";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Home = React.lazy(() => import("home/Home"));
const Search = React.lazy(() => import("search/Search"));
const Checkout = React.lazy(() => import("checkout/Checkout"));
const Mine = React.lazy(() => import("mine/Mine"));
const OAuth = React.lazy(() => import("./oauth/OAuth"));
const Admin = React.lazy(() => import('admin/Admin'));
const IsAdminWidget = React.lazy(() => import('admin/IsAdminWidget'));

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

const AdminRoute = () => (
    <React.Suspense fallback={<div/>}>
        <Admin />
    </React.Suspense>
);

const IsAdminWidgetSuspense = () => (
    <React.Suspense fallback={"loading"}>
        <IsAdminWidget />
    </React.Suspense>
)

const Frame = ({ page = "home" }) => {
    const items = useSelector(state => state.items);
    const isAdmin = useSelector(state => state.admin);
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
                                {
                                    isAdmin && <Nav.Link>
                                        <Link to="/admin" style={{ color: "white" }}>
                                            Admin
                                        </Link>
                                    </Nav.Link>
                                }
                                <Nav.Link>
                                <div style={{ color: "white", marginLeft: '200px' }}>
                                    <IsAdminWidgetSuspense/>
                                </div>
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
                            {/*<PublicRoute path="/login" component={OAuth} />*/}
                            {/*<PrivateRoute path="/search" component={SearchRoute} exact />*/}
                            {/*<PrivateRoute path="/checkout" component={CheckoutRoute} exact />*/}
                            {/*<PrivateRoute path="/mine" component={MineRoute} exact />*/}
                            {/*<PrivateRoute path="/" component={HomeRoute} exact />*/}

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
                            {
                                isAdmin ?
                                <Route path="/admin">
                                <AdminRoute/>
                            </Route>: <Redirect to="/" />
                            }
                        </Switch>
                    </Container>
                </Container>
            </Router>
    );
}

export default Frame;
