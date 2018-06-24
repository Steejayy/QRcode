<template>
  <div :class='selector' class='chart-container'>
    <svg :width='width' :height='height' :class='selector'>
      <g :class='selector'>
        <slot :selector='selector'></slot>
      </g>
    </svg>
    <slot name='legend'></slot>
  </div>
</template>

<script>
import * as d3 from 'd3'
import {MARGIN} from './constants'

export default {
  name: 'chart',
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    selector: {
      type: String,
      required: true
    },
    isPie: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const width = this.width - MARGIN.left - MARGIN.right
    const height = this.height - MARGIN.top - MARGIN.bottom

    const svg = d3.select(this.$el).select('svg')
      .attr('width', width + MARGIN.left + MARGIN.right)
      .attr('height', height + MARGIN.top + MARGIN.bottom)

    if (!this.isPie) {
      svg.select('g')
        .attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`)
    }
  }
}
</script>

<style lang='scss' scoped>
  .chart-container {
    width: 100%;
  }
</style>
