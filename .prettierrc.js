module.exports = {
  printWidth: 80, // 한 줄당 80개 글자로 제한
  tabWidth: 2, // 들여쓰기 수준 당 2글자 사용
  useTabs: false, // 들여쓰기에 \t 문자 대신 스페이스 사용
  semi: true, // 모든 문장 끝에 세미콜론 삽입
  singleQuote: true, // " 대신 ' 사용
  trailingComma: 'es5', // ES5에서 사용할 수 있는 곳에는 trailing comma 적용
  bracketSpacing: true, // { foo: bar } 처럼 쓰도록 설정
  arrowParens: 'always', // 애로우 함수를 사용할 때 괄호 강제: (x) => x
  endOfLine: 'lf', // CRLF 문제를 linux, macOS 기준으로 해결
};
