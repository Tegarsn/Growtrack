---
title: Isi Piringku
emoji: 👁
colorFrom: pink
colorTo: yellow
sdk: gradio
sdk_version: 5.33.0
app_file: app.py
pinned: false
short_description: Analisis Isi Piring Berdasarkan Gambar Makanan dengan YOLOv8
---

Check out the configuration reference at https://huggingface.co/docs/hub/spaces-config-reference

# 🍽️ API Prediksi Komposisi Isi Piring

API ini digunakan untuk mendeteksi komposisi isi piring berdasarkan gambar makanan menggunakan model YOLOv8. Cocok untuk mendukung aplikasi edukasi gizi seperti *Isi Piringku*.

## 🔗 Base URL
```
https://desssti006-image-segmentation-isipiringku.hf.space
```

---

## 📍 Endpoints

### `GET /`
Cek status API.

#### Response
```json
{
  "message": "API is working!"
}
```

---

### `POST /predict-isipiring`
Melakukan prediksi isi piring dari gambar makanan yang diunggah.

#### Request
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Field**:
  - `file`: Gambar makanan (`.jpg`, `.png`, dsb)

#### Contoh Penggunaan via Postman
- Method: `POST`
- URL: `https://desssti006-image-segmentation-isipiringku.hf.space/predict-isipiring`
- Body: `form-data`
  - Key: `file`, Type: `File`, Value: `gambar.jpg`

#### Response (200 OK)
```json
{
  "proporsi": {
    "buah": 0.8213,
    "lauk": 0.0,
    "makanan_pokok": 0.1787,
    "sayur": 0.0
  },
  "evaluasi": {
    "lauk": "❌ Kurang",
    "buah": "✅ Cukup",
    "makanan_pokok": "❌ Kurang",
    "sayur": "❌ Kurang"
  },
  "rekomendasi": {
    "lauk": "Tambahkan sekitar 1/3 bagian piring lauk",
    "makanan_pokok": "Tambahkan sekitar 1/2 bagian piring makanan_pokok",
    "sayur": "Tambahkan sekitar 2/3 bagian piring sayur"
  },
  "image_url": "/result-image/<image_id>"
}
```

#### Response (400 Bad Request)
```json
{
  "error": "Tidak ada mask terdeteksi pada gambar."
}
```

---

### `GET /result-image/{image_id}`
Mengambil hasil visualisasi segmentasi gambar.

#### Path Parameter
- `image_id`: ID gambar hasil segmentasi, sesuai `image_url` dari endpoint `/predict-isipiring`.

#### Response
- **200 OK**: Gambar hasil segmentasi (`image/png`)
- **404 Not Found**:
```json
{
  "error": "Image not found"
}
```

---

## 🧠 Model & Kategori
Model mendeteksi 5 kategori:
- `buah`
- `lauk`
- `makanan_pokok`
- `sayur`
- `piring` (digunakan sebagai referensi area, tidak dihitung dalam evaluasi gizi)

Evaluasi dilakukan berdasarkan target *Isi Piringku*:
- `lauk`: 1/3
- `buah`: 1/3
- `makanan_pokok`: 2/3
- `sayur`: 2/3

---

## 📂 Struktur Project Terkait
Pastikan file model berada pada:
```
model/best.pt
```

---

## ⚠️ Catatan
- Semua file hasil sementara disimpan di `/tmp/` dan akan otomatis dihapus.
- Sistem menangani error dan memberikan pesan sesuai dengan status HTTP.

---