import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useThemeSwitcher} from "react-css-theme-switcher";


import css from './Header.module.css';
import avatar from '../../img/avatar/man_avatar_icon.png';
import {moviesActions} from "../../redux";
import {GenresSelector} from "../genresSelector/GenresSelector";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, reset} = useForm();

    const {switcher, themes} = useThemeSwitcher();
    const [isDarkTheme, setIsDarkTheme] = useState(false);


    function submit(movie) {
        dispatch(moviesActions.SetSearchValue(movie.name));
        navigate('/movies/found');
        reset();
    }

    function themeSwitcher() {
        setIsDarkTheme(prev => {
            switcher({theme: prev ? themes.light : themes.dark});
            return !prev;
        });
    }

    return (
        <div className={css.Header}>

            <div className={css.Header_img_wrapper}></div>

            <div className={css.Header_nav_row}>

                <div className={css.Header_logo}>
                    <div className={css.LogoTopRow}>
                        <div>A</div>
                        <div>A</div>
                    </div>
                    <div className={css.LogoBottomRow}>
                        <div>M</div>
                    </div>
                </div>

                <div className={css.Header_nav_center_box}>
                    <form onSubmit={handleSubmit(submit)}>
                        <input className={css.Header_form_input} type={'text'} {...register('name')}/>
                    </form>
                    <nav className={css.Header_nav}>
                        <ul className={css.Header_nav_list}>
                            <li>
                                <NavLink to={'/movies'}>All movies</NavLink>
                            </li>
                        </ul>
                       <GenresSelector/>
                    </nav>
                </div>

                <div className={css.Header_right_box}>

                    <div className={css.HeaderAvatarWrapper}>
                        <div className={css.HeaderAvatar}>
                            <img src={avatar} alt={''}/>
                        </div>
                        <p>user name</p>
                    </div>

                    <div>
                        <button className={isDarkTheme ? css.Night : css.Day} onClick={themeSwitcher}></button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export {Header}