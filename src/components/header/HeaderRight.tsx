import React, { useEffect } from "react";
import { auth, provider } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../../app/services/reduxStore";
import { signIn, signOut } from "../../app/containers/user/userSlice";
import firebase from "firebase/compat";
import { useNavigate } from "react-router-dom";

const HeaderRight = () => {
  const dispatch: AppDispatch = useDispatch();
  const userName: string = useSelector((state: RootState) => state.user.name);
  const userPhoto: string = useSelector((state: RootState) => state.user.photo);
  const userLoginStatus: boolean | undefined = useSelector(
    (state: RootState) => state.user.loggedIn,
  );
  const navigate = useNavigate();

  const setUser = (data: firebase.User | null) => {
    dispatch(
      signIn({
        name: data?.displayName,
        email: data?.email,
        photo: data?.photoURL,
        loggedIn: true,
      }),
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/main");
      }
    });
  }, [userName, navigate]);

  const handleAuth = async () => {
    try {
      if (!userName) {
        const response = await auth.signInWithPopup(provider);
        if (!response) {
          throw new Error("Error signing in with Google");
        }
        const data = response.user;
        setUser(data);
        navigate("/main");
      } else if (userName) {
        await auth.signOut();
        dispatch(signOut());
        navigate("/main");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {userLoginStatus ? (
        <div className="group relative">
          <img
            src={userPhoto}
            alt=""
            className="mr-2 h-12 w-12 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:opacity-80"
          />
          <button
            className="absolute bottom-0 right-0  m-2 box-border -translate-x-7 translate-y-full transform rounded-md border-2 px-6 py-2 font-bold tracking-widest opacity-0 transition-all duration-300 ease-in-out hover:bg-[#f9f9f9] hover:text-primary group-hover:opacity-100"
            onClick={handleAuth}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleAuth}
          className=" m-2 rounded-md border-2 px-6 py-3 font-bold tracking-widest transition-all duration-300 ease-in-out hover:bg-[#f9f9f9] hover:text-primary"
        >
          LOGIN
        </button>
      )}
    </div>
  );
};

export default HeaderRight;
