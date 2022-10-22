import {Outlet} from "react-router-dom";

import {MoviesList} from "../components";

const MoviesPage = () => {

    return (
        <div>
            {/*<MoviesList/>*/}
            <Outlet/>
        </div>
    );
}

export {MoviesPage}