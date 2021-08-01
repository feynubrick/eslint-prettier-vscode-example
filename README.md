# ESLint와 Prettier 함께 사용하기 + VSCode Extension과 함께 사용하기

ESLint와 Prettier를 사용할 때, 두개의 설정이 충돌해 겪는 곤란을 해결할 수 있는 설정입니다.

# 요약

- npm 모듈인 ESLint와 Prettier가 서로 충돌하는 설정을 eslint-prettier-config를 이용해 바로 잡는다.
- Prettier는 코드 formatting과 관련한 생각을 하지 않기 위해 만들어진 모듈이다.
  - formatting 관련한 것은 Prettier를 무조건 따른다.
  - 최소한의 커스터마이징만 가능하므로 그냥 Prettier가 시키는 대로 한다.
- ESLint, Prettier의 VSCode Extension 설정은 두개가 기능에서 겹치지 않도록 설정한다.
  - 자동 고침은 Prettier만 사용한다.
  - ESLint는 틀린걸 알려주는 용도로 사용한다.
