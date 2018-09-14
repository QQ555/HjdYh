<template>
  <div id="app">
    <gg/>
    <dbdh/>
    <router-view/>
  </div>
</template>

<script>
import gg from '@/components/GGg/gg'
import dbdh from '@/components/dbDhl/dbdh'

import axios from 'axios'
export default {
  name: 'App',
  components:{
    gg,
    dbdh,
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
