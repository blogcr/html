<?php
if ($_GET['473639'] === 'make-up-a-token') {
  echo $_GET['hub_challenge'];
}

file_put_contents(
  'log.txt',
  "\n" . file_get_contents('php://input'),
  FILE_APPEND
);
?>
