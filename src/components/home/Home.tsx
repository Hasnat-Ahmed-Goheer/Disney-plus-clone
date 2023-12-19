import React from "react";
import ImgSlider from "./ImgSlider";

const Home = () => {
  return (
    <div className="min-h-screen bg-home bg-cover">
      <ImgSlider />
    </div>
  );
};

export default Home;

/* The behavior you're describing, where the login page loads first and then the home page loads later on each refresh, could be due to the way your application handles user authentication and the initial state of the Redux store.

Here's a possible explanation of what might be happening:

Initial Redux Store State: When your application first loads, the Redux store may have an initial state where state.user.loggedIn is undefined or false. This could happen if you haven't set up your Redux store properly to handle user authentication, or if the authentication state hasn't been initialized yet.

Component Rendering: In your Main component, you're checking the value of userLoginStatus to determine whether to render the Home component or the Login component.

If userLoginStatus is undefined or false initially (as it might be if authentication hasn't completed yet or hasn't been initialized), it will render the Login component.
Then, after some time or when authentication is complete, the Redux store gets updated, and userLoginStatus becomes true.
When you refresh the page, the cycle repeats: userLoginStatus starts as undefined or false, rendering the Login component, and then updates to true later, showing the Home component.
To address this issue, you should make sure that your Redux store is properly initialized with the correct authentication state when the app loads. This could involve setting an initial value for loggedIn in your Redux store or dispatching an action to update the authentication state when the user logs in.

Additionally, you might want to implement some sort of loading indicator or splash screen that displays while the authentication state is being determined to provide a smoother user experience. This way, users won't see the login page briefly before the home page when refreshing the app. */