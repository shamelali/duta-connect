import type { Metadata } from "next";
import { LegalDocument } from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi DUTA Connect dan penjelasan tentang bagaimana data pengguna diperlakukan.",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Privasi"
      title="Kebijakan Privasi"
      description="Kami ingin Anda memahami informasi apa yang digunakan saat mengakses DUTA Connect dan pilihan yang tersedia bagi Anda."
    >
      <section>
        <h2>1. Tentang versi demo</h2>
        <p>
          DUTA Connect saat ini merupakan pengalaman demo. Informasi akun, item tersimpan,
          pendaftaran acara, dan interaksi lainnya disimpan secara lokal di peramban Anda
          dan bukan merupakan akun produksi pada server DUTA Connect.
        </p>
      </section>
      <section>
        <h2>2. Informasi yang Anda berikan</h2>
        <p>Informasi yang dapat Anda masukkan meliputi nama, alamat email, lokasi, profesi, jenis visa, dan informasi profil opsional.</p>
        <p>Jangan masukkan nomor paspor, nomor identitas, data finansial, atau informasi sensitif lainnya ke dalam pengalaman demo.</p>
      </section>
      <section>
        <h2>3. Penyimpanan lokal</h2>
        <p>
          Data demo disimpan melalui local storage pada perangkat Anda. Data ini dapat
          dihapus dengan keluar dari akun demo atau membersihkan data situs melalui
          pengaturan peramban.
        </p>
      </section>
      <section>
        <h2>4. Penggunaan informasi</h2>
        <p>Informasi digunakan untuk menampilkan pengalaman yang dipersonalisasi, seperti profil, konten tersimpan, dan status interaksi selama menggunakan demo.</p>
      </section>
      <section>
        <h2>5. Tautan pihak ketiga</h2>
        <p>DUTA Connect dapat menampilkan tautan menuju situs pemerintah, penyedia layanan, atau pihak ketiga. Kebijakan privasi masing-masing pihak berlaku ketika Anda mengunjungi situs tersebut.</p>
      </section>
      <section>
        <h2>6. Perubahan kebijakan</h2>
        <p>Kebijakan ini akan diperbarui sebelum platform digunakan sebagai layanan produksi atau ketika cara pengelolaan data berubah secara material.</p>
      </section>
    </LegalDocument>
  );
}
