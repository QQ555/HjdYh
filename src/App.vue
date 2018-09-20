<template>
  <div id="app">
    <gg/>
    <dbdh/>
    <ycl/>
    <router-view/>
    <dbxz/>
  </div>
</template>

<script>
import gg from '@/components/GGg/gg'
import dbdh from '@/components/dbDhl/dbdh'
import dbxz from '@/components/DbGd/dbxz'
import ycl from '@/components/Ycl/ycl'


import axios from 'axios'
export default {
  name: 'App',
  components:{
    gg,
    dbdh,
    dbxz,
    ycl
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
