import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Heart, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Stethoscope,
  Building2,
  Globe,
  Music,
  Ticket
} from 'lucide-react'
import koncertPlakat from './assets/koncert-plakat.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Klinika Chirurgii i Urologii</h1>
                <p className="text-sm text-gray-600">Dzieci i Młodzieży UCK Gdańsk</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-blue-600 bg-blue-50' : ''}`}
              >
                Strona główna
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-blue-600 bg-blue-50' : ''}`}
              >
                O nas
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'services' ? 'text-blue-600 bg-blue-50' : ''}`}
              >
                Zakres działalności
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'events' ? 'text-blue-600 bg-blue-50' : ''}`}
              >
                Wydarzenia
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-blue-600 bg-blue-50' : ''}`}
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ad serve futura
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              To Serve the Future!
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Katedra i Klinika Chirurgii i Urologii Dzieci i Młodzieży<br />
              Uniwersyteckiego Centrum Klinicznego w Gdańsku
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Poznaj nas
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Zakres działalności
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aktualne Wydarzenia
            </h2>
            <p className="text-xl text-gray-600">
              Zapraszamy na nadchodzące wydarzenia związane z naszą kliniką
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Konferencja */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  <Badge variant="secondary" className="bg-white text-green-600">
                    Konferencja
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Pediatric Surgery Conference 2025
                </CardTitle>
                <CardDescription className="text-green-100">
                  Międzynarodowa konferencja chirurgii dziecięcej
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>Gdańsk, Polska</span>
                  </div>
                  <p className="text-gray-700">
                    Prestiżowa konferencja naukowa poświęcona najnowszym osiągnięciom 
                    w dziedzinie chirurgii dziecięcej. Udział biorą eksperci z całego świata.
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://pediatricsurgery2025.pl/', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Więcej informacji
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Koncert */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <div className="flex items-center gap-2">
                  <Music className="h-6 w-6" />
                  <Badge variant="secondary" className="bg-white text-orange-600">
                    Koncert Charytatywny
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  XI Koncert Charytatywny
                </CardTitle>
                <CardDescription className="text-orange-100">
                  "Muzyka czyni cuda"
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={koncertPlakat} 
                    alt="Plakat koncertu charytatywnego" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">7</div>
                      <div className="text-sm text-gray-600">LISTOPADA</div>
                      <div className="text-lg font-semibold text-gray-800">19:00</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Artyści:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• <strong>Jonathan Tetelman</strong> - tenor</li>
                      <li>• <strong>Carolina López Moreno</strong> - sopran</li>
                      <li>• <strong>Gianluca Marcianò</strong> - dyrygent</li>
                      <li>• Orkiestra Polskiej Filharmonii Bałtyckiej</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Program:</h4>
                    <p className="text-gray-700">Arie Verdiego i Pucciniego</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">
                      <Heart className="h-4 w-4 inline mr-1" />
                      Dochód z koncertu przeznaczony jest na wyposażenie medyczne 
                      Kliniki Chirurgii i Urologii Dzieci i Młodzieży w UCK Gdańsk
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Bilety:</h4>
                    <p className="text-gray-700">Od 106 zł</p>
                    <p className="text-sm text-gray-600">
                      Kasa Polskiej Filharmonii Bałtyckiej<br />
                      Tel: 58 320 62 62<br />
                      www.bilety24.pl
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => window.open('https://www.bilety24.pl', '_blank')}
                  >
                    <Ticket className="h-4 w-4 mr-2" />
                    Kup bilety
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O naszej klinice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jesteśmy jednym z wiodących ośrodków chirurgii dziecięcej w Polsce, 
              oferującym pełne spektrum wysoce specjalistycznej opieki.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Doskonałość</h3>
              <p className="text-gray-600">
                UCK Gdańsk konsekwentnie zajmuje pozycje w pierwszej trójce 
                krajowych rankingów szpitali
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Współpraca międzynarodowa</h3>
              <p className="text-gray-600">
                Aktywny udział w trzech Europejskich Sieciach Referencyjnych (ERN)
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innowacje</h3>
              <p className="text-gray-600">
                Pionierzy chirurgii robotycznej u dzieci i obrazowania z fluorescencją ICG
              </p>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nasza misja</h3>
            <p className="text-lg text-gray-700 mb-4">
              Wspieramy dzieci z chorobami chirurgicznymi, podnosimy jakość opieki chirurgicznej 
              pediatrycznej w regionie pomorskim i promujemy badania naukowe mające na celu 
              poprawę wyników chirurgicznych.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">ERN PaedCan</Badge>
                <span className="text-sm text-gray-600">Nowotwory dziecięce</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">ERN eUROGEN</Badge>
                <span className="text-sm text-gray-600">Rzadkie choroby urogenitalne</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">ERN ERNICA</Badge>
                <span className="text-sm text-gray-600">Wady wrodzone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zakres działalności
            </h2>
            <p className="text-xl text-gray-600">
              Oferujemy pełną gamę procedur diagnostycznych i operacyjnych z zakresu chirurgii dziecięcej
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Chirurgia onkologiczna</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Resekcje nowotworów wątroby</li>
                <li>• Chemoembolizacja (TACE)</li>
                <li>• Ablacja radiofrekwencyjna (RFA)</li>
                <li>• Krajowa koordynacja leczenia guzów wątroby</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Chirurgia małoinwazyjna</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Chirurgia przez jedno nacięcie (SILS)</li>
                <li>• Torakoskopowe lobektomie</li>
                <li>• Laparoskopowe operacje</li>
                <li>• Chirurgia robotyczna</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Urologia rekonstrukcyjna</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Rekonstrukcje dróg moczowych</li>
                <li>• Pęcherze jelitowe</li>
                <li>• Procedury Mitrofanoff</li>
                <li>• Leczenie laserowe kamicy</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Chirurgia przełyku</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Rekonstrukcje atrezji przełyku</li>
                <li>• Pełne odtworzenie przełyku</li>
                <li>• Torakoskopowe zespolenia</li>
                <li>• Leczenie refluksu</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Chirurgia jelitowa</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Wydłużanie jelita (STEP, Bianchi)</li>
                <li>• Choroba Hirschsprunga (TEPT)</li>
                <li>• Zespół krótkiego jelita</li>
                <li>• Rehabilitacja jelitowa</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Chirurgia klatki piersiowej</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Klatka lejkowata</li>
                <li>• Klatka kurza</li>
                <li>• Wady wrodzone płuc</li>
                <li>• Torakoskopia</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <h3 className="text-2xl font-bold mb-4">Innowacyjne technologie</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Chirurgia robotyczna</h4>
                  <p className="text-blue-100">
                    Jesteśmy jednym z pierwszych ośrodków w Polsce wykonujących 
                    operacje robotyczne u dzieci
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Obrazowanie ICG</h4>
                  <p className="text-blue-100">
                    Pionierzy chirurgii obrazowo-naprowadzanej z fluorescencją ICG
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kontakt
            </h2>
            <p className="text-xl text-gray-600">
              Skontaktuj się z nami, aby umówić wizytę lub uzyskać więcej informacji
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                Lokalizacja
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Centrum Medycyny Nieinwazyjnej</h4>
                  <p className="text-gray-600">ul. Smoluchowskiego 17, 80-214 Gdańsk</p>
                  <p className="text-gray-600">piętro III</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Uniwersyteckie Centrum Kliniczne</h4>
                  <p className="text-gray-600">ul. Dębinki 7, 80-952 Gdańsk</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                Kontakt telefoniczny
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">Rejestracja</p>
                    <p className="text-gray-600">58 727 05 05 (wybrać 1)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">Pokój lekarski</p>
                    <p className="text-gray-600">58 584 49 66</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">Sekretariat</p>
                    <p className="text-gray-600">58 584 49 60</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Kontakt elektroniczny
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">E-mail kliniki</p>
                    <p className="text-gray-600">chirurgiadziecieca@uck.gda.pl</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">E-mail uniwersytecki</p>
                    <p className="text-gray-600">pedsurg@gumed.edu.pl</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">Kierownik kliniki</p>
                    <p className="text-gray-600">piotr.czauderna@gumed.edu.pl</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Kierownictwo
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">Prof. Piotr Czauderna, MD, PhD</p>
                  <p className="text-gray-600">Kierownik Kliniki</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Dr hab. Andrzej Gołębiewski, MD, PhD</p>
                  <p className="text-gray-600">Zastępca Kierownika</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Anna Kisielewska-Jessa</p>
                  <p className="text-gray-600">Pielęgniarka Oddziałowa</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-lg font-bold">Klinika Chirurgii i Urologii</h3>
                  <p className="text-gray-400">Dzieci i Młodzieży UCK Gdańsk</p>
                </div>
              </div>
              <p className="text-gray-400">
                Ad serve futura - To Serve the Future!
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white">O nas</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Zakres działalności</button></li>
                <li><button onClick={() => scrollToSection('events')} className="hover:text-white">Wydarzenia</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white">Kontakt</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Współpraca</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ERN PaedCan</li>
                <li>ERN eUROGEN</li>
                <li>ERN ERNICA</li>
                <li>UEMS Section of Paediatric Surgery</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Klinika Chirurgii i Urologii Dzieci i Młodzieży UCK Gdańsk. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

