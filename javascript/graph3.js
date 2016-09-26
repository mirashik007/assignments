
var margin = {top: 60, right: 40, bottom: 210, left: 100},
 width = 1000 - margin.left - margin.right,
 height = 700 - margin.top - margin.bottom;
var x = d3.scale.ordinal()
 .rangeRoundBands([0, width], .1);
var y = d3.scale.linear()
 .range([height, 0]);
var color = d3.scale.ordinal()
     .range(["#33CA7F   ", "#7DCFB6  "]);
var xAxis = d3.svg.axis()
 .scale(x)
 .orient("bottom");
var yAxis = d3.svg.axis()
 .scale(y)
 .orient("left");
var svg = d3.select("body").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom)
.append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
d3.json("edugraph.json", function(error, data) {
color.domain(d3.keys(data[0]).filter(function(key) { return key !== "states"  }));
data.forEach(function(d) {
 var y0 = 0;
 d.ages = color.domain().map(function(name) {
   return {
     name: name,
     y0: y0,
     y1: y0 += +d[name]
   };
 });
d.total = d.ages[d.ages.length - 1].y1;
        
     });
     data.sort(function(a, b) {
         return b.total - a.total;
     });
x.domain(data.map(function(d) { return d["states"]; }));
y.domain([0, d3.max(data, function(d) { return d.ages[d.ages.length - 1].y1; })]);
svg.append("g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + height + ")")
   .call(xAxis)
   .selectAll('text')
   .style("text-anchor","end")
   .attr("dx","-.8em")
   .attr("dy",".15em")
   .attr("transform",function(d){
     return "rotate(-60)"
   });
svg.append("g")
   .attr("class", "y axis")
   .call(yAxis);

var country = svg.selectAll(".country")
   .data(data)
 .enter().append("g")
   .attr("class", "g")
   .attr("transform", function(d) { return "translate(" + x(d["states"]) + ",0)"; });
country.selectAll("rect")
   .data(function(d) { return d.ages; })
 .enter().append("rect")
   .attr("width", x.rangeBand())
   .attr("y", function(d) { return y(d.y1); })
   .attr("height", function(d) { return y(d.y0) - y(d.y1); })
   .style("fill", function(d) { return color(d.name); });
});