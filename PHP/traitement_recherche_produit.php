<?php 
	$var = "traitement recherche produit";
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
	if (isset($_REQUEST["produit"])) 
	{
		require("conect.php"); 		//inclut et exécute le fichier conect.php.
	$connexion = conect_BDD();
	$produit = "SELECT NPRO,LIBELLE from produit";	// requete a executer
	function recup_produit()
	{
		GLOBAL $connexion;		//permet d'appeller la variable $connexion qui a été definit en dehors de la fonction
		GLOBAL $produit;			//permet d'appeller la variable $produit qui a été definit en dehors de la fonction
		$result = $connexion -> query($produit);
		return $result;
	}
		echo 
		"<table id='tab_produit' style ='border : solid 2px red; text-align: center'>
			<thead>
				<tr>
					<th colspan = 6>liste des produits:</th>
				</tr>
				<tr>";
								//boucle for qui fonctionne avec la fonction recup_val

								//boucle for qui fonctionne avec la fonction recup_val2
		for ($i=0; $i < recup_produit() ->columnCount(); $i++) 
		{ 
			echo "<td>".recup_produit() -> getColumnMeta($i)['name']."</td>";
		}
		echo "
			</tr>
			</thead>
			<tbody id='body'>
		";

		$var_stock = $_REQUEST["produit"];
		for ($i=0; $i < sizeof($var_stock) ; $i++) 
		{ 
			$requette = "SELECT * from produit WHERE NPRO like'". $var_stock[$i]."'";
			$ligne = $connexion->query($requette);
       		$ligne = $ligne->fetchAll(PDO::FETCH_ASSOC);
			echo "<tr><td>".$ligne[0]["NPRO"]."</td><td>".$ligne[0]["LIBELLE"]."</td></tr>";
		}

		echo "</tbody></table>";
	}			
	else
	{
		echo "le formulaire n'a pas été renseigné";
	}
?>
<br>
<a href="recherche_produit.php">retourné au formulaire</a>
</body>
</html>



