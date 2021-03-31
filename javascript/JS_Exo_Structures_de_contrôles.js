
// première fonction qui premet de calculer la somme des 3 nombres saisie pas l'utilisateur et l'affiche
function calculsomme()
{
	nbr1=Number(document.getElementById("nbr1").value);
	nbr2=Number(document.getElementById("nbr2").value);
	nbr3=Number(document.getElementById("nbr3").value);
	somme = nbr1+nbr2+nbr3;
	document.getElementById("somme").value=somme;
}

// fonction qui permet de calculer le produit des 3 nombres saisie par l'utilisateur et l'affiche
function calculproduit()
{
	nbr1=Number(document.getElementById("nbr1").value);
	nbr2=Number(document.getElementById("nbr2").value);
	nbr3=Number(document.getElementById("nbr3").value);
	produit = nbr1*nbr2*nbr3;
	document.getElementById("produit").value=produit;
}

// fonction qui permet de calculer la moyenne des 3 nombres saisie par l'utilisateur et l'affiche
function calculmoy()
{
	nbr1=Number(document.getElementById("nbr1").value);
	nbr2=Number(document.getElementById("nbr2").value);
	nbr3=Number(document.getElementById("nbr3").value);
	moy = (nbr1+nbr2+nbr3)/3;
	document.getElementById("moyenne").value=moy;
}

//fonction qui affiche le maximum des 3 nombres saisie par l'utilisateur
function calculmax()
{
	nbr1=Number(document.getElementById("nbr1").value);
	nbr2=Number(document.getElementById("nbr2").value);
	nbr3=Number(document.getElementById("nbr3").value);
	TabNombre=[nbr1,nbr2,nbr3];
	max=nbr1;
	if (nbr2>max) 
	{
		max=nbr2;
	}
	if (nbr3>max)
	{
		max=nbr3;
	}
	document.getElementById("maximum").value=max;
}
//fonction qui recupère les nombres saisie par l'utiisateur pour le prix hors taxe et le nombre d'article et qui calcule avec le taux de TVA le prix total de l'article
function prixTVA()
{
	prixHorsTaxe=Number(document.getElementById("prixHT").value);
	nbrArticle =Number(document.getElementById("article").value);
	tauxTva =Number(document.getElementById("TauxTVA").value);
	console.log(tauxTva);
	tauxTTC=((prixHorsTaxe*tauxTva)+ (prixHorsTaxe*nbrArticle));
	document.getElementById("prixTTC").value=tauxTTC+" €";

}

// fonction qui permet de recuperer la base du verbe saisie par l'utilisateur et qui verifie si c'est un verbe du premier groupe ou pas
function validation()
	{
		while(TabVerbe!="er")	
		{
			alert("ce n'est pas un verbe du premier groupe");
			Verbe=prompt(" quel est votre verbe ?");
			document.getElementById("verbe").value=Verbe;
			TabVerbe=[Verbe.substring(Verbe.length-2,Verbe.length)];	
		}
	}

// fonction principale de l'exercice sur la conjugaison qui affiche la conjugaison du verbe
function conjugaison()
{
	
	Verbe=document.getElementById("verbe").value;
	TabVerbe=[Verbe.substring(Verbe.length-2,Verbe.length)];
	validation(); // permet d'appeler la fonction validation si-dessus
	baseVerbe=Verbe.substring(0,Verbe.length-2);
	TabPersonne=["je ","tu ","il, elle, on ","nous ","vous ","ils, elles "]; // creation de tableau pour les personnes
	TabTerminaison=["e","es","e","ons","ez","ent"]; // création de tableau pour les terminaison

	if (Verbe.substring(0,1)=="a" || Verbe.substring(0,1)=="e" || Verbe.substring(0,1)=="i" || Verbe.substring(0,1)=="o" || Verbe.substring(0,1)=="u" || Verbe.substring(0,1)=="y" ) 
	{
		TabPersonne[0]="j'";
	}

	for(i=0;i<=TabPersonne.length-1;i++) // boucle qui permet d'afficher le verbe conjuger avec les personnes et les terminaison
	{
		document.write(TabPersonne[i]," ",baseVerbe+TabTerminaison[i],"<br>");
		console.log(TabPersonne[i],baseVerbe+TabTerminaison[i]);
	}
}

// fonction qui recupère les premières lettres de chaque mot pour afficher les initiales
function initiales()
{
	prenom=document.getElementById("prenom").value;
	nom=document.getElementById("nom").value;
	TabPrenom=prenom.substring(0,1); // substring(0,1) permet de recuperer le premier caractère de la variable
	TabNom=nom.substring(0,1);
	document.getElementById("init").value=("vos initiales sont : "+TabPrenom+"."+TabNom+".");
}

