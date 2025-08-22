type ContactsData = {
    shell : string;
    whatsapp : string;
    gmail : string;
    linkedin : string;
}

export const CONTACTS : ContactsData = {
    shell : "$ ping firas.mosbehi",
    whatsapp : "33774572212",
    gmail : "firas.mosbehi@insat.ucar.tn",
    linkedin : "https://www.linkedin.com/in/firas-mosbahi-6363b420a/"
}

export const ContactsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Firas Mosbahi",
  "url": "https://firas.im",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "email",
      "email": "mailto:firas.mosbehi@insat.ucar.tn"
    },
    {
      "@type": "ContactPoint",
      "contactType": "phone",
      "telephone": "+33774572212"
    },
    {
      "@type": "ContactPoint",
      "contactType": "LinkedIn",
      "url": "https://www.linkedin.com/in/firas-mosbahi-6363b420a/"
    }
  ]
};
