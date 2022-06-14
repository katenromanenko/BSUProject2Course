import Main from "../components/Content/Pages/Main/Main";
import Library from "../components/Content/Pages/Library/Library";
import Shop from "../components/Content/Pages/Shop/Shop";


export const routes = [
    {path: '/*', component: <Main />},
    {path: '/library', component: <Library />},
    {path: '/shop', component: <Shop />},
]