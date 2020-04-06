const countries = [
  {
    country: "Afghanistan"
  },
  {
    country: "Albania"
  },
  {
    country: "Algeria"
  },
  {
    country: "Andorra"
  },
  {
    country: "Angola"
  },
  {
    country: "Anguilla"
  },
  {
    country: "Antigua & Barbuda"
  },
  {
    country: "Argentina"
  },
  {
    country: "Armenia"
  },
  {
    country: "Aruba"
  },
  {
    country: "Australia"
  },
  {
    country: "Austria"
  },
  {
    country: "Azerbaijan"
  },
  {
    country: "Bahamas"
  },
  {
    country: "Bahrain"
  },
  {
    country: "Bangladesh"
  },
  {
    country: "Barbados"
  },
  {
    country: "Belarus"
  },
  {
    country: "Belgium"
  },
  {
    country: "Belize"
  },
  {
    country: "Benin"
  },
  {
    country: "Bermuda"
  },
  {
    country: "Bhutan"
  },
  {
    country: "Bolivia"
  },
  {
    country: "Bosnia & Herzegovina"
  },
  {
    country: "Botswana"
  },
  {
    country: "Brazil"
  },
  {
    country: "British Virgin Islands"
  },
  {
    country: "Brunei"
  },
  {
    country: "Bulgaria"
  },
  {
    country: "Burkina Faso"
  },
  {
    country: "Burundi"
  },
  {
    country: "Cambodia"
  },
  {
    country: "Cameroon"
  },
  {
    country: "Canada"
  },
  {
    country: "Cape Verde"
  },
  {
    country: "Cayman Islands"
  },
  {
    country: "Central Arfrican Republic"
  },
  {
    country: "Chad"
  },
  {
    country: "Chile"
  },
  {
    country: "China"
  },
  {
    country: "Colombia"
  },
  {
    country: "Congo"
  },
  {
    country: "Cook Islands"
  },
  {
    country: "Costa Rica"
  },
  {
    country: "Cote D Ivoire"
  },
  {
    country: "Croatia"
  },
  {
    country: "Cuba"
  },
  {
    country: "Curacao"
  },
  {
    country: "Cyprus"
  },
  {
    country: "Czech Republic"
  },
  {
    country: "Denmark"
  },
  {
    country: "Djibouti"
  },
  {
    country: "Dominica"
  },
  {
    country: "Dominican Republic"
  },
  {
    country: "Ecuador"
  },
  {
    country: "Egypt"
  },
  {
    country: "El Salvador"
  },
  {
    country: "Equatorial Guinea"
  },
  {
    country: "Eritrea"
  },
  {
    country: "Estonia"
  },
  {
    country: "Ethiopia"
  },
  {
    country: "Falkland Islands"
  },
  {
    country: "Faroe Islands"
  },
  {
    country: "Fiji"
  },
  {
    country: "Finland"
  },
  {
    country: "France"
  },
  {
    country: "French Polynesia"
  },
  {
    country: "French West Indies"
  },
  {
    country: "Gabon"
  },
  {
    country: "Gambia"
  },
  {
    country: "Georgia"
  },
  {
    country: "Germany"
  },
  {
    country: "Ghana"
  },
  {
    country: "Gibraltar"
  },
  {
    country: "Greece"
  },
  {
    country: "Greenland"
  },
  {
    country: "Grenada"
  },
  {
    country: "Guam"
  },
  {
    country: "Guatemala"
  },
  {
    country: "Guernsey"
  },
  {
    country: "Guinea"
  },
  {
    country: "Guinea Bissau"
  },
  {
    country: "Guyana"
  },
  {
    country: "Haiti"
  },
  {
    country: "Honduras"
  },
  {
    country: "Hong Kong"
  },
  {
    country: "Hungary"
  },
  {
    country: "Iceland"
  },
  {
    country: "India"
  },
  {
    country: "Indonesia"
  },
  {
    country: "Iran"
  },
  {
    country: "Iraq"
  },
  {
    country: "Ireland"
  },
  {
    country: "Isle of Man"
  },
  {
    country: "Israel"
  },
  {
    country: "Italy"
  },
  {
    country: "Jamaica"
  },
  {
    country: "Japan"
  },
  {
    country: "Jersey"
  },
  {
    country: "Jordan"
  },
  {
    country: "Kazakhstan"
  },
  {
    country: "Kenya"
  },
  {
    country: "Kiribati"
  },
  {
    country: "Kosovo"
  },
  {
    country: "Kuwait"
  },
  {
    country: "Kyrgyzstan"
  },
  {
    country: "Laos"
  },
  {
    country: "Latvia"
  },
  {
    country: "Lebanon"
  },
  {
    country: "Lesotho"
  },
  {
    country: "Liberia"
  },
  {
    country: "Libya"
  },
  {
    country: "Liechtenstein"
  },
  {
    country: "Lithuania"
  },
  {
    country: "Luxembourg"
  },
  {
    country: "Macau"
  },
  {
    country: "Macedonia"
  },
  {
    country: "Madagascar"
  },
  {
    country: "Malawi"
  },
  {
    country: "Malaysia"
  },
  {
    country: "Maldives"
  },
  {
    country: "Mali"
  },
  {
    country: "Malta"
  },
  {
    country: "Marshall Islands"
  },
  {
    country: "Mauritania"
  },
  {
    country: "Mauritius"
  },
  {
    country: "Mexico"
  },
  {
    country: "Micronesia"
  },
  {
    country: "Moldova"
  },
  {
    country: "Monaco"
  },
  {
    country: "Mongolia"
  },
  {
    country: "Montenegro"
  },
  {
    country: "Montserrat"
  },
  {
    country: "Morocco"
  },
  {
    country: "Mozambique"
  },
  {
    country: "Myanmar"
  },
  {
    country: "Namibia"
  },
  {
    country: "Nauro"
  },
  {
    country: "Nepal"
  },
  {
    country: "Netherlands"
  },
  {
    country: "Netherlands Antilles"
  },
  {
    country: "New Caledonia"
  },
  {
    country: "New Zealand"
  },
  {
    country: "Nicaragua"
  },
  {
    country: "Niger"
  },
  {
    country: "Nigeria"
  },
  {
    country: "North Korea"
  },
  {
    country: "Norway"
  },
  {
    country: "Oman"
  },
  {
    country: "Pakistan"
  },
  {
    country: "Palau"
  },
  {
    country: "Palestine"
  },
  {
    country: "Panama"
  },
  {
    country: "Papua New Guinea"
  },
  {
    country: "Paraguay"
  },
  {
    country: "Peru"
  },
  {
    country: "Philippines"
  },
  {
    country: "Poland"
  },
  {
    country: "Portugal"
  },
  {
    country: "Puerto Rico"
  },
  {
    country: "Qatar"
  },
  {
    country: "Reunion"
  },
  {
    country: "Romania"
  },
  {
    country: "Russia"
  },
  {
    country: "Rwanda"
  },
  {
    country: "Saint Pierre & Miquelon"
  },
  {
    country: "Samoa"
  },
  {
    country: "San Marino"
  },
  {
    country: "Sao Tome and Principe"
  },
  {
    country: "Saudi Arabia"
  },
  {
    country: "Senegal"
  },
  {
    country: "Serbia"
  },
  {
    country: "Seychelles"
  },
  {
    country: "Sierra Leone"
  },
  {
    country: "Singapore"
  },
  {
    country: "Slovakia"
  },
  {
    country: "Slovenia"
  },
  {
    country: "Solomon Islands"
  },
  {
    country: "Somalia"
  },
  {
    country: "South Africa"
  },
  {
    country: "South Korea"
  },
  {
    country: "South Sudan"
  },
  {
    country: "Spain"
  },
  {
    country: "Sri Lanka"
  },
  {
    country: "St Kitts & Nevis"
  },
  {
    country: "St Lucia"
  },
  {
    country: "St Vincent"
  },
  {
    country: "Sudan"
  },
  {
    country: "Suriname"
  },
  {
    country: "Swaziland"
  },
  {
    country: "Sweden"
  },
  {
    country: "Switzerland"
  },
  {
    country: "Syria"
  },
  {
    country: "Taiwan"
  },
  {
    country: "Tajikistan"
  },
  {
    country: "Tanzania"
  },
  {
    country: "Thailand"
  },
  {
    country: "Timor L'Este"
  },
  {
    country: "Togo"
  },
  {
    country: "Tonga"
  },
  {
    country: "Trinidad & Tobago"
  },
  {
    country: "Tunisia"
  },
  {
    country: "Turkey"
  },
  {
    country: "Turkmenistan"
  },
  {
    country: "Turks & Caicos"
  },
  {
    country: "Tuvalu"
  },
  {
    country: "Uganda"
  },
  {
    country: "Ukraine"
  },
  {
    country: "United Arab Emirates"
  },
  {
    country: "United Kingdom"
  },
  {
    country: "United States of America"
  },
  {
    country: "Uruguay"
  },
  {
    country: "Uzbekistan"
  },
  {
    country: "Vanuatu"
  },
  {
    country: "Vatican City"
  },
  {
    country: "Venezuela"
  },
  {
    country: "Vietnam"
  },
  {
    country: "Virgin Islands (US)"
  },
  {
    country: "Yemen"
  },
  {
    country: "Zambia"
  },
  {
    country: "Zimbabwe"
  }
];

module.exports = countries;
