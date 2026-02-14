# SkillTrack - TODO Uygulaması

Web Geliştirme / Javascript eğitim projesi. ReactJS ile geliştirilmiş, **Ekle**, **Listele**, **Güncelle** ve **Sil** (CRUD) işlemlerini içeren bir TODO uygulamasıdır.

## Teknolojiler

- **React** (Vite)
- **Tailwind CSS**
- Yapı: `Components`, `Pages`, `Interfaces` klasörleri

## Proje Yapısı

```
src/
├── Components/    # TodoForm, TodoList, TodoItem
├── Pages/         # TodoPage
├── Interfaces/    # Todo (tip/yardımcı)
├── App.jsx
├── main.jsx
└── index.css
```

## CRUD İşlemleri

| İşlem   | Açıklama                          |
|--------|------------------------------------|
| **Ekle** | Yeni görev form ile eklenir        |
| **Listele** | Tüm görevler listelenir           |
| **Güncelle** | Düzenle butonu ile metin güncellenir, checkbox ile tamamlandı işaretlenir |
| **Sil** | Sil butonu ile görev kaldırılır   |

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

## GitHub'a Yükleme

```bash
git add .
git commit -m "SkillTrack TODO - React CRUD projesi"
# GitHub'da yeni repo oluşturun: https://github.com/new (ör: SkillTrack, public)
git remote add origin https://github.com/KULLANICI_ADINIZ/SkillTrack.git
git branch -M main
git push -u origin main
```

`KULLANICI_ADINIZ` yerine kendi GitHub kullanıcı adınızı yazın.

## Netlify ile Yayına Alma

1. [Netlify](https://www.netlify.com/) hesabı açın.
2. "Add new site" → "Import an existing project" → GitHub repo’nuzu seçin.
3. Build ayarları: Build command: `npm run build`, Publish directory: `dist`.
4. Deploy edin. `netlify.toml` dosyası SPA yönlendirmesini otomatik ayarlar.
5. Canlı site linkini proje teslim formunda paylaşın.

## Ekran Görüntüsü

Proje çalıştırıldığında ana sayfa aşağıdaki gibidir. En az bir ekran görüntüsü proje teslim formuna eklenebilir.

![SkillTrack TODO](screenshot.png)

*(Çalışan uygulamanın ekran görüntüsü `screenshot.png` olarak proje köküne kaydedilebilir.)*

## Lisans

Eğitim projesi - serbest kullanım.
