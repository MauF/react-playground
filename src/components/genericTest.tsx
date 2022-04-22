import React from "react";
import {Outlet} from "react-router-dom";

type AppProps = {
    name: string;
}
export default function GenericTest({name}: AppProps) {
    return <div>{name} <Outlet/></div>;
}