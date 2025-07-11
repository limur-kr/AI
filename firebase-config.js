// Firebase 설정
const firebaseConfig = {
    // apiKey: "your-api-key",
    // authDomain: "your-project.firebaseapp.com",
    // projectId: "your-project-id",
    // storageBucket: "your-project.appspot.com",
    // messagingSenderId: "your-sender-id",
    // appId: "your-app-id"
    apiKey: "AIzaSyCXO36ouPD-kWj4fKgJLuoKuLGWH-FstA4",
    authDomain: "fromis-fb125.firebaseapp.com",
    projectId: "fromis-fb125",
    storageBucket: "fromis-fb125.firebasestorage.app",
    messagingSenderId: "304445068038",
    appId: "1:304445068038:web:c963daff1dd3051e634487",
    measurementId: "G-DCJFM4YRPR"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 데이터 제출 함수
async function submitApplication(formData) {
    try {
        const applicationData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            course: formData.get('course'),
            motivation: formData.get('motivation'),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending'
        };

        const docRef = await db.collection('applications').add(applicationData);
        console.log('Application submitted with ID: ', docRef.id);
        return true;
    } catch (error) {
        console.error('Error submitting application: ', error);
        return false;
    }
}

// 신청 데이터 가져오기 함수
async function getApplications() {
    try {
        const snapshot = await db.collection('applications')
            .orderBy('timestamp', 'desc')
            .get();
        
        const applications = [];
        snapshot.forEach(doc => {
            applications.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return applications;
    } catch (error) {
        console.error('Error getting applications: ', error);
        return [];
    }
}

// 상태 업데이트 함수
async function updateApplicationStatus(applicationId, status) {
    try {
        await db.collection('applications').doc(applicationId).update({
            status: status,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return true;
    } catch (error) {
        console.error('Error updating status: ', error);
        return false;
    }
}

// 신청 데이터 삭제 함수
async function deleteApplication(applicationId) {
    try {
        await db.collection('applications').doc(applicationId).delete();
        return true;
    } catch (error) {
        console.error('Error deleting application: ', error);
        return false;
    }
} 