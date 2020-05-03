<html>
 <head>
  <title>Teste PHP</title>
 </head>
 <body>
 <?php 
   if ($_GET['hub_verify_token'] === '473639') {
  echo $_GET['hub_challenge'];
}
 ?>
 </body>
</html>
