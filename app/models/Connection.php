<?php
	namespace app\models;

	/**
	 * classe de conexao
	 */

	use PDO;
	class Connection {
		function connect() {
			$pdo = new PDO("mysql:host=localhost;dbname=users", "root", "");
			$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

			return $pdo;
		}
	}
?>