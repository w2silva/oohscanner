
 <?php

    header('Access-Control-Allow-Origin: http://localhost:7000');
    header('Access-Control-Allow-Methods: OPTIONS,GET,POST');
    header('Access-Control-Allow-Headers: cache-control,content-type');
    header('Content-Type: application/json');
    
    function requestApi($url) {
      $ch = curl_init();
      
      // set url
      curl_setopt($ch, CURLOPT_URL, $url);
      
      //return the transfer as a string
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      
      // $output contains the output string
      $output = curl_exec($ch);

      print_r($output);
      // close curl resource to free up system resources
      curl_close($ch);  
    }
    
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $data = $_POST['resource'];
      
      //EFETUANDO O POST NO SERVIDOR API
      $options = array(
        'http' => array(
          'header'  => 'Content-type: application/x-www-form-urlencoded\r\n',
          'method'  => 'GET'
        )
      );
      $context  = stream_context_create($options);
      $result = file_get_contents($url . $data, false, $context);
    } else {
      $param = $_GET['p'];
      //var_dump($url . $param);
      //EFETUANDO O GET NO SERVIDOR API
      $result = file_get_contents('http://planetooh.ddns.net:9400/' . $param);
    }
		
		//OBTENDO O RESULTADO
		echo $result;
		
 ?>
