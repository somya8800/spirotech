import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("serviceAccountKey.json")

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://spirulina-d75fc-default-rtdb.firebaseio.com/'
})

import cv2
import numpy as np
import urllib.request
import time
import os

# ESP32 capture URL
url = "http://10.206.183.200/capture"

# create folder to save important images
os.makedirs("captures", exist_ok=True)

# reference paths
ai_ref = db.reference("ai")
camera_ref = db.reference("camera")

# store camera stream in firebase (optional)
camera_ref.update({
    "stream": url
})

while True:

    # get image from ESP32
    img_resp = urllib.request.urlopen(url)
    img_np = np.array(bytearray(img_resp.read()), dtype=np.uint8)
    frame = cv2.imdecode(img_np, -1)

    if frame is None:
        print("Image receive nahi hui")
        continue

    # convert to HSV
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # spirulina green range
    lower_green = np.array([35, 40, 40])
    upper_green = np.array([85, 255, 255])

    # mask for green detection
    mask = cv2.inRange(hsv, lower_green, upper_green)

    # calculate green percentage
    green_pixels = cv2.countNonZero(mask)
    total_pixels = frame.shape[0] * frame.shape[1]

    ratio = green_pixels / total_pixels
    health = int(ratio * 100)

    # classification
    if ratio > 0.35:
        status = "Healthy Spirulina Culture"
        color = (0,255,0)

    elif ratio > 0.15:
        status = "Weak Growth"
        color = (0,255,255)

    else:
        status = "Possible Contamination"
        color = (0,0,255)

        # save contamination image
        filename = f"captures/contamination_{int(time.time())}.jpg"
        cv2.imwrite(filename, frame)

        # push contamination alert to firebase
        db.reference("alerts").push({
            "type": "contamination",
            "message": "Possible contamination detected",
            "timestamp": int(time.time())
        })

    # update AI result to Firebase
    ai_ref.set({
        "health": health,
        "status": status,
        "timestamp": int(time.time())
    })

    # overlay text
    cv2.putText(frame,
                f"Health: {health}%",
                (20,40),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                color,
                2)

    cv2.putText(frame,
                status,
                (20,80),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                color,
                2)

    # show windows
    cv2.imshow("Spirulina Monitoring", frame)
    cv2.imshow("Green Detection Mask", mask)

    print(f"Health: {health}% | Status: {status}")

    # press q to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

    time.sleep(2)

cv2.destroyAllWindows()