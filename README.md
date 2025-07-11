# AI Academy 웹사이트

AI 강의 사이트의 메인페이지와 관리자 대시보드를 포함한 웹 애플리케이션입니다.

## 기능

### 메인페이지 (index.html)
- 반응형 디자인
- AI 강의 소개 및 특징
- 수강신청 팝업 폼
- Firebase 연동 데이터 저장

### 관리자 대시보드 (admin.html)
- 신청 데이터 실시간 조회
- 통계 대시보드
- 신청 상태 관리 (승인/거절)
- 데이터 삭제 기능

## Firebase 설정

### 1. Firebase 프로젝트 생성
1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. 새 프로젝트 생성
3. 웹 앱 추가

### 2. Firestore Database 설정
1. Firestore Database 생성
2. 보안 규칙 설정 (테스트 모드로 시작)

### 3. 설정 파일 업데이트
`firebase-config.js` 파일에서 Firebase 설정을 업데이트하세요:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### 4. Firestore 보안 규칙
Firestore Database > 규칙에서 다음 규칙을 설정하세요:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /applications/{document} {
      allow read, write: if true; // 테스트용 (실제 운영 시 인증 추가 필요)
    }
  }
}
```

## 파일 구조

```
├── index.html          # 메인페이지
├── admin.html          # 관리자 대시보드
├── firebase-config.js  # Firebase 설정 및 함수
└── README.md          # 프로젝트 설명서
```

## 사용법

### 1. 로컬 서버 실행
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 설치 필요)
npx http-server

# 또는 Live Server 확장 프로그램 사용 (VS Code)
```

### 2. 웹사이트 접속
- 메인페이지: `http://localhost:8000`
- 관리자 대시보드: `http://localhost:8000/admin.html`

### 3. 수강신청 테스트
1. 메인페이지에서 "신청하기" 버튼 클릭
2. 폼 작성 후 제출
3. 관리자 대시보드에서 신청 데이터 확인

## 데이터 구조

### applications 컬렉션
```javascript
{
  name: "신청자 이름",
  email: "이메일 주소",
  phone: "휴대폰 번호",
  motivation: "신청동기",
  timestamp: "신청일시",
  status: "pending|approved|rejected"
}
```

## 주요 기능

### 메인페이지
- ✅ 반응형 디자인
- ✅ 수강신청 팝업 폼
- ✅ Firebase 데이터 저장
- ✅ 폼 검증 (이메일, 휴대폰 번호)
- ✅ 관리자 버튼

### 관리자 대시보드
- ✅ 실시간 데이터 조회
- ✅ 통계 대시보드
- ✅ 상태 관리 (승인/거절)
- ✅ 데이터 삭제
- ✅ 새로고침 기능

## 보안 고려사항

현재 설정은 테스트용으로 모든 사용자가 읽기/쓰기가 가능합니다. 실제 운영 시에는:

1. Firebase Authentication 추가
2. 관리자 권한 확인
3. 적절한 보안 규칙 설정
4. HTTPS 사용

## 문제 해결

### Firebase 연결 오류
1. 설정 정보 확인
2. 네트워크 연결 확인
3. 브라우저 콘솔에서 오류 메시지 확인

### 데이터가 저장되지 않는 경우
1. Firestore Database 생성 확인
2. 보안 규칙 설정 확인
3. Firebase 설정 정보 확인

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 