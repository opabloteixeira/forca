<?php
$words = array("javascript","jquery","mobile","development","framework","application","internet","website","hacker");
$rand_word = $words[array_rand($words, 1)];

$num=range(1,strlen($rand_word));
shuffle($num); 

for ($i=0; $i<2; $i++) {       
	$result[$i]=$num[$i];    
}
sort($result);

$data = array(
	'palavra' => $rand_word,
    'dica'=> $result
);

header('Content-Type: application/json');


echo json_encode($data);
?>
