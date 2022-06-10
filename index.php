<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="scripts/tabs-manager.js"></script>
    <script src="scripts/clock.js"></script>
    <script src="scripts/chronometer.js"></script>
    <script src="scripts/minuteur.js"></script>

    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    
<section id="clock">

    <nav id="tabs">
        <span id="horloge-tab" class="tab">Horloge</span>
        <span id="chrono-tab" class="tab">Chronometre</span>
        <span id="minuteur-tab" class="tab">Minuteur</span>
        <span id="reveil-tab" class="tab">Reveil</span>
    </nav>
    
    <div id="content">
        <?php include_once 'include/clock.php'; ?>

        <?php include_once 'include/chronometre.php'; ?>
        
        <?php include_once 'include/minuteur.php'; ?>

        <div id="reveil" style="display:none;">reveil</div>
    </div>

</section>

</body>
</html>