<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center
                align-center
      >
        <v-flex text-xs-center>
          <chart :width='barWidth' :height='height' selector='bar-chart'>
            <template slot-scope='props'>
              <bar-chart :data='insights'
                         x-key='label'
                         y-key='count'
                         :x-range='barWidth'
                         :y-range='height'
                         :selector='props.selector'
                         :x-axis-tick-format-func='d => d'
              />
            </template>
          </chart>
        </v-flex>

        <v-flex text-xs-center>
          <chart :width='pieWidth' :height='400' selector='pie-chart' is-pie>
            <template slot-scope='props'>
              <pie-chart :data='insights'
                         :selector='props.selector'
                         :width='pieWidth'
                         :height='400'
                         :inner-radius='0.4'
              />
            </template>
            <div slot='legend' class='legend'></div>
          </chart>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      barWidth: 600,
      pieWidth: 400,
      height: 500,
      insights: [
        {
          label: 'Channel',
          count: '12'
        },
        {
          label: 'Nike',
          count: '20'
        },
        {
          label: 'Adidas',
          count: '40'
        },
        {
          label: 'iPhone',
          count: '50'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([])
  },
  methods: mapActions([])
}
</script>

<style lang='scss' scoped>
</style>
