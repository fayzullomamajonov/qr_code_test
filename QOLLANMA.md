# QR PDF Skaner - O'rnatish va Ishlatish Qo'llanmasi

## 📱 Nima qiladi?

Bu dastur QR kodni skanerlaydi va ichidagi PDF havolasini avtomatik ochadi. Juda oddiy va bepul!

## 🚀 Bepul Online Joylashtirish (3 ta oson yo'l)

### 1️⃣ **Eng Oson: GitHub Pages** (Tavsiya qilinadi)

**Qadamlar:**

1. **GitHub akkauntini yarating** (agar yo'q bo'lsa): https://github.com
2. **Yangi repository yarating**:
   - GitHub'da "New repository" bosing
   - Nom: `qr-pdf-scanner` (istalgan nom)
   - "Public" tanlang
   - "Create repository" bosing

3. **Faylni yuklang**:
   - "Upload files" tugmasini bosing
   - `qr-pdf-scanner.html` faylni tortib qo'ying
   - Faylni `index.html` deb qayta nomlang (muhim!)
   - "Commit changes" bosing

4. **GitHub Pages'ni yoqing**:
   - Repository Settings > Pages ga o'ting
   - "Source" ostida "main" branch'ni tanlang
   - "Save" bosing
   - 2-3 daqiqadan keyin havolangiz tayyor bo'ladi!

**Natija:** `https://sizning-username.github.io/qr-pdf-scanner/`

---

### 2️⃣ **Eng Tez: Vercel** (1 daqiqa)

**Qadamlar:**

1. **Vercel'ga kiring**: https://vercel.com
2. **GitHub bilan bog'laning** (yuqoridagi repository'dan)
3. **Deploy bosing** - hammasi avtomatik!

**Yoki:**
- Vercel CLI orqali: `npx vercel --prod`

**Natija:** `https://sizning-dastur.vercel.app`

---

### 3️⃣ **Eng Sodda: Netlify Drop**

**Qadamlar:**

1. **Netlify'ga kiring**: https://netlify.com
2. **Drag & Drop** qismiga `qr-pdf-scanner.html` faylni tortib qo'ying
3. Tayyor! Darhol link olasiz

**Natija:** `https://random-nom.netlify.app`

---

## 💻 Mahalliy Kompyuterda Sinash

Faylni ochish uchun ikki yo'l:

### A) Oddiy Brauzerda Ochish
```bash
# Faylni ikki marta bosing yoki
# Brauzerga tortib qo'ying
```

### B) Local Server bilan (HTTPS kerak bo'lsa)
```bash
# Python bilan
python -m http.server 8000

# Yoki npx bilan
npx serve .
```

Keyin: `http://localhost:8000/qr-pdf-scanner.html`

---

## 📋 Qanday Ishlaydi?

### 1. QR Kod Yaratish

PDF havolangiz bilan QR kod yarating:

**Bepul QR Kod Generatorlar:**
- https://www.qr-code-generator.com/
- https://www.the-qrcode-generator.com/
- https://qr.io/

**Qadamlar:**
1. "URL" yoki "Website" tanlang
2. PDF havolangizni kiriting: `https://example.com/mydocument.pdf`
3. QR kodni yuklab oling
4. Chop eting yoki ekranga ko'rsating

### 2. Dasturni Ishlatish

1. **Dasturni oching** (yuqoridagi linklar orqali)
2. **"Skanerlashni boshlash"** tugmasini bosing
3. **Kameraga ruxsat bering** (birinchi marta)
4. **QR kodni kamera oldiga tutib turing**
5. **PDF avtomatik ochiladi!** ✅

---

## 🔧 Muhim Eslatmalar

### ✅ Nima Ishlaydi:
- ✅ Barcha zamonaviy brauzerlar (Chrome, Safari, Firefox)
- ✅ Mobil qurilmalar (iOS, Android)
- ✅ HTTPS ulanishlar (kerak!)
- ✅ PDF havolalari (to'g'ridan-to'g'ri havolalar)

### ❌ Muammolar va Yechimlar:

