var fs = require("fs");
var jsonData = [];
var csVdata = fs.readFileSync('india2011.csv');
var stringData = csVdata.toString();
var lines = stringData.split('\r\n');
var headers=lines[0].split(',');
var rows = lines.length;
var agegroup=headers.indexOf("Age-group");
var total=headers.indexOf("Total/ Rural/ Urban");
var statecode=headers.indexOf("State Code");
var area=headers.indexOf("Area Name");
var educationlevelgradmale=headers.indexOf("Educational level - Graduate & above - Males");
var educationlevelgradfemale=headers.indexOf("Educational level - Graduate & above - Females");


//Split the data by , and push it into jsondata.
for (var i = 1; i < rows; i++) {
    var line = lines[i];
    if (line != null && line != '' && line.length != 0) {
       var data = line.split(",");
       jsonData.push(data);
    }
}

// /**data for 2nd file**/


graduatepopulation(jsonData);

function graduatepopulation(jsonData) {

    var areaname = [];
    var areaname1 = [];
    var statename = [];
    var statename1 = [];

    for (var k = 0; k < jsonData.length; k++) {

       areaname[k] = jsonData[k][statecode];
       statename[k] = jsonData[k][area];
  }
    
  for (var b = 0; b < areaname.length; b++) {
        if (areaname[b] != areaname[b + 1]) {
            
            areaname1.push(areaname[b]);

        }

    }

    for (var b = 0; b < statename.length; b++) {
        if (statename[b] != statename[b + 1]) {
            
            statename1.push(statename[b]);
          }
        }
    
    var edumale = [];
    var edufemale = [];
    var c = [];
    var m = [];
    var h = 0;


    for (var u = 0; u < jsonData.length; u++) {
        if (jsonData[u][total] == "Total" && jsonData[u][area] == statename1[h]) {
            if (jsonData[u][agegroup] == "All ages") {
                c[u] = { "AreaName": statename1[h], "GraduateaboveMales": parseFloat(jsonData[u][educationlevelgradmale]), "GraduateaboveFemales": parseFloat(jsonData[u][educationlevelgradfemale]) };
                m.push(c[u]);
                }
          h++;
        }

      }
    fs.writeFileSync("edugraph.json", JSON.stringify(m), encoding = "utf8");
  }
