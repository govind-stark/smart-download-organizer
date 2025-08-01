const categories = {
  Movies: ['mp4', 'mkv', 'avi'],
  Music: ['mp3', 'wav', 'flac'],
  Software: ['exe', 'msi', 'dmg', 'apk'],
  Documents: ['pdf', 'docx', 'doc', 'xlsx', 'pptx', 'txt'],
  Images: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'],
  Archives: ['zip', 'rar', '7z', 'tar', 'gz']
};

function getCategoryAndSubfolder(extension) {
  extension = extension.toLowerCase();
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(extension)) {
      return `${category}/${extension}`;
    }
  }
  return `Others/${extension}`;
}

chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  const filename = downloadItem.filename.split(/[/\\]/).pop();
  const extension = filename.split('.').pop();
  const folderPath = getCategoryAndSubfolder(extension);
  const newFilename = `${folderPath}/${filename}`;
  suggest({ filename: newFilename });
});
