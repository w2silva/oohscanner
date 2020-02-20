
 <?php

header('Access-Control-Allow-Origin: http://localhost:7000');
header('Access-Control-Allow-Methods: OPTIONS,GET,POST');
header('Access-Control-Allow-Headers: cache-control,content-type');
header('Content-Type: application/json');

function requestMapImageFromGoogleApi($id, $address, $latitude, $longitude) {
  $url = 'http://maps.googleapis.com/maps/api/staticmap?';
  $params = array(
    'key'     => 'AIzaSyCPijjYfR5WYoItWr2RlW2UAuAr_aloHJY',
    //'center'  => 'av. paulista, 1374 - bela vista, são paulo - sp, brasil',
    'center'  => $address, 
    'zoom'    => '13',
    'size'    => '180x140',
    'maptype' => 'roadmap',
    'markers' => "color:red|label:M|$latitude,$longitude",
    //'markers' => 'color:red|label:M|-23,5629,-46,6544',
    'sensor'  => 'false',
  );

  $urlImage = $url . http_build_query($params);
  $image = "map-images/$id.png";

  try {
    $imageContent = file_get_contents($urlImage);
    file_put_contents($image, $imageContent);
  } catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
  }
}

$mediaID = $_GET['ID'];
$mediaAddress = $_GET['ADDRESS'];
$mediaLat = $_GET['LAT'];
$mediaLng = $_GET['LON'];
$filename = "map-images/$mediaID.png";

if ( $mediaID ) {
  if ( !file_exists($filename) ) {
    requestMapImageFromGoogleApi($mediaID, $mediaAddress, $mediaLat, $mediaLng);
  }

  header("Location: $filename");
} else {  
  echo "Parameter not found";
}

?>
