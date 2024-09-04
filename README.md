# Study React Bundler

> 프로그래머스 데브코스(클라우드 기반 프론트엔드 엔지니어링 1기) 학습에서 2차프로젝트 2팀의 1차 RBF 진행을 위한 저장소입니다.

- React 프로젝트 구성을 위한 방법 각각의 장단점을 정리하기 위해서 작성합니다.

## 테스트

(이예진 노트북 기준) 각 프로젝트/번들러 별 속도 위주의 항목 측정합니다.

| 분류 \ 종류 | CRA | Vite | Self-Webpack | Self-ESBuild |
| :---------: | :-: | :--: | :----------: | :----------: |
|  구성 속도  | 2️⃣  |  1️⃣  |  측정 불가   |  측정 불가   |
|  실행 속도  | 4️⃣  |  1️⃣  |      3️⃣      |      2️⃣      |
|  빌드 속도  | 4️⃣  |  2️⃣  |      3️⃣      |      1️⃣      |

### 구성 속도

프로젝트 디렉토리를 생성하고, 필수 라이브러리를 설치하는데 소요되는 시간

1. Vite: `약 10초`
2. CRA: `약 1분`
3. 직접 구성 (Webpack / ESBuild)

   할 줄 아는 사람이 프로젝트를 만들어도 **CRA**와 **Vite**보다 느리고, 할 줄 모른다면 시간이 더 소요되기 때문에 시간을 측정하는 것이 의미가 없다고 생각하여 `측정 불가`로 작성했습니다.

### 실행 속도

`npm run dev` 또는 `npm start` 스크립트 실행 후 서버가 실행되는데 소요되는 시간

1. Vite: `1초 미만`
2. ESBuild: `약 1초`
3. Webpack: `약 3초`
4. CRA: `약 4초`

### 빌드 속도

`npm run build` 스크립트 실행 후 결과물이 생기는데 소요되는 시간

1. ESBuild: `1초 미만`
2. Vite: `1초 미만`
3. Webpack: `약 2초`
4. CRA: `약 6초`

### 빌드 용량

빌드 디렉토리의 총 용량 (매우매우 가벼운 프로젝트 + 별도의 설정을 하지 않은 기준)

![3_all](https://github.com/user-attachments/assets/794ab371-56f4-4058-8f8a-67947f27a523)

1. Vite: `139KB`
2. CRA: `486KB`
3. ESBuild: `1MB`
4. Webpack: `1.12MB`

## 정리

테스트를 진행할수록 ESBuild 기반 프로젝트들이 모든 부분에서 더 좋은 모습을 보여주어 테스트는 그만하고 내용을 정리해봤습니다.

또한 테스트 결과와 별개로 각각의 프로젝트를 어떤 상황에서 사용하는게 좋을지 찾아보고 내용을 정리하며 작성해봤습니다.

### 속도가 중요하다: `Vite`

![5_1_esbuild](https://github.com/user-attachments/assets/a73ef3fd-1eec-4deb-a892-63a00bd192a8)
(출처: [ESBuild 홈페이지](https://esbuild.github.io/))

ESBuild 기반 프로젝트 테스트 시 Webpack 기반의 프로젝트와 비교했을 때 매우 빠른 속도를 확인할 수 있었습니다.
하지만 `Self-ESBuild`의 경우 별도의 라이브러리 설치 없이 서버 실행이 가능하지만 [**핫 리로딩**을 사용하기 위해서는 별도의 설정](https://esbuild.github.io/api/#live-reload)이 필요했습니다.

그렇기 때문에 속도가 중요한 프로젝트라면 배포 시 **ESBuild**를 사용하지만, 핫 리로딩도 가능하고, 모든 부분에서 좋은 성능을 보여준 `Vite`를 사용하는 것이 좋아보입니다.

- 핫 리로딩(Hot Reloading): 코드에 변경사항이 존재할 때 애플리케이션에 새로고침 없이 즉시 반영되는 것

### 내 입맛대로 수정이 필요하다: `CRA 제외 모두`

다른 프로젝트들과 다르게 `CRA`는 빌드 설정 파일이 바로 생성되지 않고, **eject** 스크립트를 사용하면 숨겨져있던 파일들이 나오는 방식으로 되어있습니다.
즉, `CRA`를 사용해 프로젝트를 생성하고 Webpack, Babel 등등 설정들을 내 입맛대로 수정하려고 한다면 **eject** 스크립트를 사용해 숨겨진 파일을 꺼내야주어야 수정이 가능합니다.

기본적으로 설치되는 패키지가 많아 해당 패키지들을 모두 사용하는 것이 아니라면 다른 방법으로 프로젝트를 구성하는 것이 좋아보입니다.

> React 최신 버전(18.3.1) "[**Can I use React Without a framework?**](https://react.dev/learn/start-a-new-react-project#can-i-use-react-without-a-framework)"의 내용에서도 `CRA` 관련 내용을 찾아볼 수 없었습니다.

> `Vite`는 vite.config.js에서 다양한 설정을 할 수 있습니다. ([Vite 설정하기](https://ko.vitejs.dev/config/))

## 결론

1. `CRA`보다 `Vite`를 사용하자

   아직 많이 사용해보지 않았지만 React 공부를 이제 막 시작하는 사람이라면 다른 방법들보다 `Vite`를 사용하는 것이 좋아보입니다.

2. 직접 구성하는 방법은 알고만 있자

   혹시 모를 상황(무조건 Webpack으로 만들어야하는 상황 등등….)에 대비해 직접 구성하는 방법은 별도로 알고있는게 좋을 것 같습니다.

## 참고한 글

- [Abhigyan Gautam, Goodbye create-react-app, DEV Community](https://dev.to/ag2byte/create-react-app-is-officially-dead-h7o) - The problem with CRA
