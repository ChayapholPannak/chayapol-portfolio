// ==========================================
// Portfolio Script - Chayapol Pannak (Copter)
// ม.5/5 เตรียมอุดมศึกษาพัฒนาการ ปทุมธานี
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. ระบบพิมพ์ตัวอักษรวิ่งทีละตัวตรงหน้า Hero
  const typeTextElement = document.getElementById('typing-text');
  const phrases = [
    'IoT & Embedded Systems Developer',
    'Future CEDT @ Chula Engineer (TCAS70)',
    'Edge AI & Healthcare Innovator',
    'NSC National Software Contest Contender',
    'Full-Stack Developer & Tech Explorer'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typeTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40; // ลบไวกว่าตอนพิมพ์นิดนึง
    } else {
      typeTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    // เช็กว่าพิมพ์จบประโยคหรือยัง
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 1800; // หยุดให้อ่านแป๊บนึง
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // พักก่อนขึ้นประโยคใหม่
    }

    setTimeout(typeEffect, typeSpeed);
  }

  if (typeTextElement) {
    typeEffect();
  }

  // 2. ระบบ Filter กรองผลงานตามหมวดหมู่
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // รีเซ็ตปุ่มอื่นกลับเป็นสีปกติ
      filterButtons.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/50');
        b.classList.add('bg-slate-800/60', 'text-slate-400', 'border-white/5');
      });

      // ไฮไลต์ปุ่มที่เพิ่งกด
      btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/50');
      btn.classList.remove('bg-slate-800/60', 'text-slate-400', 'border-white/5');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. ปุ่มเปิด-ปิดเมนูบนมือถือ (Hamburger menu)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // กดเมนูแล้วให้พับเก็บอัตโนมัติ
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 4. Background Canvas: จุด Particle ลอยและโยงเส้นเมื่ออยู่ใกล้กัน
  // ทำไว้จำลอง Network node ส่งข้อมูลระหว่าง ESP32 กับ Wristband
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    // บนจอมือถือลดจำนวนจุดลง จะได้ไม่กินแบต
    const count = Math.min(width > 768 ? 40 : 18, 50);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1,
        // สลับสี Cyan กับชมพูจุฬาฯ
        color: Math.random() > 0.4 ? 'rgba(0, 210, 255, ' : 'rgba(222, 0, 106, '
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // ชนขอบจอแล้วเด้งกลับ
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = p.color + '0.45)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // คำนวณระยะห่างระหว่างจุด ถ้าระยะ < 110px ให้ลากเส้นเชื่อม
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(0, 210, 255, ${0.14 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }
    animate();
  }
});

// ฟังก์ชันเปิด-ปิดหน้าต่างดู System Architecture
function openArchitectureModal() {
  const modal = document.getElementById('architecture-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeArchitectureModal() {
  const modal = document.getElementById('architecture-modal');
  if (modal) modal.classList.add('hidden');
}
