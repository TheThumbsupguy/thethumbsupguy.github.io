<?php
if( preg_match('/iphone|ipad|android/i', $_SERVER['HTTP_USER_AGENT']) ) {
	include('game-mobile.html');
}
else {
	include('game-desktop.html');
}
?>