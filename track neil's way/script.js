//global variables
let svgWidth = 800
let svgHeight = svgWidth * 0.75

let margin = {
    left:70,
    right:50,
    top:50,
    bottom:50
}

//inner width & height 
let height = 600 - margin.top - margin.bottom
let width = 800 - margin.left - margin.right

// setup svg & add group
let svg = d3.select('#vis')
    .append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth)
    .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



// load in data
d3.csv("mydata.csv").then(data =>{
    console.log(data)

    // parse
    data.forEach(d => {
        d.date = new Date(d.date)
        d.comment = +d.comment
        d.tone = +d.tone
        d.rating = +d.rating
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
    
    // scales
    let xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([0,width])
        .nice()
    
    let yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.tone))
        .range([height,0])

    let colorScale = d3.scaleSequential()
        .domain(d3.extent(data, d => d.rating))
        .interpolator(d3.interpolate("blue", "pink"))

    // load points
    let points = svg.selectAll('circle')
        .data(data)
        .join('circle')
            .attr('r', 5)
            .attr('cx', d => xScale(d.date))
            .attr('cy', d => yScale(d.tone))
            .attr('fill',d => colorScale(d.rating))
            .on("mouseover", function(){
                d3.select(this)
                .raise()
                .transition()
                .attr("r", 25)
            })
            .on("mouseout", function(){
                d3.select(this)
                .transition()
                .duration(2000)
                .attr("r", 5)
            })
    
    

    // axis
    let xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat("%m/%d"))

    //add svg group to append axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .attr("id", "x-axis")

    svg.append("g")
        .attr("id", "y-axis")


    //append axis
    d3.select('#x-axis')
        .transition()
        .call(xAxis)

    d3.select('#y-axis')
        .call(d3.axisLeft(yScale))

})



