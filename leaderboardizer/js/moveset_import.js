function placeBsBtn() {
	var importBtn = "<button id='import' class='bs-btn bs-btn-default'>Import</button>";
	$("#import-1_wrapper").append(importBtn);

	$("#import.bs-btn").click(function () {
		var pokes = document.getElementsByClassName("import-team-text")[0].value;
    // var pokes = document.getElementsByClassName("import-team-text").value;
    // var Leder = $.csv.toArrays(pokes);
    //console.log(pokes);
		addSets(pokes);
	});


}



function serialize(array, separator) {
	var text = "";
	for (var i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			text += array[i] + separator;
		} else {
			text += array[i];
		}
	}
	return text;
}


function addSets(pokes) {
	//var rows = pokes.split("\n");
	var currentRow;
	var currentPoke;
	var addedpokes = 0;
	
  var userIdPrev
  //var pokes;
  var i;
  var j;
  var FPlacement = 0;
  var UPlacement = 0;
  var APlacement = 0;

  var FPlacementVisual = 0;
  var UPlacementVisual = 0;
  var APlacementVisual = 0;

  var FPlacementVisual = 0;
  var UPlacementVisual = 0;
  var Leder = $.csv.toArrays(pokes);
//var pokes = document.getElementsByClassName("import-team-text")[0].value;
  //console.log(pokes);
  //console.log(Leder);
  
  var Ffullout = [];
  var Ufullout = [];
  var Afullout = [];
  //loop the outer array
  if ( Leder[0][0] != "Player Name" ) {
    alert("Invalid data in input field, copypaste the spreadsheet after downloading it as .csv as-is, including the sheet's header");
  }
  for (var i = 1; i < Leder.length; i++) {
     var streakData = new Object(); 
     for ( var itr in Leder[i] ) {
       streakData[String(Leder[0][itr])] = Leder[i][itr];
       console.log(streakData)
     }
     console.log(streakData["Team URL"]);
     var innerArrayLength = Leder[i].length;
     var userName = streakData["Player Name"];
     var userId = streakData["User ID"];
     //var streakLenO = Leder[i][2];
     //var streakLenO = $.csv.toArray(Leder[i][2], options.separator="|");
     var streakLenO = streakData["Streak Length"];
     var ongoing = streakData["Ongoing"];
     var url1 = streakData["Team URL"];
     //var pokeAmount = ;


     var teamPokes = [];

     teamPokes[0] = Leder[i][5];
     teamPokes[1] = Leder[i][6];
     teamPokes[2] = Leder[i][7];
     teamPokes[3] = Leder[i][8];
     teamPokes[4] = Leder[i][9];
     teamPokes[5] = Leder[i][10];

    if ( i > 0 ) {
      userIdPrev = Leder[i-1][1]
    }

    //console.log(parseInt(pokeAmount))


     var url1Text = streakData["Team Name"];

     var streakFlags = Leder[i][11];
     //var finish = streakFlags.charAt(0);
     var url2 = streakData["Extra URL 2"];
     var url3 = streakData["Extra URL 3"];
     var url4 = streakData["Extra URL 4"];
     var url5 = streakData["Extra URL 5"];
     var url6 = streakData["Extra URL 6"];
    var urlsBbcode = ""
    for (i_url = 12; Leder[i][i_url]; i_url++) {
      if ( Leder[i][12] === "" ) {
        break
      }
      if ( Leder[i][i_url] === "" ) {
        break
      }
      var urlContents = $.csv.toArray(Leder[i][i_url], {"separator" : "|"});
      //if ( i_url === 12 ) {
      //  urlsBbcode += "[url=" + urlContents[0] + "]" + urlContents[1] + "[/url]";
      //} else {
        urlsBbcode += ", [url=" + urlContents[0] + "]" + urlContents[1] + "[/url]";
      //}
    }

    console.log(urlsBbcode)

        
      

     var finish = "";

     switch (finish) {
       case "F":
         if ( userIdPrev === userId ) {
           var FPlacementVisual = FPlacementVisual + 0;
           var FPlacementCur_bbcoded = "   ";
         } else {
         var FPlacementVisual = FPlacementVisual + 1;
         var FPlacementCur_bbcoded = "#" + String(FPlacementVisual) + ". ";
         }
         var FPlacement = FPlacement + 1;
         var Fout_bbcode = FPlacementCur_bbcoded + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]"
         Ffullout[FPlacement] = Fout_bbcode;
         break;

       case "U":
         if ( userIdPrev === userId ) {
           var UPlacementVisual = UPlacementVisual + 0;
           var UPlacementCur_bbcoded = "   ";
         } else {
         var UPlacementVisual = UPlacementVisual + 1;
         var UPlacementCur_bbcoded = "#" + String(UPlacementVisual) + ". ";
         }
         var UPlacement = UPlacement + 1;
         var Uout_bbcode = UPlacementCur_bbcoded + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]" 
         Ufullout[UPlacement] = Uout_bbcode;
         break;
     }
     
     if ( userIdPrev === userId ) {
       var APlacementVisual = APlacementVisual + 0;
       var APlacementCur_bbcoded = "   ";
     } else {
     var APlacementVisual = APlacementVisual + 1;
     if ( String(APlacementVisual).length === 1 ) { APlacementVisual2 = "0" + String(APlacementVisual); } else { APlacementVisual2 = APlacementVisual };
     var APlacementCur_bbcoded = "#" + String(APlacementVisual2) + ". ";
     }


     if ( streakData["Ongoing"] === "Yes" ) {
       var OngoingStatusBbcode = "[color=#bb0000]*[/color]";
     } else {
       var OngoingStatusBbcode = "";
     };


     var url1_bbcoded = "[url=" + streakData["Team URL"] + "]" + streakData["Team Name"] + "[/url]"
     var streakLen_bbcoded = "([b]" + streakData["Streak Length"] + OngoingStatusBbcode + "[/b])"
     var userName_bbcoded = "[b][user=" + streakData["User ID"] + "]" + streakData["Player Name"] + "[/user][/b]"

     var APlacement = APlacement + 1;
     var Aout_bbcode = APlacementCur_bbcoded;
     Aout_bbcode += userName_bbcoded + ", ";
     Aout_bbcode += streakLen_bbcoded + " - ";
     Aout_bbcode += url1_bbcoded;
     Aout_bbcode += urlsBbcode;
     Afullout[APlacement] = Aout_bbcode;


     //var url1Text = teamPoke1 + " / " + teamPoke2 + " / " + teamPoke3 + " / " + teamPoke4;
    //console.log(userName, userId, streakLen, url1, teamPoke1, teamPoke2, teamPoke3, teamPoke4, streakFlags, url2, url2Text, url3, url3Text, url1Text);
    //var TestingTesting = userName + userId + streakLen + url1 + teamPoke1 + teamPoke2 + teamPoke3 + teamPoke4 + streakFlags + url2 + url2Text + url3 + url3Text + url1Text;
    //console.log(TestingTesting);

     //document.getElementsByClassName("leder-result-text")[0].value= TestingTesting;
     // loop the inner array
     //for (var j = 0; j < innerArrayLength; j++) {
     //console.log('[' + i + ',' + j + '] = ' + Leder[i][j]);
     
   }
 // output the list generated into the fullout array to output field 
     document.getElementsByClassName("leder-result-text-F")[0].value= Ffullout.join("\n");
     document.getElementsByClassName("leder-result-text-U")[0].value= Ufullout.join("\n");
     document.getElementsByClassName("leder-result-text-A")[0].value= Afullout.join("\n");
  }



$(document).ready(function () {
	var customSets;
  var Leder;
	placeBsBtn();
	//if (localStorage.customsets) {
	//	customSets = JSON.parse(localStorage.customsets);
	//	updateDex(customSets);
	//	$(bothPokemon("#importedSetsOptions")).css("display", "inline");
	//}// else {
	//	loadDefaultLists();
	//}
});
