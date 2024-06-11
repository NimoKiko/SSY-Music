import request from "@/utils/request";
// 接口api
enum API {
  // 获取轮播图
  GET_BANNERS = "/banner",
  // 获取推荐歌单
  GET_RECOMMENDSONGLIST = "/personalized",
}
// 获取轮播图
export const getBanners = (params: any) =>
  request.get<any, any>(API.GET_BANNERS, params);

// 获取推荐歌单
export const getRecommendSongList = (params: any) =>
  request.get<any, any>(API.GET_RECOMMENDSONGLIST, params);
