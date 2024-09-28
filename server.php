<?php
// Check if the form was submitted
if (isset($_POST['submit'])) {
    // Redirect to index.html
    header('Location: index.html');
    exit;
}else{
    echo "forms n funconou";
}
?>
