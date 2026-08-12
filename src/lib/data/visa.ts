import type { VisaType, Faq, Alert } from "@/types";

export const visaCategories = [
  { id: "all", label: "Semua", icon: "📌" },
  { id: "work", label: "Visa Kerja", icon: "💼" },
  { id: "dependent", label: "Dependent Pass", icon: "👨‍👩‍👧‍👦" },
  { id: "student", label: "Student Pass", icon: "🎓" },
  { id: "visit", label: "Social Visit Pass", icon: "✈️" },
  { id: "permanent", label: "PR / MM2H", icon: "🛂" },
  { id: "conversion", label: "Konversi Dokumen", icon: "📄" },
];

export const visaTypes: VisaType[] = [
  {
    id: "ep",
    name: "Employment Pass",
    shortName: "EP",
    category: "work",
    icon: "💼",
    description:
      "Untuk profesional asing yang bekerja di Malaysia dengan gaji minimal RM 5,000/bulan. Pass paling umum untuk WNI profesional.",
    duration: "1 - 2 tahun (renewable)",
    cost: "RM 1,000 - 2,000",
    steps: [
      "Perusahaan sponsor apply di portal ESD (Expatriate Services Division)",
      "Siapkan dokumen: paspor (min 18 bulan masa berlaku), kontrak kerja, foto passport, ijazah (tersertifikasi)",
      "Medical check-up di klinik panel FOMEMA",
      "Bayar processing fee (RM 1,000 - RM 2,000 tergantung kategori)",
      "Tunggu approval 2-4 minggu",
      "Setelah approve, dapat Employment Pass (sticker di paspor)",
    ],
    documents: [
      "Paspor (min 18 bulan masa berlaku)",
      "Kontrak kerja",
      "Foto passport",
      "Ijazah (legalisir / tersertifikasi)",
      "Medical report FOMEMA",
    ],
    tips: [
      "Apply minimal 3 bulan sebelum visa lama expired",
      "Pastikan company sponsor terdaftar di MDEC/MIDA",
      "Gaji minimal RM 5,000 untuk EP kategori I",
      "Simpan salinan digital semua dokumen",
    ],
  },
  {
    id: "pvp",
    name: "Professional Visit Pass",
    shortName: "PVP",
    category: "work",
    icon: "🤝",
    description:
      "Untuk kunjungan kerja jangka pendek (sampai 12 bulan) seperti penugasan proyek, pelatihan, atau seminar.",
    duration: "3 - 12 bulan (non-renewable)",
    cost: "RM 500 - 1,000",
    steps: [
      "Perusahaan sponsor apply di portal ESD",
      "Siapkan dokumen: paspor, surat undangan kerja, CV, foto",
      "Processing fee dibayar oleh perusahaan sponsor",
      "Tunggu approval 1-2 minggu",
      "PVP berlaku 3-12 bulan, tidak bisa diperpanjang",
    ],
    documents: [
      "Paspor (min 6 bulan masa berlaku)",
      "Surat undangan/sponsor perusahaan",
      "CV terbaru",
      "Foto passport",
    ],
    tips: [
      "Cocok untuk pekerja proyek atau assignment jangka pendek",
      "Tidak bisa dikonversi langsung ke Employment Pass",
      "Tidak diperbolehkan diganti ke pass lain tanpa keluar Malaysia",
    ],
  },
  {
    id: "dp",
    name: "Dependent Pass",
    shortName: "DP",
    category: "dependent",
    icon: "👨‍👩‍👧‍👦",
    description:
      "Untuk pasangan (suami/istri) dan anak-anak di bawah 18 tahun dari pemegang Employment Pass.",
    duration: "Sesuai masa berlaku EP pemegang utama",
    cost: "RM 500 - 1,000",
    steps: [
      "Apply bersamaan dengan EP atau setelah EP disetujui",
      "Siapkan dokumen: marriage certificate (legalisir), birth certificate anak, paspor keluarga",
      "Medical check-up untuk pasangan dewasa",
      "DP berlaku sesuai masa berlaku EP pemegang utama",
      "Pemegang DP dewasa bisa bekerja setelah mendapatkan izin kerja terpisah",
    ],
    documents: [
      "Marriage certificate (legalisir & terjemahan resmi)",
      "Birth certificate anak (legalisir)",
      "Paspor seluruh anggota keluarga",
      "Medical report (untuk pasangan)",
    ],
    tips: [
      "DP holder dewasa perlu izin kerja terpisah untuk bekerja",
      "Anak DP holder bisa sekolah di Malaysia",
      "Apply bersamaan dengan EP untuk efisiensi waktu",
      "Legalir dokumen di Kemenkumham RI sebelum berangkat",
    ],
  },
  {
    id: "student",
    name: "Student Pass",
    shortName: "SP",
    category: "student",
    icon: "🎓",
    description:
      "Untuk pelajar asing yang ingin menempuh pendidikan di institusi pendidikan tinggi Malaysia yang terdaftar.",
    duration: "Sesuai durasi program studi (renewable)",
    cost: "RM 1,500 - 3,000",
    steps: [
      "Diterima di institusi pendidikan Malaysia yang terdaftar",
      "Institusi apply Student Pass via EMGS (Education Malaysia Global Services)",
      "Siapkan dokumen: offer letter, paspor, ijazah terakhir, medical check-up",
      "Bayar processing fee dan visa fee",
      "Tunggu approval 4-8 minggu",
      "Setelah approval, dapat visa pelajar (sticker di paspor)",
    ],
    documents: [
      "Offer letter dari institusi",
      "Paspor (min 18 bulan masa berlaku)",
      "Ijazah terakhir (legalisir)",
      "Medical report",
      "Foto passport",
      "Bukti kemampuan finansial",
    ],
    tips: [
      "Pastikan institusi terdaftar di EMGS",
      "Bisa kerja part-time (max 20 jam/minggu) selama libur semester dengan izin",
      "Apply 2-3 bulan sebelum perkuliahan dimulai",
    ],
  },
  {
    id: "svp",
    name: "Social Visit Pass",
    shortName: "SVP",
    category: "visit",
    icon: "✈️",
    description:
      "Untuk kunjungan wisata, keluarga, atau bisnis jangka pendek. WNI bebas visa hingga 30 hari!",
    duration: "30 hari (free), bisa diperpanjang hingga 90 hari",
    cost: "Gratis (30 hari), RM 100-200 untuk extend",
    steps: [
      "WNI tidak perlu visa untuk kunjungan turis hingga 30 hari",
      "Untuk perpanjangan hingga 90 hari, apply di kantor Imigresen Malaysia",
      "Siapkan dokumen: paspor, tiket pulang, bukti akomodasi, surat sponsor (jika ada)",
      "Bayar extension fee (RM 100 - 200)",
      "PENTING: SVP tidak bisa digunakan untuk bekerja!",
    ],
    documents: [
      "Paspor (min 6 bulan masa berlaku)",
      "Tiket pulang / onward",
      "Bukti akomodasi / hotel",
      "Bukti finansial (minimal RM 1,000)",
    ],
    tips: [
      "WNI bebas visa 30 hari untuk masuk Malaysia",
      "TIDAK boleh bekerja dengan SVP",
      "Overstay = denda RM 500/hari + risiko ban",
      "Untuk visa-on-arrival 90 hari tersedia di Sabah/Sarawak (RM 200)",
    ],
  },
  {
    id: "pr",
    name: "Resident Pass / PR",
    shortName: "PR",
    category: "permanent",
    icon: "🛂",
    description:
      "Status penduduk tetap Malaysia (MyPR). Proses panjang dan sangat selektif, diberikan dalam kategori terbatas.",
    duration: "Permanent (MyPR card diperpanjang tiap 5 tahun)",
    cost: "RM 1,500 - 3,000",
    steps: [
      "Kualifikasi dasar: tinggal di Malaysia min 5 tahun (EP holder) atau 10 tahun (kategori lain)",
      "Siapkan dokumen lengkap: paspor, EP/DP, tax assessment, bank statement, surat rekomendasi",
      "Apply ke Jabatan Imigresen Malaysia (JIM)",
      "Interview di Imigresen",
      "Tunggu proses 6-12 bulan",
      "Jika disetujui, dapat MyPR card (kad penduduk tetap)",
    ],
    documents: [
      "Paspor & visa kerja sebelumnya",
      "Tax assessment (LHDN) beberapa tahun",
      "Bank statement",
      "Surat rekomendasi dari employer / komunitas",
      "Birth certificate & marriage certificate",
    ],
    tips: [
      "Proses sangat selektif, persetujuan tidak dijamin",
      "Kriteria: skilled worker, investor, atau keluarga PR",
      "Bisa membantu keluarga inti apply PR juga",
      "Konsultasi dengan agen imigrasi tersertifikasi",
    ],
  },
  {
    id: "mm2h",
    name: "Malaysia My Second Home",
    shortName: "MM2H",
    category: "permanent",
    icon: "🌴",
    description:
      "Program visa jangka panjang (10 tahun) untuk warga asing yang ingin tinggal di Malaysia. Populer untuk pensiunan dan investor.",
    duration: "10 tahun (renewable)",
    cost: "RM 5,000 - 15,000 (processing + agent)",
    steps: [
      "Pilih kategori MM2H (Platinum, Gold, Silver berdasarkan kekayaan)",
      "Siapkan bukti pendapatan pasif / aset sesuai kategori",
      "Buka fixed deposit di bank Malaysia (mulai RM 500,000)",
      "Submit aplikasi melalui agen MM2H berlisensi",
      "Medical check-up setelah approval",
      "Dapatkan MM2H visa (10 tahun, multiple entry)",
    ],
    documents: [
      "Paspor (min 2 tahun masa berlaku)",
      "Bukti pendapatan / aset (bank statement 3 bulan)",
      "Letter of Good Conduct dari polisi",
      "Medical report",
      "Self-affidavit",
    ],
    tips: [
      "Cocok untuk pensiunan dan investor",
      "Boleh beli properti dengan threshold lebih rendah",
      "Tidak otomatis boleh bekerja (perlu izin terpisah)",
      "Gunakan agen berlisensi untuk proses lancar",
    ],
  },
  {
    id: "sim",
    name: "Konversi SIM Indonesia ke Malaysia",
    shortName: "SIM",
    category: "conversion",
    icon: "📄",
    description:
      "Pemegang SIM Indonesia yang masih berlaku dapat mengonversinya menjadi SIM Malaysia tanpa mengikuti kursus penuh.",
    duration: "SIM berlaku 1 - 5 tahun (sesuai visa)",
    cost: "RM 100 - 200",
    steps: [
      "Datang ke JPJ (Jabatan Pengangkutan Jalan) terdekat",
      "Siapkan dokumen: SIM Indonesia asli (masih berlaku), paspor, visa kerja, foto, surat keterangan KBRI",
      "Bayar processing fee (RM 100 - 200)",
      "Ikuti tes teori (wajib) — jika SIM Indonesia >5 tahun, tes praktik di-skip",
      "Jika SIM Indonesia <5 tahun, ikuti tes praktik tambahan",
      "SIM Malaysia terbit, berlaku 1-5 tahun sesuai visa",
    ],
    documents: [
      "SIM Indonesia asli (masih berlaku)",
      "Paspor",
      "Visa kerja yang valid",
      "Surat keterangan dari KBRI KL",
      "Foto passport",
    ],
    tips: [
      "SIM Indonesia harus masih berlaku saat konversi",
      "Proses di JPJ bisa selesai dalam 1-2 hari",
      "Surat keterangan KBRI bisa diurus via e-Konsuler (online)",
      "Datang pagi-pagi untuk hindari antrian panjang",
    ],
  },
];

