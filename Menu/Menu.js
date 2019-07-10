//const toggleMenu = () => {
// Toggle the "menu--open" class on your menu refence.
//menu.classList.toggle("menu--open");
//};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

//menuButton.addEventListener("click", () => toggleMenu());

// JQUERY STRETCH

$(".menu-button").click(function() {
  $(".menu").animate(
    {
      right: "-50",
      //height: "toggle",
      direction: "left",
      width: "toggle"
      //left: 1000
    },
    2000,
    function() {}
  );
});
