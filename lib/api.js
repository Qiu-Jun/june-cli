const axios = require("axios");

// 拦截全局请求响应
axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板
 * @returns Promise
 */
async function getRepo() {
  return axios.get("https://api.github.com/orgs/qiujun-cli/repos");
}

/**
 * 获取仓库下的版本
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagsByRepo(repo) {
  return axios.get(`https://api.github.com/repos/qiujun-cli/${repo}/tags`);
}

module.exports = {
  getRepo,
  getTagsByRepo,
};