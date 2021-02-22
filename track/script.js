//global
let margin = {
    left:25,
    right:25,
    top:50,
    bottom:50
}

var svg = d3.select("#viz")
  .append("svg")
    .attr("viewBox", "0 0 " + 600 + " " +  500 + "")
  .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//inner width & height 
let height = 500 - margin.top - margin.bottom
let width = 600 - margin.left - margin.right

// // setup svg & add group
// let svg = d3.select('#vis')
//     .append('svg')
//     .attr('height', svgHeight)
//     .attr('width', svgWidth)
//     .append('g')
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// load in data
d3.csv("mydata.csv").then(data =>{
    console.log(data)

    // parse
    data.forEach(d => {
        d.date = new Date(d.date)
        d.comment = String(d.comment)
        d.tone = +d.tone
        d.rating = +d.rating
        d.length = +d.comment.length
    })

    //alternative
    // let newData = []
    // data.forEach(d => {
    //     newData.push({
    //         carat: parseFloat(d.carat),
    //         price: +d.price
    //     })
    // })


    // filter
    // data = data.filter(d => d.carat > 2.5)
    
    var firstDay = new Date(2021, 0, 23);

    // scales
    let xScale = d3.scaleTime()
        .domain([firstDay, d3.max(data, d => d.date)])
        .range([0,width])
        .nice()
    
    let yScale = d3.scaleLinear()
        .domain([0,20])
        .range([height,0]);

        console.log(firstDay)

    let colorScale = d3.scaleSequential()
        .domain([d3.max(data, d => d.rating),d3.min(data, d => d.rating)])
        .interpolator(d3.interpolatePuBu)

    // load points
    let points = svg.selectAll('circle')
        .data(data)
        .join('circle')
            .attr('r', 5)
            .attr('cx', d => xScale(d.date))
            .attr('cy', d => yScale(d.tone))
            .attr('fill',d => colorScale(d.rating))
            .on("mouseover", function(event,d) {
                div.transition()
                  .duration(200)
                  .style("opacity", .9)
                  .style("height", d.length);
                div.html(d.comment)
                  .style("left", (event.pageX) + "px")
                  .style("top", (event.pageY - 28) + "px");
                })
              .on("mouseout", function(d) {
                div.transition()
                  .duration(500)
                  .style("opacity", 0);
                });
    
    

    // axis
    let xAxis = d3.axisTop(xScale)
        .tickFormat(d3.timeFormat("%m/%d"))

    let yAxis = d3.axisLeft(yScale);

    //add svg group to append axis
    svg.append("g")
        //when this is commented, the axis is at the top instead of the bottom
        // .attr("transform", `translate(0,${height})`)
        .attr("id", "x-axis")

    svg.append("g")
        .attr("id", "y-axis")


    //append axis
    d3.select('#x-axis')
        .call(xAxis)

    d3.select('#y-axis')
        .call(yAxis)

})



