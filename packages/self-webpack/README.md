# Self - Webpack

## 구성 방법

> index.html 및 React 엔트리 파일(index.jsx)이 존재하는 상태라고 가정하며 작성합니다.

> GPT님께 물어보면서 작성했기 때문에 설정파일 및 패키지 정보들은 정확하게 알진 못합니다.

### 필요한 패키지 설치

```
npm install react react-dom
npm install -D @babel/core @babel/preset-env @barbel/preset-react babel-loader
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

### 설정 파일 작성

- webpack.config.js

  ```javascript
  const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
    entry: "./src/index.jsx", // React 엔트리 파일
    output: {
      path: path.resolve(__dirname, "dist"), // 빌드 파일 출력 경로
      filename: "bundle.js", // 번들 파일 이름
    },
    resolve: {
      extensions: [".js", ".jsx"], // 확장자 설정
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // JavaScript 및 JSX 파일에 대해
          exclude: /node_modules/, // node_modules 제외
          use: "babel-loader", // Babel 로더 사용
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // HTML 파일 템플릿 경로
      }),
    ],
    devServer: {
      static: path.join(__dirname, "dist"), // 정적 파일 경로
      compress: true, // 압축 활성화
      port: 3000, // 개발 서버 포트
    },
    mode: "development", // 개발 모드 설정
  };
  ```

- .babelrc

  ```json
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  ```

### package.json 스크립트 작성

```json
{
  "start": "webpack serve --open --config webpack.config.js",
  "build": "webpack --config webpack.config.js"
}
```

## 테스트

- 구성 속도: <code title="할 줄 아는 사람과 모르는 사람의 격차가 큼">측정 불가</code>

- 실행 속도: <code title="스크립트 입력부터 \"webpack 5.94.0 compiled successfully\" 출력까지">3s</code>

- 빌드 속도: <code>2s</code>
  ```
  webpack 5.94.0 compiled successfully in 1044 ms
  ```

## 장단점

### 장점

- 처음부터 내 마음대로 만들 수 있음
- 프로젝트 중간에 React로 변환도 가능

### 단점

- 프로젝트 구성을 처음부터 직접 해야함
