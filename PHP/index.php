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
	$i = 0;
	require("conect.php"); 		//inclut et exécute le fichier conect.php.
	$connexion = conect_BDD();
	$sql = "SELECT * from client";	// requete a executer
	/*$result = $connexion->query($sql);*/
	/*var_dump($result);					// ou utiliser getType
	var_dump($result->rowCount());
	var_dump(empty($result));*/


		// 1ère version de la fonction pour recuperer les valeurs
		/*function recup_val($connexion,$sql)
	{
		$result = $connexion->query($sql);

		return $result;
	}*/

	function recup_val2()
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


								//boucle for qui fonctionne avec la fonction recup_val
		/*for ($i=0; $i < recup_val($connexion,$sql) ->columnCount(); $i++) 
		{ 
			echo "<td>".recup_val($connexion,$sql) -> getColumnMeta($i)['name']."</td>";
		}*/

								//boucle for qui fonctionne avec la fonction recup_val2
		for ($i=0; $i < recup_val2() ->columnCount(); $i++) 
		{ 
			echo "<td>".recup_val2() -> getColumnMeta($i)['name']."</td>";
		}
		echo "
			</tr>
			</thead>
			<tbody>
		";
		foreach ($connexion->query($sql) as $row) 
		{
			echo "<tr>";
						// on affiche les valeurs comprise dans la base de données


			//boucle for qui fonctionne avec la fonction recup_val

			/*for ($i=0; $i <recup_val($connexion,$sql) ->columnCount() ; $i++)
			{ 
				echo "<td>".$row[recup_val($connexion,$sql) -> getColumnMeta($i)['name']]."</td>";
			}*/


			//boucle for qui fonctionne avec la fonction recup_val2

			for ($i=0; $i <recup_val2() ->columnCount() ; $i++)
			{ 
				echo "<td>".$row[recup_val2() -> getColumnMeta($i)['name']]."</td>";
			}
			echo "</tr>";
			$i++;
		}


		echo "</tbody></table>";					

	}

					//PDO statement = le resutlat de la requete ne peut que etre de type PDO
					//row count est une methode 
					//empty prmet de dire si l'element est vide ou non, booleen negatif
					// collumn count permet d'avoir le nombre de colonne
					// get collumn meta qui permet re rechercher un indice  d'une colonne
					// affichage dynamique du resultat
					//fetchAll(PDO::FETCH_ASSOC)

					//fonction liste des clients




					//liste déroulante sur la tab produit: libelle produit et en champ caché on met le numero de produit, on affiche le menu deroulant qui permet de choisir les produit, labelle pour la liste qui est a selection multiple, l'elemnt selected de la liste est : sélectionné des articles

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
		if (isset($_REQUEST["produit"])) 
		{
			$var_stock = $_REQUEST["produit"];
			for ($i=0; $i < sizeof($var_stock) ; $i++) 
			{ 
				$requette = "SELECT * from produit WHERE NPRO like'". $var_stock[$i]."'";
				$ligne = $connexion->query($requette);
           		$ligne = $ligne->fetchAll(PDO::FETCH_ASSOC);
				echo "<tr><td>".$ligne[0]["NPRO"]."</td><td>".$ligne[0]["LIBELLE"]."</td></tr>";
			}
		}
		else
		{
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
		}


		echo "</tbody></table>";			


		echo 
		"<form method='POST' action ='' id='form1'>
			<label for='produit'>articles :</label>
			<select id = 'produit' name ='produit[]' multiple>								  
				<option value=''>sélectionné des articles</option>";					//mettre  name= tableau pour que les valeurs soit stocké dans un tableaux
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
	if (isset($_REQUEST["produit"])) 
	{
		produit();
	}
	function produit()
	{
		echo "</br> atricles sélectionnées : </br>";
		$tab = array();

		$tab = [$_REQUEST["produit"]];	
		for ($i=0; $i < sizeof($tab[0]) ; $i++) 
		{ 
			echo $tab[0][$i]."</br>";
		}
	}
 ?>				
</body>
</html>
