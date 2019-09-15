<template>
  <v-ons-page class="detailPage">
    <v-ons-toolbar modifier="transparent cover-content" :style="{backgroundColor:posterBG}">
      <div class="left">
        <v-ons-back-button class="back-button"></v-ons-back-button>
      </div>
      <div class="center">
        <template v-if="res.subtype=='movie'">
          <v-ons-icon icon="ion-ios-film-outline, material: md-movie" size="lg"></v-ons-icon>
          <span>电影</span>
        </template>
        <template v-else>
          <v-ons-icon icon="ion-ios-monitor-outline, material: md-tv" size="lg"></v-ons-icon>
          <span>电视</span>
        </template>
      </div>
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon icon="ion-share, material: md-share"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <div class="content" v-show="flag">
      <v-ons-row class="poster" :style="{backgroundColor:posterBG}">
        <img v-if="flag" :src="res.images.large" />
      </v-ons-row>
      <v-ons-row class="detailPage__info">
        <ons-col class="info__text">
          <div class="text__title">{{res.title}}</div>
          <div>
            类型:
            <span v-for="(item,index) in res.genres" :key="item">{{index!=0?"/":""}}{{item}}</span>
          </div>
          <div>原名:{{res.original_title}}</div>
          <div>上映年份:{{res.year}}</div>
        </ons-col>
        <ons-col class="info__rating" width="87px">
          <v-ons-card>
            <div class="title">豆瓣评分</div>
            <div v-if="flag" class="content">
              <div v-if="res.rating.average!=0" class="rating__text">{{res.rating.average}}</div>
              <rating :rating="res.rating" :detail="true"></rating>
              <div v-if="res.rating.average!=0">{{res.ratings_count}}人</div>
            </div>
          </v-ons-card>
        </ons-col>
      </v-ons-row>
      <v-ons-row class="detailPage__main">
        <v-ons-row>
          <div class="main__title">简介</div>
          <div :class="main__summary">
            {{res.summary}}
            <div v-if="main__summary.indexOf('hideText')!='-1'" class="summary__expand">
              ...
              <span @click="expand">展开</span>
            </div>
          </div>
        </v-ons-row>
        <v-ons-row>
          <ons-row class="main__title">影人</ons-row>
          <ons-row class="main__scroll-x">
            <ons-col
              width="84px"
              v-for="item in res.directors"
              :key="'director'+item.id"
              v-show="item.avatars"
              class="main__directors"
            >
              <img v-if="item.avatars" :src="item.avatars.medium" />
              <div class="g-overflowHide">{{item.name}}</div>
              <div class="scroll-x__label">导演</div>
            </ons-col>
            <ons-col
              width="84px"
              v-for="item in res.casts"
              :key="'cast'+item.id"
              v-show="item.avatars"
              class="main__casts"
            >
              <img :src="item.avatars.medium" />
              <div class="g-overflowHide">{{item.name}}</div>
              <div class="scroll-x__label">演员</div>
            </ons-col>
          </ons-row>
        </v-ons-row>
      </v-ons-row>
    </div>
    <loading v-show="!flag"></loading>
  </v-ons-page>
</template>

<script>
import RGBaster from "rgbaster";
import rating from "components/rating";

export default {
  name: "detailPage",
  data() {
    return {
      url: "v2/movie/subject/",
      res: {},
      posterBG: "",
      main__summary: "main__summary hideText",
      flag: false,
      id: ""
    };
  },
  async created() {
    var that = this;
    await this.$http.jsonp(this.url + this.id).then(
      response => {
        let res = response.body;
        this.res = res;
      },
      err => {
        console.log(err);
      }
    );
    const posterBG = await RGBaster(this.res.images.small, {
      ignore: ["rgb(0,0,0)", "rgb(255,255,255)"],
      scale: 0.6
    });
    this.posterBG = posterBG[0].color;
    this.flag = true;
  },
  methods: {
    expand() {
      this.main__summary = "main__summary";
    }
  },
  components: {
    rating
  }
};
</script>
<style lang="scss" scoped>
ons-toolbar {
  .toolbar__title {
    color: #fff;
  }
  ons-icon {
    color: #fff;
  }
  .back-button {
    color: #fff;
  }
  .center {
    text-align: center;
    ons-icon {
      vertical-align: middle;
    }
  }
}

.poster {
  height: 300px;
  align-items: center;
  justify-content: center;
  img {
    width: 180px;
    height: 263px;
  }
}

.detailPage__info {
  border-bottom: 1px solid #eceae6;
  padding: 20px;
  .text__title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #4a4a4a;
  }
  div {
    color: #959590;
    font-size: 12px;
  }
  ons-card {
    margin: 0;
    height: 100%;
    font-size: 11px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 0;
    text-align: center;
    padding: 0;
    .title {
      margin: 0;
      padding: 12px 0 8px 0;
    }
    .content {
      padding-bottom: 12px;
    }
    .rating__text {
      font-size: 18px;
      font-weight: bold;
      color: #464646;
    }
  }
}

.detailPage__main {
  padding: 0 20px 35px;
  > ons-row {
    margin-top: 35px;
  }
  .main__title {
    font-size: 14px;
    color: #8f8f8a;
    margin-bottom: 13px;
  }
  .main__summary {
    position: relative;
    font-size: 16px;
    color: #363631;
  }
  .hideText {
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical;
    /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 4;
    /** 显示的行数 **/
    overflow: hidden;
    /** 隐藏超出的内容 **/
  }
  .summary__expand {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.2em;
    z-index: 10;
    background-color: #efeff4;
    text-align: right;
    span {
      color: #40be55;
    }
  }
  .g-overflowHide {
    width: 100%;
    text-align: center;
  }
  .main__scroll-x {
    flex-wrap: nowrap;
    overflow-x: auto;
    font-size: 13px;
    color: #42423f;
    .scroll-x__label {
      margin-top: 5px;
      color: #999795;
      font-size: 12px;
    }
  }
  .main__directors,
  .main__casts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 12px;
    img {
      width: 84px;
      height: 122px;
      margin-bottom: 7px;
    }
  }
}
</style>
<style>
.detailPage .back-button__icon {
  fill: #fff;
}
</style>