export const visaFaqs: Faq[] = [
  {
    question: "Apakah WNI perlu visa untuk masuk Malaysia?",
    answer:
      "WNI tidak perlu visa untuk kunjungan wisata/keluarga/bisnis jangka pendek hingga 30 hari. Anda akan diberikan Social Visit Pass (SVP) gratis saat kedatangan. Untuk tinggal lebih lama atau bekerja, dibutuhkan visa sesuai tujuan (EP, Student Pass, dll).",
  },
  {
    question: "Berapa denda overstay di Malaysia?",
    answer:
      "Denda overstay adalah RM 500 per hari atau bagian hari. Selain denda, pelaku overstay dapat ditahan, diban (dicegah masuk) untuk jangka waktu tertentu, dan dimasukkan ke dalam daftar hitam imigrasi. Selalu pastikan visa Anda valid.",
  },
  {
    question: "Bagaimana cara renew Employment Pass?",
    answer:
      "Renew EP dilakukan melalui portal ESD oleh perusahaan sponsor. Mulai minimal 3 bulan sebelum masa berlaku habis. Siapkan: paspor, kontrak kerja yang diperbarui, medical FOMEMA, dan bayar processing fee. Approval biasanya 2-4 minggu.",
  },
  {
    question: "Bisakah Dependent Pass holder bekerja di Malaysia?",
    answer:
      "Tidak otomatis. Pemegang Dependent Pass dewasa perlu mendapatkan izin kerja terpisah (Employment Pass) yang disponsori oleh pemberi kerja untuk dapat bekerja secara legal. Tanpa izin kerja, bekerja dengan DP adalah pelanggaran imigrasi.",
  },
  {
    question: "Apa perbedaan MM2H dan PR (Resident Pass)?",
    answer:
      "MM2H adalah visa tinggal jangka panjang (10 tahun, renewable) untuk warga asing yang memenuhi syarat finansial — bukan penduduk tetap. PR (MyPR) adalah status penduduk tetap yang lebih permanen, dengan hak lebih banyak tetapi proses yang jauh lebih sulit dan selektif. MM2H tidak otomatis mengarah ke PR.",
  },
  {
    question: "Apakah anak saya bisa sekolah di Malaysia dengan visa saya?",
    answer:
      "Ya. Anak dari pemegang Employment Pass dengan Dependent Pass dapat bersekolah di sekolah internasional maupun swasta di Malaysia. Beberapa sekolah memerlukan Student Pass terpisah untuk anak di atas usia tertentu. Hubungi sekolah untuk persyaratan spesifik.",
  },
];

export const alerts: Alert[] = [
  {
    level: "red",
    text: "Waspada penipuan lowongan kerja palsu yang meminta biaya pendaftaran. Perusahaan resmi tidak memungut biaya rekrutmen.",
  },
  {
    level: "yellow",
    text: "Perpanjangan visa: ajukan minimal H-30 hari sebelum masa berlaku habis untuk hindari penalti.",
  },
  {
    level: "green",
    text: "KBRI Kuala Lumpur melayani hotline darurat 24 jam: +603-2116 4000 / +6012-348 7927.",
  },
];
