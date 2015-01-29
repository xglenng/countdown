<?php
if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}
function countdown($seconds)
{
    for($i = $seconds; $i > 0; $i--){
		echo $i."\n";
		sleep(1);
	}
}
countdown(10);

die('0 All done...');