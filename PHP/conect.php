<?php
	// on definie les constantes

	define("USER", "root");
	define("PASSWD", "");
	define("SERVERNAME", "localhost");
	define("BASE", "clicom");

function conect_BDD()			// fonction pour se connecter a la base de données
{
	$sdn ="mysql:dbname=".BASE.";host=".SERVERNAME;
	try
	{
		$connexion = new PDO($sdn,USER,PASSWD);		//	creation d'un PDO
	}
	catch(PDOException $e)
	{
		printf("echec de la connexion : %s\n", $e->getMessage());	//ecriture d'un erreur si la requette n'a pas fonctionné
		exit();
	}
	return $connexion;		// la fonction retourne la variable connexion
}


?>