const load = () => {
  if (!JSON.parse(localStorage.getItem("isLoggedIn"))) {
    localStorage.setItem("email", "test@mail.com");
    localStorage.setItem("password", "123");
    localStorage.setItem("isLoggedIn", false);
    console.log("loaded mock data");
  }
};

export default load;
