program bataille_navale;

uses crt;

type
    TBateau = (torpilleur=2 , vstorpilleur, croiseur ,porte_avion);

    TJoueurs = (joueur1, joueur2);

    Tlettre = (A=1,B,C,D,E,F,G,H,I,J);

    Tchiffre =1..10;

    Tposition = record
    	    x : integer;
        	y : integer;
    end;

    Tcoord = record
        bateau:Tbateau;
        joueur:TJoueurs;
        position : Tposition;
    end;

var
	coord : Tcoord;
    posX,posY,o,r,k,l: integer;
    ocean : array [1..10,1..10] of string;
    hangar : array[1..5] of Tcoord;


Procedure Init_bateau;
var r: integer;

BEGIN
    for r:= 1 to 5 do
    BEGIN
        hangar[r].bateau:= Tbateau(r);
    end;
end;


BEGIN
clrscr;
textcolor(10);
writeln;
writeln('                                           ========================');
writeln('                                            ||LA BATAILLE NAVALE||');
writeln('                                           ========================');	
writeln;
writeln;
writeln('vous avez cinq bateaux a placer sur une grille ave des coordonnees allant de 1 a 10 et A a J');
writeln('votre ennemie à le meme nombre de bateaux et la meme grille vous devez detruit les bateaux adverse');

textcolor(11);
writeln('pour commencer le joueur 1 doit placer ses 5 bateaux');
writeln;
textcolor(11);
o :=5;
while (o > 1)do
BEGIN
	writeln('veuillez entrer les abscisses du ', TBateau(o));
	readln(coord.position.x);
	writeln('veuillez entrer les ordonnes du ', TBateau(o));
	readln(coord.position.y);
	coord.joueur := joueur1;
	for r:= 1 to o do 
	BEGIN
		ocean[coord.position.x,coord.position.y]:= 'x ';
		coord.position.y := coord.position.y + 1;
	end;
	o := o - 1;
// boucle init le tableau finale
	textcolor(13);
	writeln('  1 2 3 4 5 6 7 8 9 10');
	for k:= 1 to 10 do
	BEGIN
		textcolor(13);
		write(Tlettre(k),' ');
		for l := 1 to 10 do
			BEGIN
				if (ocean[k,l] <> 'x ') then
				BEGIN
					ocean[k,l] := '+ ';
					textcolor(15);
					write(ocean[k,l]);
				end;
				if (ocean[k,l] = 'x ') then
				BEGIN
					textcolor(2);
					write(ocean[k,l]);
				end;
			end;
			writeln;
	end;
end;
readln;
END.