var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

async function ChangeTheme() {
  console.log("clicked");
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("hr").removeClass("dark");
    $("a").removeClass("dark");
    $("ul").removeClass("dark");
    $("h2").removeClass("dark");
    $("card-b").removeClass("dark");
    $("darkmode").removeClass("dark");
    document.getElementById("button").classList.toggle("fa-sun");
    document.getElementById("button").classList.toggle("fa-moon");
  } else {
    $("body").addClass("dark");
    $("hr").addClass("dark");
    $("a").addClass("dark");
    $("ul").addClass("dark");
    $("h2").addClass("dark");
    $("card-b").addClass("dark");
    $("darkmode").addClass("dark");
    document.getElementById("button").classList.toggle("fa-sun");
    document.getElementById("button").classList.toggle("fa-moon");
  }
}
