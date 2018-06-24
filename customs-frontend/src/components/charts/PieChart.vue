<template>
  <div></div>
</template>

<script>
import * as d3 from 'd3'
import {colors, pieColors} from '../_helpers/colors'
import {MARGIN} from './constants'

export default {
  name: 'pie-chart',
  props: {
    selector: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    innerRadius: {
      type: Number,
      default: 0,
      validator(value) {
        return value > 0 && value <= 0.8
      }
    },
    data: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const tweenPie = finish => {
      const start = {
        startAngle: 0,
        endAngle: 0
      }
      const interpolator = d3.interpolate(start, finish)
      return d => arc(interpolator(d))
    }
    const width = this.width
    const height = this.height
    const radius = Math.min(width, height) / 2

    const innerRadius = (radius - MARGIN.top * 3) * this.innerRadius
    const outerRadius = radius - MARGIN.top * 2

    const color = d3.scaleOrdinal()
      .range(Object.keys(pieColors).map(color => pieColors[color]))

    const arc = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius)
      .padAngle(0.01)

    const arcOver = d3.arc().outerRadius(outerRadius + 5).innerRadius(innerRadius).padAngle(0.03)

    const pie = d3.pie()
      .value(d => d.count)

    const selector = this.selector

    const svg = d3.select(`g.${selector}`)
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    const slices = svg.selectAll('.arc')
      .data(pie(this.data))
      .enter().append('g')
      .attr('class', 'arc')
      .on('mouseover', function(d, i) {
        d3.select(this).select('path')
          .transition()
          .duration(500)
          .attr('d', arcOver)

        svg.append('text')
          .attr('dy', '.3em')
          .style('text-anchor', 'middle')
          .style('font-size', 45)
          .attr('class', 'label')
          .style('fill', colors.night)
          .text(d.data.count)
          .style('opacity', 0)
          .transition(1000)
          .style('opacity', 1)

        d3.select(`.${selector} .legend .legend-item:nth-child(${i + 1})`)
          .classed('mouse-over', true)
      })
      .on('mouseout', function(d, i) {
        d3.select(this)
          .select('path')
          .transition()
          .attr('d', arc)

        svg.select('.label').remove()
        d3.select(`.${selector} .legend .legend-item:nth-child(${i + 1})`)
          .classed('mouse-over', false)
      })

    slices.append('path')
      .attr('d', arc)
      .style('fill', (d, i) => color(i))
      .transition()
      .duration(1000)
      .attrTween('d', tweenPie)

    const legend = d3.select(`div.${selector} .legend`)
      .selectAll('.legend-item')
      .data(this.data)
      .enter()

    const legendItem = legend.append('div')
      .attr('class', 'legend-item')

    legendItem.append('div')
      .attr('class', 'legend-item__color')
      .style('background-color', (d, i) => color(i))

    legendItem.append('span')
      .attr('class', 'legend-item__text')
      .text(d => d.label)
  }
}
</script>

<style lang='scss'>
  @import '../../styles/common/colors';

  .legend {
    display: flex;
    flex-wrap: wrap;
    height: 82px;
    overflow-y: auto;
    align-items: flex-start;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: $smoke_dark;
      -webkit-box-shadow: 0 0 1px $smoke_dark;
    }

    .legend-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px 5px;

      .legend-item__color {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 5px;
      }

      .legend-item__text {
        text-transform: capitalize;
        color: $rock;
        font-size: 12px;
      }

      &.mouse-over {
        background-color: $sky;
        box-shadow: 5px 5px 5px $smoke-sky_dark;
      }
    }
  }
</style>
