# Geo-Attendance-System - Project Overview

**Generated:** 2026-04-24 | **Status:** Production Ready

---

## Quick Summary

**Geo-Attendance-System** is a web-based attendance tracking system that combines geolocation and QR code technologies for educational settings.

### Purpose
Enables lecturers to track student attendance using either geolocation-based verification, QR code scanning, or a combination of both.

---

## Technology Stack

| Component | Details |
|-----------|---------|
| **Languages** | JavaScript (48.7%), CSS (28.7%), HTML (22.6%) |
| **Frontend** | HTML, CSS, JavaScript (Client-side only) |
| **Backend** | Firebase (Authentication + Firestore Database) |
| **Deployment** | Vercel - https://geo-attendance-system-gamma.vercel.app |
| **Requirements** | HTTPS, no Node.js required |

---

## Core Features

### 🎓 For Lecturers
- Create attendance sessions with configurable parameters
- Set attendance radius (10-1000m)
- Set session duration (minutes)
- Real-time geolocation support
- Generate and display QR codes
- View live attendance list with real-time updates
- Session countdown timer

### 👨‍🎓 For Students
- Automatic active session detection
- Geolocation-based attendance (Haversine distance formula)
- QR code scanning capability
- Real-time attendance confirmation
- Duplicate prevention (one attendance record per session)

### 🔒 Security & Authentication
- Email/password registration and login
- Role-based access control (Student/Lecturer)
- Firebase Authentication with password hashing
- Firestore security rules
- Privacy-focused: Student coordinates NOT stored
- HTTPS required for secure context

---

## Technical Highlights

### Key Algorithms
- **Haversine Distance Formula:** Calculates distance between geographic coordinates with high precision
- **Composite Document IDs:** `${sessionId}_${studentId}` ensures one attendance record per student per session

### Project Structure
```
GeoAttend/
├── index.html              # Login/Signup page
├── lecturer.html           # Lecturer dashboard
├── student.html            # Student dashboard
├── css/
│   └── style.css          # All styling
├── js/
│   ├── firebase.js        # Firebase initialization
│   ├── auth.js            # Authentication functions
│   ├── lecturer.js        # Lecturer logic
│   ├── student.js         # Student logic
│   └── qr.js              # QR code generation
├── FIREBASE_CONFIG_TEMPLATE.md  # Setup instructions
└── FIRESTORE_RULES.txt         # Security rules
```

### Data Structure
- **Users Collection:** Role, name, level, email, timestamp
- **Sessions Collection:** Lecturer info, location, radius, QR value, active status
- **Attendance Collection:** Session ID, student info, timestamp, method (Geo/QR)

---

## Browser Compatibility

### Desktop ✅
- Chrome, Firefox, Safari, Edge: Full support
- IE 11: Not supported

### Mobile Support
- **Android:** Chrome, Firefox, Samsung Internet, Edge, Opera - Full support
- **iOS:** 
  - Safari ✅ Full support (recommended)
  - Other browsers: Restricted due to Apple WebKit (auto-fallback to QR)

**Requirements:** HTTPS, modern browser, location/camera permissions

---

## Deployment Options

### Option 1: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option 2: Vercel (Current)
- Push to GitHub → Import on Vercel → Auto-deploy
- Currently live at: https://geo-attendance-system-gamma.vercel.app

### Local Development
- Firebase Emulator: `firebase emulators:start`
- Python HTTP Server: `python -m http.server 8000`
- VS Code Live Server extension

---

## Project Stats

| Metric | Value |
|--------|-------|
| **Created** | 29 days ago |
| **Last Updated** | 2026-04-12 |
| **Repository Size** | 598 KB |
| **Forks** | 1 |
| **Open Issues** | 0 |
| **License** | MIT |
| **Visibility** | Public |

---

## Key Capabilities

✅ **Authentication**
- Email/password registration and login
- Role-based access (Student/Lecturer)
- Firebase Authentication

✅ **Real-time Updates**
- Live attendance list
- Session status monitoring
- Automatic active session detection

✅ **Geolocation & QR**
- Haversine distance calculation
- QR code generation and scanning
- Dual-method attendance verification
- Fallback options for all scenarios

✅ **Security Features**
- Firestore security rules
- Immutable attendance records
- User profile isolation
- Privacy-focused design

---

## Troubleshooting

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Geolocation not working | Permission denied or browser blocking | Check browser permissions, use HTTPS, try QR mode |
| QR code not displaying | Library not loaded | Check internet, verify CDN access, check console |
| Students not in attendance list | Real-time listener issue | Verify Firestore rules, check session ID |
| No active session shown | Timeout or network issue | Refresh page, verify lecturer session is active |

---

## Future Enhancements

- Real-time notifications for students
- SMS alerts
- Face recognition
- Multiple attendance methods per session
- Offline support
- Analytics dashboard
- Export attendance to CSV/PDF

---

## Support & Documentation

- See README.md for complete setup and usage guide
- Check browser console for error messages
- Verify Firebase configuration is correct
- Ensure Firestore security rules are applied

---

**Repository:** https://github.com/Kandy-541/Geo-Attendance-System  
**Live Demo:** https://geo-attendance-system-gamma.vercel.app  
**License:** MIT  
**Version:** 1.0.0
