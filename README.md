# container-presenter패턴으로 로그인,게시판,댓글 기능 구현

## 각 컴포넌트 소개
 
### main
> 유저 정보상태를 불러오고 관리, 서버에서 게시판들에 대한 정보 (게시판수, 게시판이름, 게시판 아이디)을 불러오고 그 정보를 관리
> react-router-dom을 통해 다른 container를 보여줌
> 상단은 header , 중앙내용은 주소에 따라 login , singup , board , issue, home
 

### header
> useContext를 이용하여 main컴포넌트에서 관리하는 유저의 정보 유저 정보와 게시판에 대한 정보를 불러와서 페이지 상단에
> 로그인 여부에 따라 닉네임을 보여주거나 로그인 하라는 텍스트를 출력, 유저 정보가 없다면 로그인,회원가입 버튼 활성화
> 있다면 로그아웃 버튼을 활성화 이후 게시판 정보에 따라 게시판 버튼을 출력 게시판 버튼 클릭시
> 해당 게시판아이디 주소로 link



### home
> header에서 다른페이지로 안 넘어갈경우 혹은 header에서 home 버튼을 누르면 출력되는 컴포넌트

### login 
> 로그인에 대한 기능을 수행하는 컴포넌트 ui는 loginform컴포넌트에서 담당

### singup 
> 회원가입에 대한 기능을 수행하는 컴포넌트 ui는 singupform컴포넌트에서 담당

### board 
> boardid와 location에 따라 게시판내의 issue들을 불러오는 통신을 수행하고(issue는 페이징) issue들에 대한 정보를 상태관리하며 
> boardid,유저정보,새로운 issue를 작성하는 페이지로의 플래그등을 상태관리를 하는 컴포넌트
> 새로운 issue작성은 플래그에 따라 issueinputform컴포넌트를 불러오고
> 만약 플래그가 false라면 boardform에 서버통신한 issue들과 boardid 그리고 새로운 issue작성플래그를 활성화하는 익명함수를 
> 넘겨주고 그 뒤에 boardpaging이라는 board내에 페이지를 이동하는 컴포넌트를 불러옵니다



### issue 
> board에서 임의의 issue를 선택하면 보여지는 컴포넌트
> issueid에 따라 서버와 통신하여 현재 issueid에 맞는 issue정보와 issue에 작성된 comment들을 불러옵니다
> issue내에 comment의 작성,삭제, issue의 수정및 삭제기능을 가지고 있고 수정과 삭제는 작성자가 동일해야 가능합니다
> issue 수정 여부를 확인하는 플래그가 true라면 issueinputform컴포넌트를
> 아니라면 issueform와 commentinputform컴포넌트를 불러옵니다

### comment 
> 유저 정보와 comment의 작성자가 맞는지 확인후 맞다면 comment의 삭제하는 익명함수를
> 아니라면 false를 comment의 ui를 담당하는 commentform컴포넌트에 넘겨줍니다



## 기능성 함수

### QureyString
> react-router-dom에서 넘겨주는 location매개변수를 넣으면 location의 쿼리 부분만 객체 key value로 파싱해서 반환해주는 기능을 수행하는 함수

### inputReducer
> 프로젝트 전체에서 사용되는 useReducer에서 공용으로 사용하기 위해 작성된 reducer
> type은 INPUTREDUCER_TYPE로 정의해두어서 자동완성및 가독성좋게 만듬


### serverapi.js내의 통신 api
> 통신을 axios로 하고 있는데 뭔가 가독성부분이 안좋다 느껴져서 만든 서버통신용 api
> 타입은 API_TYPE로 따로 정의해두어서 자동완성에 나오도록 하였고 공용으로 사용되는 commonapi를 하나 만들고
> 그 공용을 호출하는 api를 필요에 따라 만들어서 사용하였습니다 
> 다른 프로젝트를 하면서 기존 axion로 직접 통신할때와 비교해서 사용해본 결과
> 서버 통신에 오류가 뜨거나 전체적 테스트및 변경점이 있으면 commonapi에서 로그를 뜨게 하면 
> 모든 통신에서 로그를 볼수 있기도 하고 호출전에 호출에 필요한것과 콜백을 전부 정의해서 
> 마지막에 호출하다보니 가독성면에서도 더 좋은것 
