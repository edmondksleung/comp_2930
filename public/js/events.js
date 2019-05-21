//MENU DROP DOWN TOGGLE----------------------------------------------------
$(".menuButton").click(function () {
    event.stopPropagation();
    $(".dropDownBox").toggle();
    $(".dropDown").toggle();
});

//MENU DROP DOWN HIDE ON CLICK ANYWHERE ELSE ON PAGE------------------------------
$(document).click(function () {
    $(".dropDownBox").hide();
    $(".dropDown").hide();
});

$(window).resize(function () {
    if ($(window).width() > 700) {
        $(".dropDownBox").hide();
        $(".dropDown").hide();
    }
});

//LOGOUT BUTTON-------------------------------------------------------------
$(".logoutButton").click(function () {
    firebase.auth().signOut();
    alert('Logged Out');
    window.location = 'signIn.html';
    console.log("test");
});