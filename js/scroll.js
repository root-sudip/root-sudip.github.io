/*document.getElementById("arrow bounce").onclick = function() {scrollWin()};
function scrollWin() {

    window.scrollBy(0, 1000);
}*/
/*alert("Hello! I am an alert box!!");*/
$("#click").click(function() {
    $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 2000);
});
$("#click").click(function() {
	/*document.getElementById(id).style.display="none";*/
	$( "#doing_box" ).fadeOut( "slow" );
	$( "#doing_box" ).fadeIn( 3000 );
});