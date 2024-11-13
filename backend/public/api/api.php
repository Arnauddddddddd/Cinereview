<?php
header('Content-Type: application/json');

require_once 'vendor/autoload.php';

function multiSearch($querry) {
    $client = new \GuzzleHttp\Client();
    

    $response = $client->request('GET', 'https://api.themoviedb.org/3/search/multi?query=' . $querry . '&include_adult=false&language=en-US&page=1', [
    'headers' => [
        'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWFlNDI1ZWZiNDRmNTQ0YjBhZmE3OGVjZTBmNWM2MiIsIm5iZiI6MTczMTQ4NjcwMS43NDMzOTYzLCJzdWIiOiI2NjFiZDM1ZWY1YzgyNDAxODc1ZTM5OTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nh594UhOTs0AVU5GNl8hkqfwH8Vk5FRlAc1fifcH2TQ',
        'accept' => 'application/json',
    ],
    ]);
    return $response;
}
// $_GET['query']
echo multiSearch("alien")->getBody();

?>