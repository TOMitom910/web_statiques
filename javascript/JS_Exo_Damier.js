
function accueil()
{
	document.location.reload();
}

function reset()
{
	if(document.getElementById('un'))
    {
    	while(document.getElementById('un'))
    	{
    		document.getElementById('tab1').remove();
    	}
    }
}

var k=0;
function damier()
{
	
    //definition de variables 
    var dim= Number(document.getElementById("taille").value);
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var i = 0;
    var j = 0;
    var j = 0;
	var couleurSelect = false;
	var stringChg = ("<style>.noir{ background-color:"+color1+";} .blanc{ background-color:"+color2+";} .bord{border: solid 2px green;}</style>");
	var afficherdiv = ("<style>div {width: 50px;height: 50px;border: solid 1px black; display : inline-block;} fieldset {width: 300px;border: dotted 3px blue;}</style>");


	// création des style dans la page
	document.write(stringChg+afficherdiv);

    // boucle permettant de creer le damier
    if (k==0) 
    {
    	document.write("<body>");
    	console.log('toto');
	    // réaffichage des input et du boutton
	    document.write("<fieldset>");
	    document.write("<label for='taille'>Veuillez saisir une taille au damier :</label><br>");
	    document.write("<input class='bord' type='number' name='taille' id='taille' placeholder='veuillez saisir la taille' min='4' step='4' value='4'><hr>");
	    document.write("<label for='color1'>Veuillez saisir les couleurs du damier :</label><br>");
	    document.write("<input class='bord' type='color' name='color1' id='color1' value='#eeeeee'>");
	    document.write("<input class='bord' type='color' name='color2' id='color2'  value='#111111'><hr>");
	    document.write("<button class='bord' onclick='reset(),damier()'>valider</button><hr>");
	    document.write("<button class='bord' onclick='accueil()'>retourner a la page du debut </button>")
	    document.write("</fieldset>");
    }
	document.write("<div style='display: inline; border: none' id='tab1'>");
    for (i = 0 ; i < dim ; i++) 
    {
        for (j = 0 ; j < dim ; j++) 
        {

        	/*verification des variables */
			/*console.log(color1);
			console.log(color2);
			console.log(dim);*/

			if (couleurSelect == false) 
			{
				document.write("<div id='un' class='noir'></div>");
				//document.write("<div style=' background-color:"+color1+";width: 50px; height: 50px; display : inline-block'></div>");
				couleurSelect = true;
			}
			else
			{
				document.write("<div id='un' class='blanc'></div>");
				//document.write("<div style=' background-color:"+color2+"; width: 50px; height: 50px; display : inline-block'></div>");
				couleurSelect = false;
			}	
        }
		//inversion au saut de ligne
		if (couleurSelect == false) 
		{
			couleurSelect = true;
		}
		else
		{
			couleurSelect = false;
		}
		document.write("<br>");
    }
    k+=1;
    document.write("</div>");
    document.write("</body>");
} 