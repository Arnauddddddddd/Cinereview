<?php
header('Content-Type: application/json');

require_once 'vendor/autoload.php';

// $input = file_get_contents('php://input');
// $data = json_decode($input, true);
// $query = $data['obj']['query'];


function multiSearch($str, $page = 1) {
    $client = new \GuzzleHttp\Client();

    $response = $client->request('GET', 'https://api.themoviedb.org/3/search/multi?query=' . $str . '&include_adult=false&language=en-US&page=' . strval($page), [
    'headers' => [
        'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWFlNDI1ZWZiNDRmNTQ0YjBhZmE3OGVjZTBmNWM2MiIsIm5iZiI6MTczMTQ4NjcwMS43NDMzOTYzLCJzdWIiOiI2NjFiZDM1ZWY1YzgyNDAxODc1ZTM5OTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nh594UhOTs0AVU5GNl8hkqfwH8Vk5FRlAc1fifcH2TQ',
        'accept' => 'application/json',
    ],
    ]);
    return $response;
}
// $_GET['query']

echo multiSearch($_POST['query'], $_POST['page'])->getBody();

?>