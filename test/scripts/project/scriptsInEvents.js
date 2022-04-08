


const scriptsInEvents = {

		async ["[Niveau_1]_Event33_Act2"](runtime, localVars)
		{
			$.getJSON("./test.json",function(JSON){
				console.log(JSON);
			})
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

