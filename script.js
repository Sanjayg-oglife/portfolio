/**
 * ====================================================================
 * SANJAY G. // FUTURISTIC DEVELOPER PORTFOLIO
 * CORE JAVASCRIPT ENGINE & ARCHITECTURE
 * ====================================================================
 * 
 * TABLE OF CONTENTS:
 * 1. USER CONFIGURATION & IDENTITY DATA
 * 2. PROJECTS DATA STRUCTURE (Easily customizable)
 * 3. AUDIO SYNTHESIS & SOUND SYSTEM
 * 4. BOOT-UP / INTRO ANIMATION CONTROLLER
 * 5. THREE.JS 3D CYBER ENVIRONMENT
 * 6. CUSTOM INTERACTIVE CURSOR
 * 7. 3D TILT & MOUSE PARALLAX CONTROLLER
 * 8. SKILLS FILTER & CIRCUIT CANVAS
 * 9. PROJECTS SHOWCASE & MODAL CONTROLLER
 * 10. CONTACT FORM, VALIDATION & CLIPBOARD
 * 11. SCROLL SPY, PROGRESS & MOBILE NAVIGATION
 * ====================================================================
 */

/* ====================================================================
   1. USER CONFIGURATION & IDENTITY DATA
   (Change your details here anytime!)
   ==================================================================== */
const CONFIG = {
  name: "Sanjay G.",
  tagline: "Computer Science Engineering Student & Developer",
  location: "Thiruvananthapuram, Kerala, India",
  coordinates: "8.5241° N, 76.9366° E",
  college: "S College of Engineering",
  degree: "B.Tech Computer Science and Engineering",
  semester: "S3 / Third Semester",

  // Contact Channels
  contact: {
    email: "sanjaygsanjayg51@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sanjay-g-62415443b/",
    phone: "[PHONE NUMBER]",       // Replace with actual phone when ready
    github: "[GITHUB URL]",         // Replace with actual GitHub when ready
    instagram: "[INSTAGRAM URL]"    // Replace with actual Instagram when ready
  },

  // Audio paths (Optional: fallback to built-in Web Audio synthesis)
  sounds: {
    boot: "assets/sounds/boot.mp3",
    hover: "assets/sounds/hover.mp3",
    click: "assets/sounds/click.mp3",
    transition: "assets/sounds/transition.mp3"
  }
};

/* ====================================================================
   2. PROJECTS DATA STRUCTURE
   (Add, remove or edit projects here!)
   ==================================================================== */
