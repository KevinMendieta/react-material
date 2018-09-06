const load = () => {
  localStorage.setItem("email", "test@mail.com");
  localStorage.setItem("password", "123");
  localStorage.setItem("isLoggedIn", false);
};

export default load;
