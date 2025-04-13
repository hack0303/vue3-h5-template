import { createApp } from 'vue'  // Changed from default import to named import
import { API_URL } from '@/common/config.js'
import JwtService from '@/common/jwt.service.js'

// Use dynamic import() for conditional loading
let axios
if (import.meta.env.VITE_USE_MOCK === 'true') {
  axios = (await import('@/common/mock-interceptor.js')).default
} else {
  axios = (await import('axios')).default
}

const ApiService = {
  async init() {
    // Wait for axios to be initialized
    while (!axios) await new Promise(resolve => setTimeout(resolve, 10))
    axios.defaults.baseURL = API_URL
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      console.log('[API] Using mock interceptor')
    }
  },

  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return axios.get(resource, { params }).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;

export const TagsService = {
  get() {
    return ApiService.get("tags");
  },
};

export const ArticlesService = {
  query(type, params) {
    return ApiService.query("articles" + (type === "feed" ? "/feed" : ""), {
      params: params,
    });
  },
  get(slug) {
    return ApiService.get("articles", slug);
  },
  create(params) {
    return ApiService.post("articles", { article: params });
  },
  update(slug, params) {
    return ApiService.update("articles", slug, { article: params });
  },
  destroy(slug) {
    return ApiService.delete(`articles/${slug}`);
  },
  getTags() {
    return ApiService.get('tags');
  }
};

export const CommentsService = {
  get(slug) {
    if (typeof slug !== "string") {
      throw new Error(
        "[RWV] CommentsService.get() article slug required to fetch comments"
      );
    }
    return ApiService.get("articles", `${slug}/comments`);
  },

  post(slug, payload) {
    return ApiService.post(`articles/${slug}/comments`, {
      comment: { body: payload },
    });
  },

  destroy(slug, commentId) {
    return ApiService.delete(`articles/${slug}/comments/${commentId}`);
  },
};

export const FavoriteService = {
  add(slug) {
    return ApiService.post(`articles/${slug}/favorite`);
  },
  remove(slug) {
    return ApiService.delete(`articles/${slug}/favorite`);
  },
};