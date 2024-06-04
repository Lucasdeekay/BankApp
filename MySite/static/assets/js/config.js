(function () {
  var primary = localStorage.getItem("primary") || "#307EF3";
  var secondary = localStorage.getItem("secondary") || "#EBA31D";

  window.dunzoAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
  };
})();