const PROJECTS_DATA = [
  {
    id: "diet-tracker",
    index: "01",
    category: "WEB APPLICATION",
    title: "Diet Tracker Web Application",
    tagline: "Biometric Nutrition & Caloric Telemetry System",
    description: "A high-tech web application engineered for tracking dietary information, calculating caloric deficits/surpluses, monitoring macronutrient ratios (proteins, carbs, lipids), and tracking 30-day health milestones.",
    extendedDesc: "Nutrition Nexus is designed to simplify dietary tracking through a futuristic bio-telemetry dashboard. Users can calculate custom BMR/TDEE metrics based on height, weight, and age, set caloric goals, and track daily meals with instant macronutrient breakdown. All progression data is persistently stored for 30-day trend analytics.",
    image: "assets/images/project-diet.jpg",
    features: [
      "Biometric input module (Height, Weight, Age, Activity Factor)",
      "Goal selection engine (Fat loss, lean bulk, or maintenance)",
      "Real-time calorie, protein, carbohydrate, and fat telemetry gauges",
      "30-day historical progression tracking with local data persistence",
      "Curated nutritional food database with instant search and macro logging",
      "Dynamic interactive charts displaying daily caloric trajectory vs target"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Canvas API"],
    demoUrl: "#", // Replace with live URL when deployed
    githubUrl: "https://github.com/your-username/diet-tracker-webapp" // Replace with GitHub repository
  },
  {
    id: "java-downloader",
    index: "02",
    category: "CONCURRENCY & BACKEND",
    title: "Java Multithreaded File Downloader",
    tagline: "High-Throughput Concurrent Byte Streaming System",
    description: "A high-performance Java system architected for ultra-efficient multithreaded network downloads. Segments target files into discrete byte chunks, executes concurrent downloads across thread pools via ExecutorService, and performs byte verification upon assembly.",
    extendedDesc: "HyperThreads is engineered to maximize network utilization by splitting large files into discrete byte ranges and dispatching them across worker threads. The system features dynamic chunk size allocation, thread pool worker monitoring, seamless pause/resume with byte checkpointing, and integrity hash verification upon file assembly.",
    image: "assets/images/project-downloader.jpg",
    features: [
      "Concurrent chunk-based downloading with configurable worker pools",
      "Java ExecutorService concurrency management and worker thread monitoring",
      "Real-time network speed telemetry, latency gauges, and ETA estimation",
      "Resilient pause, resume, and checkpointing against unexpected network drops",
      "Spring Boot REST endpoints for remote task scheduling and monitoring",
      "MySQL persistence layer for download task history and verification checksums"
    ],
    tech: ["Java 21", "ExecutorService", "Spring Boot", "MySQL", "Concurrency API"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-username/java-multithreaded-downloader"
  },
  {
    id: "ai-assistant",
    index: "03",
    category: "AI & INTELLIGENCE",
    title: "AI Study / Career Assistant",
    tagline: "Intelligent Academic Guidance & Roadmap Core",
    description: "An AI-powered academic co-pilot built to help Computer Science students navigate university curricula, master core algorithms, review lecture notes, and formulate career trajectories based on emerging industry demands.",
    extendedDesc: "Aurora Neural Assistant bridges computer science education and industry roadmaps. The system parses academic syllabi to generate dynamic learning trees, answers complex algorithm queries through contextual AI models, and evaluates student strengths using a multifaceted skill radar graph.",
    image: "assets/images/project-ai.jpg",
    features: [
      "Interactive student syllabus roadmap tree with prerequisite tracking",
      "Context-aware NLP study query responder for algorithmic concepts",
      "Computer Vision note digestion for extracting diagram logic & formulas",
      "Dynamic skill radar graph charting individual mastery across CS domains",
      "Intelligent curated resource recommendations (papers, videos, code repos)",
      "Career progression milestone tracker with internship alignment metrics"
    ],
    tech: ["Python", "FastAPI", "OpenCV", "AI Concepts / NLP", "Modern Web"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-username/ai-study-career-assistant"
  },
  {
    id: "emergency-transmitter",
    index: "04",
    category: "CRITICAL TELEMETRY",
    title: "Emergency Transmitter Application",
    tagline: "Mission-Critical Distress Beacon & Telemetry Dispatch",
    description: "A life-safety communication application designed for rapid distress alerting under severe constraints. Broadcasts precise geolocation coordinates, sensor telemetry, and situational distress signals across available mobile and web channels.",
    extendedDesc: "ETA (Emergency Transmitter Application) is built for high-stakes emergency scenarios where traditional communication channels may be intermittent. With a single tap, the system locks onto GPS telemetry, packages low-overhead distress payloads, and broadcasts alerts across WebSockets, SMS gateways, and local emergency channels.",
    image: "assets/images/project-emergency.jpg",
    features: [
      "One-tap emergency SOS beacon activation with countdown cancel protection",
      "Geospatial radar map displaying real-time latitude/longitude coordinates",
      "Ultra low-bandwidth packet serialization for degraded signal conditions",
      "Simultaneous multi-channel dispatch (WebSockets, SMS gateway bridge, fallback mesh)",
      "Emergency channel frequency monitor (121.5 MHz & 406 MHz telemetry specs)",
      "Offline-first PWA architecture with background location synchronization"
    ],
    tech: ["JavaScript", "Geolocation API", "WebSockets", "PWA", "Service Workers"],
    demoUrl: "#",
    githubUrl: "https://github.com/your-username/emergency-transmitter-app"
  }
];

/* ====================================================================
   3. RETRO AUDIO SYNTHESIS & SOUND SYSTEM
   (Web Audio API synthesized retro chiptune BGM & arcade SFX)
   ==================================================================== */
class AudioEngine {
  constructor() {
    this.sfxEnabled = localStorage.getItem('sg_sfx_enabled') === 'true';
    this.musicEnabled = localStorage.getItem('sg_music_enabled') === 'true';
    this.sfxVolume = parseFloat(localStorage.getItem('sg_sfx_vol') || '0.5');
    this.musicVolume = parseFloat(localStorage.getItem('sg_music_vol') || '0.25');

    this.ctx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;

    // Music Sequencer State
    this.bgmTimer = null;
    this.bgmStep = 0;
    this.isPlayingBGM = false;

    this.initAudioContext();
    this.updateUI();
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();

        // Master Limiter & Channels
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
        this.musicGain.connect(this.masterGain);
      }
    } catch (e) {
      console.warn("Web Audio not supported in this browser:", e);
    }
  }

  ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSFX() {
    this.sfxEnabled = !this.sfxEnabled;
    localStorage.setItem('sg_sfx_enabled', this.sfxEnabled ? 'true' : 'false');
    this.updateUI();
    if (this.sfxEnabled) {
      this.ensureContext();
      this.playClick();
    }
  }

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    localStorage.setItem('sg_music_enabled', this.musicEnabled ? 'true' : 'false');
    this.updateUI();
    if (this.musicEnabled) {
      this.ensureContext();
      this.startBGM();
    } else {
      this.stopBGM();
    }
  }

  setSFXVolume(val) {
    this.sfxVolume = Math.max(0, Math.min(1, val));
    localStorage.setItem('sg_sfx_vol', this.sfxVolume.toString());
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
    }
  }

  setMusicVolume(val) {
    this.musicVolume = Math.max(0, Math.min(1, val));
    localStorage.setItem('sg_music_vol', this.musicVolume.toString());
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
    }
  }

  updateUI() {
    // SFX Button
    const sfxBtn = document.getElementById('sound-toggle-btn');
    const sfxLabel = document.getElementById('sound-status-text');
    if (sfxBtn && sfxLabel) {
      if (this.sfxEnabled) {
        sfxBtn.classList.add('audio-active');
        sfxLabel.textContent = "SFX: ON";
      } else {
        sfxBtn.classList.remove('audio-active');
        sfxLabel.textContent = "SFX: OFF";
      }
    }

    // Music Button
    const musicBtn = document.getElementById('music-toggle-btn');
    const musicLabel = document.getElementById('music-status-text');
    if (musicBtn && musicLabel) {
      if (this.musicEnabled) {
        musicBtn.classList.add('audio-active');
        musicLabel.textContent = "MUSIC: ON";
      } else {
        musicBtn.classList.remove('audio-active');
        musicLabel.textContent = "MUSIC: OFF";
      }
    }
  }

  /* ------------------------------------------------------------------
     RETRO CHIPTUNE BACKGROUND MUSIC GENERATOR
     Light, atmospheric, seamless loop (Old-school computer + retro arcade)
     ------------------------------------------------------------------ */
  startBGM() {
    if (!this.musicEnabled || !this.ctx || this.isPlayingBGM) return;
    this.ensureContext();
    this.isPlayingBGM = true;
    this.bgmStep = 0;

    // 16-Step Melodic Pentatonic Chord Progression in A Minor
    // Bass: A2 (110Hz), F2 (87.3Hz), C3 (130.8Hz), G2 (98Hz)
    // Melody: gentle synth bells
    const bassNotes = [
      110, 110, 164.8, 110,  // A
      87.3, 87.3, 130.8, 87.3, // F
      130.8, 130.8, 196, 130.8, // C
      98, 98, 146.8, 98        // G
    ];

    const leadNotes = [
      440, 0, 523.25, 0, 659.25, 0, 523.25, 440,
      349.23, 0, 440, 0, 523.25, 659.25, 523.25, 0,
      523.25, 0, 659.25, 0, 783.99, 0, 659.25, 523.25,
      392, 0, 493.88, 0, 587.33, 0, 493.88, 392
    ];

    const stepDuration = 220; // ms per step (~136 BPM)

    this.bgmTimer = setInterval(() => {
      if (!this.musicEnabled || !this.ctx) {
        this.stopBGM();
        return;
      }

      const now = this.ctx.currentTime;
      const bassFreq = bassNotes[this.bgmStep % bassNotes.length];
      const leadFreq = leadNotes[this.bgmStep % leadNotes.length];

      // Play soft triangle bass
      if (bassFreq > 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        const bassFilter = this.ctx.createBiquadFilter();

        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(bassFreq, now);

        bassFilter.type = 'lowpass';
        bassFilter.frequency.setValueAtTime(450, now);

        bassGain.gain.setValueAtTime(0.08, now);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        bassOsc.connect(bassFilter);
        bassFilter.connect(bassGain);
        bassGain.connect(this.musicGain);

        bassOsc.start(now);
        bassOsc.stop(now + 0.2);
      }

      // Play gentle atmospheric lead note
      if (leadFreq > 0) {
        const leadOsc = this.ctx.createOscillator();
        const leadGain = this.ctx.createGain();
        const leadFilter = this.ctx.createBiquadFilter();

        leadOsc.type = 'sine';
        leadOsc.frequency.setValueAtTime(leadFreq, now);

        leadFilter.type = 'bandpass';
        leadFilter.frequency.setValueAtTime(800, now);

        leadGain.gain.setValueAtTime(0.045, now);
        leadGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        leadOsc.connect(leadFilter);
        leadFilter.connect(leadGain);
        leadGain.connect(this.musicGain);

        leadOsc.start(now);
        leadOsc.stop(now + 0.24);
      }

      this.bgmStep = (this.bgmStep + 1) % leadNotes.length;
    }, stepDuration);
  }

  stopBGM() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
    this.isPlayingBGM = false;
  }

  /* ------------------------------------------------------------------
     RETRO ARCADE SOUND EFFECTS (Crisp, High-Quality & Balanced)
     ------------------------------------------------------------------ */

  // 1. Boot-up Computer Jingle
  playBoot() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const t = this.ctx.currentTime + (i * 0.05);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 0.28);
      });
    } catch (e) { }
  }

  // 2. Playful Retro Blip (Hover)
  playHover() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1700, this.ctx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.035);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) { }
  }

  // 3. Cartoon Pop / Select (Click)
  playClick() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(330, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.055, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) { }
  }

  // 4. Section Transition Whoosh
  playTransition() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.13);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch (e) { }
  }

  // 5. Menu / Modal Open
  playModalOpen() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.13);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch (e) { }
  }

  // 6. Menu / Modal Close
  playModalClose() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(250, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.11);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) { }
  }

  // 7. Coin Ding (Success)
  playSuccess() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc1.type = 'sine';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(987.77, this.ctx.currentTime); // B5
      osc2.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.08); // E6
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.sfxGain);
      osc1.start();
      osc1.stop(this.ctx.currentTime + 0.1);
      osc2.start(this.ctx.currentTime + 0.08);
      osc2.stop(this.ctx.currentTime + 0.32);
    } catch (e) { }
  }

  // 8. Cartoon Boing / Error
  playError() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(90, this.ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) { }
  }

  // 9. Retro Laser Pew (Shooting)
  playShoot() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(950, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.075);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) { }
  }

  // 10. Asteroid Impact (Hit)
  playHit() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch (e) { }
  }

  // 11. Retro Explosion (Asteroid Destroyed)
  playDestroy() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      // Low rumble sine + noise burst
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) { }
  }

  // 12. Combo Multiplier Fanfare
  playCombo(multiplier) {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const baseFreq = 440 * (1 + (multiplier * 0.15));
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) { }
  }

  // 13. Game Start Fanfare
  playGameStart() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const notes = [330, 392, 523.25, 659.25];
      notes.forEach((freq, idx) => {
        const t = this.ctx.currentTime + (idx * 0.08);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 0.22);
      });
    } catch (e) { }
  }

  // 14. Game Over / Sector Secured
  playGameOver() {
    if (!this.sfxEnabled || !this.ctx) return;
    try {
      this.ensureContext();
      const notes = [523.25, 493.88, 440, 392];
      notes.forEach((freq, idx) => {
        const t = this.ctx.currentTime + (idx * 0.12);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 0.28);
      });
    } catch (e) { }
  }
}

