<!DOCTYPE html>
<html>
<body>

<?php
function randomCode(){
	$randomCode = "";
	$char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	$charactersLength = strlen($char);
	$string_length = 8;
	for ($i=0;$i<$string_length; $i++) {
        $randomCode .= $char[rand(0, $charactersLength - 1)];
    }
    return "IA" .$randomCode;
}
for ($i=0; $i < 250 ; $i++) { 
	echo randomCode();
	echo "<br>";
}

?>
 
</body>
</html>