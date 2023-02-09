import Carousel from "../../components/Authentication/Carousel/Carousel";
import SignUp from "../../components/Authentication/Signup/SignUp";
import css from "../../assets/css/AuthenticationPages.module.css";
import MyCard from "../../components/UI/MyCard";

const SignupPage = () => {
    return (
        <div className={css.page}>
            <div className={css.leftColumn}>
                <Carousel />
            </div>
            <div className={css.rightColumn}>
                <MyCard className={css.card}>
                    <SignUp />
                </MyCard>
            </div>
        </div>
    );
};

export default SignupPage;
