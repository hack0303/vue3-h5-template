import axios from 'axios';
import { API_URL } from './config.js';
import JwtService from './jwt.service.js';

const mockData = {
  user: {
    email: 'test@example.com',
    token: 'test@example.com',
    username: 'testuser',
    bio: 'I work at statefarm',
    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
  },
};

const articleList = [
  {
    slug: '1',
    title: 'Article 1',
    description: 'This is the first article',
    body: 'This is the body of the first article',
    tagList: ['article', 'mock'],
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'testuser',
      bio: 'I work at statefarm',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false,
    },
  },
];

const mockResponse = (config) => {
  const { method, url, data } = config;
  const endpoint = url.replace(API_URL, '').replace(/^\//, '');

  // User endpoints
  if (url.includes('/user') && method === 'get') {
    return Promise.resolve({
      data: { 
        user: mockData.user 
      },
      status: 200
    });
  }
  if (endpoint === 'user') {
    if (method === 'put') {
      const updatedUser = { ...mockData.user, ...JSON.parse(data) };
      mockData.user = updatedUser; // Persist changes
      return Promise.resolve({ data: { user: updatedUser } });
    }
  }

  // Auth endpoints
  if (endpoint === 'users/login' || endpoint === 'users') {
    if (method === 'post') {
      JwtService.saveToken(mockData.user.token);
      return Promise.resolve({ data: { user: mockData.user } });
    }
  }

  // Articles endpoints
  if (endpoint === 'articles') {
    if (method === 'get') {
      return Promise.resolve({ data: { articles: articleList, articlesCount: articleList.length } });
    }
  }

  // Profile endpoints
  if (endpoint === 'profiles') {
    if (method === 'get') {
      return Promise.resolve({
        data: { 
          profile: {
            username: 'mockuser',
            bio: 'Mock bio',
            image: 'https://i.imgur.com/mock.jpg',
            following: false
          }
        }
      });
    }
  }

  // Comments endpoints
  if (endpoint === 'articles' && url.includes('/comments')) {
    if (method === 'get') {
      return Promise.resolve({
        data: {
          comments: [
            {
              id: 1,
              body: 'Mock comment',
              createdAt: new Date().toISOString(),
              author: {
                username: 'commenter1',
                image: 'https://i.imgur.com/mock.jpg'
              }
            }
          ]
        }
      });
    }
    if (method === 'post') {
      return Promise.resolve({
        data: {
          comment: {
            id: 2,
            body: JSON.parse(data).comment.body,
            createdAt: new Date().toISOString(),
            author: mockData.user
          }
        }
      });
    }
  }

  // Tags endpoint
  if (url.includes('/tags') && method === 'get') {
    return Promise.resolve({
      data: { 
        tags: ['tag1', 'tag2', 'tag3'] 
      },
      status: 200
    });
  }

  // Fallback for unimplemented endpoints
  return Promise.reject(new Error(`Mock not implemented for ${method} ${url}`));
};

// Apply interceptor
if (import.meta.env.VITE_USE_MOCK === 'true') {
  axios.interceptors.request.use(
    (config) => ({ ...config, adapter: () => mockResponse(config) }),
    (error) => Promise.reject(error)
  );
}

export default axios;