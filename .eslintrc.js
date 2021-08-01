module.exports = {
  env: {
    // 스크립트가 실행되는 환경에 대한 정보
    browser: true, // browser 전역변수
    commonjs: true, // commonJS 전역변수 (require / module.exports 사용)
    es2021: true, // ECMAScript 2021 전역변수
  },
  extends: ['eslint:recommended', 'prettier'], // eslint 기본 추천 설정을 확장해서 사용, prettier와 충돌할 수 있는 설정 해제
  parserOptions: {
    ecmaVersion: 12, // ECMAScript 2021 버전
  },
  rules: {
    'no-console': 'warn', // console 전역변수의 사용에 경고
    'valid-typeof': 'error', // typeof 비교에 올바른 문자열 사용 못하면 에러
    eqeqeq: 'error', // 비교 연산에 ==, !=을 사용하면 에러
    'no-unused-vars': 'error', // 사용되지 않은 변수가 있으면 에러
    'no-shadow': 'error', // 하위 스코프에서 상위 스코프의 변수명 쓰면 에러
    'no-var': 'error', // var 사용하면 에러
  },
};
