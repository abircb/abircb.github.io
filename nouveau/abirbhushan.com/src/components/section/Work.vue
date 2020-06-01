<template>
  <div class="work">
    <Company
      name="Goldman Sachs"
      position="Spring Intern"
      :from="new Date(2020, 4)"
      :to="new Date(2020, 4)"
    >
    </Company>
    <Company
      name="Facebook"
      position="Hack-a-project Intern"
      :from="new Date(2020, 1)"
      :to="new Date(2020, 2)"
    >
    </Company>
    <Company
      name="NTT Data"
      position="Virtual Reality (VR) Developer"
      :from="new Date(2019, 9)"
      :to="new Date(2020, 3)"
      partTime
    >
    </Company>
    <Company
      name="UCL"
      position="Programming Mentor"
      :from="new Date(2019, 8)"
      :to="new Date(2020, 2)"
      partTime
    >
    </Company>
    <Company
      name="Infibeam Avenues"
      position="Technology Summer Analyst"
      :from="new Date(2019, 6)"
      :to="new Date(2019, 8)"
    >
    </Company>
  </div>
</template>

<script>
import Company from '../Company.vue'

export default {
  name: 'Work',
  components: {
    Company,
  },
}
</script>

<style scoped lang="scss">
.work {
}
</style>
