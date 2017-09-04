<template>
  <div id="editor" class="container">
    <div class="form-horizontal">
      <div class="form-group">
        <label for="title" class="col-sm-1 control-label">标题：</label>
        <div class="col-sm-6">
          <input name="title" v-on:focus="reset()" id="title" type="text" v-model="article.title" class="form-control"/>
        </div>
      </div>
      <p class="col-sm-offset-1 error_msg_tip">{{ErrorMsg.title}}</p>
      <div class="form-group">
        <label for="description" class="col-sm-1 control-label">描述：</label>
        <div class="col-sm-6">
          <input name="description" v-on:focus="reset()" id="description" type="text" v-model="article.description"
                 class="form-control"/>
        </div>
      </div>
      <p class="col-sm-offset-1 error_msg_tip">{{ErrorMsg.description}}</p>
      <div class="form-group">
        <label for="category" class="col-sm-1 control-label">类别：</label>
        <div class="col-sm-6" id="category">
          <span v-for="c in category">
            <input v-model="checkBox" type="checkbox" :id="'checkbox'+c.id" class="checkbox" :value="c.id"/>
            <label :for="'checkbox'+c.id"></label>
            <label :for="'checkbox'+c.id">{{c.name}}</label>
          </span>
        </div>
      </div>
    </div>
    <mavon-editor style="height: 580px" @save="save()" v-model="article.content"></mavon-editor>
  </div>
</template>
<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import api from '../../API/index.js'
  import UTIL from '../../commons/UTIL.js'

  export default {
    name: 'Editor',
    components: {
      mavonEditor
      // or 'mavon-editor': mavonEditor
    },
    data () {
      return {
        checkBox: [],
        article: {
          userId: '',
          content: '',
          title: '',
          description: '',
          category: ''
        },
        category: [],
        ErrorMsg: {
          title: '',
          description: ''
        },
        allCategory: [{
          value: 1,
          name: 'java'
        }, {
          value: 2,
          name: 'spring'
        }, {
          value: 3,
          name: 'angular'
        }]
      }
    },
    created () {
      api.getAllCategory(this).then((response) => {
        this.category = response.data;
      });
    },
    methods: {
      save () {
        let _this = this;
        let params = {
          userId: 'asdf123fsdcx12csdf',
          title: _this.article.title,
          description: _this.article.description,
          content: _this.article.content,
          category: _this.checkBox.join(':::')
        };
        if (this.checkValidity()) {
          api.saveMarkdownData(_this, params).then((response) => {
            console.log(response.status)
          }, (err) => {
            console.log(err)
          });
        }
      },
      checkValidity () {
        let _this = this;
        if (UTIL.isEmpty(_this.article.title)) {
          _this.ErrorMsg.title = '标题不能为空';
          if (UTIL.isEmpty(_this.article.description)) {
            _this.ErrorMsg.description = '描述不能为空';
          } else {
            _this.ErrorMsg.description = '';
          }
          return false;
        } else {
          _this.ErrorMsg.title = '';
          if (UTIL.isEmpty(_this.article.description)) {
            _this.ErrorMsg.description = '描述不能为空';
            return false;
          } else {
            _this.ErrorMsg.description = '';
          }
          return true;
        }
      },
      reset () {
        this.ErrorMsg = {
          title: '',
          description: ''
        }
      }
    }
  }
</script>
<style>
  #category {
    margin-top: 7px;
  }

  #editor {
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .error_msg_tip {
    color: #d43f3a;
    padding-bottom: 15px;
    font-size: 14px;
  }

  /*多选框组件*/
  .checkbox {
    display: none;
  }

  .checkbox + label {
    background-color: #FFF;
    border: 1px solid #C1CACA;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05);
    width: 14px;
    height: 14px;
    border-radius: 5px;
    display: inline-block;
    position: relative;
  }

  .checkbox + label:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .checkbox:checked + label {
    background-color: #ECF2F7;
    border: 1px solid #92A1AC;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #243441;
  }

  .checkbox:checked + label:after {
    content: '\2714';
    position: absolute;
    top: 0;
    left: 0;
    color: #758794;
    width: 100%;
    text-align: center;
    font-size: 0.8em;
    padding: 1px 0 0 0;
    vertical-align: text-top;
  }
</style>
