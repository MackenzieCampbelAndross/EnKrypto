import tkinter as tk
from tkinter import filedialog
from enkrypto.enkrypto_sdk.core.sdk import EnkryptoSDK

selected_file = None

def choose_file():
    global selected_file
    selected_file = filedialog.askopenfilename()
    label.config(text=selected_file)

def start_tracking():
    if not selected_file:
        label.config(text="no file selected")
        return

    config = {
        "type": "json",  # start with json only
        "path": selected_file,
        "endpoint": "http://localhost:8000/proof",
        "api_key": "test"
    }

    sdk = EnkryptoSDK(config)
    sdk.init()

    import threading
    threading.Thread(target=sdk.start, daemon=True).start()

    label.config(text="tracking started")

root = tk.Tk()
root.title("EnKrypto")

btn = tk.Button(root, text="Select File", command=choose_file)
btn.pack(pady=10)

start_btn = tk.Button(root, text="Start Tracking", command=start_tracking)
start_btn.pack(pady=10)

label = tk.Label(root, text="no file selected")
label.pack(pady=10)

root.mainloop()