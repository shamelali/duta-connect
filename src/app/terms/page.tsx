import type { Metadata } from "next";
import { LegalDocument } from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Ketentuan Penggunaan",
  description: "Ketentuan penggunaan platform komunitas DUTA Connect.",
};

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Ketentuan"
      title="Ketentuan Penggunaan"
      description="Ketentuan ini menjelaskan batas penggunaan pengalaman demo DUTA Connect dan tanggung jawab pengguna."
    >
      <section>
        <h2>1. Status layanan</h2>
        <p>DUTA Connect saat ini merupakan produk demo. Fitur akun, pendaftaran, penyimpanan, lowongan, properti, acara, dan layanan belum mewakili transaksi atau layanan produksi.</p>
      </section>
      <section>
        <h2>2. Informasi bukan nasihat profesional</h2>
        <p>Konten mengenai visa, imigrasi, pekerjaan, pajak, kesehatan, atau hukum disediakan sebagai gambaran umum. Selalu konfirmasikan informasi dengan instansi pemerintah atau profesional yang berwenang sebelum mengambil keputusan.</p>
      </section>
      <section>
        <h2>3. Penggunaan yang bertanggung jawab</h2>
        <p>Anda setuju untuk tidak menggunakan platform untuk penipuan, pelecehan, spam, penyamaran identitas, pelanggaran privasi, atau penyebaran informasi yang diketahui tidak benar.</p>
      </section>
      <section>
        <h2>4. Konten komunitas</h2>
        <p>Pengguna bertanggung jawab atas konten yang dibagikan. DUTA Connect dapat membatasi atau menghapus konten yang melanggar keselamatan komunitas, hukum, atau ketentuan ini pada versi produksi.</p>
      </section>
      <section>
        <h2>5. Penyedia dan tautan pihak ketiga</h2>
        <p>Pencantuman pekerjaan, properti, acara, layanan, atau tautan pihak ketiga tidak menjamin ketersediaan maupun kualitasnya. Lakukan verifikasi mandiri sebelum mengirim uang, dokumen, atau informasi pribadi.</p>
      </section>
      <section>
        <h2>6. Perubahan ketentuan</h2>
        <p>Ketentuan ini dapat diperbarui seiring pengembangan produk. Perubahan material akan ditampilkan dengan tanggal pembaruan yang baru.</p>
      </section>
    </LegalDocument>
  );
}
