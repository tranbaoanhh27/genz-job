import Carousel from "../../components/Authentication/Carousel/Carousel";
import LogIn from "../../components/Authentication/Login/LogIn";
import MyCard from "../../components/UI/MyCard";
import css from "../../assets/css/AuthenticationPages.module.css";

const LoginPage = () => {
    return (
        <div className={css.page}>
            <div className={css.carousel}>
                <Carousel />
            </div>
            <div className={css.form}>
                <MyCard className={css.card}>
                    <LogIn />
                </MyCard>
            </div>
        </div>
    );
};

export default LoginPage;
