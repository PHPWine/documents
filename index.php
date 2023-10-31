<?php require __DIR__ . '/library/PHPAutoloader/PHPAutoloader.php'; 

 use \PHPAutoloader\Wine\RequestClass;

?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>PHPWine Documents</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="dist/style.7a6632e90e12b600d62c.css">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <h1>PHPWine Documments</h1>
         <a href="./about.php">About</a>

         <?php 
         
         $RequestClass = new RequestClass();
         echo "<br />";
         echo  $RequestClass->getRequestClass();

         ?>
        
        <script src="dist/bundle.caeffae0ceda09a9d4b0.js" async defer></script>
    </body>
</html>