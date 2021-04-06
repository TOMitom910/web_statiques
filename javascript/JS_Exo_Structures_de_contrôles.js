
// première fonction qui premet de calculer la somme des 3 nombres saisie pas l'utilisateur et l'affiche
function calculsomme()
{
	var nbr1=Number(document.getElementById("nbr1").value);	//number permet de definir la valeur comme un nombre 
	var nbr2=Number(document.getElementById("nbr2").value);
	var nbr3=Number(document.getElementById("nbr3").value);
	var somme = nbr1+nbr2+nbr3;	//somme des 3 nombres
	document.getElementById("somme").value=somme;
}

/*autre methode pour la fonction somme :
	var TabElements = document.getElementsByClassName("som");
	var somme = 0;
	for(i=0;i<TabElements.length;i++){
	somme += parseInt(TabElements[i].value);
	}
*/

// fonction qui permet de calculer le produit des 3 nombres saisie par l'utilisateur et l'affiche
function calculproduit()
{
	var nbr1=Number(document.getElementById("nbr1").value);
	var nbr2=Number(document.getElementById("nbr2").value);
	var nbr3=Number(document.getElementById("nbr3").value);
	var produit = nbr1*nbr2*nbr3;	// produit des 3 nombres
	document.getElementById("produit").value=produit;
}

// fonction qui permet de calculer la moyenne des 3 nombres saisie par l'utilisateur et l'affiche
function calculmoy()
{
	var nbr1=Number(document.getElementById("nbr1").value);
	var nbr2=Number(document.getElementById("nbr2").value);
	var nbr3=Number(document.getElementById("nbr3").value);
	var moy = (nbr1+nbr2+nbr3)/3;	// moyenne des 3 nombres
	document.getElementById("moyenne").value=moy;
}

//fonction qui affiche le maximum des 3 nombres saisie par l'utilisateur
function calculmax()
{
	var nbr1=Number(document.getElementById("nbr1").value);
	var nbr2=Number(document.getElementById("nbr2").value);
	var nbr3=Number(document.getElementById("nbr3").value);
	var TabNombre=[nbr1,nbr2,nbr3];
	var max=nbr1; // if pour verifier lequel des nombres est le plus grand
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
	var prixHorsTaxe=Number(document.getElementById("prixHT").value);
	var nbrArticle =Number(document.getElementById("article").value);
	var tauxTva =Number(document.getElementById("TauxTVA").value);
	console.log(tauxTva);	//console.log pour verifier si le taux de TVA est bien pris en compte
	var tauxTTC=((prixHorsTaxe*tauxTva)+ (prixHorsTaxe*nbrArticle));	//calcul pour avoir le prix total
	document.getElementById("prixTTC").value=tauxTTC+" €";

}

// fonction qui permet de recuperer la base du verbe saisie par l'utilisateur et qui verifie si c'est un verbe du premier groupe ou pas
function validation()
{
	Verbe = document.getElementById("verbe").value;
	TabVerbe = [Verbe.substring(Verbe.length-2,Verbe.length)];
	while(TabVerbe != "er")	
	{
		alert("ce n'est pas un verbe du premier groupe");
		var Verbe=prompt(" quel est votre verbe ?");
		document.getElementById("verbe").value=Verbe;
		var TabVerbe=[Verbe.substring(Verbe.length-2,Verbe.length)];	//tableau contenant la terminaison du verbe saisie par l'utilisateur
	}
}

// fonction principale de l'exercice sur la conjugaison qui affiche la conjugaison du verbe
function conjugaison()
{
	
	var Verbe = document.getElementById("verbe").value;
	var TabVerbe = [Verbe.substring(Verbe.length-2,Verbe.length)];	//tableau contenant la terminaison du verbe saisie par l'utilisateur
	validation(); // permet d'appeler la fonction validation si-dessus
	var baseVerbe = Verbe.substring(0,Verbe.length-2);	// variable qui stock le radical du verbe saisie par l'utilisateur
	var TabPersonne = ["je ","tu ","il, elle, on ","nous ","vous ","ils, elles "]; // creation de tableau pour les personnes
	var TabTerminaison = ["e","es","e","ons","ez","ent"]; // création de tableau pour les terminaison

	//	if qui permet de remplacer le je par j' si le verbe commence par une voyelle
	if (Verbe.substring(0,1) == "a" || Verbe.substring(0,1)=="e" || Verbe.substring(0,1)=="i" || Verbe.substring(0,1)=="o" || Verbe.substring(0,1)=="u" || Verbe.substring(0,1)=="y" ) 
	{
		TabPersonne[0] = "j'";
	}

	for(i=0;i<=TabPersonne.length-1;i++) // boucle qui permet d'afficher le verbe conjuger avec les personnes et les terminaison
	{
		document.write(TabPersonne[i]," ",baseVerbe+TabTerminaison[i],"<br>");
		console.log(TabPersonne[i],baseVerbe+TabTerminaison[i]);
	}

	document.write("actualisez la page si vous voulez voir les autres exercices")
}

