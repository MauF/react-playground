import {NavLink, Route} from "react-router-dom";
import Test from "./components/test";
import Test2 from "./components/test2";
import React from "react";
import GenericTest from "./components/genericTest";

interface MenuRoute {
    path: string;
    text: string;
    component?: JSX.Element,
    subRoutes?: MenuRoute[]
};

const menuRoutes: MenuRoute[] = [
    {
        path: "test",
        text: "test",
        component: <Test/>
    },
    {
        path: "test2",
        text: "test2",
        component: <Test2/>,
        subRoutes: [
            {
                path: "sub-test",
                text: "sub test",
                component: <GenericTest name="sub test"/>
            }, {
                path: "sub-test2",
                text: "sub test2",
                component: <GenericTest name="sub test 2"/>,
                subRoutes: [
                    {
                        path: "sub-sub-test",
                        text: "sub sub test",
                        component: <GenericTest name="sub sub test"/>
                    }, {
                        path: "sub-sub-test2",
                        text: "sub sub test2",
                        component: <GenericTest name="sub sub test 2"/>
                    }
                ]
            }
        ]
    },
    {
        path: "test3",
        text: "test 3",
        component: <GenericTest name="test 3"/>
    }
];

const PATH_SEPARATOR = "/";

export function createRoutes() {

    function createRoute(route: MenuRoute, parentPath = PATH_SEPARATOR) {
        const aggregatePath = parentPath === PATH_SEPARATOR ? PATH_SEPARATOR + route.path : parentPath + PATH_SEPARATOR + route.path;
        console.log(aggregatePath, route);
        return <Route key={aggregatePath} path={aggregatePath} element={route.component}>
            {route.subRoutes && route.subRoutes.map(subRoute => createRoute(subRoute, aggregatePath))}
        </Route>
    }

    return menuRoutes.map(route => createRoute(route));
}

export function createLinks(): JSX.Element[] {
    function createLink(route: MenuRoute, deep = 0, parentPath = PATH_SEPARATOR): JSX.Element {
        const aggregatePath = parentPath === PATH_SEPARATOR ? PATH_SEPARATOR + route.path : parentPath + PATH_SEPARATOR + route.path;
        console.log("link", aggregatePath);
        return <React.Fragment key={route.path}>
            <NavLink key={aggregatePath} to={aggregatePath} className={({isActive}) => isActive ? 'active' : ''}>
                {[...Array(deep)].map(_ => "-")}{route.text}
            </NavLink>
            {route.subRoutes?.map(subRoute => createLink(subRoute, deep + 1, aggregatePath))}
        </React.Fragment>;
    }

    return menuRoutes.map(route => createLink(route));
}