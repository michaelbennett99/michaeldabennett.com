---
name: "Object Detection in Aerial Images"
githubUrl: "https://github.com/michaelbennett99/Satim-Object-Detection"
order: 8
---

This project evaluates the YOLOv8 object detection model on both real
(DOTA) and synthetic (VALID) aerial image datasets, investigating the potential
for transfer learning between them. While the model achieved near-perfect
accuracy on synthetic data, it performed significantly worse on real images.
Importantly, pretraining on synthetic data provided no benefit when training and
evaluating on real images, suggesting the synthetic VALID dataset is too
dissimilar from real DOTA images for effective transfer learning.
