
function InitMois()
{
	Mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aôut","Sepembre","Octobre","Novembre","Decembre"];
	document.write("<select type='text' id='Mois'>");
	document.write("<option value='99'>Saisir mois</option> ");
	for(i=0;i<Mois.lenght;i++)
	{
		document.write("<option value='"+i+"'>"+Mois[i]+"</option>");
	}
	document.write("</option>");
}