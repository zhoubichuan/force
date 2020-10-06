<template>
  <div>
    <h1>Knowledge Graph</h1>
    <svg width="960" height="600"></svg>
  </div>
</template>
<script>
import * as d3 from "d3"
export default {
  data() {
    return {}
  },
  mounted() {
    let svg = d3.select("svg")
    let width = +svg.attr("width")
    let height = +svg.attr("height")

    let nodesData = [
      { name: "Lillian", sex: "F" },
      { name: "Gordon", sex: "M" },
      { name: "Sylvester", sex: "M" },
      { name: "Mary", sex: "F" },
      { name: "Helen", sex: "F" },
      { name: "Jamie", sex: "M" },
      { name: "Jessie", sex: "F" },
      { name: "Ashton", sex: "M" },
      { name: "Duncan", sex: "M" },
      { name: "Evette", sex: "F" },
      { name: "Mauer", sex: "M" },
      { name: "Fray", sex: "F" },
      { name: "Duke", sex: "M" },
      { name: "Baron", sex: "M" },
      { name: "Infante", sex: "M" },
      { name: "Percy", sex: "M" },
      { name: "Cynthia", sex: "F" },
    ]

    let linksData = [
      { source: "Sylvester", target: "Gordon", type: "A" },
      { source: "Sylvester", target: "Lillian", type: "A" },
      { source: "Sylvester", target: "Mary", type: "A" },
      { source: "Sylvester", target: "Jamie", type: "A" },
      { source: "Sylvester", target: "Jessie", type: "A" },
      { source: "Sylvester", target: "Helen", type: "A" },
      { source: "Helen", target: "Gordon", type: "A" },
      { source: "Mary", target: "Lillian", type: "A" },
      { source: "Ashton", target: "Mary", type: "A" },
      { source: "Duncan", target: "Jamie", type: "A" },
      { source: "Gordon", target: "Jessie", type: "A" },
      { source: "Sylvester", target: "Fray", type: "E" },
      { source: "Fray", target: "Mauer", type: "A" },
      { source: "Fray", target: "Cynthia", type: "A" },
      { source: "Fray", target: "Percy", type: "A" },
      { source: "Percy", target: "Cynthia", type: "A" },
      { source: "Infante", target: "Duke", type: "A" },
      { source: "Duke", target: "Gordon", type: "A" },
      { source: "Duke", target: "Sylvester", type: "A" },
      { source: "Baron", target: "Duke", type: "A" },
      { source: "Baron", target: "Sylvester", type: "E" },
      { source: "Evette", target: "Sylvester", type: "E" },
      { source: "Cynthia", target: "Sylvester", type: "E" },
      { source: "Cynthia", target: "Jamie", type: "E" },
      { source: "Mauer", target: "Jessie", type: "E" },
    ]

    let simulation = d3.forceSimulation().nodes(nodesData)

    simulation
      .force("charge_force", d3.forceManyBody())
      .force("center_force", d3.forceCenter(width / 2, height / 2))

    let node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodesData)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", this.circleColor)

    simulation.on("tick", tickAction)

    function tickAction() {
      node
        .attr("cx", (d) => {
          return d.x
        })
        .attr("cy", (d) => {
          return d.y
        })

      link
        .attr("x1", (d) => {
          return d.source.x
        })
        .attr("y1", (d) => {
          return d.source.y
        })
        .attr("x2", (d) => {
          return d.target.x
        })
        .attr("y2", (d) => {
          return d.target.y
        })
    }

    let linkForce = d3.forceLink(linksData).id((d) => {
      return d.name
    })

    simulation.force("links", linkForce)

    let link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(linksData)
      .enter()
      .append("line")
      .attr("stroke-width", 2)
      .style("stroke", this.linkColor)
  },
  methods: {
    circleColor(d) {
      if (d.sex === "M") {
        return "blue"
      } else {
        return "pink"
      }
    },
    linkColor(d) {
      if (d.type === "A") {
        return "green"
      } else {
        return "red"
      }
    },
  },
}
</script>
<style scoped>
svg {
  border: 1px solid #ccc;
}
</style>
<style>
.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}
.nodes circle {
  stroke: #fff;
  stroke-width: 1.5px;
}
</style>