**1. Kamera ishlamayapti?**
- ✅ HTTPS protokoldan foydalaning (http://... emas, https://...)
- ✅ Brauzerda kameraga ruxsat bering
- ✅ Boshqa ilovalar kamerani ishlatmayotganini tekshiring

**2. PDF ochilmayapti?**
- ✅ QR kod ichida to'g'ri PDF havolasi borligini tekshiring
- ✅ PDF fayl ochiq (public) bo'lishi kerak
- ✅ `.pdf` kengaytmasi bilan tugashi kerak

**3. GitHub Pages ishlamayapti?**
- ✅ Fayl nomi `index.html` ekanligini tekshiring
- ✅ Repository "Public" ekanligini tekshiring
- ✅ 2-3 daqiqa kuting (birinchi deploy uchun)

---

## 🎨 Sozlash va O'zgartirish

### Ranglarni O'zgartirish:

HTML fayldagi ranglar:
```html
<!-- Asosiy rang: from-blue-600 to-indigo-600 -->
<!-- Boshqa rangga o'zgartirish: -->
from-green-600 to-emerald-600  <!-- Yashil -->
from-purple-600 to-pink-600    <!-- Binafsha -->
from-red-600 to-orange-600     <!-- Qizil -->
```

### Tilni O'zgartirish:

Barcha matnlarni o'zgartiring:
```javascript
"Skanerlashni boshlash" → "Start Scanning"
"PDF topildi!" → "PDF Found!"
```

---

## 🌐 PDF Havolalarni Qayerdan Olish Mumkin?

### 1. Google Drive
1. Faylni Google Drive'ga yuklang
2. O'ng tugma > "Get link"
3. "Anyone with the link" tanlang
4. Havolani nusxalang
5. Oxiriga `/preview` qo'shing

### 2. Dropbox
1. Faylni Dropbox'ga yuklang
2. "Share" > "Create link"
3. Havolani nusxalang
4. `www.dropbox.com` ni `dl.dropboxusercontent.com` ga o'zgartiring

### 3. GitHub
1. PDF faylni repository'ga yuklang
2. Faylni oching
3. "Raw" tugmasini bosing
4. URL'ni nusxalang

---

## 📱 Mobil Qurilmalarda

### iOS (iPhone/iPad):
- ✅ Safari brauzerida ishlatish tavsiya qilinadi
- ✅ Chrome ham ishlaydi
- ✅ Kameraga ruxsat so'raladi (Allow bosing)

### Android:
- ✅ Chrome brauzerida eng yaxshi ishlaydi
- ✅ Firefox ham mos
- ✅ Orqa kameradan foydalanadi

---

## 🔒 Xavfsizlik

- ✅ Hech qanday ma'lumot serverga yuborilmaydi
- ✅ Hammasi brauzeringizda ishlaydi
- ✅ Kamera faqat skanerlash uchun ishlatiladi
- ✅ Ochiq kodli (Open Source)

---

## 🆘 Yordam Kerakmi?

**Umumiy Muammolar:**

1. **"Kameraga ruxsat yo'q" xatosi**
   - Brauzer sozlamalaridan kameraga ruxsat bering
   - Sahifani yangilang (F5)

2. **QR kod o'qilmayapti**
   - QR kodni yaxshi yoritilgan joyda tutib turing
   - Kamera fokusini kuting
   - QR kod aniq va katta bo'lishi kerak

3. **PDF ko'rinmayapti**
   - PDF havolasi ochiq (public) ekanligini tekshiring
   - CORS xatoligi bo'lishi mumkin (boshqa hosting'dan foydalaning)

---

## 📊 Texnik Tafsilotlar

**Ishlatilgan Texnologiyalar:**
- HTML5 + JavaScript (vanilla)
- jsQR library (QR kod skanerlash)
- Tailwind CSS (dizayn)
- getUserMedia API (kamera)

**Fayl Hajmi:**
- HTML fayl: ~8KB
- Tashqi kutubxonalar: CDN orqali (internet kerak)

**Brauzer Talablari:**
- getUserMedia qo'llab-quvvatlashi
- Canvas API
- ES6 JavaScript

---

## ✨ Kelajakda Qo'shiladigan Imkoniyatlar

- [ ] Bir nechta PDF formatlarini qo'llab-quvvatlash
- [ ] QR kod tarixini saqlash
- [ ] PDF'ni yuklab olish tugmasi
- [ ] QR kod yaratish funksiyasi
- [ ] Dark mode

---

## 📝 Litsenziya

Bu dastur bepul va ochiq kodli. Istalganingizcha ishlatishingiz mumkin!

---

**Muvaffaqiyatlar! 🎉**

Agar savollar bo'lsa, GitHub'da issue oching yoki menga yozing.
