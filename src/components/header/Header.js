import {NavLink} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useThemeSwitcher} from "react-css-theme-switcher";


import css from './Header.module.css';
import avatar from '../../img/avatar/man_avatar_icon.png';

const Header = () => {


    const {switcher, themes, currentTheme, status} = useThemeSwitcher();
    const [isDarkTheme, setIsDarkTheme] = useState(false);



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
                    <form>
                        <input/>
                    </form>
                    <nav>
                        <ul className={css.Header_nav_list}>
                            <li>
                                <NavLink to={'/movies'}>All movies</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/movies'}>All movies</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/movies'}>All movies</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={css.Header_right_box}>

                    <div className={css.HeaderAvatarWrapper}>
                        <div className={css.HeaderAvatar}>
                            <img src={avatar}/>
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