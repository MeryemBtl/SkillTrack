# SkillTrack - TODO Uygulaması

Web Geliştirme / Javascript eğitim projesi. ReactJS ile geliştirilmiş, **Ekle**, **Listele**, **Güncelle** ve **Sil** (CRUD) işlemlerini içeren bir TODO uygulamasıdır.

**Repo:** [https://github.com/MeryemBtl/SkillTrack](https://github.com/MeryemBtl/SkillTrack)

## Teknolojiler

- **React** (Vite)
- **Tailwind CSS**
- Yapı: `Components`, `Pages`, `Interfaces` klasörleri

## Proje Yapısı

```
src/
├── Components/       # TodoForm, TodoList, TodoItem, ProgressListView
├── Pages/            # TodoPage
├── Interfaces/       # Todo (tip/yardımcı)
├── App.jsx
├── main.jsx
└── index.css
```

## Özellikler

- **Görevleri kutu (kart) görünümünde listeleme** – Her görev ayrı bir kartta, grid düzeninde.
- **Düzenleme formu** – Düzenle’ye basınca:
  - Görev başlığı
  - **Ne kadar çalışıldı?** (örn: 2 saat, 45 dakika)
  - **Ne çalışıldı?** (yapılan işlerin açıklaması)
  - **Güncelle**, **İlerleme tamamlandı**, **Sil**, **İptal** butonları
- **İlerleme tamamlandı butonu** – İlerleme bilgilerini kaydedip görevi tamamlandı olarak işaretler.
- **Tüm görevler ve ilerlemeler** – Tüm görevleri ilerleme bilgileriyle (süre, yapılanlar, tamamlandı/devam ediyor) listeleyen buton ve görünüm.
- Veriler tarayıcıda **localStorage** ile saklanır.

## CRUD İşlemleri

| İşlem       | Açıklama                                                                 |
|------------|---------------------------------------------------------------------------|
| **Ekle**   | Yeni görev form ile eklenir.                                              |
| **Listele**| Görevler kartlar halinde listelenir; "Tüm görevler ve ilerlemeler" ile detaylı liste. |
| **Güncelle**| Düzenle ile başlık, süre ve açıklama güncellenir; "İlerleme tamamlandı" ile kaydedilip tamamlandı işaretlenir. |
| **Sil**    | Sil butonu ile görev kaldırılır (kartta veya düzenleme formunda).         |

## Yerel Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Build (Netlify / Production)

```bash
npm run build
```

Çıktı `dist/` klasöründe oluşur.

## Ekran Görüntüsü

Proje çalıştırıldığında ana sayfa: görev ekleme alanı, "Tüm görevler ve ilerlemeler" butonu ve görev kartları.

![SkillTrack TODO](screenshot.png)

## Lisans

Eğitim projesi – serbest kullanım.
