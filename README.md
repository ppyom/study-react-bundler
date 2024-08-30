# Study React Bundler

> 프로그래머스 데브코스(클라우드 기반 프론트엔드 엔지니어링 1기) 학습에서 2차프로젝트 2팀의 1차 RBF 진행을 위한 저장소입니다.

- React 프로젝트 구성을 위한 방법 각각의 장단점을 정리하기 위해서 작성합니다.

| 분류 \ 종류 | CRA  | Vite | 직접 구성 |
| :---------: | :--: | :--: | :-------: |
|  구성 속도  | 보통 | 빠름 | 측정 불가 |

## 기준

(이예진 노트북 기준) 각 프로젝트/번들러 별 속도 위주의 항목 측정합니다.

### 구성 속도

프로젝트 디렉토리를 생성하고, 필수 라이브러리를 설치하는데 소요되는 시간

#### CRA

스크립트 입력 후 `약 1분` 정도의 시간이 소요됐습니다.

#### Vite

스크립트 입력 후 패키지 설치까지 완료되는데에 `약 10초` 정도의 시간이 소요됐습니다.

#### 직접 구성

Webpack과 ESBuild를 사용해 직접 React 프로젝트를 구성해봤는데, 할 줄 안다고 해도 **CRA**와 **Vite**보다 느리고, 할 줄 모른다면 시간이 더 소요되기 때문에 `측정 불가`로 작성했습니다.
