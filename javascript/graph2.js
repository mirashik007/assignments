var fs = require("fs");
var jsonData = [];
var input = "output.json";
var stringData = csVdata.toString();
var lines = stringData.split('\r\n');
var headers=lines[0].split(',');


var rows = lines.length; //3047

var agegroup=headers.indexOf("Age-group");//5
var total=headers.indexOf("Total/ Rural/ Urban");//4
var literatePersons=headers.indexOf("Literate - Persons");//12
var statecode=headers.indexOf("State Code");//1
var area=headers.indexOf("Area Name");//3
var educationlevelgradmale=headers.indexOf("Educational level - Graduate & above - Males");//40
var educationlevelgradfemale=headers.indexOf("Educational level - Graduate & above - Females")//41

var b1=headers.indexOf("Educational level - Below Primary - Persons");//18
var b2=headers.indexOf("Educational level - Primary - Persons");//21
var b3=headers.indexOf("Educational level - Middle - Persons");//24
var b4=headers.indexOf("Educational level - Matric/Secondary - Persons");//27
var b5=headers.indexOf("Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons");//30
var b6=headers.indexOf("Educational level - Non-technical diploma or certificate not equal to degree - Persons");//33
var b7=headers.indexOf("Educational level - Technical diploma or certificate not equal to degree - Persons");//36
var b8=headers.indexOf("Educational level - Graduate & above - Persons");//39
var b9=headers.indexOf("Educational level - Unclassified - Persons");//42
var fs = require("fs");
var temp;

var res = [];
var ages = {};
var obj = [];
var arr = [];


fs.readFile(input, function(err, data) {
    if (err)
        throw err;

    data = data.toString();
    temp = JSON.parse(data);
    //Array of graduate population with gender wise
    var education = {
        "Educational level - Literate without educational level - Males": 0,
        "Educational level - Literate without educational level - Females": 0,
        "Educational level - Below Primary - Males": 0,
        "Educational level - Below Primary - Females": 0,
        "Educational level - Primary - Males": 0,
        "Educational level - Primary - Females": 0,
        "Educational level - Middle - Males": 0,
        "Educational level - Middle - Females": 0,
        "Educational level - Matric/Secondary - Males": 0,
        "Educational level - Matric/Secondary - Females": 0,
        "Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Males": 0,
        "Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Females": 0,
        "Educational level - Non-technical diploma or certificate not equal to degree - Males": 0,
        "Educational level - Non-technical diploma or certificate not equal to degree - Females": 0,
        "Educational level - Graduate & above - Males": 0,
        "Educational level - Graduate & above - Females": 0,
        "Educational level - Unclassified - Males": 0,
        "Educational level - Unclassified - Females": 0
    }

    for (var i = 0, len = temp.length; i < len; i++) {
        var li = temp[i];
       //console.log(li);
        var age = li["Age-group"];
      // console.log(age);
        if (age != "All ages") {
            if (ages.hasOwnProperty(age)) {

                ages[age] = parseInt(ages[age]) + parseInt(temp[i]["Literate - Persons"]);

            } else {
                ages[age] = parseInt(temp[i]["Literate - Persons"]);
            }
        } else {
            for (var column in education) {
                education[column] = parseInt(li[column]) + parseInt(education[column]);
            }
        }

    }

    //console.log(ages);
    /**Json data for first file**/
    for (var i in ages) {

        if (ages.hasOwnProperty(i)) {
            res.push({ "x": i, "y": ages[i] });
        }

    }
    fs.writeFile("agegraph.json", JSON.stringify(res), function(err) {
        if (err)
            throw err;
    });

    /**Json data for 3rd file**/
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
}
    fs.writeFile("edugraph.json", JSON.stringify(obj), function(err) {
        if (err)
            throw err;
    });
   // fs.writeFileSync("edugraph.json", JSON.stringify(m), encoding = "utf8");


    
    /****json data for 2nd file*****/

    var findSum = function(cat, callback) {
        var sum = 0;
        for (var i = 0, len = temp.length; i < len; i++) {
            var val = parseInt(temp[i][cat]);
            if (!isNaN(val)) {
                sum = sum + val;
            }
        }
        //return sum;
        //console.log(sum);
        callback(sum);
    }

    // Araay of elements with category wise
    var categories = [
        "Educational level - Literate without educational level - Persons",
        "Educational level - Below Primary - Persons",
        "Educational level - Primary - Persons",
        "Educational level - Middle - Persons",
        "Educational level - Matric/Secondary - Persons",
        "Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons",
        "Educational level - Non-technical diploma or certificate not equal to degree - Persons",
        "Educational level - Technical diploma or certificate not equal to degree - Persons",
        "Educational level - Graduate & above - Persons",
        "Educational level - Unclassified - Persons",
    ];

    for (var i = 0, len = categories.length; i < len; i++) {
        var cat = categories[i];
        var obj1 = {};
        var index1 = cat.indexOf("-");
        var index2 = cat.indexOf("/");
            var index3;
            if (index2 == -1) {
                index3 = cat.lastIndexOf("-");
            }
            else { index3 = index2; }

        var str = cat.substring(index1 + 1,index3).trim();
        //console.log(str);

        findSum(cat, function(sum) { obj1["x"] = str.substring(0,18), obj1["y"] = sum; });
        arr.push(obj1);
        //console.log(arr);

    }


    fs.writeFile("educategory.json", JSON.stringify(arr), function(err) {
        if (err)
            throw err;
    });

});