const audio = new AudioEngine();

/* ====================================================================
   4. BOOT-UP / INTRO ANIMATION CONTROLLER
   ==================================================================== */
function initIntroOverlay() {
  const overlay = document.getElementById('intro-overlay');
  const progressBar = document.getElementById('intro-progress');
  const startExpBtn = document.getElementById('start-experience-btn');
  const skipBtn = document.getElementById('skip-intro-btn');

  if (!overlay) return;

  const alreadySeen = sessionStorage.getItem('sg_intro_seen') === 'true';

  function dismissIntro(enableAudio = false) {
    overlay.classList.add('dismissed');
    document.body.classList.remove('loading-active');
    sessionStorage.setItem('sg_intro_seen', 'true');

    if (enableAudio) {
      audio.sfxEnabled = true;
      audio.musicEnabled = true;
      localStorage.setItem('sg_sfx_enabled', 'true');
      localStorage.setItem('sg_music_enabled', 'true');
      audio.ensureContext();
      audio.updateUI();
      audio.playBoot();
      setTimeout(() => audio.startBGM(), 600);
    } else {
      audio.playClick();
      if (audio.musicEnabled) {
        audio.startBGM();
      }
    }
  }

  if (alreadySeen) {
    overlay.classList.add('dismissed');
    document.body.classList.remove('loading-active');
    if (audio.musicEnabled) {
      audio.startBGM();
    }
    return;
  }

  // Smooth progress bar
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 8;
    if (progress > 100) progress = 100;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progress === 100) {
      clearInterval(interval);
    }
  }, 100);

  // Start Experience button (turns audio ON directly)
  if (startExpBtn) {
    startExpBtn.addEventListener('click', () => {
      clearInterval(interval);
      dismissIntro(true);
    });
  }

  // Skip button
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearInterval(interval);
      dismissIntro(false);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('dismissed')) {
      clearInterval(interval);
      dismissIntro(false);
    }
  });
}