// fonction qui recupère les premières lettres de chaque mot pour afficher les initiales
function initiales()
{
	var prenom=document.getElementById("prenom").value;
	var nom=document.getElementById("nom").value;
	var TabPrenom=prenom.substring(0,1); // substring(0,1) permet de recuperer le premier caractère de la variable
	var TabNom=nom.substring(0,1);
	if ((isNaN(prenom)) && (isNaN(nom))) 
	{
		document.getElementById("init").value=("vos initiales sont : "+TabPrenom+"."+TabNom+".");
	}
	else
		document.getElementById("init").value=("ce n'est pas valable");

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

function MoyNbPo() {

            //somme des nombres positifs 
                var Somme = 0;
            //effectif des valeurs positifs
            //la moyenne des nombres positifs = somme des nombres positifs / effectif des valeurs positifs
                var div = 0;
            //4 nombres
                i = 4;

                while (i > 0) {
                //conversion en entier
                    var nbr = parseInt(prompt('nbr'));

                    if (nbr > 0) {
                    //reaffectation
                        //Somme = parseInt(Somme + nbr);
                        Somme += parseInt(nbr);
                        //incrementation du nombre de valeurs positives
                        div += 1;
                        console.log(Somme,nbr);

                    }
                    i --;
                }
                //calcul de la moyenne
                Somme = Somme / div;
                console.log(Somme);
                document.getElementById("moypositif").innerHTML = Somme;
}

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

// fonction qui donne une categorie au enfant entre 6 et 18 ans avec un switch case
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
		default:
		document.getElementById("categorieFinal").value=("age impossible");
		break;	
	}
}

// fonction qui permet de verifier si le nombre est bien entre 1 et 5 
function nombreStyle ()
{
	var x = Number(document.getElementById("textStyle").value);
	if ((x>=1) && (x<=5)) 
	{
		document.getElementById("textStyle").style=("border : solid 1px darkgreen");
		document.getElementById("textStyle").style=("background-color: lightgreen");
	}
	else
	{
		document.getElementById("textStyle").style=("border : solid 1px red");
	}
}


// fonction où il faut trouver le nombre generé aléatoirement
var nbralea = Math.round(Math.random() * 100) + 1; // variable avec un nombre créer aléatoirement entre 1 et 100
var y = 0; // definie a 0 le nombre en dehors de la boucle pour eviter que y soit 0 a chasue
function justeNombre ()
{
	y += 1; // a chaque fois qu'on clique sur le bouton on incrémente les essais de 1
	var x = Number(document.getElementById("nombreEntrer").value);
	if (x<nbralea)	//  verifie si x est inferieur au nombre generer aléatoirement
	{
		document.getElementById("verifNombre").value=("nombre trop petit");
	}
	else if (x>nbralea)	//verifie si x est superieur au nombre generer aléatoirement 
	{
		document.getElementById("verifNombre").value=("nombre trop grand");
	}
	else   //si c'est ni superieur ni inferieur alors on affiche que le compte est bon et en y essais
	{
		document.getElementById("verifNombre").value=("bien jouer, vous avez trouvez le bon nombre en :" + y + " essai(s)");
	}
	console.log(nbralea);
}

// fonction pour pouvoir abandonner au juste Nombre qui donne le nombre quand on clique sur le bouton pour abandonner
function abandon ()
{
	document.getElementById("verifNombre").value=("le nombre était " + nbralea);
}

function restart()
{
	document.getElementById("verifNombre").value=("");
	document.getElementById("nombreEntrer").value=("");
	nbralea = Math.round(Math.random() * 100) + 1;
}

// autre facon d' afficher le mois a partir du chiffre rentré par l'utilisateur
/* var MoisExo10 = ["Janvier","Fevriers","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];

function moisAnnée(nombM) {

    nombM = parseInt(document.getElementById("nombreMois").value);
    document.getElementById("moisValider").value = MoisExo10[nombM-1];

}*/

