# 💻 Chayapol (Copter) — My Web Portfolio

> เว็บไซต์ Portfolio รวบรวมผลงานและโครงงานของผม (**ชยพล ปานนาค**) นักเรียน ม.5/5 โรงเรียนเตรียมอุดมศึกษาพัฒนาการ ปทุมธานี  
> ทำขึ้นเพื่อเตรียมพร้อมสำหรับยื่น **รอบ Portfolio (TCAS70) สาขาวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล (CEDT) จุฬาลงกรณ์มหาวิทยาลัย** 🏛️

---

## 🛠️ เบื้องหลังการพัฒนา (Tech Stack & Thoughts)

ตอนแรกว่าจะใช้ Framework ใหญ่ๆ อย่าง Next.js แต่คิดว่าเว็บแนะนำตัวแบบ Single Page อยากให้มันโหลดไวที่สุด (Fast First Paint) และไม่ต้องมี Server หนักๆ เลยตัดสินใจเลือกใช้ **Vanilla HTML + Tailwind CSS (via CDN) + JavaScript ธรรมดา** ควบคู่กับ CSS Glassmorphism 

- **Frontend:** HTML5, Modern CSS (Glassmorphism + Keyframe animations)
- **Styling:** Tailwind CSS + Custom CSS Variables
- **Icons:** Lucide Icons
- **Effects:** HTML5 Canvas (เขียนอนุภาค Particles เชื่อมโยงกันเบื้องหลัง จำลองการส่งข้อมูลเครือข่าย IoT)
- **Deployment:** GitHub Pages / Vercel

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
├── index.html       # หน้าหลักของ Portfolio รวมทุก Section
├── styles.css       # สไตล์ Glassmorphism, แสง Glow และ Custom Scrollbar
├── script.js        # ลอจิก Canvas Particles, ระบบกรองผลงาน และ Typing Effect
└── assets/          # รูปภาพผลงานและ Diagrams
```

---

## 🚀 ผลงานเด่นในเว็บนี้ (Featured Works)

1. **GeoWrisX (Flagship Project):** โครงงานระบบช่วยเหลือผู้ป่วยโรคความดันโลหิตสูงด้วย Geofencing + BLE Wristband + Smart Pillbox (เตรียมส่งแข่ง NSC 2570 และจัดแสดงงาน OCOP)
2. **ThaiEd AI:** ไอเดียเว็บแอป AI ช่วยตรวจและแนะแนวการเขียนโค้ดสำหรับเด็กไทย
3. **COMPAS Practice:** คลังฝึกทำโจทย์เตรียมสอบวัดระดับ COMPAS ภาควิชาวิศวะคอมฯ จุฬาฯ

---

## 📌 To-Do List (สิ่งที่ตั้งใจจะอัปเดตเพิ่ม)
- [x] ขึ้นโครงสร้างหน้าเว็บและระบบกรองผลงาน
- [x] ใส่ข้อมูลโครงงานหลัก GeoWrisX พร้อม System Architecture
- [ ] ถ่ายรูปกล่องยา Prototype ของจริงมาแปะแทนรูป Mockup
- [ ] เพิ่มหน้ารวมเกียรติบัตรและผลคะแนนสอบ COMPAS
- [ ] ทำ Dark/Light Theme สลับโหมด (ถ้าว่าง)

---

**Contact:**
- ✉️ Email: contact@example.com
- 🐙 GitHub: [@your-username](https://github.com)
