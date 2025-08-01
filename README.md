# Smart Download Organizer (Chrome Extension)

Organize your Chrome downloads automatically into categorized subfolders (Movies, Music, Documents, etc.) under your default **Downloads** folder.

## 🧠 Features

- Automatically moves new downloads into categorized folders by type
- Lightweight and privacy-friendly (no tracking, no network access)
- Works offline

## 📁 Folder Structure

- `Movies/mp4`, `Music/mp3`, `Documents/pdf`, `Images/jpg`, etc.

## 🛠 How It Works

Chrome extensions can no longer move files after download (in Manifest V3), so we use the `onDeterminingFilename` API to **pre-define** where each file should be saved.

Example:

```

Downloads/
└── Movies/
└── mp4/
└── myvideo.mp4

````

## 🚀 Installation (Manual)

> Chrome Web Store version coming soon!

1. Download or clone this repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/smart-download-organizer.git
````

2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **"Load Unpacked"**
5. Select the `smart-download-organizer` folder

✅ Done! Now try downloading a file and watch it get categorized!

## 🔐 Permissions

* `"downloads"` – To organize files at download time

No other permissions. No analytics. No tracking.

## 📜 License

MIT — do whatever you want, just credit me!

---

## ✍️ Author

Made with ❤️ by Govind Stark(https://github.com/govind-stark)


