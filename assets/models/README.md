# 3D Model Directory

Place your custom 3D model in this directory as:
`model.glb` or `model.gltf`

### Supported Formats:
- GLTF binary format (`.glb`) - Recommended
- GLTF standard format (`.gltf` + `.bin` + textures)

### How it Works:
The portfolio script (`script.js`) automatically checks for `assets/models/model.glb`.
- If your custom 3D model is present, Three.js loads and animates it in the hero/project showcases.
- If no custom model is placed yet, the portfolio automatically generates an ultra-smooth procedural cybernetic tesseract / holographic ring node geometry with real-time vertex shaders and particle nodes.
- You never have to worry about broken scenes or missing file errors!
