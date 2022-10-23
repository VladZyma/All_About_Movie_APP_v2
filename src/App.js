import {Routes, Route, Navigate} from 'react-router-dom';
import {ThemeSwitcherProvider} from "react-css-theme-switcher";

import css from './App.module.css';

import {MainLayout} from "./layouts";
import {MoviesPage, ErrorPage} from "./pages";
import {MoviesList, MovieInfo, FoundMoviesList, FoundMoviesInfo, MoviesByGenreList} from "./components";

const themes = {
    light: './index.css',
    dark: './index.css',
}

function App() {

    return (

        <ThemeSwitcherProvider defaultTheme={'light'} insertionPoint="inject-styles-here" themeMap={themes}>
            <div className={css.App}>


                <Routes>

                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'/movies'}/>}/>

                        <Route path={'/movies'} element={<MoviesPage/>}>
                            <Route index element={<Navigate to={'/movies/list'}/>}/>
                            <Route path={'/movies/list'} element={<MoviesList/>}/>
                            <Route path={'/movies/info'} element={<MovieInfo/>}/>
                            <Route path={'/movies/found'} element={<FoundMoviesList/>}/>
                            <Route path={'/movies/found/info/:id'} element={<FoundMoviesInfo/>}/>
                            <Route path={'/movies/genre/:id'} element={<MoviesByGenreList/>}/>
                        </Route>

                        <Route path={'*'} element={<ErrorPage/>}/>

                    </Route>

                </Routes>
            </div>
        </ThemeSwitcherProvider>

    );
}

export default App;
