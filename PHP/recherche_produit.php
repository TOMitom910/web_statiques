<?php 
	$var = "recherche produit";
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
	$produit = "SELECT NPRO,LIBELLE from produit";	// requete a executer

	// fonction qui permet de recuperer les information de la table produit
	function recup_produit()
	{
		GLOBAL $connexion;		//permet d'appeller la variable $connexion qui a été definit en dehors de la fonction
		GLOBAL $produit;			//permet d'appeller la variable $produit qui a été definit en dehors de la fonction
		$result = $connexion -> query($produit);
		return $result;
	}

	echo "<br>";

	if (!$connexion->query($produit)) 		// si la requette ne marche pas on affiche un message d'erreur
	{
		echo "pb accès aux clients";
	}
	else
	{
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
		foreach ($connexion->query($produit) as $row) 
		{
			echo "<tr>";
						// on affiche les valeurs comprise dans la base de donnée


			//boucle for qui fonctionne avec la fonction recup_produit

			for ($i=0; $i <recup_produit() ->columnCount(); $i++)
			{ 
				echo "<td>".$row[recup_produit() -> getColumnMeta($i)['name']]."</td>";
			}
			echo "</tr>";
			$i++;
		}


		echo "</tbody></table>";			


		echo 
		"<form method='POST' action ='traitement_recherche_produit.php' id='form1'>
			<label for='produit'>articles :</label>
			<select id = 'produit' name ='produit[]' multiple>";								  
		foreach ($connexion->query($produit) as $row) 
		{
			// on affiche les valeurs comprise dans la base de données


			//boucle for qui fonctionne avec la fonction recup_produit

			for ($i=0; $i <recup_produit() -> columnCount()-1 ; $i++)
			{
				echo "<option value =".$row[recup_produit() -> getColumnMeta($i)['name']].">".$row[recup_produit() -> getColumnMeta($i+1)['name']]."</option>";
			}
		}
		echo 
		"	</select>
				<button onclick ='test()'>cliquez pour valider</button>	
		</form>
		";
	}				
?>
</body>
</html>