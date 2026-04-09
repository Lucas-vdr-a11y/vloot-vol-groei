import type { DeelvraagContent } from "./types";

export const bonus: DeelvraagContent = {
  slug: "bonus",
  number: 4,
  title: "Het cadeaubon-systeem",
  subtitle: "Een digitaal platform voor cadeaukaarten, boekingen en automatische kortingen",
  question: "Hoe kan een digitaal cadeaubon-systeem bijdragen aan de groei van Rederij Cascade en de uitvoering van de marketingstrategieën uit dit onderzoek?",
  sections: [
    {
      id: "bonus-aanleiding",
      title: "Aanleiding",
      paragraphs: [
        "Tijdens het werken aan dit profielwerkstuk merkten wij dat er een concrete technologische oplossing nodig was om een aantal van onze voorgestelde marketingstrategieën daadwerkelijk uit te voeren. Omdat we tijd over hadden, hebben we besloten om naast het onderzoek ook een werkend product te bouwen.",
        "In deelvraag 1 stelden wij voor om kortingsacties aan te bieden in samenwerking met vakantieparken: gasten die hun accommodatiebewijs tonen, krijgen korting op een rondvaart of arrangement. Dit idee klonk goed op papier, maar in de praktijk was er geen systeem dat dit automatisch kon afhandelen. Kortingscodes moesten handmatig worden aangemaakt en er was geen manier om de korting digitaal te koppelen aan een boeking.",
        "Daarnaast ontbrak er een manier om cadeaukaarten digitaal te verkopen. Cadeaukaarten zijn een krachtig marketinginstrument: ze brengen nieuwe klanten binnen via het netwerk van bestaande klanten, genereren directe omzet en verhogen de kans op herhalingsbezoek. Toch kon je bij Rederij Cascade geen cadeaukaart online kopen.",
        "Om deze twee problemen op te lossen hebben wij een volledig cadeaubon- en boekingsplatform ontwikkeld, te vinden op cadeaukaart.varenbijcascade.com.",
      ],
    },
    {
      id: "bonus-platform",
      title: "Het platform",
      paragraphs: [
        "Het cadeaubon-systeem is een volledige webapplicatie die wij zelf hebben ontworpen en gebouwd. Het platform stelt klanten in staat om cadeaukaarten te kopen, te personaliseren en te verzenden — zowel digitaal als fysiek per post. Ontvangers kunnen hun cadeaukaart inwisselen voor een rondvaart of arrangement naar keuze.",
        "Klanten kunnen kiezen uit drie typen cadeaukaarten: een waardebon (vrij te besteden bedrag), een open arrangement (arrangement naar keuze op een zelf te kiezen datum) of een vast arrangement (specifiek arrangement op een vaste datum). Bij elk type kan de koper extra's toevoegen zoals eten, drinken of excursies.",
        "De cadeaukaarten kunnen gepersonaliseerd worden met een eigen foto, een persoonlijk bericht en een keuze uit verschillende templates voor gelegenheden zoals verjaardagen, jubilea en feestdagen. Digitale kaarten worden direct per e-mail verzonden als PDF, fysieke kaarten worden als ansichtkaart geprint en per post bezorgd.",
        "Het platform is beschikbaar in vier talen: Nederlands, Engels, Duits en Frans. Dit sluit aan bij onze aanbeveling in deelvraag 1 om meertalige informatie beschikbaar te maken, zoals de rondvaartbedrijven in Giethoorn dat ook doen.",
      ],
    },
    {
      id: "bonus-kortingen",
      title: "Het kortingssysteem",
      paragraphs: [
        "Een van de belangrijkste functies van het platform is het ingebouwde promotie- en kortingssysteem. Dit systeem maakt het mogelijk om de kortingsacties die wij in deelvraag 1 hebben voorgesteld daadwerkelijk uit te voeren.",
        "Via het admin dashboard kunnen kortingsacties worden aangemaakt met de volgende opties: een percentagekorting of een vast bedrag, een optionele kortingscode (of automatisch toepassen zonder code), een minimaal bestelbedrag, een maximale korting, een geldigheidsperiode en een maximaal aantal keer dat de korting gebruikt mag worden.",
        "Kortingen kunnen worden ingesteld voor alle producten, alleen voor arrangementen of alleen voor waardebonnen. Ook is het mogelijk om een korting te koppelen aan specifieke arrangementen. Hierdoor kan Rederij Cascade bijvoorbeeld een korting van 15% aanbieden op het Ontdek-arrangement voor gasten van Parc Maasresidence Thorn, met een unieke code die op de flyers bij de receptie staat.",
        "Het systeem houdt automatisch bij hoe vaak een korting is gebruikt, zodat de effectiviteit van elke campagne gemeten kan worden. Dit is precies de data die nodig is om te bepalen welke samenwerkingen met vakantieparken het meeste opleveren.",
      ],
    },
    {
      id: "bonus-voordelen",
      title: "Bijkomende voordelen",
      paragraphs: [
        "Naast het kortingssysteem biedt het platform een aantal bijkomende voordelen die direct bijdragen aan de groei van Rederij Cascade.",
        "Ten eerste genereert het platform directe omzet. Cadeaukaarten worden vooraf betaald via Mollie (iDEAL, creditcard, Bancontact), waardoor Rederij Cascade de inkomsten ontvangt voordat de dienst wordt geleverd. Dit verbetert de cashflow, vooral in het laagseizoen wanneer cadeaukaarten voor de feestdagen worden verkocht.",
        "Ten tweede vergroot het platform het klantenbestand. Elke cadeaukaart die wordt gekocht, brengt potentieel een nieuwe klant binnen — iemand die anders misschien niet van Rederij Cascade had gehoord. De ontvanger bezoekt de website, kiest een arrangement en maakt kennis met het bedrijf.",
        "Ten derde levert het platform waardevolle klantdata op. Het systeem registreert wie er koopt, voor welke gelegenheid, welke arrangementen populair zijn en wanneer cadeaukaarten worden ingewisseld. Deze informatie kan worden gebruikt om de marketingstrategie te verfijnen.",
        "Ten vierde biedt het platform een Cascade Card functie voor medewerkers van samenwerkingspartners. Medewerkers van vakantieparken of andere partners kunnen met hun Cascade Card 10% korting krijgen op arrangementen en extra's. Dit stimuleert niet alleen de samenwerking, maar zorgt er ook voor dat de medewerkers van de vakantieparken zelf ervaren hoe het is om met Rederij Cascade te varen — waardoor zij het aanbod beter kunnen aanbevelen aan hun gasten.",
        "Tot slot is het platform volledig geïntegreerd met het bestaande boekingssysteem van Rederij Cascade (Smart Event Manager). Wanneer een cadeaukaart wordt ingewisseld, wordt automatisch een reservering aangemaakt in het boekingssysteem. Dit betekent dat de hele stroom — van verkoop tot boeking — volledig geautomatiseerd is.",
      ],
    },
    {
      id: "bonus-techniek",
      title: "Technische realisatie",
      paragraphs: [
        "Het platform is gebouwd met dezelfde moderne technologieën als de vacaturewebsite werkenbijcascade.nl: Next.js voor de webapplicatie, een PostgreSQL database voor de opslag van cadeaukaarten, klanten en bestellingen, en Tailwind CSS voor het ontwerp.",
        "Daarnaast zijn er integraties met externe diensten: Mollie voor het afhandelen van betalingen, Resend voor het verzenden van e-mails met de digitale cadeaukaarten, PrintOne voor het drukken en verzenden van fysieke ansichtkaarten en de Smart Event Manager API voor het synchroniseren van arrangementen, vertrektijden en het aanmaken van reserveringen.",
        "Het admin dashboard stelt Rederij Cascade in staat om alle cadeaukaarten te beheren, kortingsacties aan te maken, verkoopcijfers te bekijken en de inhoud van de website aan te passen via een ingebouwd CMS.",
      ],
    },
    {
      id: "bonus-conclusie",
      title: "Conclusie",
      paragraphs: [
        "Het cadeaubon-systeem op cadeaukaart.varenbijcascade.com is een concrete technologische uitvoering van de marketingideeën uit dit profielwerkstuk. Het platform maakt het mogelijk om kortingsacties met vakantieparken automatisch af te handelen, cadeaukaarten digitaal en fysiek te verkopen, klantdata te verzamelen en de hele stroom van verkoop tot boeking te automatiseren.",
        "Door dit platform te bouwen laten wij zien dat de aanbevelingen uit ons onderzoek niet alleen theoretisch zijn, maar ook praktisch uitvoerbaar. Het systeem is live, functioneel en klaar om ingezet te worden door Rederij Cascade.",
      ],
    },
  ],
};
