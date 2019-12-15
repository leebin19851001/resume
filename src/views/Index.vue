<template>
  <div class='home'>
    <div class='after'>
      <div class='after-container'>
        <div class='after-contniner-left'>
          <div class="inner-text1">
            <h1>超过八百万优秀人才都在用的智能简历工具</h1>
            <h2>备受好评的求职利器，写简历就上五百丁</h2>
          </div>
          <div class="inner-text2">
            <div class="left"><a href="">免费制作简历</a></div>
            <div class="right"><a href="">更多功能</a></div>
          </div>
          <div class="inner-text3">
            <form id='search_form' action='/search/' method='get'>
              <input class="search-word" name='keyword' type='text' autocomplete='off' placeholder='在2,300个岗位里面搜索你要的简历' />
              <button class="search-button" type='submit'>Search</button>
            </form>
          </div>
        </div>
        <div class="img-container">
          <MySlider :list='srcList' :len='srcList.length' />
        </div>
      </div>
    </div>
    <div class='before'>
      <Advance :dataList='dataList'/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MySlider from '../components/common/MySlider.vue'
import Advance from '../components/index/Advance'
import api from '../api/index'
export default {
  name: 'home',
  data () {
    return {
      srcList: [
        {
          bg: 'background-image: linear-gradient(to right, #665ce7, #665ccb)',
          src:
            'https://static.500d.me/resources/500d/index/images/index_banner0.png'
        },
        {
          bg:
            'background-color:#517bb6; background-image:-webkit-linear-gradient(to right, #5174b6, #5183b6)',
          src:
            'https://static.500d.me/resources/500d/index/images/index_banner1.png'
        },
        {
          bg: 'background-image: linear-gradient(to right, #665ce7, #665ccb)',
          src:
            'https://static.500d.me/resources/500d/index/images/index_banner2.png'
        },
        {
          bg: 'background-image: linear-gradient(to right, #665ce7, #665ccb)',
          src:
            'https://static.500d.me/resources/500d/index/images/index_banner3.png'
        },
        {
          bg: 'background-image: linear-gradient(to right, #665ce7, #665ccb)',
          src:
            'https://static.500d.me/resources/500d/index/images/index_banner4.png'
        }
      ],
      dataList: []
    }
  },
  components: {
    MySlider,
    Advance
  },
  mounted () {
    this.getSlogan()
  },
  methods: {
    getSlogan () {
      api.getSloganByLimit({ num: 4 }).then(res => {
        this.dataList = res.data.data
      }).catch(err => {
        console(err)
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.home{
  padding-top: 60px;
  height: 100%;
  background: linear-gradient(to right, #665ce7, #665ccb);
  .after {
    height: 738px;
    width: 100%;
    .after-container {
      position: relative;
      height: 100%;
      width: 1240px;
      margin: 0 auto;
      box-sizing: border-box;
      .after-contniner-left {
        width: 60%;
        height: 100%;
        .inner-text1 {
          z-index: 20;
          position: absolute;
          top: 100px;
          left: 0;
          h1 {
            color: #fff;
            font-size: 38px;
            height: 43px;
            margin-bottom: 20px;
            font-weight: 300;
            font-family: 'microsoft yahei';
          }
          h2 {
            position: absolute;
            color: #fff;
            font-size: 18px;
            height: 23px;
            margin-bottom: 20px;
            font-weight: 100;
            left: 0;
          }
        }
        .inner-text2 {
          z-index: 20;
          position: absolute;
          top: 260px;
          left: 0;
          width: 400px;
          height: 50px;
          display: flex;
          justify-content: space-between;
          div {
            flex-grow: 1;
            line-height: 50px;
            a{
              display: inline-block;
              height: 100%;
              width: 90%;
              background: #008899;
            }
          }
        }
        .inner-text3 {
          z-index: 20;
          position: absolute;
          top: 400px;
          left: 0;
          height: 28px;
          line-height: 28px;
          padding: 0 3px;
          &:focus-within {
            border: 1px solid #fff;
            border-radius: 14px;
          }
          .search-word {
            float: left;
            width: 300px;
            height: 26px;
            line-height: 26px;
            background-color: transparent;
            color: #fff;
            border:0;/*去掉未选中状态边框*/
            border-bottom: 1px solid snow;
            outline:none;/*去掉选中状态边框*/
            background-color:rgba(0,0,0,0);/*透明背景*/
            &:focus {
              border: 0;
            }
          }
          .search-button {
            float: right;
            height: 28px;
            border-radius: 5px;
            background: transparent;
            border: 0;
            outline:none;
          }
        }
      }
      .img-container {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
  .before {
    position: relative;
    height: 150px;
    width: 100%;
    bottom: 0px;
  }
}
</style>
