<?php

function cidr_match($ip, $ranges) {
  $ranges = (array)$ranges;
  foreach($ranges as $range) {
    list($subnet, $mask) = explode('/', $range);
    if((ip2long($ip) & ~((1 << (32 - $mask)) - 1)) == ip2long($subnet)) {
      return true;
    }
  }
  return false;
}

$github_ips = array('207.97.227.253', '50.57.128.197', '108.171.174.178', '50.57.231.61');
$github_cidrs = array('204.232.175.64/27', '192.30.252.0/22', '140.82.112.0/20');

if(in_array($_SERVER['REMOTE_ADDR'], $github_ips) || cidr_match($_SERVER['REMOTE_ADDR'], $github_cidrs)) {

  $dir = '/home/b/bande/vi.4enki.ru/public_html';
  exec("cd $dir && git pull", $output);
  echo $output;

} else {

  header('HTTP/1.1 404 Not Found');
  echo '<html>
<head><title>404 Not Found</title></head>
<body bgcolor="white">
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
<!-- a padding to disable MSIE and Chrome friendly error page -->';
  exit;

}
