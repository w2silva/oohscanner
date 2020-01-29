
 <?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Headers: cache-control');
    header('Content-Type: application/json');

		//PASSAGENS DE PARAMETROS
		$url ='http://planetooh.ddns.net:9400/';
    $param = $_GET['p'];

		//EFETUANDO O GET NO SERVIDOR API
    $result = file_get_contents($url . $param);
		
		//OBTENDO O RESULTADO
		echo $result;
		
 ?>
