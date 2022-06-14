import style from './AppContent.module.css';
import {Route, Routes} from "react-router-dom";
import {routes} from "../../routes/routes";

export default function AppContent(props) {

    return <Routes className={style.appContent}>
        {routes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
    </Routes>;
};