# Sanjay G. // Futuristic Developer Portfolio

A premium, futuristic, highly interactive developer portfolio engineered for **Sanjay G.** (Computer Science Engineering Student, S3, ACE College of Engineering, Thiruvananthapuram, Kerala, India).

Built with **HTML5, CSS3, JavaScript, Three.js (WebGL), and Web Audio API synthesis**.

---

## 🚀 Live Local Preview

You can open this website immediately in multiple ways:

### Option 1: Direct File Launch
Double-click `index.html` in your file explorer to open it in Google Chrome, Microsoft Edge, Brave, or Firefox.

### Option 2: Local HTTP Server (Recommended for WebGL & Audio)
In your terminal, navigate to this folder and run:
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 3: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 📁 Project Architecture

```
new p com/
│
├── index.html                # Semantic HTML5 layout, HUD components & meta tags
├── style.css                 # Cyberpunk/sci-fi design system, glassmorphism, 3D tilt & responsive queries
├── script.js                 # Core engine: Three.js background, audio engine, modal system & validation
│
├── assets/
│   ├── images/
│   │   ├── profile.png       # Your actual photo (transparent cutout)
│   │   ├── profile.jpg       # Profile photo fallback
│   │   ├── project-diet.jpg  # Nutrition Nexus UI mockup
│   │   ├── project-downloader.jpg # HyperThreads UI mockup
│   │   ├── project-ai.jpg    # Aurora AI Assistant UI mockup
│   │   └── project-emergency.jpg  # Emergency Transmitter UI mockup
│   │
│   ├── models/
│   │   ├── README.md         # Instructions for dropping in custom GLTF/GLB models
│   │   └── model.glb         # Place your 3D models here
│   │
│   ├── sounds/
│   │   ├── README.md         # Documentation for custom sound files
│   │   ├── boot.mp3          # (Optional) Custom boot sound
│   │   ├── hover.mp3         # (Optional) Custom hover sound
│   │   ├── click.mp3         # (Optional) Custom click sound
│   │   └── transition.mp3    # (Optional) Custom transition sound
│   │
│   └── icons/                # High-tech SVG icons
│
└── README.md                 # Complete documentation
```

---

## 🛠️ How to Customize Your Portfolio

All your personal details and projects are consolidated in `script.js` and `index.html` with clear comments:

### 1. Changing Your Profile Photo
- Place your new photo inside `assets/images/profile.png` (or `profile.jpg`).
- The portfolio automatically detects and displays it inside the holographic parallax frame.

### 2. Updating Personal Info & Contact
Open [`script.js`](file:///c:/Users/Sanjay.%20G/OneDrive/Desktop/new%20p%20com/script.js) and look at the `CONFIG` object at line 23:
```javascript
const CONFIG = {
  name: "Sanjay G.",
  tagline: "Computer Science Engineering Student & Developer",
  location: "Thiruvananthapuram, Kerala, India",
  college: "S College of Engineering",
  degree: "B.Tech Computer Science and Engineering",
  semester: "S2 / Second Semester",
  contact: {
    email: "sanjaygsanjayg51@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sanjay-g-62415443b/",
    phone: "+91 XXXXXXXXXX",      // Put your phone number here
    github: "https://github.com/...", // Put your GitHub link here
    instagram: "https://instagram.com/..." // Put your Instagram here
  }
};
```

### 3. Adding or Editing Projects
In [`script.js`](file:///c:/Users/Sanjay.%20G/OneDrive/Desktop/new%20p%20com/script.js), edit the `PROJECTS_DATA` array. You can easily add project #5, #6, etc., and they will automatically inherit 3D hover effects, feature lists, and detailed modal views.

### 4. Custom 3D Models
The 3D background utilizes procedural Three.js quantum geometries by default (zero load times and 100% reliable). If you have a custom `.glb` model:
1. Place it in `assets/models/model.glb`.
2. Follow the instructions in `assets/models/README.md`.

### 5. Sound Design & Synthesizer
- Built-in Web Audio API synthesis produces crisp sci-fi tones without needing any external MP3 files.
- Users can toggle audio anytime via the floating **`🔊 AUDIO: ON/OFF`** button in the navbar.
- Preference is remembered across browser visits in `localStorage`.

### 6. Connecting Contact Form to Real Email
The form includes full validation and transmission animation. To deliver messages directly to your inbox:
- Use **[EmailJS](https://www.emailjs.com/)** (client-side 3-line integration)
- Or **[Formspree](https://formspree.io/)** (change `<form action="https://formspree.io/f/YOUR_ID">`)

---

## 🎨 Key Features & Aesthetic Elements

- **Boot-up Sequence**: Sci-fi terminal telemetry boot sequence on initial visit with instant `[ESC / SKIP]` option.
- **Three.js WebGL 3D Atmosphere**: Dynamic rotating wireframe icosahedron, quantum rings, and floating cyber dust with smooth mouse parallax.
- **Interactive Holographic Profile**: Rotating reticle rings, corner brackets, scanning laser sweep, and 3D card tilt.
- **Custom Cyber Cursor**: Glowing reticle dot and lag-following ring with dynamic action labels (`EXPLORE`, `VIEW SPECS`, `AUDIO`, `COPY`).
- **Interactive 3D Skill Modules**: Categorized with live filter tabs, 3D perspective tilt, and capability tags (`Proficient`, `Explored`, `Currently Learning`).
- **Deep Project Specification Modals**: High-tech dialogs displaying architectural overviews, feature grids, and live links.
- **Accessibility & Performance**: Automatic fallback for low-power devices and full support for `prefers-reduced-motion`.

---
*Engineered for Sanjay G. — 2026*
