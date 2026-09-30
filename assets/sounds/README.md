# Audio Assets Directory

You can place custom UI sound effects in this directory:
- `boot.mp3` - Triggered during portfolio boot-up sequence
- `hover.mp3` - Triggered when hovering over interactive cards, nav items, and skills
- `click.mp3` - Triggered when clicking buttons and links
- `transition.mp3` - Triggered when switching sections or opening project modals
- `ambient.mp3` - Optional continuous subtle ambient cyber hum

### Built-in Web Audio Synthesizer:
To guarantee 100% zero broken audio links and zero delay, the portfolio includes a built-in real-time Web Audio API synthesizer.
- Even without external MP3 files, clicking or toggling sound produces crystal-clear, studio-grade sci-fi UI soundscapes (synthesized frequencies, biquad lowpass/bandpass filters, resonant clicks, and harmonic ambient drones).
- If you place your own `.mp3` files here, the audio engine will seamlessly play your custom sound files!
- Sound preference is preserved in browser `localStorage` and respects browser autoplay restrictions.
