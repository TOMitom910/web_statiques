function damier()
{
	document.location.reload();
    //definition de variables 
    var dim= Number(document.getElementById("taille").value);
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var i = 0;
    var j = 0;
	var couleurSelect = false;
	var stringChg = ("<style>.noir{ background-color:"+color1+";} .blanc{ background-color:"+color2+";}</style>");
	var afficherdiv = ("<style>div {width: 50px;height: 50px;border: solid 1px black; display : inline-block;}</style>");

	document.write(stringChg+afficherdiv);
	
    // boucle permettant de crÃ©er le damier
    for (i = 0 ; i < dim ; i++) 
    {

        for (j = 0 ; j < dim ; j++) 
        {
        	/*verification des variables */
			console.log(color1);
			console.log(color2);
			console.log(dim);

			if (couleurSelect == false) 
			{
				document.write("<div class='noir'></div>");
				//document.write("<div style=' background-color:"+color1+";width: 50px; height: 50px; display : inline-block'></div>");
				couleurSelect = true;
			
			}
			else
			{
			
				document.write("<div class='blanc'></div>");
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
    document.write("<input type='number' name='taille' id='taille' placeholder='veuillez saisir la taille' min='4' step='4' value='4'><hr><input type='color' name='color1' id='color1' value='#eeeeee'><input type='color' name='color2' id='color2'  value='#111111'><button onclick='damier()'>valider</button><hr>");
	
} 