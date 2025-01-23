---
name: "Aerial Image Object Detection"
githubUrl: "https://github.com/michaelbennett99/Satim-Object-Detection"
order: 1.9
techStack: ["python", "pytorch", "docker"]
---

A Deep Learning project using CNNs to detect objects in real and synthetic
aerial images.

- **Data:** Trained, fine-tuned and evaluated YOLOv8n/s/m object detection
models on aerial images (DOTA/VALID datasets) using Python, PyTorch and
Ultralytics.
- **Training:** Conducted training in containerised application on remote
NVIDIA RTX 4070 GPU with 24GB VRAM rented through vast.ai, reducing training
time over 100x at cost under $10.
- **Data Loading:** Wrote custom data loaders in Python to stream large image
datasets to remote server at maximal speed, reducing GPU downtime.
- **Results:** Achieved an 0.57 mAP50 on 6-category restriction of DOTA and 0.
98 mAP50 on VALID on two hours of training per model.
