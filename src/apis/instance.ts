import axios, { AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios';
import type { ApiResponse } from '../types/api';

const baseURL = import.meta.env.VITE_API_BASE_URL ; 

const instance = axios.create({
  baseURL,
  timeout: 5000, // 5초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 요청 보내기 전에 수행할 작업 (예: 인증 토큰 추가)
    // const accessToken = localStorage.getItem('accessToken');
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    console.log('Request Interceptor:', config);
    return config;
  },
  (error: AxiosError) => {
    // 요청 오류가 있는 작업 수행
    console.error('Request Error Interceptor:', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<unknown>>) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    
    // 응답 데이터가 있는 작업 수행
    console.log('Response Interceptor:', response);
    if (response.data && response.data.success) {
      return response.data.data; // 실제 비즈니스 데이터 반환 (ApiResponse.data)
    }
    // API 응답 형식에 success 필드가 없거나 false인 경우 에러로 처리할 수 있습니다.
    // 이 부분은 실제 API 응답 구조에 맞춰 조정이 필요합니다.
    return Promise.reject(
      new Error(response.data?.error?.message || 'API 요청 실패'),
    );
  },
  (error: AxiosError<ApiResponse<unknown>>) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.error('Response Error Interceptor:', error);

    if (error.response) {
      // 서버가 상태 코드로 응답한 경우
      const { status, data } = error.response;
      const errorMessage = data?.error?.message || error.message;

      // 예시: 401 Unauthorized 경우 로그인 페이지로 리다이렉트
      // if (status === 401) {
      //   // window.location.href = '/login';
      //   console.error('401 Unauthorized: 로그인 필요');
      // }

      // 다른 공통 에러 처리 로직 추가 가능
      console.error(`Error ${status}: ${errorMessage}`);
      return Promise.reject(new Error(errorMessage)); // 일관된 에러 메시지 반환
    } if (error.request) {
      // 요청이 이루어졌으나 응답을 받지 못한 경우
      console.error('No response received:', error.request);
      return Promise.reject(new Error('서버로부터 응답이 없습니다.'));
    }
    // 요청을 설정하는 중에 문제가 발생한 경우
    console.error('Error setting up request:', error.message);
    return Promise.reject(new Error('요청 설정 중 오류가 발생했습니다.'));
  },
);

export default instance; 