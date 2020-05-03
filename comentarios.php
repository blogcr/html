<?php
if ($_GET['hub_verify_token'] === '473639') {
  echo $_GET['hub_challenge'];
}
