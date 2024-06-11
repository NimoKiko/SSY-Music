import { defineStore } from "pinia";

import { getBanners, getRecommendSongList } from "@/api/api";

const useMusicStore = defineStore("music", {
  state: () => {
    return {
      bannerList: [],
      recommendList: [],
    };
  },
  actions: {
    // 获取轮播图
    getBanners(params: any) {
      // 调用轮播图API
      getBanners(params).then((res) => {
        // console.log(res.banners);
        this.bannerList = res.banners;
      });
    },
    // 获取推荐歌单
    getRecommendSongList(params: any) {
      getRecommendSongList(params).then((res) => {
        this.recommendList = res.result;
      });
    },
  },
  getters: {},
});

export default useMusicStore;
