function checkToken() {
  const token = localStorage.getItem("token");

  if (!token || token === "") {
    return false;
  }

  return true;
}
