const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.jsx'], // React 엔트리 파일
    bundle: true, // 번들링 활성화
    outfile: 'dist/bundle.js', // 번들 파일의 출력 위치
    loader: { '.js': 'jsx' }, // JSX 로더 설정
    sourcemap: true, // 소스맵 생성
    minify: true, // 코드 최소화
    watch: true, // 파일 변경 감시 모드 활성화
    define: { 'process.env.NODE_ENV': '"development"' }, // 환경 변수 정의
  })
  .catch(() => process.exit(1)); // 빌드 실패 시 프로세스 종료
