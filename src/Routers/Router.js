import CategoryPage from '../Pages/CategoryPage';
import HomePage from '../Pages/HomePage';
import Page404 from '../Pages/Page404';
import ProductPage from '../Pages/ProductPage';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import SignOut from '../Pages/SignOut';
import LayOutAdmin from '../components/layout/LayOutAdmin';
import LayOutWebSite from '../components/layout/LayOutWebSite';
import AdminProduct from '../Pages/AdminProduct';
import AddProduct from '../Pages/AddProduct';
import EditProduct from '../Pages/EditProduct';
import AdminCategories from '../Pages/AdminCategories';
import AddCategories from '../Pages/AddCategories';
import EditCategories from '../Pages/EditCategories';

const Routers = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin/:path/:id?">
                    <LayOutAdmin>
                        <Switch>
                            <Route exact path="/admin/dashboard">
                                Dashboard Page
                        </Route>
                            <Route exact path="/admin/user">
                                User Manager
                        </Route>
                            <Route exact path="/admin/product">
                                <AdminProduct {...props}></AdminProduct>
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AddProduct {...props}></AddProduct>
                            </Route>
                            <Route exact path="/admin/product/edit/:id">
                                <EditProduct {...props}></EditProduct>
                            </Route>
                            <Route exact path="/admin/categories">
                                <AdminCategories {...props}></AdminCategories>
                            </Route>
                            <Route exact path="/admin/categories/add">
                                <AddCategories {...props}></AddCategories>
                            </Route>
                            <Route exact path="/admin/categories/edit/:id">
                                <EditCategories {...props}></EditCategories>
                            </Route>

                        </Switch>
                    </LayOutAdmin>
                </Route>
                <Route>
                    <LayOutWebSite>
                        <Switch>
                            <Route path="/" exact> <HomePage {...props}></HomePage> </Route>
                            <Route path="/product" exact> <ProductPage></ProductPage> </Route>
                            <Route path="/category" exact> <CategoryPage></CategoryPage> </Route>
                            <Route path="/signin" exact> <SignIn></SignIn> </Route>
                            <Route path="/signup" exact> <SignUp></SignUp> </Route>
                            <Route path="/signout" exact> <SignOut></SignOut> </Route>
                            <Route path="*" exact> <Page404></Page404> </Route>
                        </Switch>
                    </LayOutWebSite>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Routers