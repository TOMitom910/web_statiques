

function damier(color1,color2)
{
    //definition de variables 
    var dim= Number(document.getElementById("taille").value);
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;

    console.log(color1);
    console.log(color2);


    var i = 0;
    var j = 0;
    var couleurSelect = false;
    // boucle permettant de créer le damier
    for (i = 0 ; i < dim ; i++) {

        for (j = 0 ; j < dim ; j++) {
        
            if (couleurSelect == false) {
            
                document.write("<div id=noire style=' background-color : green; width: 50px; height: 50px; display : inline-block'></div>");//background-color:red;
                couleurSelect = true;
            
            }
            else
            {
            
                document.write("<div id=blanche style=' background-color : red; width: 50px; height: 50px; display : inline-block'></div>");//background-color:green;
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
}
