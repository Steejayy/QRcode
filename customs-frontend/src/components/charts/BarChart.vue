<template>
  <div></div>
</template>

<script>
import * as d3 from 'd3'
import {MARGIN} from './constants'

export default {
  name: 'bar-chart',
  props: {
    xKey: {
      type: String,
      required: true
    },
    yKey: {
      type: String,
      required: true
    },
    xRange: {
      type: Number,
      required: true
    },
    yRange: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    selector: {
      type: String,
      required: true
    },
    xAxisTickFormatFunc: {
      type: Function,
      default: d => d
    },
    YAxisTickFormatFunc: {
      type: Function,
      default: d => d
    }
  },
  mounted() {
    const width = this.xRange - MARGIN.left - MARGIN.right
    const height = this.yRange - MARGIN.top - MARGIN.bottom

    const xScale = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.2)

    const yScale = d3.scaleLinear()
      .range([height, 0])

    const selector = d3.select(`g.${this.selector}`)

    xScale.domain(this.data.map(d => d[this.xKey]))
    yScale.domain([0, d3.max(this.data, d => d[this.yKey])])

    selector.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(d => d % 1 === 0 ? d : ''))

    selector.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickFormat((d, i) => this.xAxisTickFormatFunc(d, i)))

    const bar = selector.selectAll('g.bar')
      .data(this.data)
      .enter().append('g')

    bar.attr('class', 'bar')
      .append('rect')
      .attr('x', d => xScale(d[this.xKey]))
      .attr('y', height)
      .attr('width', xScale.bandwidth())
      .attr('height', 0)
      .transition()
      .duration(1000)
      .attr('y', d => yScale(d[this.yKey]))
      .attr('height', d => height - yScale(d[this.yKey]))

    bar.append('text')
      .attr('fill', 'white')
      .style('opacity', 0)
      .attr('text-anchor', 'middle')
      .text(d => d.count ? d.count : '')
      .attr('x', d => xScale(d[this.xKey]) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d[this.yKey]) + 20)

    bar.on('mouseover', function() {
      d3.select(this)
        .transition()
        .attr('opacity', '0.6')

      d3.select(this)
        .select('text')
        .transition()
        .style('opacity', 1)
    })
      .on('mouseout', function() {
        d3.select(this)
          .transition()
          .attr('opacity', '1')

        d3.select(this)
          .select('text')
          .transition()
          .style('opacity', 0)
      })
  }
}
</script>

<style lang='scss'>
  @import '../../styles/common/colors';

  .bar {
    fill: $white-bic;
  }

  .axis {
    path, line {
      stroke: $smoke-sky_dark;
    }
    &.y .tick line {
      stroke: $smoke-sky;
    }
  }
</style>
