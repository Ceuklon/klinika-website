# Klinika Chirurgii i Urologii Dzieci i Młodzieży - UCK Gdańsk

Oficjalna strona internetowa Katedry i Kliniki Chirurgii i Urologii Dzieci i Młodzieży Uniwersyteckiego Centrum Klinicznego w Gdańsku.

## 🌟 Funkcje strony

- **Responsywny design** - działa na wszystkich urządzeniach
- **Informacje o wydarzeniach** - konferencje i koncerty charytatywne
- **Zakres działalności** - szczegółowy opis specjalizacji kliniki
- **Kontakt** - kompletne dane kontaktowe
- **Nowoczesne technologie** - React, Tailwind CSS, Vite

## 🚀 Deployment na GitHub Pages

### Automatyczne wdrożenie

Strona jest automatycznie wdrażana na GitHub Pages przy każdym push do branch `main` dzięki GitHub Actions.

### Instrukcje wdrożenia

1. **Utwórz nowe repozytorium na GitHub:**
   - Nazwa: `klinika-website`
   - Ustaw jako publiczne
   - Nie dodawaj README, .gitignore ani licencji (już istnieją)

2. **Połącz lokalne repozytorium z GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/klinika-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Włącz GitHub Pages:**
   - Idź do Settings → Pages
   - Source: "GitHub Actions"
   - Workflow zostanie automatycznie uruchomiony

4. **Strona będzie dostępna pod adresem:**
   ```
   https://YOUR_USERNAME.github.io/klinika-website/
   ```

## 🛠️ Rozwój lokalny

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Budowanie do produkcji
npm run build

# Podgląd buildu produkcyjnego
npm run preview
```

## 📁 Struktura projektu

```
├── public/                 # Pliki statyczne
├── src/
│   ├── assets/            # Obrazy i inne zasoby
│   ├── components/        # Komponenty React
│   ├── App.jsx           # Główny komponent
│   └── main.jsx          # Punkt wejścia
├── .github/workflows/     # GitHub Actions
└── dist/                 # Build produkcyjny
```

## 🎨 Technologie

- **React** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS** - Stylowanie
- **Lucide React** - Ikony
- **GitHub Pages** - Hosting

## 📞 Kontakt

**Katedra i Klinika Chirurgii i Urologii Dzieci i Młodzieży**  
Uniwersyteckie Centrum Kliniczne w Gdańsku  
ul. Smoluchowskiego 17, 80-214 Gdańsk  

Tel: 58 727 05 05  
Email: chirurgiadziecieca@uck.gda.pl  

## 📄 Licencja

Ten projekt jest udostępniony na licencji MIT License. Zobacz plik [LICENSE](LICENSE) aby uzyskać więcej informacji.

---

*Ad serve futura - To Serve the Future!*