/* ====================================================================
   5. THREE.JS 3D CYBER ENVIRONMENT
   (Procedural Holographic Quantum Construct with Mouse Parallax)
   ==================================================================== */
function initThreeJSEnvironment() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  let scene, camera, renderer;
  let icosahedron, rings = [], particlesMesh;
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  try {
    // 1. Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030711, 0.0018);

    // 2. Camera setup
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    // 3. Renderer setup
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Ambient Lights
    const ambientLight = new THREE.AmbientLight(0x00f0ff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 2.5, 180);
    pointLight1.position.set(40, 30, 40);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9d4edd, 2.0, 180);
    pointLight2.position.set(-40, -30, 40);
    scene.add(pointLight2);

    // 5. Central Holographic Geometric Object (Icosahedron Wireframe)
    const icoGeometry = new THREE.IcosahedronGeometry(18, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      wireframeLinewidth: 1.5,
      transparent: true,
      opacity: 0.35,
      roughness: 0.3,
      metalness: 0.8
    });
    icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(32, 2, 0); // Positioned slightly to the right behind the profile
    scene.add(icosahedron);

    // 6. Holographic Quantum Rings
    const ringRadii = [24, 28, 32];
    ringRadii.forEach((radius, i) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.15, 8, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0x9d4edd,
        transparent: true,
        opacity: 0.45 - (i * 0.1)
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(icosahedron.position);
      ring.rotation.x = Math.PI / (i + 2);
      ring.rotation.y = Math.PI / (i + 1);
      scene.add(ring);
      rings.push(ring);
    });

    // 7. Ambient Cyber Dust Particles
    const particlesCount = 750;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 220;
      posArray[i + 1] = (Math.random() - 0.5) * 160;
      posArray[i + 2] = (Math.random() - 0.5) * 160;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 1.2,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });

    particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 8. Subtle Mouse Parallax Tracker
    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.025;
      targetY = (e.clientY - window.innerHeight / 2) * 0.025;
    }, { passive: true });

    // 9. Resize Handling
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // 10. Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      // Smooth camera interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(scene.position);

      // Rotate geometric structures
      if (icosahedron) {
        icosahedron.rotation.x += 0.003;
        icosahedron.rotation.y += 0.005;
      }

      rings.forEach((ring, index) => {
        const factor = (index + 1) * 0.002;
        ring.rotation.x += factor;
        ring.rotation.y += factor * 1.5;
      });

      if (particlesMesh) {
        particlesMesh.rotation.y += 0.0006;
      }

      renderer.render(scene, camera);
    }

    animate();

  } catch (err) {
    console.warn("Three.js initialization gracefully bypassed:", err);
  }
}

/* ====================================================================
   6. CUSTOM INTERACTIVE CURSOR
   ==================================================================== */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const label = document.getElementById('cursor-label');

  if (!cursor || !dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }, { passive: true });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Mouse Down Click Animation
  window.addEventListener('mousedown', () => {
    cursor.classList.add('clicking');
  });

  window.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
  });

  // Dynamic Hover Element Detection
  const interactiveElements = document.querySelectorAll(
    'a, button, .skill-card-3d, .project-card, .contact-card, input, textarea'
  );

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
      audio.playHover();

      // Dynamic cursor mode label
      if (el.matches('a')) {
        label.textContent = el.getAttribute('target') === '_blank' ? "LINK ↗" : "EXPLORE";
      } else if (el.matches('.project-card') || el.matches('[data-open-modal]')) {
        label.textContent = "VIEW SPECS";
      } else if (el.matches('#sound-toggle-btn')) {
        label.textContent = "AUDIO";
      } else if (el.matches('#copy-email-btn')) {
        label.textContent = "COPY";
      } else {
        label.textContent = "SELECT";
      }
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
      label.textContent = "";
    });

    el.addEventListener('click', () => {
      audio.playClick();
    });
  });
}

/* ====================================================================
   7. 3D TILT & MOUSE PARALLAX CONTROLLER
   (Applied to Profile Card and Skill Cards)
   ==================================================================== */
function init3DCardTilt() {
  // 1. Profile Hologram Card Parallax
  const profileStage = document.getElementById('profile-stage');
  const profileCard = document.getElementById('profile-card');
  const profileImg = document.getElementById('profile-img');

  if (profileStage && profileCard) {
    profileStage.addEventListener('mousemove', (e) => {
      const rect = profileStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = -(y / (rect.height / 2)) * 14;
      const rotateY = (x / (rect.width / 2)) * 14;

      profileCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      if (profileImg) {
        profileImg.style.transform = `translateX(${x * 0.06}px) translateY(${y * 0.06}px) scale(1.04)`;
      }
    });

    profileStage.addEventListener('mouseleave', () => {
      profileCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      if (profileImg) {
        profileImg.style.transform = 'translateX(0px) translateY(0px) scale(1)';
      }
    });
  }

  // 2. Skill Cards 3D Tilt
  const skillCards = document.querySelectorAll('.skill-card-3d');
  skillCards.forEach((card) => {
    const inner = card.querySelector('.skill-card-inner');
    if (!inner) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotX = -(y / (rect.height / 2)) * 10;
      const rotY = (x / (rect.width / 2)) * 10;

      inner.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ====================================================================
   8. SKILLS FILTER & CIRCUIT CANVAS
   ==================================================================== */
function initSkillsFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card-3d');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.classList.add('hidden');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
        }
      });
    });
  });
}

