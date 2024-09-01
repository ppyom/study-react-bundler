# Vite

## 구성 방법

`npm create vite [프로젝트명] -- --template react`

## 테스트

- 구성 속도: <code title="스크립트 입력 후 폴더 이동 후 패키지 설치 완료된 시간이 10초">10s</code>

<img src="https://github.com/user-attachments/assets/43b953f5-a85f-4389-ad56-c52754a8b730" alt="1_vite" width="350">

- 실행 속도: <code title="스크립트 입력부터 \"VITE v5.4.2\" 출력까지">1s 미만</code>

- 빌드 속도: <code>1s 미만</code>
  ```
  vite v5.4.2 building for production...
  ✓ 30 modules transformed.
  dist/index.html                  0.32 kB │ gzip:  0.23 kB
  dist/assets/index-Boa3L5dG.js  142.50 kB │ gzip: 45.75 kB
  ✓ built in 666ms
  ```

## 장단점

### 장점

- 빠른 속도
- 다양한 설정을 변경할 수 있음 ([Vite 설정하기](https://ko.vitejs.dev/config/))
- React 이외 다른 프로젝트를 생성할 때에도 사용 가능

### 단점