// fonction avec un switch case pour obtenir le mois de l'année grace a son chiffre 
function moisAnnée ()
{
	var mois = document.getElementById("nombreMois").value;
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

function estBissextile(annee)
{
	return (((annee%4 == 0) && (annee%100 != 0)) || (annee%400 == 0));
}

function jourSuivant()
{
	var jourQuiSuit = 0;
	var moisSuivant = 0;
	var annee = 0;
	jourQuiSuit = Number(document.getElementById("joursuivant").value);
	moisSuivant = Number(document.getElementById("moisuivant").value);
	annee = Number(document.getElementById("anneesuivant").value);
	jourQuiSuit+=1;
	document.getElementById("JourSuivant").value=(jourQuiSuit+"/"+moisSuivant+"/"+annee);

	if (jourQuiSuit > 32) 
	{
		document.getElementById("JourSuivant").value=("ce jour n\'existe pas");
	}

	if (((moisSuivant == 4) || (moisSuivant == 6) || (moisSuivant == 9) || (moisSuivant == 11)) && (jourQuiSuit > 31)) 
	{
		document.getElementById("JourSuivant").value=("ce jour n\'existe pas");
	}

	if ((moisSuivant == 2) && (jourQuiSuit == 29 ) && (annee%400 != 0) && (annee%4 != 0)) 
	{
		moisSuivant+=1;
		jourQuiSuit=1;
		document.getElementById("JourSuivant").value=(jourQuiSuit+"/"+moisSuivant+"/"+annee);
	}

	if ((estBissextile(annee) == true) && (jourQuiSuit == 30) && (moisSuivant == 2)) 
	{
		moisSuivant+=1;
		jourQuiSuit=1;
		document.getElementById("JourSuivant").value=(jourQuiSuit+"/"+moisSuivant+"/"+annee);
	}

	if ((moisSuivant == 12) && (jourQuiSuit > 31)) 
	{
		moisSuivant = 1;
		jourQuiSuit = 1;
		annee += 1;
		document.getElementById("JourSuivant").value=(jourQuiSuit+"/"+moisSuivant+"/"+annee);
	}

	if (((moisSuivant==1) || (moisSuivant==3) || (moisSuivant==5) || (moisSuivant==7) || (moisSuivant==8) || (moisSuivant==10)) && (jourQuiSuit > 31))
	{
		moisSuivant+=1;
		jourQuiSuit=1;
		document.getElementById("JourSuivant").value=(jourQuiSuit+"/"+moisSuivant+"/"+annee);
	}
	else if (((moisSuivant == 4) || (moisSuivant == 6) || (moisSuivant == 9) || (moisSuivant == 11)) && (jourQuiSuit == 31)) 
	{
		moisSuivant+=1;
		jourQuiSuit=1;
		document.getElementById("JourSuivant").value=(jourQuiSuit+"/"+moisSuivant+"/"+annee);;
	}

	if ((estBissextile(annee) == false) && (moisSuivant == 2) && (jourQuiSuit > 29)) 
	{
		document.getElementById("JourSuivant").value=("ce jour n\'existe pas");
	}

	if ((estBissextile(annee) == true) && (moisSuivant == 2) && (jourQuiSuit > 30)) 
	{
		document.getElementById("JourSuivant").value=("ce jour n\'existe pas");
	}

}

 /*methode pour pouvoir appeler les jours de la semaine de la boulangerie*/
function jourSemaine()
{
	heure = document.getElementById("heure").value;
	tabJours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
		for(i=0;i<tabJours.length;i++)
		{
			document.getElementById("jourBoulangerie").value =(tabJours[i]);					
		}

}

function estOuverte(jour,heure)
{
	return ((((heure >= 7) && (heure <= 13)) || ((heure >= 16) && (heure <=20)) && (jour != 0)) && (jour != 1));
}					
/*jourSemaine();*/
function boulangerie()
{

	var heure = document.getElementById("heure").value;
	var jour = document.getElementById("jourBoulangerie").value;
	/* ce qui est en commentaire est une autre facon qui permet de faire fonctionner la boulangerie*/
	/*if ((jour == 0) && (heure >= 7) && (heure <=13)) 
	{
		document.getElementById("ouverture").value=("la boulangerie est ouverte ");
		console.log(jour);
		console.log(heure);
	}

	if ((jour == 0) && (heure >= 16) && (heure <=20)) 
	{
		document.getElementById("ouverture").value=("la boulangerie est fermée");
		console.log(jour);
		console.log(heure);
	}*/



	//if ((((heure >=7) && (heure <= 13)) || ((heure >=16 ) && (heure <=20))) && (jour!=1))
	if(estOuverte(jour,heure))
	{ 
	 	message ="la boulangerie est ouverte";
	}

	else 
	{
	 	message = ("la boulangerie est fermée");
	}
		document.getElementById("ouverture").value= message ;



	// toujour une autre façon de faire l'exercice de la boulangerie
	/*if (jour == 1)
	{
		document.getElementById("ouverture").value=("la boulangerie est fermée ");
		console.log(jour);
		console.log(heure);
	}*/
}


function aubergeDeLile()
{
	écus = 0;
	client = document.getElementById("auberge").value;
	poids = document.getElementById("bagage").value;
	if (client == 60)
	{
		écus+=0;
	}
	if (client < 10)
	{
		écus+=5;
	}
	if ((client >= 10) &&  (client != 60)) 
	{
		écus+=30;
		if (poids >= 20)
		{
			écus+=10
		}
	}
	
	document.getElementById("prixauberge").value=("le prix de votre chambre est :" + écus + " écus");
}
