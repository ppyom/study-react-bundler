const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // React 엔트리 파일
  output: {
    path: path.resolve(__dirname, 'dist'), // 빌드 파일 출력 경로
    filename: 'bundle.js', // 번들 파일 이름
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 확장자 설정
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JavaScript 및 JSX 파일에 대해
        exclude: /node_modules/, // node_modules 제외
        use: 'babel-loader', // Babel 로더 사용
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML 파일 템플릿 경로
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // 정적 파일 경로
    compress: true, // 압축 활성화
    port: 3000, // 개발 서버 포트
  },
  mode: 'development', // 개발 모드 설정
};
