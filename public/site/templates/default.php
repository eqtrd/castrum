<h1><?= $page->title() ?></h1>

<h1>Malou</h1>

<?php


use Solaris\MoonPhase;

$moonPhase = new MoonPhase();

$age = round($moonPhase->getAge(), 1);
$stage = $moonPhase->getPhase() < 0.5 ? 'waxing' : 'waning';
$distance = round($moonPhase->getDistance(), 2);

echo "The moon is currently " . $age . " days old, and is therefore " . $stage . ". ";
echo "It is " . $distance . " km from the centre of the Earth. ";

