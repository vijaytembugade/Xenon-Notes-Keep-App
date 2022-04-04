export const logoutService = () => {
  localStorage.removeItem("AUTH_TOKEN");
  localStorage.removeItem("AUTH_USER");
};