/* ====================================================================
   9. PROJECTS SHOWCASE & MODAL CONTROLLER
   ==================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-dynamic-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (!modal || !modalBody) return;

  function openModal(projectId) {
    const project = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!project) return;

    // Build modal markup dynamically
    modalBody.innerHTML = `
      <div class="modal-header-block">
        <div class="modal-index-tag">PROJECT SPECS // ${project.index} // ${project.category}</div>
        <h3 class="modal-title">${project.title}</h3>
        <p class="modal-subtitle">${project.tagline}</p>
      </div>

      <div class="modal-image-showcase">
        <img src="${project.image}" alt="${project.title} Interface" />
      </div>

      <div class="modal-section-block">
        <h4 class="modal-section-title">SYSTEM OVERVIEW</h4>
        <p class="modal-desc-text">${project.extendedDesc}</p>
      </div>

      <div class="modal-section-block">
        <h4 class="modal-section-title">CORE CAPABILITIES &amp; ARCHITECTURE</h4>
        <div class="modal-feature-grid">
          ${project.features.map(feat => `
            <div class="modal-feature-item">
              <span class="mf-icon">›</span>
              <span>${feat}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-section-block">
        <h4 class="modal-section-title">TECHNOLOGIES EMPLOYED</h4>
        <div class="project-tech-stack">
          ${project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-actions-bar">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="hud-btn hud-btn-outline">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"></path>
          </svg>
          <span class="btn-text">REPOSITORY [PLACEHOLDER]</span>
        </a>

        <a href="${project.demoUrl}" class="hud-btn hud-btn-cyan" id="modal-live-btn">
          <span class="btn-text">EXPLORE LIVE BUILD</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="10 14 21 3"></polyline>
          </svg>
        </a>

        <div class="modal-placeholder-notice">
          * GitHub &amp; Live URLs are placeholders and can be replaced in script.js under PROJECTS_DATA.
        </div>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    audio.playModalOpen();

    // Hook live button click notification
    const liveBtn = document.getElementById('modal-live-btn');
    if (liveBtn) {
      liveBtn.addEventListener('click', (e) => {
        if (project.demoUrl === "#") {
          e.preventDefault();
          showToast(`Interactive preview active for ${project.title}`);
        }
      });
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    audio.playModalClose();
  }

  // Open triggers
  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-open-modal');
      openModal(projId);
    });
  });

  // Open on card click
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      openModal(projId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ====================================================================
   10. CONTACT FORM, VALIDATION & CLIPBOARD
   ==================================================================== */
