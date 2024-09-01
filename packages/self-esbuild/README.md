# Self - ESBuild

## 구성 방법

> index.html 및 React 엔트리 파일(index.jsx)이 존재하는 상태라고 가정하며 작성합니다.

> GPT님께 물어보면서 작성했기 때문에 설정파일 및 패키지 정보들은 정확하게 알진 못합니다.

다른 프로젝트와 다르게 Self ESBuild는 index.html 파일을 dist 폴더 내부에 작성합니다.

<details>

<summary>dist/index.html</summary>

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```

</details>

### 필요한 패키지 설치

```
npm install react react-dom
npm install -D esbuild
```

### package.json 스크립트 작성

```json
{
  "dev": "npx esbuild --watch --bundle src/index.jsx --outdir=dist --servedir=dist",
  "build": "npx esbuild --bundle src/index.jsx --outdir=dist"
}
```

## 테스트

- 구성 속도: <code title="할 줄 아는 사람과 모르는 사람의 격차가 큼">측정 불가</code>

- 실행 속도: <code title="실행되는 시간은 1초정도지만, 수정 후 저장한 다음 변경된 내용이 웹 브라우저에 바로 반영되지 않음">약 1s</code>

- 빌드 속도: <code>1s 미만</code>
  ```
    dist\index.js  1.0mb
  Done in 43ms
  ```

## 장단점

### 장점

- 처음부터 내 마음대로 만들 수 있음
- 프로젝트 중간에 React로 변환도 가능

### 단점

- 프로젝트 구성을 처음부터 직접 해야함
- 핫 리로딩을 사용하기 위해 별도 설정이 필요
