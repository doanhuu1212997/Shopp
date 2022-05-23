import Home from "./pages/Home";

import Mainlayout from "./components/layout/Mainlayout";
import Page404 from "pages/404";
import Auth from "pages/Auth";
import Account from "pages/account";
export const router = [

];
export const routerLayout = [{
    path: '/*',
    element: < Mainlayout />
}];

export const routerChildren = [
    {
        path: '/',
        element: < Home />,
    },
    {
        path: '/auth',
        element: < Auth />,
    },
    {
        path: '/account/*',
        element: <Account />,
    },
    {
        path: '*',
        element: <Page404 />
    },
];

