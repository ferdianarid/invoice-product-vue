<template>
       <div class="invoice">
              <canvas id="invoices-chart"></canvas>
       </div>
</template>

<script>
// import Chart from Chart js
import Chart from 'chart.js'

// import Invoices Datasets and Config
import Invoices from "./data/Invoice"

export default {
       name: 'InvoicesChart',
       data() {
              return {
                     // Store and return data Invoices to Invoice
                     Invoice: Invoices
              }
       },
       // mount
       mounted() {
              // get nodeList
              const context = document.getElementById("invoices-chart")

              // render invoice to elements
              new Chart(context, this.Invoice)
       }
}
</script>

<style lang="css">
       .invoice {
              width: 100%;
       }
</style>