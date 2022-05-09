import Home from "./pages/Home";

import Mainlayout from "./components/layout/Mainlayout";
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

];

