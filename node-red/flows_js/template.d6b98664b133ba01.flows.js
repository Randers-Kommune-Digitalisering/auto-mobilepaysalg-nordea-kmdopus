const Node = {
  "id": "d6b98664b133ba01",
  "type": "template",
  "z": "a1938e80ddbe5950",
  "g": "745ee7cac00b8ea6",
  "name": "Sæt konteringsregler",
  "field": "konteringsregler",
  "fieldType": "global",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 400,
  "y": 500,
  "wires": [
    [
      "8ac398a8353d0e9d"
    ]
  ],
  "_order": 83
}

Node.template = `
[
    [
        {
            "name": "Reference",
            "value": "6687210",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "-333,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "40000000",
            "PSP": "XG-0000000006-00007",
            "SIO": null,
            "Notat": "SKAL STÅ FØR DEN GENERELLE REGEL"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8152290",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "-333,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "40000000",
            "PSP": "XG-0000000006-00007",
            "SIO": null,
            "Notat": "SKAL STÅ FØR DEN GENERELLE REGEL"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "1992317",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "DK-abonnement",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95941202",
            "PSP": "",
            "SIO": null,
            "Notat": "SKAL STÅ FØR DEN GENERELLE REGEL"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Dep",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "30000,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95950000",
            "PSP": "",
            "SIO": null,
            "Notat": "Salg af grunde. Kommer ikke altid med tekst dep, jævnligt kun adressen. Betina Bak."
        }
    ],
    [
        {
            "name": "Reference",
            "value": "9913008388",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Rente af obligationer",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "94600005",
            "PSP": "",
            "SIO": null,
            "Notat": "Randers Kommunes kunstfond"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "9913008388",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Udtrukne obligationer",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "94200011",
            "PSP": "",
            "SIO": null,
            "Notat": "Randers Kommunes kunstfond"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Danica Pension",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "1251,70",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95914002",
            "PSP": "",
            "SIO": null,
            "Notat": "Posteringstekst inkl. CPR. CPR er ikke med i banken?"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Danica Pension",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "1714,30",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95914002",
            "PSP": "",
            "SIO": null,
            "Notat": "Posteringstekst inkl. CPR. CPR er ikke med i banken?"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "PFA Pension",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "95914002",
            "PSP": "",
            "SIO": null,
            "Notat": "Posteringstekst inkl. CPR"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Sampension",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95914002",
            "PSP": "",
            "SIO": null,
            "Notat": "Posteringstekst inkl. CPR"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Regres",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Forsikring",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000003333-00003",
            "SIO": null,
            "Notat": "Pia Fonnesbæk vedr. spørgsmål."
        }
    ],
    [
        {
            "name": "Reference",
            "value": "0019",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90520001",
            "PSP": "",
            "SIO": null,
            "Notat": "OBS-konto"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Afdrag indskudslån",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Udbetaling Danmark",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "UDK - afdrag indskudslån",
            "Artskonto": "95990009",
            "PSP": "",
            "SIO": null,
            "Notat": "Modposteres af BTK"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "NKS-KY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95931701",
            "PSP": "",
            "SIO": null,
            "Notat": "KY"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "KP-",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Kommune",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Afsender fra bank",
            "Artskonto": "95931700",
            "PSP": "",
            "SIO": null,
            "Notat": "KP"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "KP-",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Kommune",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Afsender fra bank",
            "Artskonto": "95931700",
            "PSP": "",
            "SIO": null,
            "Notat": "KP"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Mellemkommunal afreg",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 339"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Indfasningsstøtte",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 210"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Rekvireret udb",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 104"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Foreningstilskud",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 102"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Leverandørudbetaling",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 091"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "KMF Begravelse",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 057"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Sygedagpenge lønref",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 047"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Sygedagpenge",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 045"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Boliglån",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 042"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Social pension",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 039"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Tilskud til børnepas",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "KMD Udbetaling 030"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "E-penge",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "MSS",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "E-penge",
            "Artskonto": "72000000",
            "PSP": "XG-0000005228-00003",
            "SIO": null,
            "Notat": "Kantinen"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "141360",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Børne- og undervisning",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "86000000",
            "PSP": "XG-0000002066-00003",
            "SIO": null,
            "Notat": "Kan gælde forskellige P-numre. P-nummer måske kun i advis."
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "6597,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000003025-00001",
            "SIO": null,
            "Notat": "Huslejenævnet"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "4398,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000003025-00001",
            "SIO": null,
            "Notat": "Huslejenævnet"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "345,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000003025-00001",
            "SIO": null,
            "Notat": "Huslejenævnet"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Bgs",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "345,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000003025-00001",
            "SIO": null,
            "Notat": "Huslejenævnet"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "SENR",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "161,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000003025-00001",
            "SIO": null,
            "Notat": "Huslejenævnet"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Info-overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95912001",
            "PSP": "",
            "SIO": null,
            "Notat": "Elsebeth Morgensen vedr. spørgsmål"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Løn",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Randers Kunstmuseum",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95911000",
            "PSP": "",
            "SIO": null,
            "Notat": "Elsebeth Morgensen vedr. spørgsmål"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "KSD-",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "",
            "Artskonto": "95914005",
            "PSP": "",
            "SIO": null,
            "Notat": "Dagpenge - Poster fra Hjørnesten og Randers Kunstmuseum skal tages manuelt"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "E-lån",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "92500201",
            "PSP": "",
            "SIO": null,
            "Notat": "CPR ell. ejendomsnr. skal med i posteringstekst"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Elån",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "92500201",
            "PSP": "",
            "SIO": null,
            "Notat": "CPR ell. ejendomsnr. skal med i posteringstekst"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "030000000",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "MobilePay",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "91407041 efter bankfil mandag"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "040000000",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "MobilePay",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90540000",
            "PSP": "",
            "SIO": null,
            "Notat": "91407041 efter bankfil mandag"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "NKS-KP",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95931700",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "TBK 730",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Udbetaling Danmark for bolig",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "",
            "Artskonto": "95990026",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Svend Aage Sølvsten",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Aktivitetsudvalget Korshøjscentret kageforplejning",
            "Artskonto": "79000000",
            "PSP": "XG-0000004526-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006981",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Regnskab 006981",
            "Artskonto": "95990009",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "6687210",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK6687210 Trådløs Dankortterminal - Udlån fra Regnskab",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00016",
            "SIO": null,
            "Notat": "Gældende indtil 01.05.2023 - Derefter 95990009"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8152290",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK8152290 Trådløs Dankortterminal - Udlån fra Regnskab",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00016",
            "SIO": null,
            "Notat": "Gældende indtil 01.05.2023 - Derefter 95990009"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7893415",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7893415 - internationalekort Kommunikation",
            "Artskonto": "95990009",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "Løn",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Verdo",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "",
            "Artskonto": "95990001",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011888",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Museum Østjylland 011888",
            "Artskonto": "95941300",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "2471043",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK2471043 Museum Østjylland",
            "Artskonto": "95941300",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5247969",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5247969 Museum Østjylland",
            "Artskonto": "95941300",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "9475369104",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Nets nr. 9475369104",
            "Artskonto": "95941300",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7864309",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7864309",
            "Artskonto": "95941300",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7978497",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7978497",
            "Artskonto": "95941300",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "MOE",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion MOE",
            "Artskonto": "95941300",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012195",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Randers Bibliotek 012195",
            "Artskonto": "95941202",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012193",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Ladegården (Back up) 012193",
            "Artskonto": "90540005",
            "PSP": "",
            "SIO": null,
            "Notat": "Back up pga. manglende fornyelse af eksisterende kort."
        }
    ],
    [
        {
            "name": "Reference",
            "value": "1992317",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK1992317 Biblioteket",
            "Artskonto": "95941202",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Bibliotek",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Randers Bibliotek",
            "Artskonto": "95941202",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8674335",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Nets 8674335 internationale kortbetalinger",
            "Artskonto": "95941202",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4521609",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4521609",
            "Artskonto": "95941200",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Værket",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "500000,00",
            "value2": "",
            "operator": ">"
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95941110",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Kommunalt træk",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Udbetaling Danmark",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95932008",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Kundenr: 33485468",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95931505",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Kundenr: 29759456",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95931502",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "#Hjørnestenen",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "",
            "Artskonto": "95931400",
            "PSP": "",
            "SIO": null,
            "Notat": "Gælder kun overførsel af driftsresultat, sygeref. skal til 95914005"
        }
    ],
    [
        {
            "name": "Reference",
            "value": "6256651",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK6256651",
            "Artskonto": "95931206",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7810906",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7810906 - Borgerservice Pas, billeder og fingeraftryk",
            "Artskonto": "95931206",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4430778",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Dankort-salg",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4430778 Borgerservice",
            "Artskonto": "95931205",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4430778",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "DK-abonnement",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4430778 Abonnement",
            "Artskonto": "40000000",
            "PSP": "XG-0000003020-00258",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4430778",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Dankortsalg-gebyr",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4430778 Gebyrer",
            "Artskonto": "40000000",
            "PSP": "XG-0000003020-00258",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7620659",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7620659",
            "Artskonto": "95931205",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7673000",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7673000",
            "Artskonto": "95931202",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Kundenr: 29759464",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95931011",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 050607",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95930007",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Bidrag",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Udbetaling Danmark",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Udbetaling Danmark Bidrag",
            "Artskonto": "95920000",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "BDP-",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "",
            "Artskonto": "95914006",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "31 kapital",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95912000",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "30 kapital",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95912000",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "tj",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Vandmiljø Randers",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95911002",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Randers Havn",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95911001",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "AI-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "AN-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "BQ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "BW-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "BX-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "BZ",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "CP-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "CQ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "CU-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "CV-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "CY-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "CZ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OB-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OG-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OI-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OK-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OQ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OR-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OT-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OU-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OV-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OW-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OX-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OY-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OZ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RG-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RI-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RJ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RM-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RO-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RQ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RR-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RS-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RU-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RV-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RW-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RY-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RZ-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Cap",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Kundenr: 34199620",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Retur fra skat vedr. RW",
            "Artskonto": "95910006",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Skattekontoen, kredi",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Skattekontoen, kreditering",
            "Artskonto": "95910006",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Fonds",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95000100",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 050016",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "94700003",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7131666",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK7131666 - Mit Betalingsoverblik",
            "Artskonto": "91407040",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8499089",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK8499089 - Mit Betalingsoverblik",
            "Artskonto": "91407040",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8871930",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "91407032",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "BSR08871930",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "91407032",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "K 86446707",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "K 86446707",
            "Artskonto": "91407030",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "- SKAT",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "91407020",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Indskudslån",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Lejerbo",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "1100,00",
            "value2": "",
            "operator": "<"
        },
        {
            "name": "Kontering",
            "text": "Indskudslån Lejerbo",
            "Artskonto": "91407008",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Indskudslån",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "1100,00",
            "value2": "",
            "operator": "<"
        },
        {
            "name": "Kontering",
            "text": "Afsender fra bank",
            "Artskonto": "91407008",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "209082",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "91407007",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "BSR00209082",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "91407007",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8871973",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "91407006",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "BSR08871973",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "91407006",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "K 86136228",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "K 86136228",
            "Artskonto": "91407005",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "K 89182816",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "K 89182816",
            "Artskonto": "91407004",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "K 84788767",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "K 84788767",
            "Artskonto": "91407003",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Udtrukne obligationer",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90800100",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Betalingsservice",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Betalingsservice månedsoverførsel",
            "Artskonto": "90540015",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "56685",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Ls, kreditor 56685Udbetaling Loomis",
            "Artskonto": "90100036",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006992",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard ACR 006992",
            "Artskonto": "90100035",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "90100035",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion ACR",
            "Artskonto": "90100035",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "ACR",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion ACR",
            "Artskonto": "90100035",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "DAC",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion ACR",
            "Artskonto": "90100035",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006983",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard CBR 006983",
            "Artskonto": "90100011",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "CBR",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion CBR",
            "Artskonto": "90100011",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "90100011",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion CBR",
            "Artskonto": "90100011",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "mønter Bib",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90100002",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012180",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Borgerservice 012180",
            "Artskonto": "90100001",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "udbetaling af mønt",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "90100001",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "mønt borgerservice",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Mønt Borgerservice",
            "Artskonto": "90100001",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "141442",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Børne- og undervisning",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "86000000",
            "PSP": "XG-0000002067-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "141296",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Børne- og undervisning",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "86000000",
            "PSP": "XG-0000002068-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "141855",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Børne- og undervisning",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "86000000",
            "PSP": "XG-0000000034-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "143498",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Børne- og undervisning",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "86000000",
            "PSP": "XG-0000002069-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "142731",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Børne- og undervisning",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Advis fra bank",
            "Artskonto": "86000000",
            "PSP": "XG-0000002806-00014",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "RG20938",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "95910014",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "3135-0006",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Socialstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Socialstyrelsen",
            "Artskonto": "86000000",
            "PSP": "XG-0000004599-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "7195-0011",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Socialstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Socialstyrelsen",
            "Artskonto": "86000000",
            "PSP": "XG-0000003913-00090",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "7225-0013",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Socialstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Socialstyrelsen",
            "Artskonto": "86000000",
            "PSP": "XG-0000002810-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "6105-0135",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Socialstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Socialstyrelsen",
            "Artskonto": "86000000",
            "PSP": "XG-0000003912-00004",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "2367-0075",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Socialstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Socialstyrelsen",
            "Artskonto": "86000000",
            "PSP": "XG-0000004507-00131",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "2955-0014",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Socialstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Socialstyrelsen",
            "Artskonto": "86000000",
            "PSP": "XG-0000004178-00007",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "KUREG",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Slots- og kulturstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "86000000",
            "PSP": "XG-0000004083-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "MUSIKSKOLE",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Slots- og kulturstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Musikskole",
            "Artskonto": "86000000",
            "PSP": "XG-0000004089-00005",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Østjysk vækstbånd",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Slots- og kulturstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Østjysk Vækstbånd",
            "Artskonto": "86000000",
            "PSP": "XG-0000004187-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Bolig- og planstyrelse",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "200000,00",
            "value2": "",
            "operator": "=="
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Bolig- og Planstyrelsen",
            "Artskonto": "86000000",
            "PSP": "XG-0000000019-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Flere skal med",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Styrelsen for arbejdsmarked",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tilskud, Flere skal med",
            "Artskonto": "86000000",
            "PSP": "XG-0000003906-00009",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 051672",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK 5386888 051672 Sprogcentret online-adgang til UV-programm",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4517148",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4517148",
            "Artskonto": "79000000",
            "PSP": "XG-0000003057-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4862821",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4862821",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4862899",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4862899 Udbyhøj Færge",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4922735",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4922735",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 003031",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 - P-licens",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00009",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 030031",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 - P-Licens",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00009",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 120031",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 - P-Licens",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00009",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 005070",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 005070 Sprogcentret - medborgerskabsprøve",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 013583",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 013583 Assentoftskolen 9. klasserne lejrskole",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 015106",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 015106 - Assentoft - Djurs sommerland 7-8. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00029",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 015538",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 015538 Valgfaget adventure på Assentoftskolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 015681",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 015681 - Betaling lejrskole 6. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 015687",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 015687 - Hyttetur 7. årgang Assentoftskolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 015689",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 015689 - Lejrskole 9. årgang Assentoftskolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 017737",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 017737 Assentoft - egenbetaling",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00022",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 017840",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 017840 Assentoft - Aktive tøser overnatningstur",
            "Artskonto": "79000000",
            "PSP": "XG-0000002369-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 030587",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 030433 - Gudenåløbet 2019",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 041575",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 041575 - Vestervangsskolen Skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002555-00023",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 041575",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 041575 Vestervangsskolen Skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002555-00023",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 048106",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 048106 - Lejrtur 6. årgang, Vestervangsskolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002555-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 050070",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 050070 Sprogcentret - medborgerskabsprøve",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 083585",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 083585 Grønhøjskolens Studietur for 9.A og 9.B Prag",
            "Artskonto": "79000000",
            "PSP": "XG-0000002415-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 084052",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 084052 Grønhøj, Lejrtur Bornholm",
            "Artskonto": "79000000",
            "PSP": "XG-0000002415-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 102156",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 102156 Østervangsskolen 1.e og 2.d lejrskole",
            "Artskonto": "79000000",
            "PSP": "XG-0000002568-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 102373",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 102373 Østervangsskolen -Lejrskole i I1, I2 og I3",
            "Artskonto": "79000000",
            "PSP": "XG-0000002568-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 111939",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 111939 Nørrevangsk. Studietur til Berlin for 10.kl",
            "Artskonto": "79000000",
            "PSP": "XG-0000002511-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 112030",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 112030 Nørrevangsskolen tur till Berlin for 9. årg",
            "Artskonto": "79000000",
            "PSP": "XG-0000002511-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 111923",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 119223 Nørrevangsskolen studietur ",
            "Artskonto": "79000000",
            "PSP": "XG-0000002511-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 131806",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 131806 Korshøjskolen, Skolerejse til København 9A+9B",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 131905",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 131905 - Korshøjskolen - billetter skuespil",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 131955",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 131955 Korshøjskolen - Djurs Sommerland 9A+9B",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 132419",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 132419 Korshøjskolen skolefest B-skolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 132761",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 132761 5. årgangs Hyttetur, Korshøjskolen ",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00042",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 132761",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 132761 Korshøjskolen Lejrtur 4A + 4B",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00042",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 133171",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 133171 Korshøjskolen, skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 133987",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 133987 8. årgang København - Korshøjskolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 141866",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 141866 - Tirsdalens Skole tur til Krakow for 9. kl.",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 142030",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 142030 Tirsdalens lejrskole 8. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 142063",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 142063 Lejrskole for 7.-klasser på Tirsdalens Skole.",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 142069",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 142069 Tirsdalensskole - skolerejse for 9. til Tje",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 142228",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 142228 - 8. årgang Tirsdalen Skole til Sønderborg",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 142514",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 1425814 Tirsdalens Skole 9. Årgang til Berlin",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192046",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192046 Hornbæk Skole. Lejrskole 8.x og 8.y til Køb",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192104",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192104 - Hornbæk skole skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192411",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192411 Hornbæk,Lejrskole for 9.x og 9.y til Københ",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192715",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192715 Hornbæk-Tur til Nordtyskland for 8. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192764",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192764 Honbæk skole, Lejrtur for 8. årgang til KBH",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192789",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192789 Hornbæk Skole, Lejrtur 6. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 153001",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 2113400 Hobrovejens Skole. Lejrskole for 6. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002439-00022",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 211363",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 211363 Rismølleskolen 8.årgang studietur KBH",
            "Artskonto": "79000000",
            "PSP": "XG-0000002521-00030",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 191686",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 2114410 Hornbæk lejrskole Bornholm",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 132419",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 2115023 Korshøjskolen Skolefest B-skolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 2125038",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 2125038 9. Årgang til Berlin på Tirsdalens Skole",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 222815",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 222815 Søndermarkskolen Lejrtur Kattegat",
            "Artskonto": "79000000",
            "PSP": "XG-0000002531-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 224173",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 224173 - Søndermarkskolen hyttetur for 3. klasse",
            "Artskonto": "79000000",
            "PSP": "XG-0000002531-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 225973",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 225973 Søndermarkskolen. Lejrtur Skagen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002531-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 226407",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 226407 Søndermarkskolen, Hyttetur 3. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002531-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 121400",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 231400 - Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 231400",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 231400 - Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 231526",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 231400 - Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 231529",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 231400 - Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 241777",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 241777 - Kristrup Skole – Lejrskole for 6. klasserne",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 241798",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 241798 - Kristrup Skole – Lejrskole for 6. klasserne",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 241816",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 241816 / Hyttetur for 3. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 242118",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 242118 Kristrup Skole - Skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00017",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 242716",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 242716 Kristrup Skole 6 årgang Læsø",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 242740",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 242740 Kristrup skole Lejrskole 6. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 242823",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 242823 Hyttetur 3 A på Kristrup Skole",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 280691",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 280691 - Cykelparkering - abonnementsbetaling",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 280692",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 280692 - Cykelparkering - abonnementsbetaling",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 280693",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 280693 - Cykelparkering - abonnementsbetaling",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 281701",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 281701 - Cykelby",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 410066",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 410066 Vestervangsskolen overnatning 3. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002555-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 412905",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 412905 Vestervangsskolen - Lejrtur 9. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002555-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 417651",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 417651 Vestervangsskolen - Lejrtur 6. årgang",
            "Artskonto": "79000000",
            "PSP": "XG-0000002555-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 0_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 1_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 2_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 3_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 4_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 5_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 6_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 7_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 8_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 9_UDLY",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Bådpladser Udbyhøj",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 030012",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Cykel",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 120012",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Cykel",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 151445",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Hobrovejensskole Lejrskole 2017 for 5. a og 5. b",
            "Artskonto": "79000000",
            "PSP": "XG-0000002439-00022",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 191623",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Hornbæk skole Lejrskole 2017 for 5. a og 5. b",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 151360",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Indbetaling Lejrskole for vores 6. klasser",
            "Artskonto": "79000000",
            "PSP": "XG-0000002439-00022",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 121786",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Korshøjskolen Lejrtur 6. årgang til Skagen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00042",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 131668",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Korshøjskolen Skolefest for udskolingen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 131786",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Korshøjskolen Tur til Sønderborg for S1 og S2 ",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00045",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 241991",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Kristrup Skole lejrskole København",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 241992",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Kristrup Skole Lejrskole Voer 2018",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 241360",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Kristrup Skole Skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00017",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 121806",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Lejrtur 8.C Korshøjskolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002465-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192461",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Skolefest Hornbæk Skole",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 141501",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Tirsdalens Skole – lejrskole i København",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 121614",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Tirsdalens Skole - Skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00026",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 121600",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Tirsdalens skole-Lejrskole på Samsø",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5541069",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5541069 Udbyhøj Lystbådehavn",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "6175937",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK6175937 køb af mærkater til erhvervs adgang til genbrugspl",
            "Artskonto": "79000000",
            "PSP": "XG-0000005285-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "6177549",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK6177549 Huslejenævnet. Indbetaling på Randers.dk",
            "Artskonto": "79000000",
            "PSP": "XG-0000003025-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "6631479",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK6631479 Beboerlicens parkering RK",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00009",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5078318",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000002667-00008",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8189094",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000002667-00008",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 191360",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Hornbæk Skoles skolefest",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3070-01",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion AFK",
            "Artskonto": "79000000",
            "PSP": "XG 0000003070-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 141359",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Lejrskole 9. klasse Tirsdalen",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 120070",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Sprogcentret - medborgerskabsprøve",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 050035",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Sprogcentret - Prøver",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 005027",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Sprogcentret - Statsborgerskabsprøve",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 050027",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Sprogcentret - Statsborgerskabsprøve",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 120027",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Sprogcentret - Statsborgerskabsprøve",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 111313",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Studietur til Berlin",
            "Artskonto": "79000000",
            "PSP": "XG-0000002511-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 111324",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Studietur til New York",
            "Artskonto": "79000000",
            "PSP": "XG-0000002511-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7374697",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7374697",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7555139",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7555139",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7570562",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7570562",
            "Artskonto": "79000000",
            "PSP": "XG-0000004025-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7757974",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7757974 / randers-affald",
            "Artskonto": "79000000",
            "PSP": "XG-0000005285-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8094609",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 8094609 Beboerlicens parkering RK",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00009",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "cyke",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888_cykel",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "cykel",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888_cykel",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "AE 9476014980",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "AE 9476014980",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "AE 9476060256",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "AE 9476060256",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 121623",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Hornbæk Skole – Lejrskole for 5. årgang til Odense",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "ParkPark",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Parkman",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Park4U",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "SDTN",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Kvindecenter",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Vedr. projekt SDTN Supervision",
            "Artskonto": "79000000",
            "PSP": "XG-0000002793-00004",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "EasyPark",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 030325",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "538688 030325 Depositum ifm. udlån af elcykler",
            "Artskonto": "79000000",
            "PSP": "XG-0000005063-00011",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 0-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 0-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 1-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 1-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 212126",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 212126 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 2-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 2-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 3-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 3-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 4-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 4-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 5-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 5-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 6-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 6-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 7-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 7-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 8-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 8-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 9-0621",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "5386888 9-2121 UMT til kampagnen GIV RANDERS ET TRÆ",
            "Artskonto": "79000000",
            "PSP": "XA-9258200001-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011887",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard AF-koordinator 011887",
            "Artskonto": "79000000",
            "PSP": "XG-0000003070-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011893",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Blicherskolen Skolebod A 011893",
            "Artskonto": "79000000",
            "PSP": "XG-0000002392-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011892",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Blicherskolen Skolebod B 011892",
            "Artskonto": "79000000",
            "PSP": "XG-0000002392-00032",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006990",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Hobrovejens Skole 006990",
            "Artskonto": "79000000",
            "PSP": "XG-0000002439-00014",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012183",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard RS Blommevej",
            "Artskonto": "79000000",
            "PSP": "XG-0000002648-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006982",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Mellerup/Ragna 006982",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00005",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012194",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Munkholmskolen 012194",
            "Artskonto": "79000000",
            "PSP": "XG-0000004526-00048",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006991",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Randers Ungddomsskole 006991",
            "Artskonto": "79000000",
            "PSP": "XG-0000002667-00008",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006980",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Sprogcentret 006980",
            "Artskonto": "79000000",
            "PSP": "XG-0000003397-00012",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006976",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Søndermarkskolen 006976",
            "Artskonto": "79000000",
            "PSP": "XG-0000002531-00016",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006977",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Udbyhøj 006977",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00004",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 102400",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386000 102400 Østervangsskolen, Lejrskole 5. årgang – ",
            "Artskonto": "79000000",
            "PSP": "XG-0000002568-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 084190",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 083585 Grønhøjskolens Skolerejse for 9.A og 9.B KBH",
            "Artskonto": "79000000",
            "PSP": "XG-0000002415-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 142729",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 142729 Tirsdalens skole - egenbetaling lejrtur",
            "Artskonto": "79000000",
            "PSP": "XG-0000002544-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192902",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192902Hornbæk Skole, Lejrskole 5. årgang – ID 192902",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192944",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 192944 Hornbæk Skole, Lejrskole 8. årgang – ID 192944",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00020",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 243011",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 243011 ",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 243153",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 243153 Hyttetur 3 årgang på Kristrup Skole",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 243086",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK8686888 243086 Kristrup 6. årg. SKAGEN.",
            "Artskonto": "79000000",
            "PSP": "XG-0000002475-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "ParkOne",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "OK parkering",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00010",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 192832",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Hornbæk skole, galla + Djurs Sommerland, 9. klasse",
            "Artskonto": "79000000",
            "PSP": "XG-0000002452-00029",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Hobrovejens Skole",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Hobrovejens Skole",
            "Artskonto": "79000000",
            "PSP": "XG-0000002439-00014",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Munkholmskole",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Munkholmskolen",
            "Artskonto": "79000000",
            "PSP": "XG-0000004526-00048",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "Unge i uddannelse",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Region Midt",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Region Midtjylland - Ung i uddannelse",
            "Artskonto": "79000000",
            "PSP": "XG-0000002833-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "MEL",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Mellerup færge",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00004",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "UDB",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Udbyhøj færge",
            "Artskonto": "79000000",
            "PSP": "XG-0000005094-00005",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Automat",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Mønt-indbetaling parkering",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "63470645",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Bambora",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005096-00009",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "2022_962_",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Pay4it Automat",
            "Artskonto": "79000000",
            "PSP": "XG-0000002415-00038",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "OY-",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005086-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "OY-",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "79000000",
            "PSP": "XG-0000005086-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796663",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796663 Vorup Plejehjem",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796671",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796671 Borupvænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796795",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796795 - Møllevang",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00033",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796817",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796817 - Bakkegården",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00028",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796868",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796868 Dronningborg",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00030",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796884",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796884 Svaleparken",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00038",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796892",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796892 - Rosenvænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00027",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796906",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796906",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00040",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796914",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796914 Kollektivhuset",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796930",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796930 Lindevænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00036",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "3796949",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK3796949 Huset Nyvang",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00035",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4771842",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4771842 GAIA PAPAYA",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5157064",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5157064 - Condomeriet",
            "Artskonto": "72000000",
            "PSP": "XG-0000004204-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 120186",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386388 Assentoft",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 010631",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK538688 010631 Assentoftskolen skolefest",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00022",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 281359",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 - Kompostbeholder",
            "Artskonto": "72000000",
            "PSP": "XG-0000005280-00036",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 101655",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 101655 Østervangsskolen Skolefest",
            "Artskonto": "72000000",
            "PSP": "XG-0000002415-00039",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 102002",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 102002 Tirsdalens Skole skolebod",
            "Artskonto": "72000000",
            "PSP": "XG-0000002544-00025",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 102193",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 102193 Østervangsskolen Skolefest",
            "Artskonto": "72000000",
            "PSP": "XG-0000002415-00039",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 211569",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 211369 - Rismølleskolen madbestilling",
            "Artskonto": "72000000",
            "PSP": "XG-0000002521-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 211390",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 211390 - Rismølleskolen madbestilling",
            "Artskonto": "72000000",
            "PSP": "XG-0000002521-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 211567",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 211567 - Rismølleskolen madbestilling",
            "Artskonto": "72000000",
            "PSP": "XG-0000002521-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 211568",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 211568 - Rismølleskolen madbestilling",
            "Artskonto": "72000000",
            "PSP": "XG-0000002521-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 211570",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 211570 - Rismølleskolen madbestilling",
            "Artskonto": "72000000",
            "PSP": "XG-0000002521-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 211571",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 211571 - Rismølleskolen madbestilling",
            "Artskonto": "72000000",
            "PSP": "XG-0000002521-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 221365",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 221365 Madbestilling Søndermarkskolen",
            "Artskonto": "72000000",
            "PSP": "XG-0000002531-00016",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 222807",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 222807 Søndermarkskolen skolefest",
            "Artskonto": "72000000",
            "PSP": "XG-0000002531-00017",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 225082",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 225082 Søndermarkskolen skolefest 2019",
            "Artskonto": "72000000",
            "PSP": "XG-0000002531-00017",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 010186",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Madsalg Assentoftskolen",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 001004",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Madsalg Assentoftskolen 0-3 klasse",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 001186",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5386888 Madsalg Assentoftsskolen",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5444748",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5444748 Kantinen via GAIA",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00034",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5541042",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5541042 Udbyhøj Lystbådehavn",
            "Artskonto": "72000000",
            "PSP": "XG-0000004024-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5846102",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5846102 Kantinen Laksetorvet",
            "Artskonto": "72000000",
            "PSP": "XG-0000005228-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5887356",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5887356 Kildevang",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00045",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5891507",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5891507 - Åbakken",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5908167",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5908167 Asferg",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00048",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5991390",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK5991390 Kantinen Sundhedshuset",
            "Artskonto": "72000000",
            "PSP": "XG-0000005228-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "6201830",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK6201830 Kantinen Kasernen",
            "Artskonto": "72000000",
            "PSP": "XG-0000005228-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "6899625",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK6899625 Huset Nellemann",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8357634",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK8357634 Huset Nellemann",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Gaia via",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Gaia Via",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00034",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 101002",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kortbetaling - Søndermarkskolen",
            "Artskonto": "72000000",
            "PSP": "XG-0000002531-00016",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 001683",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Madbestilling førskolen Assentoft",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 010683",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Madbestilling førskolen Assentoft",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "5386888 001631",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Skolefest Assentoftskolen",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00022",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7463073",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7463073",
            "Artskonto": "72000000",
            "PSP": "XG-0000004204-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7570567",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7570567",
            "Artskonto": "72000000",
            "PSP": "XG-0000004024-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7667973",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7667973",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7670788",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7670788",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00028",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7670789",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7670789",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00033",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7670796",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7670796",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00027",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7670797",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 7670797",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00030",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Ekstra",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Open Experience",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "72000000",
            "PSP": "XG-0000005285-00006",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012197",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Assentoftskolen 012197",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011781",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Bakkegården 011781",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00028",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011784",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Bjerregrav Skole 011784",
            "Artskonto": "72000000",
            "PSP": "XG-0000002382-00015",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011785",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Borupvænget 011785",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011777",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Cafe Lindevænget 011777",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00036",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011792",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Cafe Nellemann 011792",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011778",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Cafe Svaleparken 011778",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00038",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011789",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Cafe Thors Bakke 011789",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00039",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011897",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Cafe Vorup 011897",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011783",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Dronnigborg 011783",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00030",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011890",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Fritidscentret 011890",
            "Artskonto": "95990009",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011780",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Fårup 011780",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00047",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012200",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Gaia Butik 012200",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00018",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012199",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Gaia Cafe 012199",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012196",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Hobrovejens Juniorklub 012196",
            "Artskonto": "72000000",
            "PSP": "XG-0000002448-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011891",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Huset Nyvang 011891",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00035",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006984",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Kildevang Cafe 006984",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00045",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011791",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Kollektivhuset 011791",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006986",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Korshøjskolen 006986",
            "Artskonto": "72000000",
            "PSP": "XG-0000002465-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006973",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Kristrupcentret 006973",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00042",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011786",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Madservice 011786",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00018",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011793",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Møllevang 011793",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00033",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006993",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Nørrevangsskolen 006993",
            "Artskonto": "72000000",
            "PSP": "XG-0000002511-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006979",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Perron 4 006979",
            "Artskonto": "72000000",
            "PSP": "XG-0000003038-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012198",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Psykiatriens Hus 012198",
            "Artskonto": "72000000",
            "PSP": "XG-0000003038-00126",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006974",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Randers Specialskole 006974 ",
            "Artskonto": "72000000",
            "PSP": "XG-0000002648-00024",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011790",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Rosevænget 011790",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00027",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011787",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Terneparken 011787",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00048",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "012185",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Tirsdalen Skole 012185",
            "Artskonto": "72000000",
            "PSP": "XG-0000002544-00025",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006987",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Tirsdalens 006987",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00040",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006988",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Vennelyst Juniorklub 006988",
            "Artskonto": "72000000",
            "PSP": "XG-0000002484-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "011788",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Åbakken 011788",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8537995",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK 8537995 Gaia Cafe ",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "2271311",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK2271311 Affaldsterminalen",
            "Artskonto": "72000000",
            "PSP": "XG-0000005010-00080",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "4771850",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK4771850 Gaia butik",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00018",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7221304",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK7221304 Gaia Via",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00034",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8538001",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "DK8538001 Gaia Via",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00034",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Vindstød",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "72000000",
            "PSP": "XG-0000005244-00014",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Assentoft",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Assentoftskolens kantine",
            "Artskonto": "72000000",
            "PSP": "XG-0000002369-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Fritid",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontakt transaktion Fritidscentret",
            "Artskonto": "95990009",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Bakkegården",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Bakkegården",
            "Artskonto": "72000000",
            "PSP": "XG-0000004518-00093",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Blicherskolen A",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Blicherskolen a-bod",
            "Artskonto": "72000000",
            "PSP": "XG-0000002392-00031",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Blicherskolen B",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Blicherskolen b-bod",
            "Artskonto": "72000000",
            "PSP": "XG-0000002392-00032",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "KC cafe",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Kristrupcentret",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00042",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Kristrupcentret",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Kristrupcentret",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00042",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe-LV",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Lindevænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00036",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe Nellemann",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Nellemann",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe Svaleparken",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Svaleparken",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00038",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe-SP",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Svaleparken",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00038",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Svaleparken",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Svaleparken",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00038",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Thors bakke",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Thors Bakke",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00039",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Thorsbakke",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Thors Bakke",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00039",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe Vorup",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Vorup Plejehjem",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe-VP",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Vorup Plejehjem",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe VP",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Vorup Plejehjem",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00041",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Dronningborg",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Dronningborg",
            "Artskonto": "72000000",
            "PSP": "XG-0000004518-00094",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Fårup",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Fårup Café",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00047",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Gaia Butik",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Gaia Butik",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00018",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Gaia Cafe",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Gaia Papaya",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Gaia papaya",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Gaia Papaya",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Kollektivhus",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Kollektivhuset",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00044",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "2465-00021",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Korshøjskolen Café",
            "Artskonto": "72000000",
            "PSP": "XG-0000002465-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Korshøjskole",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Korshøjskolen Café",
            "Artskonto": "72000000",
            "PSP": "XG-0000002465-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Madservice",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Madservice Kronjylland",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00018",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Møllevang",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Møllevang",
            "Artskonto": "72000000",
            "PSP": "XG-0000004518-00098",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "301.408.72.05",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Nørrevangsskolen",
            "Artskonto": "72000000",
            "PSP": "XG-0000002511-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Perron 4",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Perron 4",
            "Artskonto": "72000000",
            "PSP": "XG-0000003038-00053",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Rosenvæng",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Rosenvænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004518-00092",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Terneparken",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Terneparken Café",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00048",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "7221290",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Nets 7221290 Gaia Cafe ",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8516775",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Nets 8516775 Gaia Butik",
            "Artskonto": "72000000",
            "PSP": "XG-0000003040-00018",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "8104226",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Teller 8104226",
            "Artskonto": "72000000",
            "PSP": "XG-0000005010-00080",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "LV",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Lindevænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00036",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "NM",
            "operator": ".endsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Nellemann",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00037",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Too good to go",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "72000000",
            "PSP": "XG-0000005228-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Kanpla APS",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "72000000",
            "PSP": "XG-0000002511-00021",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "Biometric Solutions",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "72000000",
            "PSP": "XG-0000003057-00003",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Borup",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Borupvænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Cafe Borup",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Borupvænget",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00046",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "TB",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Thors Bakke",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00039",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "TD cafe",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Tirsdalen",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00040",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Tirsdalen",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Café Tirsdalen",
            "Artskonto": "72000000",
            "PSP": "XG-0000004526-00040",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "XG-3397-50",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Indbetaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Kontant transaktion Sprogcenter",
            "Artskonto": "72000000",
            "PSP": "XG-0000003397-00050",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "OTC-betaling",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "67041004",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Rente af obligationer",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "60800001",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Afkast overført til",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "60500000",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Debetrente",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "60500000",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Kreditrente",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "60500000",
            "PSP": "",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "40010",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Leverandørservice",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Ls, kreditor 40010 Udbetaling",
            "Artskonto": "40000000",
            "PSP": "XG-0000000013-00001",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "54879",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Leverandørservice",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Ls, kreditor 54879 Udbetaling",
            "Artskonto": "40000000",
            "PSP": "XG-0000000013-00002",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "006970",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pengeautomat",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Depositcard Matrielgården 006970",
            "Artskonto": "40000000",
            "PSP": "XG-0000005004-00023",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "1007867103",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Gebyr",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Gebyr af depot 1007867103",
            "Artskonto": "40000000",
            "PSP": "XG-0000000006-00007",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "2121115030",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Gebyr",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Gebyr af depot 2121115030",
            "Artskonto": "40000000",
            "PSP": "XG-0000000006-00007",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "FAKTURA D0100",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "40000000",
            "PSP": "XG-0000000006-00007",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "URA",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "Pbs overførsel",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "40000000",
            "PSP": "XG-0000000006-00007",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "49344 MOBILE",
            "operator": ".startsWith"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Gebyr Mobile Pay leverandørservice",
            "Artskonto": "40000000",
            "PSP": "XG-0000000006-00007",
            "SIO": null,
            "Notat": ""
        }
    ],
    [
        {
            "name": "Reference",
            "value": "Mariendal",
            "operator": "contains"
        },
        {
            "name": "Advisliste",
            "value": "",
            "operator": null
        },
        {
            "name": "Afsender",
            "value": "420 Kristrup Børnehus",
            "operator": null
        },
        {
            "name": "Posteringstype",
            "value": "",
            "operator": null
        },
        {
            "name": "Beløb",
            "value1": "",
            "value2": "",
            "operator": null
        },
        {
            "name": "Kontering",
            "text": "Tekst fra bank",
            "Artskonto": "10000000",
            "PSP": "XG-0000002281-00002",
            "SIO": null,
            "Notat": ""
        }
    ]
]
`

module.exports = Node;