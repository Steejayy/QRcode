<template>
  <v-data-table
    :headers='headers'
    :pagination.sync='pagination'
    :items='containers.data'
    default-sort
    hide-actions
    class='elevation-1'
  >
    <template slot='items' slot-scope='props'>
      <td class='text-xs-left'>{{ props.item.id }}</td>
      <td class='text-xs-left'>{{ props.item.owner }}</td>
      <td class='text-xs-left'>{{ props.item.category }}</td>
      <td class='text-xs-left'>{{ props.item.origin }}</td>
      <td class='text-xs-left'>{{ props.item.destination }}</td>
      <td class='text-xs-left'>{{ props.item.weight }}</td>
      <td class='text-xs-left'>{{ props.item.shipmentDate }}</td>
      <td class='text-xs-left'>{{ props.item.risk }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'containers-list',
  data () {
    return {
      pagination: {
        sortBy: 'risk',
        descending: true
      }
    }
  },
  computed: {
    ...mapGetters(['containers']),
    headers() {
      return [
        {
          text: this.$t('container_id'),
          value: 'id',
          sortable: false
        },
        {
          text: this.$t('owner'),
          value: 'owner'
        },
        {
          text: this.$t('category'),
          value: 'category'
        },
        {
          text: this.$t('origin'),
          value: 'origin'
        },{
          text: this.$t('destination'),
          value: 'destination'
        },
        {
          text: this.$t('weight'),
          value: 'weight'
        },
        {
          text: this.$t('container_type'),
          value: 'container_type'
        },
        {
          text: this.$t('risk'),
          value: 'risk'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['getContainers'])
  },
  created() {
    this.getContainers()
  }
}
</script>

<style lang='scss' scoped>
</style>