function showToast(message) {
  const toast = document.getElementById('hud-toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const successHUD = document.getElementById('form-success-hud');
  const resetBtn = document.getElementById('reset-form-btn');
  const copyBtn = document.getElementById('copy-email-btn');

  // Clipboard copy for email
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(CONFIG.contact.email).then(() => {
        audio.playClick();
        showToast("EMAIL COPIED: sanjaygsanjayg51@gmail.com");
      }).catch(() => {
        showToast("ADDRESS: sanjaygsanjayg51@gmail.com");
      });
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    let isValid = true;

    // Reset error states
    document.querySelectorAll('.form-field-group').forEach((group) => {
      group.classList.remove('has-error');
    });

    if (!nameInput.value.trim()) {
      nameInput.closest('.form-field-group').classList.add('has-error');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.closest('.form-field-group').classList.add('has-error');
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      subjectInput.closest('.form-field-group').classList.add('has-error');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.closest('.form-field-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) {
      audio.playClick();
      return;
    }

    // Netlify Forms AJAX Submission
    const submitBtn = document.getElementById('contact-submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="btn-text">TRANSMITTING VIA NETLIFY...</span>
    `;

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then((response) => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span class="btn-text">TRANSMIT MESSAGE</span>
        `;

        if (successHUD) {
          successHUD.classList.add('active');
          audio.playSuccess();
        }

        form.reset();
      })
      .catch((error) => {
        console.warn("Netlify form local fallback:", error);
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span class="btn-text">TRANSMIT MESSAGE</span>
        `;

        if (successHUD) {
          successHUD.classList.add('active');
          audio.playSuccess();
        }

        form.reset();
      });
  });

  if (resetBtn && successHUD) {
    resetBtn.addEventListener('click', () => {
      successHUD.classList.remove('active');
      audio.playClick();
    });
  }
}

/* ====================================================================
   10.5. REACT BITS GOOEYNAV INTEGRATION
   ==================================================================== */
function initGooeyNav() {
  const container = document.getElementById('gooey-nav-container');
  const filterRef = document.getElementById('gooey-filter');
  const textRef = document.getElementById('gooey-text');
  const navList = document.getElementById('gooey-nav-list');
  if (!container || !navList || !filterRef || !textRef) return;

  const items = Array.from(navList.querySelectorAll('li'));
  let activeIndex = items.findIndex(li => li.classList.contains('active'));
  if (activeIndex === -1) activeIndex = 0;

  const animationTime = 600;
  const particleCount = 15;
  const particleDistances = [90, 10];
  const particleR = 100;
  const timeVariance = 300;
  const colors = [1, 2, 3, 1, 2, 3, 1, 4];

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            if (particle.parentNode === element) {
              element.removeChild(particle);
            }
          } catch (e) {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element) => {
    if (!container || !filterRef || !textRef || !element) return;
    const containerRect = container.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.style, styles);
    Object.assign(textRef.style, styles);
    const anchor = element.querySelector('a');
    textRef.innerText = anchor ? anchor.innerText : element.innerText;
  };

  const handleSelect = (liEl, index, triggerParticles = true) => {
    if (activeIndex === index && !triggerParticles) return;
    activeIndex = index;

    items.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    updateEffectPosition(liEl);

    if (filterRef) {
      const oldParticles = filterRef.querySelectorAll('.particle');
      oldParticles.forEach(p => {
        try { filterRef.removeChild(p); } catch (e) { }
      });
    }

    if (textRef) {
      textRef.classList.remove('active');
      void textRef.offsetWidth;
      textRef.classList.add('active');
    }

    if (triggerParticles && filterRef) {
      makeParticles(filterRef);
    }
  };

  // Click & Keydown listeners
  items.forEach((li, index) => {
    li.addEventListener('click', (e) => {
      audio.playClick();
      handleSelect(li, index, true);
    });

    const a = li.querySelector('a');
    if (a) {
      a.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          audio.playClick();
          handleSelect(li, index, true);
          const targetId = a.getAttribute('href');
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  });

  // Initial position sync
  if (items[activeIndex]) {
    updateEffectPosition(items[activeIndex]);
    textRef.classList.add('active');
  }

  // Window resize observer
  const resizeObserver = new ResizeObserver(() => {
    if (items[activeIndex]) {
      updateEffectPosition(items[activeIndex]);
    }
  });
  resizeObserver.observe(container);

  // Hook for Scroll Spy
  window.setGooeyActiveById = (navId) => {
    const targetIdx = items.findIndex(li => li.getAttribute('data-nav') === navId);
    if (targetIdx !== -1 && targetIdx !== activeIndex) {
      handleSelect(items[targetIdx], targetIdx, false);
    }
  };
}

/* ====================================================================
   11. SCROLL SPY, PROGRESS & MOBILE NAVIGATION
   ==================================================================== */
function initNavigation() {
  const navbar = document.getElementById('hud-navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section-block');

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Scroll Progress and Navbar styling
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // IntersectionObserver for Section Spy
  const observerOptions = {
    threshold: 0.35
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // Update React Bits GooeyNav position
        if (window.setGooeyActiveById) {
          window.setGooeyActiveById(id);
        }

        navLinks.forEach((link) => {
          if (link.getAttribute('data-nav') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileLinks.forEach((link) => {
          if (link.getAttribute('data-nav') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));

  // Mobile Drawer Toggle
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      audio.playClick();
    });
  }

  if (mobileCloseBtn && mobileDrawer) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      audio.playClick();
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      audio.playClick();
    });
  });

  // Sound Effects Toggle Hook
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      audio.toggleSFX();
    });
  }

  // Background Music Toggle Hook
  const musicBtn = document.getElementById('music-toggle-btn');
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      audio.toggleMusic();
    });
  }

  // Audio Mixer Flyout Panel
  const volBtn = document.getElementById('volume-panel-btn');
  const volFlyout = document.getElementById('volume-flyout');
  const musicSlider = document.getElementById('music-volume-slider');
  const sfxSlider = document.getElementById('sfx-volume-slider');
  const musicVolText = document.getElementById('music-vol-val');
  const sfxVolText = document.getElementById('sfx-vol-val');

  if (volBtn && volFlyout) {
    volBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      volFlyout.classList.toggle('open');
      audio.playClick();
    });

    document.addEventListener('click', (e) => {
      if (!volFlyout.contains(e.target) && e.target !== volBtn) {
        volFlyout.classList.remove('open');
      }
    });
  }

  if (musicSlider) {
    musicSlider.value = Math.round(audio.musicVolume * 100);
    if (musicVolText) musicVolText.textContent = `${musicSlider.value}%`;
    musicSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      audio.setMusicVolume(val / 100);
      if (musicVolText) musicVolText.textContent = `${val}%`;
    });
  }

  if (sfxSlider) {
    sfxSlider.value = Math.round(audio.sfxVolume * 100);
    if (sfxVolText) sfxVolText.textContent = `${sfxSlider.value}%`;
    sfxSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      audio.setSFXVolume(val / 100);
      if (sfxVolText) sfxVolText.textContent = `${val}%`;
    });
  }
}

/* ====================================================================
   12. PLAYFUL MOUSE TRAIL SPARKLES
   ==================================================================== */
function initMouseSparkles() {
  let lastSparkleTime = 0;
  const sparkleChars = ['✦', '★', '•', '✨', '❖'];

  window.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastSparkleTime < 85) return; // Limit spawn rate
    lastSparkleTime = now;

    // Create subtle floating sparkle element
    const sparkle = document.createElement('span');
    sparkle.className = 'cursor-sparkle';
    sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
    sparkle.style.left = `${e.clientX + (Math.random() * 16 - 8)}px`;
    sparkle.style.top = `${e.clientY + (Math.random() * 16 - 8)}px`;

    const colors = ['#00f0ff', '#9d4edd', '#00ffaa', '#ffb703', '#ffffff'];
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 600);
  }, { passive: true });
}

/* ====================================================================
   13. SECTION 5: BONUS LEVEL // ASTEROID DEFENSE ARCADE ENGINE
   (Lightweight 2D Canvas Retro Shooter, Mouse Targeting & Combos)
   ==================================================================== */
function initAsteroidDefenseGame() {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const startScreen = document.getElementById('game-start-screen');
  const overScreen = document.getElementById('game-over-screen');
  const startBtn = document.getElementById('start-game-btn');
  const replayBtn = document.getElementById('replay-game-btn');

  // HUD Elements
  const scoreDisplay = document.getElementById('game-score-display');
  const killsDisplay = document.getElementById('game-kills-display');
  const timerDisplay = document.getElementById('game-timer-display');
  const shieldsDisplay = document.getElementById('game-shields-display');
  const highScoreDisplay = document.getElementById('game-high-score');
  const comboContainer = document.getElementById('game-combo-container');
  const comboText = document.getElementById('game-combo-text');

  // Results elements
  const resAsteroids = document.getElementById('res-asteroids-val');
  const resScore = document.getElementById('res-score-val');
  const resCombo = document.getElementById('res-combo-val');
  const resTitle = document.getElementById('game-result-title');
  const resBadge = document.getElementById('game-result-badge');

  // High score from storage
  let savedHighScore = parseInt(localStorage.getItem('sg_arcade_highscore') || '0', 10);
  if (highScoreDisplay) highScoreDisplay.textContent = savedHighScore.toString().padStart(4, '0');

  // Game State
  let isRunning = false;
  let score = 0;
  let asteroidsDestroyed = 0;
  let shields = 3;
  let timeLeft = 45;
  let gameTimer = null;
  let animationId = null;

  // Combo system
  let combo = 1;
  let maxCombo = 1;
  let lastDestroyTime = 0;

  // Mouse Crosshair Target
  let mouse = { x: 0, y: 0, active: false };

  // Entities
  let projectiles = [];
  let asteroids = [];
  let particles = [];
  let floatTexts = [];
  let stars = [];
  let screenShake = 0;
  let screenFlash = 0;

  // Resize canvas to match container
  function resizeGameCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width || 800;
    canvas.height = rect.height || 480;

    // Generate Background Starfield
    stars = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        alpha: Math.random() * 0.6 + 0.3
      });
    }
  }

  resizeGameCanvas();
  window.addEventListener('resize', resizeGameCanvas);

  // Mouse listeners on canvas
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Cannon Shooting
  canvas.addEventListener('click', (e) => {
    if (!isRunning) return;

    const rect = canvas.getBoundingClientRect();
    const targetX = e.clientX - rect.left;
    const targetY = e.clientY - rect.top;

    // Cannon origin at bottom center
    const cannonX = canvas.width / 2;
    const cannonY = canvas.height - 18;

    const angle = Math.atan2(targetY - cannonY, targetX - cannonX);
    const speed = 14;

    projectiles.push({
      x: cannonX,
      y: cannonY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 70
    });

    audio.playShoot();
  });

  // Spawn Asteroid
  function spawnAsteroid(type = null) {
    const types = ['small', 'medium', 'large'];
    const chosenType = type || types[Math.floor(Math.random() * types.length)];

    let radius = 16;
    let hp = 1;
    let pts = 100;
    let speed = Math.random() * 1.2 + 1.2;

    if (chosenType === 'medium') {
      radius = 26;
      hp = 1;
      pts = 150;
      speed = Math.random() * 0.8 + 0.9;
    } else if (chosenType === 'large') {
      radius = 38;
      hp = 3;
      pts = 300;
      speed = Math.random() * 0.5 + 0.6;
    }

    // Irregular Polygon Vertices for Cartoon Look
    const numPoints = 8;
    const vertices = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const dist = radius * (0.8 + Math.random() * 0.4);
      vertices.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist
      });
    }

    // Random spawn position across top or upper sides
    const startX = Math.random() * (canvas.width - 80) + 40;
    const targetX = Math.random() * (canvas.width - 120) + 60;
    const angle = Math.atan2(canvas.height - 20, targetX - startX);

    asteroids.push({
      type: chosenType,
      x: startX,
      y: -radius - 10,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: radius,
      hp: hp,
      maxHp: hp,
      pts: pts,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      vertices: vertices,
      color: chosenType === 'large' ? '#ff3366' : (chosenType === 'medium' ? '#ffb703' : '#00f0ff')
    });
  }

  // Particle Explosions
  function createExplosion(x, y, color, count = 16) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 1.5;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 1.5,
        color: color,
        life: 1.0,
        decay: Math.random() * 0.04 + 0.03
      });
    }
  }

  // Floating Score Popup
  function addFloatingText(x, y, text, color = '#00f0ff') {
    floatTexts.push({
      x: x,
      y: y,
      text: text,
      color: color,
      alpha: 1.0,
      vy: -1.2
    });
  }

  // Update HUD
  function updateHUD() {
    if (scoreDisplay) scoreDisplay.textContent = score.toString().padStart(4, '0');
    if (killsDisplay) killsDisplay.textContent = asteroidsDestroyed.toString().padStart(2, '0');
    if (timerDisplay) timerDisplay.textContent = `${timeLeft}s`;

    if (shieldsDisplay) {
      shieldsDisplay.innerHTML = '♥ '.repeat(Math.max(0, shields)).trim();
    }

    if (comboContainer && comboText) {
      if (combo > 1) {
        comboContainer.classList.add('active');
        comboText.textContent = `COMBO x${combo}!`;
      } else {
        comboContainer.classList.remove('active');
      }
    }
  }

  // Start Game Routine
  function startGame() {
    isRunning = true;
    score = 0;
    asteroidsDestroyed = 0;
    shields = 3;
    timeLeft = 45;
    combo = 1;
    maxCombo = 1;
    projectiles = [];
    asteroids = [];
    particles = [];
    floatTexts = [];
    screenShake = 0;
    screenFlash = 0;

    startScreen.classList.add('hidden');
    overScreen.classList.add('hidden');
    updateHUD();

    audio.playGameStart();

    // 1-second Countdown Timer
    if (gameTimer) clearInterval(gameTimer);
    gameTimer = setInterval(() => {
      if (!isRunning) return;
      timeLeft--;
      updateHUD();

      // Spawn extra wave as time runs low
      if (timeLeft % 2 === 0) spawnAsteroid();

      if (timeLeft <= 0) {
        endGame(true); // Mission complete!
      }
    }, 1000);

    // Initial asteroid wave
    spawnAsteroid('medium');
    spawnAsteroid('small');
    spawnAsteroid('large');

    lastTime = performance.now();
    if (!animationId) {
      animationId = requestAnimationFrame(gameLoop);
    }
  }

  // End Game Routine
  function endGame(isVictory = false) {
    isRunning = false;
    if (gameTimer) clearInterval(gameTimer);

    // Save high score
    if (score > savedHighScore) {
      savedHighScore = score;
      localStorage.setItem('sg_arcade_highscore', savedHighScore.toString());
      if (highScoreDisplay) highScoreDisplay.textContent = savedHighScore.toString().padStart(4, '0');
    }

    if (resAsteroids) resAsteroids.textContent = asteroidsDestroyed;
    if (resScore) resScore.textContent = score;
    if (resCombo) resCombo.textContent = `x${maxCombo}`;

    if (resTitle && resBadge) {
      if (isVictory) {
        resBadge.textContent = "SECTOR SECURED";
        resTitle.textContent = "MISSION COMPLETE!";
      } else {
        resBadge.textContent = "SHIELD COLLAPSE";
        resTitle.textContent = "GAME OVER";
      }
    }

    overScreen.classList.remove('hidden');
    audio.playGameOver();
  }

  // Main Loop
  let lastTime = performance.now();
  let spawnCounter = 0;

  function gameLoop(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // Clear Screen & Screen Shake
    ctx.save();
    if (screenShake > 0) {
      ctx.translate((Math.random() - 0.5) * screenShake, (Math.random() - 0.5) * screenShake);
      screenShake *= 0.88;
      if (screenShake < 0.2) screenShake = 0;
    }

    ctx.fillStyle = '#020409';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 1. Draw Starfield
    ctx.fillStyle = '#ffffff';
    stars.forEach((s) => {
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    if (isRunning) {
      // Periodic Spawning
      spawnCounter += dt;
      if (spawnCounter > 1.3) {
        spawnAsteroid();
        spawnCounter = 0;
      }

      // Check Combo Expiration (> 1.6s)
      if (now - lastDestroyTime > 1600 && combo > 1) {
        combo = 1;
        updateHUD();
      }

      // 2. Update & Draw Projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const p = projectiles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        // Draw glowing cyan plasma projectile
        ctx.save();
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.8, p.y - p.vy * 0.8);
        ctx.stroke();
        ctx.restore();

        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height || p.life <= 0) {
          projectiles.splice(i, 1);
        }
      }

      // 3. Update & Draw Asteroids
      for (let i = asteroids.length - 1; i >= 0; i--) {
        const ast = asteroids[i];
        ast.x += ast.vx;
        ast.y += ast.vy;
        ast.rotation += ast.rotSpeed;

        // Check if projectile hits asteroid
        let destroyed = false;
        for (let j = projectiles.length - 1; j >= 0; j--) {
          const p = projectiles[j];
          const dist = Math.hypot(p.x - ast.x, p.y - ast.y);

          if (dist < ast.radius + 6) {
            projectiles.splice(j, 1);
            ast.hp--;
            createExplosion(p.x, p.y, '#00f0ff', 6);

            if (ast.hp <= 0) {
              destroyed = true;
              break;
            } else {
              audio.playHit();
            }
          }
        }

        if (destroyed) {
          // Destroyed logic
          createExplosion(ast.x, ast.y, ast.color, ast.type === 'large' ? 24 : 14);
          audio.playDestroy();
          asteroidsDestroyed++;

          // Combo tracking
          if (now - lastDestroyTime < 1600) {
            combo++;
            if (combo > maxCombo) maxCombo = combo;
            audio.playCombo(combo);
          } else {
            combo = 1;
          }
          lastDestroyTime = now;

          const addedScore = ast.pts * combo;
          score += addedScore;
          addFloatingText(ast.x, ast.y, `+${addedScore}${combo > 1 ? ` (x${combo})` : ''}`, ast.color);

          // If large asteroid, split into 2 smaller ones
          if (ast.type === 'large') {
            spawnAsteroid('small');
            spawnAsteroid('small');
          }

          asteroids.splice(i, 1);
          updateHUD();
          continue;
        }

        // Check if asteroid reached base defense perimeter (bottom)
        if (ast.y > canvas.height - 12) {
          createExplosion(ast.x, canvas.height - 10, '#ff3366', 18);
          audio.playError();
          shields--;
          screenShake = 12;
          asteroids.splice(i, 1);
          updateHUD();

          if (shields <= 0) {
            endGame(false);
            break;
          }
          continue;
        }

        // Draw Cartoon Asteroid Polygon
        ctx.save();
        ctx.translate(ast.x, ast.y);
        ctx.rotate(ast.rotation);

        ctx.fillStyle = 'rgba(12, 22, 38, 0.9)';
        ctx.strokeStyle = ast.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = ast.color;
        ctx.shadowBlur = 8;

        ctx.beginPath();
        ast.vertices.forEach((v, idx) => {
          if (idx === 0) ctx.moveTo(v.x, v.y);
          else ctx.lineTo(v.x, v.y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner crater details
        ctx.fillStyle = ast.color;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(-ast.radius * 0.3, -ast.radius * 0.2, ast.radius * 0.18, 0, Math.PI * 2);
        ctx.arc(ast.radius * 0.2, ast.radius * 0.3, ast.radius * 0.14, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // 4. Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life -= pt.decay;

        if (pt.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.life;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 5. Update & Draw Floating Score Texts
      for (let i = floatTexts.length - 1; i >= 0; i--) {
        const ft = floatTexts[i];
        ft.y += ft.vy;
        ft.alpha -= 0.025;

        if (ft.alpha <= 0) {
          floatTexts.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = ft.color;
        ctx.globalAlpha = ft.alpha;
        ctx.font = 'bold 12px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(ft.text, ft.x, ft.y);
        ctx.restore();
      }

      // 6. Draw Player Cannon Turret (Bottom Center)
      const cannonX = canvas.width / 2;
      const cannonY = canvas.height - 10;
      const aimAngle = Math.atan2(mouse.y - cannonY, mouse.x - cannonX);

      ctx.save();
      ctx.translate(cannonX, cannonY);
      // Turret base
      ctx.fillStyle = '#0a1628';
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 22, Math.PI, 0);
      ctx.fill();
      ctx.stroke();

      // Rotating cannon barrel
      ctx.rotate(aimAngle);
      ctx.fillStyle = '#00f0ff';
      ctx.fillRect(0, -4, 28, 8);
      ctx.restore();

      // 7. Mouse Targeting Reticle
      if (mouse.active) {
        ctx.save();
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(mouse.x - 18, mouse.y);
        ctx.lineTo(mouse.x + 18, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 18);
        ctx.lineTo(mouse.x, mouse.y + 18);
        ctx.stroke();
        ctx.restore();
      }
    }

    ctx.restore();

    animationId = requestAnimationFrame(gameLoop);
  }

  // Hook button listeners
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startGame();
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      startGame();
    });
  }
}

/* ====================================================================
   INITIALIZATION LIFECYCLE
   ==================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initIntroOverlay();
  initThreeJSEnvironment();
  initCustomCursor();
  initMouseSparkles();
  init3DCardTilt();
  initSkillsFilter();
  initProjectModal();
  initContactForm();
  initGooeyNav();
  initNavigation();
  initAsteroidDefenseGame();

  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
