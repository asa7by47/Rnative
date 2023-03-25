export const loginRequest = () => ({
  type: "LOGIN_REQUEST",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const login = (email, password) => async (dispatch) => {
  //   dispatch(loginRequest());

  try {
    // Here you can use any backend API to authenticate user
    const user = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "omar@omar.com" && password === "asdasd") {
          alert("Right Login");
          resolve({ email });
        } else {
          alert("Wrong Login");

          reject(new Error("Invalid email or password"));
        }
      }, 0);
    });

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
