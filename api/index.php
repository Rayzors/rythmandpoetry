<?php
require_once '../vendor/autoload.php';

$klein = new \Klein\Klein();

$klein->respond('GET', '/artist', [new Controllers\Artists(), index]);
$klein->respond('GET', '/artist/[i:id]', [new Controllers\Artists(), getById]);

$klein->dispatch();