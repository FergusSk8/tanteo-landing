import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouteMeta } from '@analogjs/router';
import { HeroComponent } from '../components/hero/hero.component';
import { ExperienceComponent } from "../components/experience/experience.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";

export const routeMeta: RouteMeta = {
  title: 'Tanteo | Decisiones estratégicas respaldadas por datos',
  meta: [
    {
      name: 'description',
      content: 'En Tanteo transformamos información en conocimiento accionable. Expertos en análisis de datos, encuestas y consultoría para impulsar el éxito de su organización.',
    },
    {
      name: 'keywords',
      content: 'análisis de datos, encuestas, consultoría estratégica, Tanteo, inteligencia de negocios, data analytics',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Tanteo | Decisiones estratégicas respaldadas por datos',
    },
    {
      property: 'og:description',
      content: 'Transformamos información en conocimiento accionable para su organización.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://tanteo.com.mx',
    },
    {
      property: 'og:image',
      content: 'https://tanteo.com.mx/logo.png',
    },
    // Twitter
    // {
    //   name: 'twitter:card',
    //   content: 'summary_large_image',
    // },
    // {
    //   name: 'twitter:title',
    //   content: 'Tanteo | Decisiones estratégicas respaldadas por datos',
    // },
    // {
    //   name: 'twitter:description',
    //   content: 'Transformamos información en conocimiento accionable para su organización.',
    // },
    // {
    //   name: 'twitter:image',
    //   content: 'https://tanteo.com.mx/logo.png',
    // },
  ],
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, ContactFormComponent],
  templateUrl: './index.page.html',
})
export default class Home {
  private sanitizer = inject(DomSanitizer);

  public readonly jsonLd: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Tanteo",
        "image": "https://tanteo.com.mx/logo.png",
        "@id": "https://tanteo.com.mx",
        "url": "https://tanteo.com.mx",
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cuautitlan Izcalli",
          "addressLocality": "Mexico",
          "addressRegion": "Mexico",
          "postalCode": "54715",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.686282,
          "longitude": -99.230697
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "description": "En Tanteo transformamos información en conocimiento accionable. Nuestro equipo de expertos brinda soluciones de análisis de datos, encuestas y consultoría."
      }
    </script>
  `);
}
