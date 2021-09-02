<template>
  <div class="home">
    <div class="basic_info">
      <title-head :title="'基础信息'"></title-head>
      <Row :gutter="20" style="padding:0 20px">
        <Col span="8">
          <Row>
            <Col span="12">
              <div class="basic_info_formlabel">单据编号</div>
            </Col>
            <Col span="12">
              <Input v-model="form.num" placeholder=""/>
            </Col>
          </Row>
        </Col>
        <Col span="8">
          <Row>
            <Col span="12">
              <div class="basic_info_formlabel">单据日期</div>
            </Col>
            <Col span="12">
              <DatePicker type="date" style="width: 100%" :value="form.date"></DatePicker>
            </Col>
          </Row>
        </Col>
        <Col span="8">
          <Row>
            <Col span="12">
              <div class="basic_info_formlabel">创建人</div>
            </Col>
            <Col span="12">
              <Input v-model="form.cerateBy" placeholder=""/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <div class="basic_info">
      <title-head :title="'供应商'"></title-head>
      <Row :gutter="20" style="padding:0 20px">
        <Col span="8">
          <Select v-model="form.provide">
            <Option v-for="item in provideList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Col>
      </Row>
    </div>
    <div class="basic_info">
      <title-head :title="'采购明细'"></title-head>
      <div style="padding:0 20px">
        <Table border :columns="columns" :data="tableData"></Table>
      </div>
    </div>
    <div class="basic_info">
      <title-head :title="'总金额'"></title-head>
      <Row :gutter="20" style="padding:0 20px">
        <Col span="12">
          <Input v-model="form.amount" placeholder="" type="number"/>
        </Col>
      </Row>
    </div>
    <div class="basic_info">
      <title-head :title="'备注'"></title-head>
      <Row :gutter="20" style="padding:0 20px">
        <Col span="12">
          <Input v-model="form.notes" placeholder="" type="textarea"/>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleHead from '@/components/TitleHead.vue'
export default {
  name: 'Home',
  components: {
    // TitleHead,
    'title-head': TitleHead
  },
  data () {
    return {
      form: {
        num: '',
        date: '',
        createBy: '',
        provide: '',
        amount: '',
        notes: ''
      },
      provideList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        }
      ],
      columns: [
        {
          title: '序号',
          type: 'index',
          width: 100
        },
        {
          title: '产品编码',
          key: 'code'
        },
        {
          title: '产品分类',
          key: 'category'
        },
        {
          title: '产品名称',
          key: 'name'
        },
        {
          title: '规格型号',
          key: 'type'
        },
        {
          title: '单位',
          key: 'ele'
        },
        {
          title: '采购单价',
          key: 'price'
        },
        {
          title: '采购数量',
          key: 'count'
        },
        {
          title: '小计',
          key: 'sum'
        }
      ],
      tableData: [
        {
          code: '',
          category: '',
          name: '',
          type: '',
          ele: '',
          price: '',
          count: '',
          sum: ''
        }
      ]
    }
  }
}
</script>
