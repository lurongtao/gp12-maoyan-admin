<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        type="index"
        label="#"
        width="50">
      </el-table-column>
      <el-table-column
        prop="companyLogo"
        label="公司Logo"
        width="100">
        <template slot-scope="item">
          <el-image
            :src="`http://localhost:3000/uploads/${item.row.companyLogo}`"
            :fit="'cover'">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="positionName"
        label="职位名称">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="公司名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        width="120">
      </el-table-column>
      <el-table-column
        prop="salary"
        label="薪资"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="130">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import qs from 'qs'
import http from '../utils/http'

import { Table, TableColumn, Button, Image } from 'element-ui'
Vue.use(Table).use(TableColumn).use(Button).use(Image)

export default {
  data() {
    return {
      tableData: []
    }
  },

  async mounted() {
    let result = await http.get({
      url: '/api/position/list',
      headers: {
        'X-Access-Token': localStorage.getItem('X-Access-Token') 
      },
      params: {
        start: 0, 
        count: 5
      }
    })

    if (result.ret) {
      // let tableData = result.data.list.map((value, index) => {
      //   return {
      //     date: value.createTime,
      //     name: value.positionName,
      //     address: value.city
      //   }
      // })
      this.tableData = result.data.list
    } else {
      this.$router.replace('/')
    }
  },
}
</script>