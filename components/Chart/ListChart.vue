<template>
       <div class="div-chart">
              <!-- Heading -->
              <h1 class="text-[5rem] font-bold text-blue-800 text-center">Chart</h1>

              <div class="flex justify-between items-start my-16">
              <!-- Line Chart -->
              <LineChart :chartData="chartData" :options="chartOptions" class="line-chart" />

              <!-- Line Chart -->
              <LineChart :chartData="usersData" :options="chartOptions" class="line-chart" />
              
              </div>

              <div class="my-16">
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

import { chartData, chartOptions, usersData } from "../Chart/data/Month"

export default {
       name: "ListChart",
       data() {
              return {
                     chartData,
                     chartOptions,
                     usersData
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