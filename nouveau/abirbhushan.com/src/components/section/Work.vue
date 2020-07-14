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
      name="NTT Data"
      position="Virtual Reality (VR) Developer"
      :from="new Date(2019, 9)"
      :to="new Date(2020, 3)"
      partTime
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
      name="UCL"
      position="Programming Mentor"
      :from="new Date(2019, 8)"
      :to="new Date(2020, 2)"
      partTime
    >
      <li>
        Organised and led weekly tutorials for 8 first-year undergraduate
        Computer Science students on the Bachelor's and the Integrated Master's
        degree.
      </li>
      <li>
        Helped them build a foundation in the subject by assisting them with
        their Programming (C, Haskell, Java, and Python) and Logic (Theory of
        Computation and Compilers) modules.
      </li>
    </Company>

    <Company
      name="Infibeam Avenues"
      position="Technology Summer Analyst"
      :from="new Date(2019, 6)"
      :to="new Date(2019, 8)"
    >
      <li>2-month internship at their offices in New Delhi.</li>
      <li>
        Built an internal tool using Express.js that completely automated the
        process of converting incoming catalogue data (in YAML) to an SQL table
        and successfully deployed the application on Heroku.
      </li>
      <li>
        Used Python and some of its (core) Machine Learning libraries to create
        price-prediction models for three distinct categories of the company's
        e-commerce catalogue.
      </li>
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
