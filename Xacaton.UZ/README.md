# CyberShield AI

CyberShield AI is a hackathon-ready MVP for analyzing, predicting, and preventing cyber threats such as phishing, ransomware, and deepfake attacks. The project is designed to match the evaluation rubric: innovation, implementation quality, efficiency, scalability, and interface usability.

## What is included

- Multilingual dashboard: Russian, Uzbek, and English
- Threat scoring engine with explainable signals
- Demo incident feed for a SOC-style presentation
- Open-data positioning for Kaggle, UZCERT/CERT, and World Bank integrations
- Scalable architecture block for future API/model expansion

## Demo scenario

The prototype simulates a cyber defense platform that:

1. Receives a suspicious text or event signal
2. Scores anomaly level, login pressure, region context, and model confidence
3. Produces a risk score and incident forecast
4. Explains why the score was assigned
5. Suggests response actions for the security team

## Files

- `index.html` - main dashboard markup
- `styles.css` - visual system and responsive layout
- `app.js` - multilingual content, scoring logic, demo scenarios

## How to run

Open `index.html` in a browser.

## How to present at the hackathon

- Innovation: emphasize explainable AI scoring and support for phishing, ransomware, and deepfake detection in one interface.
- Implementation quality: show the working dashboard, live score updates, recommendations, and multilingual UX.
- Efficiency and accuracy: explain that the scoring engine combines behavioral signals and text indicators to prioritize incidents.
- Scalability: point to the architecture section and mention future integration with SIEM, UZCERT feeds, and open ML models.
- Usability: switch between RU / UZ / EN during the demo and load different threat scenarios.

## Suggested next step

If you later get Python access, this frontend can be upgraded into a Streamlit app and connected to open datasets or an API-backed classifier.