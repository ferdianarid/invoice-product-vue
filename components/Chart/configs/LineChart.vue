<script>
// import Line Chart
import { Line } from "vue-chartjs"

export default {
       extends: Line,
       // initials props
       props: ["chartData","options"],

       // mount
       mounted() {
              this.renderChart(this.chartData, this.options);
       }
}
</script>
<style lang="">
       
</style>