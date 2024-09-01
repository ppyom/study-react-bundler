# Create React App

## 구성 방법

`npx create-react-app [프로젝트명]`

## 테스트

- 구성 속도: <code>1m 7s</code>
  <img src="https://github.com/user-attachments/assets/5fb6f854-cc3e-4bfe-b5a1-5a6db6398ea3" alt="1_cra" width="350">

- 실행 속도: <code title="스크립트 입력부터 \"Compiled successfully!\"가 출력되었을 때 까지">4s</code>

- 빌드 속도: <code title="스크립트 입력부터 \"Compiled successfully.\"가 출력되었을 때 까지">6s</code>
  ```
  Compiled successfully.
  File sizes after gzip:
  45.4 kB  build\static\js\main.2ae5e619.js
  The project was built assuming it is hosted at /.
  You can control this with the homepage field in your package.json.
  ```

## 장단점

### 장점

- 프로젝트 구성을 쉽게 진행할 수 있음

### 단점

- 필요없는 패키지도 함께 설치되어 프로젝트가 무거움
- 다른 프로젝트에 비해 느린 속도
- 프로젝트 설정을 변경하기 위해 별도의 스크립트(`eject`)를 사용해야함