// fonction qui permet de verifier si un mot est un palindrome ou pas 
function palindrome() 
{
    const string = document.getElementById("mot").value;
    //Convertis la chaine de caractères en tableau
    const arrayValues = string.split('');

    // Reverse les valeurs du tableau
    const reverseArrayValues = arrayValues.reverse();

    // Convertis le tableau en chaine de caractères
    const reverseString = reverseArrayValues.join('');
    //Affiche si c'est un palindrome ou non
    if (string == reverseString) 
    {
        document.getElementById("palindrome").value=('C est un palindrome');
    } else 
    {
        document.getElementById("palindrome").value=('Ce n est pas un palindrome');
    }
}

/*function positif()
{

	nbr1positif=Number(document.getElementById("nbr1positif").value);
	nbr2positif=Number(document.getElementById("nbr2positif").value);
	nbr3positif=Number(document.getElementById("nbr3positif").value);
	nbr4positif=Number(document.getElementById("nbr4positif").value);
	//TabPositif=[nbr1positif,nbr2positif,nbr3positif,nbr4positif];
		if(nbr1positif<0)
		{
			nbr1positif='';
		}
		if(nbr2positif<0)
		{
			nbr2positif='';
		}
		if(nbr3positif<0)
		{
			nbr3positif='';
		}
		if(nbr4positif<0)
		{
			nbr4positif='';
		}
		moy=(nbr1positif+nbr2positif+nbr3positif+nbr4positif)/4;
		document.getElementById("moypositif").value=moy;
}*/

// fonction de verification pour l'exercice sur les catégories des enfants
function child()
{
	x = document.getElementById("categorieEnfant").value;
	y = parseInt(x);	
	while((isNaN(y))&&((x>0)&&(x<18)))	
	{
		alert("ce n'est pas un age valide");
		x = document.getElementById("categorieEnfant").value;
		y = parseInt(x);	
	}
}

function enfant ()
{
	child();
	switch(true) 
	{
		case x>=6 && x<=7:
		document.getElementById("categorieFinal").value=("Poussin");
		break;
		case x>=8 && x<=9:
		document.getElementById("categorieFinal").value=("Pupille"); 
		break;
		case x>=10 && x<=11:
		document.getElementById("categorieFinal").value=("Minime");
		break;
		case x>=12 && x<18:
		document.getElementById("categorieFinal").value=("Cadet"); 
		break;
		default:alert("age impossible");
		break;	
	}
}


function nombreStyle ()
{
	x = Number(document.getElementById("textStyle").value);
	if (x>=1 && x<=5) 
	{
		document.getElementById("textStyle").style=("border : solid 1px darkgreen");
		document.getElementById("textStyle").style=("background-color: lightgreen");
	}
	else
	{
		document.getElementById("textStyle").style=("border : solid 1px red");
	}
}

nbralea = Math.round(Math.random() * 100) + 1;
y = 0;
function justeNombre ()
{
	x = Number(document.getElementById("nombreEntrer").value);
	if (x<nbralea) 
	{
		document.getElementById("verifNombre").value=("nombre trop petit");
		y+=1;
	}
	else if (x>nbralea)
	{
		document.getElementById("verifNombre").value=("nombre trop grand");
		y+=1;
	}
	else
	{
		y+=1;
		document.getElementById("verifNombre").value=("bien jouer vous avez trouvez le bon nombre en :" + y + " essais");
	}
}


function abandon ()
{
	document.getElementById("verifNombre").value=("le nombre était " + nbralea);
}

function moisAnnée ()
{
	mois = document.getElementById("nombreMois").value;
	switch(true)
	{
		case mois == 1:
		document.getElementById("moisValider").value=("Janvier");
		break;
		case mois == 2:
		document.getElementById("moisValider").value=("Février");
		break;
		case mois == 3:
		document.getElementById("moisValider").value=("Mars");
		break;
		case mois == 4:
		document.getElementById("moisValider").value=("Avril");
		break;
		case mois == 5:
		document.getElementById("moisValider").value=("Mai");
		break;
		case mois == 6:
		document.getElementById("moisValider").value=("Juin");
		break;
		case mois == 7:
		document.getElementById("moisValider").value=("Juillet");
		break;
		case mois == 8:
		document.getElementById("moisValider").value=("Août");
		break;
		case mois == 9:
		document.getElementById("moisValider").value=("Septembre");
		break;
		case mois == 10:
		document.getElementById("moisValider").value=("Octobre");
		break;
		case mois == 11:
		document.getElementById("moisValider").value=("Novembre");
		break;
		case mois == 12:
		document.getElementById("moisValider").value=("Décembre");
		break;
		default:
		document.getElementById("moisValider").value=("ce n'est pas un mois");
	}
}
