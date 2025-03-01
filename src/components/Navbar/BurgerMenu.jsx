import { authUserSession } from "@/libs/auth-libs";
import BurgerMenuClient from "./BurgerMenuClient";

const BurgerMenu = async () => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

    return <BurgerMenuClient user={user} actionLabel={actionLabel} actionURL={actionURL} />;
};

export default BurgerMenu;