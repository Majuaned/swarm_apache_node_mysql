<?php
// ***************    CONEXIÓN  ********************
$servername = "mysql";
$username = "root";
$password = "root_password";
$dbname = "prueba";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}
//************************************************** */
//                     Consulta

$sql = "SELECT * FROM alumnos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h1>Listado de Alumnos</h1>";
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
        echo "<li>" . $row["Nombre"] . " " . $row["Apellido"] . " (DNI: " . $row["Dni"] . ")</li>";
    }
    echo "</ul>";
} else {
    echo "<h2>No se encuentran alumnos registrados</h2>"
}

// Formulario para agregar un nuevo alumno
echo "<h2>Agregar Alumno</h2>";
echo '<form method="POST" action="agregar_alumno.php">';
echo '  Nombre: <input type="text" name="nombre"><br>';
echo '  Apellido: <input type="text" name="apellido"><br>';
echo '  DNI: <input type="text" name="dni"><br>';
echo '  <input type="submit" value="Agregar">';
echo '</form>';

$conn->close();
?>
