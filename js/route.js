const routes = {
  "#": function () {
    window.location.replace("index.html");
  },
  "#home": function () {
    window.location.replace("home.html");
  },
  "#postblog": function () {
    window.location.replace("postblog.html");
  },
};

window.addEventListener("hashchange", function (e) {
  const hash = window.location.hash;

  if (!checkToken()) {
    alert("You Need Access !!");
    window.location.replace("#login");
  }

  if (routes[hash]) {
    routes[hash]();
  }
});
