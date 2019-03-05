<!DOCTYPE html>
<html>
<style>
th{
	font-size: 8px;
}
table{
	margin-bottom: 0.1px;
}
td {
	height: 10px; width: 10px; padding: 0px;
	border: 1px solid black; overflow: none;
}
body{
	background-color: gray;
}
.white{
	background-color: SaddleBrown;
}
.black{
	 background-color: Peru;
}
img{
	height: 8px; width: 8px; background-color: transparent;
	display: block; margin-left: auto; margin-right: auto;
}

</style>
<?php
	printf("<script src='gymnasiearbete.js?%d'></script>", rand(1, 9999));
?>
<body id="body">
<input type=number min="4" max="19" placeholder="n" id="n"> <input type=button value="Skapa shackbräde" onclick="generera_shackbräde();">
<input type=button value="Backtracking" onclick="backtracking_start();"> <input type=button value="Stop" onclick="backtracking_stop();"> 
<input type=button value="Genetisk algoritm" onclick="genetisk_start();"> <input type=button value="Genetisk stop" onclick="genetisk_stop();"> 
<input type=button value="Fast backtrack" onclick="fastbacktrack();">
<table id="table" cellpadding=0 cellspacing=0>
</table>
</body>
</html>