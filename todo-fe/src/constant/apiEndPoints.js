export const BACKEND_URL = 'http://localhost:3000';

export const GET_TODO_LIST = {
  url: `${BACKEND_URL}/api/lists`,
  method: 'get',
};

export const POST_TODO_LIST = {
  url: `${BACKEND_URL}/api/lists`,
  method: 'post',
};

export const GET_TODO_LIST_BY_ID = id => ({
  url: `${BACKEND_URL}/api/lists/${id}`,
  method: 'get',
});

export const PUT_TODO_LIST_BY_ID = id => ({
  url: `${BACKEND_URL}/api/lists/${id}`,
  method: 'put',
});
