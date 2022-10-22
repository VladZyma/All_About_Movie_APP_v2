import css from './Loading.module.css';


const Loading = () => {

    return (

        <div className={css.loading_container}>
            <div className={css.spinner}></div>
        </div>

    );
}
export {Loading}