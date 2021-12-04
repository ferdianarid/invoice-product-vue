<template>
       <div class="div-chart">
              <!-- Heading -->
              <h1 class="text-[5rem] font-bold text-blue-800 text-center">Chart</h1>

              <div class="flex justify-between items-start">
              <!-- Line Chart -->
              <LineChart :chartData="chartData" :options="chartOptions" class="line-chart" />
              
              <!-- Invoices Chart -->
              <InvoicesChart />
              </div>
       </div>
</template>
<script>
// Import Line Chart Components
import LineChart from "./configs/LineChart.vue"

// import Invoice Chart
import InvoicesChart from "../Chart/InvoicesChart.vue"

import { chartData, chartOptions } from "../Chart/data/Month"

export default {
       name: "ListChart",
       data() {
              return {
                     chartData,
                     chartOptions
              }
       },
       components: {
              LineChart,
              InvoicesChart
       },
       getRandomNumbers () {
              return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
}
</script>
<style>
.line-chart {
       width: 100%;
}
</style>