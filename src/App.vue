<template>
  <div id="app">
    <gg/>
    <dbdh/>
    <zynr/>
    <router-view/>
  </div>
</template>

<script>
import gg from '@/components/GGg/gg'
import dbdh from '@/components/dbDhl/dbdh'
import zynr from '@/components/ZZz/zynr'

import axios from 'axios'
export default {
  name: 'App',
  components:{
    gg,
    dbdh,
    zynr,
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
}

</style>
