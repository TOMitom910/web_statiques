<?php 
	$var = "les bases de donnée en php";
?>
<!DOCTYPE html>
<html>
<head>
	<style type="text/css">
		tr:nth-child(even) td:nth-child(even)
	    {background-color: lime}
	    tr:nth-child(odd) td:nth-child(even)
	    {background-color: #ff9999}
	    tr:nth-child(even) td:nth-child(odd)
	    {background-color: lightgreen}
	    tr:nth-child(odd) td:nth-child(odd)
	    {background-color: #ffff55}
	</style>
	<title><?php echo $var ?></title> <!-- affichage de la variable $var dans la balise title -->
</head>
<body>
	<?php
	require("conect.php"); 		//inclut et exécute le fichier conect.php.
	$connexion = conect_BDD();
	$sql = "SELECT * from client";	// requete a executer


	function recup_val()
	{
		GLOBAL $connexion;		//permet d'appeller la variable $connexion qui a été definit en dehors de la fonction
		GLOBAL $sql;			//permet d'appeller la variable $sql qui a été definit en dehors de la fonction
		$result = $connexion -> query($sql);
		return $result;
	}


	if (!$connexion->query($sql)) 		// si la requette ne marche pas on affiche un message d'erreur
	{
		echo "pb accès aux clients";
	}
	else
	{
		echo 
		"<table style ='border : solid 2px red; width: 100%; text-align: center'>
			<thead>
				<tr>
					<th colspan = 6>liste des clients:</th>
				</tr>
				<tr>";

								//boucle for qui fonctionne avec la fonction recup_val2
		for ($i=0; $i < recup_val() ->columnCount(); $i++) 
		{ 
			echo "<td>".recup_val() -> getColumnMeta($i)['name']."</td>";
		}
		echo "
			</tr>
			</thead>
			<tbody>
		";
		if (isset($_REQUEST["produit"])) 
		{
			$var_stock = $_REQUEST["produit"];
			for ($i=0; $i < sizeof($var_stock) ; $i++) 
			{ 
				$requette = "SELECT * from client WHERE '".$_REQUEST["produit"][$i]."' LIKE'". $var_stock[$i]."'";
				$ligne = $connexion->query($requette);
           		$ligne = $ligne->fetchAll(PDO::FETCH_ASSOC);
				echo "<tr><td>".$ligne[0][]."</td><td>".$ligne[0]["LIBELLE"]."</td></tr>";
			}
		}
		else
		{
			foreach ($connexion->query($sql) as $row) 
			{
				echo "<tr>";
							// on affiche les valeurs comprise dans la base de données

				//boucle for qui fonctionne avec la fonction recup_val

				for ($i=0; $i <recup_val() ->columnCount() ; $i++)
				{ 
					echo "<td>".$row[recup_val() -> getColumnMeta($i)['name']]."</td>";
				}
				echo "</tr>";
				$i++;
			}
		}


		echo "</tbody></table>";	

		echo 
		"<form method='POST' action ='' id='form1'>
			<input type='text' id='nom' placeholder='Nom :'>
			<input type='text' id='localite' placeholder='Localite :'>
			<input type='text' id='cat' placeholder='Categorie :'>
			<button>cliquez pour valider</button>	
		</form>";
	}
	?>
</body>
</html>