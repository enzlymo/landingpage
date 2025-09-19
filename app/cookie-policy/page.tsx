import { Metadata } from 'next'
import { cookieDefinitions } from '../../lib/cookies'

export const metadata: Metadata = {
  title: 'Cookie-policy | Lymo AI',
  description: 'Läs om hur Lymo AI använder cookies på vår webbplats och hur du kan hantera dina preferenser.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie-policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vad är cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. 
                De hjälper webbplatsen att komma ihåg information om ditt besök, vilket kan göra 
                det lättare att besöka webbplatsen igen och göra webbplatsen mer användbar för dig.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hur använder vi cookies?</h2>
              <p className="text-gray-700 mb-4">
                Vi använder cookies för att:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Säkerställa att webbplatsen fungerar korrekt</li>
                <li>Förbättra webbplatsens prestanda och användarupplevelse</li>
                <li>Analysera hur webbplatsen används</li>
                <li>Komma ihåg dina preferenser och inställningar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Typer av cookies vi använder</h2>
              
              <div className="space-y-6">
                {Object.entries(cookieDefinitions).map(([key, definition]) => (
                  <div key={key} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {definition.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {definition.description}
                    </p>
                    
                    {definition.cookies.length > 0 && (
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-3">Specifika cookies:</h4>
                        <div className="space-y-3">
                          {definition.cookies.map((cookie, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <div className="font-medium text-gray-900">{cookie.name}</div>
                              <div className="text-gray-600 text-sm mt-1">
                                <strong>Syfte:</strong> {cookie.purpose}
                              </div>
                              <div className="text-gray-600 text-sm">
                                <strong>Varaktighet:</strong> {cookie.duration}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hantera dina cookie-preferenser</h2>
              <p className="text-gray-700 mb-4">
                Du kan när som helst ändra dina cookie-preferenser genom att:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Klicka på cookie-inställningar-knappen på vår webbplats</li>
                <li>Ändra inställningarna i din webbläsare</li>
                <li>Rensa befintliga cookies från din enhet</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 text-sm">
                  <strong>Observera:</strong> Om du inaktiverar vissa cookies kan det påverka 
                  funktionaliteten på vår webbplats.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tredjepartscookies</h2>
              <p className="text-gray-700 mb-4">
                Vissa cookies på vår webbplats placeras av tredjepartstjänster. Vi använder:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> För att analysera webbplatstrafik och användarbeteende</li>
                <li><strong>Google Tag Manager:</strong> För att hantera marknadsföringstagg</li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                Dessa tredjepartsleverantörer har sina egna integritetspolicies och cookie-policys 
                som reglerar hur de samlar in och använder data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dina rättigheter enligt GDPR</h2>
              <p className="text-gray-700 mb-4">
                Som användare inom EU har du följande rättigheter:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Rätt till information om vilken data som samlas in</li>
                <li>Rätt att komma åt dina personuppgifter</li>
                <li>Rätt att korrigera felaktig data</li>
                <li>Rätt att radera dina data (rätten att bli glömd)</li>
                <li>Rätt att begränsa behandlingen av dina data</li>
                <li>Rätt till dataportabilitet</li>
                <li>Rätt att invända mot behandling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakta oss</h2>
              <p className="text-gray-700 mb-4">
                Om du har frågor om vår cookie-policy eller hur vi hanterar dina personuppgifter, 
                kontakta oss på:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-post:</strong> support@lymo.me<br />
                  <strong>Adress:</strong> Lymo AI, Sverige
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ändringar av denna policy</h2>
              <p className="text-gray-700">
                Vi kan uppdatera denna cookie-policy från tid till annan. Eventuella ändringar 
                kommer att publiceras på denna sida med ett uppdaterat datum. Vi rekommenderar 
                att du regelbundet granskar denna policy för att hålla dig informerad om hur 
                vi använder cookies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
