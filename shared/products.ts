export interface VehicleImageSet {
  exterior: string[];
  interior: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  description: string;
  specs: string[];
  images: VehicleImageSet;
}

export interface CartItem {
  vehicle: Vehicle;
  quantity: number;
}

export const products: Record<string, Vehicle[]> = {
  renault: [
    {
      id: "clio-v",
      name: "Renault Clio V",
      brand: "Renault",
      price: 18500,
      currency: "€",
      description: "El Renault Clio ofrece un diseño moderno y elegante con tecnología avanzada. Perfecto para la ciudad con bajo consumo y gran confort.",
      specs: [
        "Motor 1.0 TCe 90 CV",
        "Transmisión manual 5 velocidades",
        "Consumo: 4.8 L/100km",
        "Sistema multimedia EASY LINK",
        "Asistente de mantenimiento de carril"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/renault-clio-ext1/800/600",
          "https://picsum.photos/seed/renault-clio-ext2/800/600",
          "https://picsum.photos/seed/renault-clio-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/renault-clio-int1/800/600",
          "https://picsum.photos/seed/renault-clio-int2/800/600"
        ]
      }
    },
    {
      id: "megane-e-tech",
      name: "Renault Megane E-TECH Electric",
      brand: "Renault",
      price: 38900,
      currency: "€",
      description: "El primer SUV 100% eléctrico de Renault. Diseño futurista con autonomía extendida y tecnología de vanguardia.",
      specs: [
        "Motor eléctrico 220 CV",
        "Batería 60 kWh",
        "Autonomía: 450 km WLTP",
        "Carga rápida DC hasta 130 kW",
        "Pantalla OpenR 12 pulgadas"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/renault-megane-ext1/800/600",
          "https://picsum.photos/seed/renault-megane-ext2/800/600",
          "https://picsum.photos/seed/renault-megane-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/renault-megane-int1/800/600",
          "https://picsum.photos/seed/renault-megane-int2/800/600"
        ]
      }
    },
    {
      id: "captur",
      name: "Renault Captur",
      brand: "Renault",
      price: 22900,
      currency: "€",
      description: "SUV urbano con estilo único y personalizable. Espacio versátil y equipamiento de alta gama.",
      specs: [
        "Motor 1.3 TCe 140 CV",
        "Transmisión EDC automática",
        "Sistema híbrido enchufable disponible",
        "Maletero modulable 536L",
        "Techo panorámico"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/renault-captur-ext1/800/600",
          "https://picsum.photos/seed/renault-captur-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/renault-captur-int1/800/600",
          "https://picsum.photos/seed/renault-captur-int2/800/600"
        ]
      }
    }
  ],
  fiat: [
    {
      id: "500e",
      name: "Fiat 500 Electric",
      brand: "Fiat",
      price: 29900,
      currency: "€",
      description: "Icono italiano reinventado. El Fiat 500 eléctrico combina estilo retro con tecnología sostenible.",
      specs: [
        "Motor eléctrico 118 CV",
        "Batería 42 kWh",
        "Autonomía: 320 km WLTP",
        "Modo City: 50 km de autonomía extra",
        "Techo panorámico fijo de cristal"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/fiat-500e-ext1/800/600",
          "https://picsum.photos/seed/fiat-500e-ext2/800/600",
          "https://picsum.photos/seed/fiat-500e-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/fiat-500e-int1/800/600",
          "https://picsum.photos/seed/fiat-500e-int2/800/600"
        ]
      }
    },
    {
      id: "panda",
      name: "Fiat Panda",
      brand: "Fiat",
      price: 14500,
      currency: "€",
      description: "Compacto, práctico y económico. El Fiat Panda es perfecto para la movilidad urbana con gran eficiencia.",
      specs: [
        "Motor 1.0 Hybrid 70 CV",
        "Sistema híbrido ligero",
        "Consumo: 4.1 L/100km",
        "4 plazas confortables",
        "Sistema Uconnect"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/fiat-panda-ext1/800/600",
          "https://picsum.photos/seed/fiat-panda-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/fiat-panda-int1/800/600",
          "https://picsum.photos/seed/fiat-panda-int2/800/600"
        ]
      }
    }
  ],
  mercedes: [
    {
      id: "clase-a",
      name: "Mercedes-Benz Clase A",
      brand: "Mercedes-Benz",
      price: 35900,
      currency: "€",
      description: "Elegancia compacta con tecnología de vanguardia. El Clase A redefine el lujo en su segmento.",
      specs: [
        "Motor 1.3 L 163 CV",
        "Transmisión automática 7G-DCT",
        "Sistema MBUX con inteligencia artificial",
        "Asistente de conducción activo",
        "Pantalla dual de 10.25 pulgadas"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/mercedes-a-ext1/800/600",
          "https://picsum.photos/seed/mercedes-a-ext2/800/600",
          "https://picsum.photos/seed/mercedes-a-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/mercedes-a-int1/800/600",
          "https://picsum.photos/seed/mercedes-a-int2/800/600"
        ]
      }
    },
    {
      id: "gla",
      name: "Mercedes-Benz GLA",
      brand: "Mercedes-Benz",
      price: 42500,
      currency: "€",
      description: "SUV compacto premium con diseño deportivo y tecnología de última generación.",
      specs: [
        "Motor 2.0 L 190 CV",
        "Tracción 4MATIC disponible",
        "Sistema MBUX de segunda generación",
        "Asistente de aparcamiento 360°",
        "Techo panorámico deslizante"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/mercedes-gla-ext1/800/600",
          "https://picsum.photos/seed/mercedes-gla-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/mercedes-gla-int1/800/600",
          "https://picsum.photos/seed/mercedes-gla-int2/800/600"
        ]
      }
    },
    {
      id: "eqc",
      name: "Mercedes-Benz EQC",
      brand: "Mercedes-Benz",
      price: 75900,
      currency: "€",
      description: "El futuro eléctrico de Mercedes. SUV 100% eléctrico con autonomía extendida y lujo sin concesiones.",
      specs: [
        "Doble motor eléctrico 408 CV",
        "Batería 80 kWh",
        "Autonomía: 426 km WLTP",
        "Tracción integral 4MATIC",
        "Carga rápida DC 110 kW"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/mercedes-eqc-ext1/800/600",
          "https://picsum.photos/seed/mercedes-eqc-ext2/800/600",
          "https://picsum.photos/seed/mercedes-eqc-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/mercedes-eqc-int1/800/600",
          "https://picsum.photos/seed/mercedes-eqc-int2/800/600"
        ]
      }
    }
  ],
  peugeot: [
    {
      id: "208",
      name: "Peugeot 208",
      brand: "Peugeot",
      price: 19900,
      currency: "€",
      description: "Compacto dinámico con diseño felino. Disponible en versión eléctrica e-208 con cero emisiones.",
      specs: [
        "Motor 1.2 PureTech 100 CV",
        "Transmisión manual o automática",
        "i-Cockpit 3D",
        "Versión e-208: autonomía 362 km",
        "Asistente de velocidad adaptativo"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/peugeot-208-ext1/800/600",
          "https://picsum.photos/seed/peugeot-208-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/peugeot-208-int1/800/600",
          "https://picsum.photos/seed/peugeot-208-int2/800/600"
        ]
      }
    },
    {
      id: "3008",
      name: "Peugeot 3008",
      brand: "Peugeot",
      price: 34900,
      currency: "€",
      description: "SUV que combina elegancia y tecnología. Premio al Coche del Año en Europa.",
      specs: [
        "Motor 1.5 BlueHDi 130 CV",
        "Versión híbrida enchufable disponible",
        "i-Cockpit con pantalla táctil 10\"",
        "Advanced Grip Control",
        "Maletero 520L"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/peugeot-3008-ext1/800/600",
          "https://picsum.photos/seed/peugeot-3008-ext2/800/600",
          "https://picsum.photos/seed/peugeot-3008-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/peugeot-3008-int1/800/600",
          "https://picsum.photos/seed/peugeot-3008-int2/800/600"
        ]
      }
    }
  ],
  volkswagen: [
    {
      id: "golf-8",
      name: "Volkswagen Golf 8",
      brand: "Volkswagen",
      price: 26900,
      currency: "€",
      description: "La octava generación del icónico Golf. Tecnología digital y eficiencia en su máxima expresión.",
      specs: [
        "Motor 1.5 eTSI 150 CV",
        "Sistema híbrido ligero 48V",
        "Digital Cockpit Pro",
        "IQ.DRIVE Travel Assist",
        "Faros LED Matrix IQ.LIGHT"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/vw-golf-ext1/800/600",
          "https://picsum.photos/seed/vw-golf-ext2/800/600",
          "https://picsum.photos/seed/vw-golf-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/vw-golf-int1/800/600",
          "https://picsum.photos/seed/vw-golf-int2/800/600"
        ]
      }
    },
    {
      id: "id4",
      name: "Volkswagen ID.4",
      brand: "Volkswagen",
      price: 44900,
      currency: "€",
      description: "SUV eléctrico con gran autonomía y espacio interior. El futuro de la movilidad eléctrica.",
      specs: [
        "Motor eléctrico 204 CV",
        "Batería 77 kWh",
        "Autonomía: 520 km WLTP",
        "Tracción trasera",
        "Carga rápida DC 125 kW"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/vw-id4-ext1/800/600",
          "https://picsum.photos/seed/vw-id4-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/vw-id4-int1/800/600",
          "https://picsum.photos/seed/vw-id4-int2/800/600"
        ]
      }
    },
    {
      id: "tiguan",
      name: "Volkswagen Tiguan",
      brand: "Volkswagen",
      price: 35900,
      currency: "€",
      description: "SUV versátil y espacioso. Perfecto para familias con tecnología de asistencia avanzada.",
      specs: [
        "Motor 2.0 TDI 150 CV",
        "Tracción 4MOTION disponible",
        "7 plazas opcional",
        "Maletero hasta 1655L",
        "Digital Cockpit"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/vw-tiguan-ext1/800/600",
          "https://picsum.photos/seed/vw-tiguan-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/vw-tiguan-int1/800/600",
          "https://picsum.photos/seed/vw-tiguan-int2/800/600"
        ]
      }
    }
  ],
  citroen: [
    {
      id: "c3",
      name: "Citroën C3",
      brand: "Citroën",
      price: 16900,
      currency: "€",
      description: "Compacto con personalidad única y confort superior. Diseño distintivo Airbump.",
      specs: [
        "Motor 1.2 PureTech 83 CV",
        "Suspensión con topes hidráulicos progresivos",
        "Pantalla táctil 9 pulgadas",
        "Protecciones Airbump laterales",
        "Consumo: 5.2 L/100km"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/citroen-c3-ext1/800/600",
          "https://picsum.photos/seed/citroen-c3-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/citroen-c3-int1/800/600",
          "https://picsum.photos/seed/citroen-c3-int2/800/600"
        ]
      }
    },
    {
      id: "c5-aircross",
      name: "Citroën C5 Aircross",
      brand: "Citroën",
      price: 31900,
      currency: "€",
      description: "SUV con confort de referencia. Suspensión Advanced Comfort y modularidad excepcional.",
      specs: [
        "Motor 1.5 BlueHDi 130 CV",
        "Versión híbrida enchufable disponible",
        "Suspensión Advanced Comfort",
        "Asientos individuales modulables",
        "Maletero 580L"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/citroen-c5-ext1/800/600",
          "https://picsum.photos/seed/citroen-c5-ext2/800/600",
          "https://picsum.photos/seed/citroen-c5-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/citroen-c5-int1/800/600",
          "https://picsum.photos/seed/citroen-c5-int2/800/600"
        ]
      }
    }
  ],
  audi: [
    {
      id: "a3",
      name: "Audi A3 Sportback",
      brand: "Audi",
      price: 32900,
      currency: "€",
      description: "Compacto premium con diseño deportivo y tecnología de vanguardia Audi.",
      specs: [
        "Motor 2.0 TDI 150 CV",
        "Transmisión S tronic",
        "Audi Virtual Cockpit",
        "Sistema MMI touch",
        "Faros LED Matrix"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/audi-a3-ext1/800/600",
          "https://picsum.photos/seed/audi-a3-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/audi-a3-int1/800/600",
          "https://picsum.photos/seed/audi-a3-int2/800/600"
        ]
      }
    },
    {
      id: "q3",
      name: "Audi Q3",
      brand: "Audi",
      price: 39900,
      currency: "€",
      description: "SUV compacto premium con espacio versátil y tecnología quattro disponible.",
      specs: [
        "Motor 2.0 TFSI 190 CV",
        "Tracción quattro disponible",
        "Audi Virtual Cockpit Plus",
        "Asistente de aparcamiento",
        "Bang & Olufsen Sound System"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/audi-q3-ext1/800/600",
          "https://picsum.photos/seed/audi-q3-ext2/800/600",
          "https://picsum.photos/seed/audi-q3-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/audi-q3-int1/800/600",
          "https://picsum.photos/seed/audi-q3-int2/800/600"
        ]
      }
    },
    {
      id: "e-tron",
      name: "Audi e-tron",
      brand: "Audi",
      price: 79900,
      currency: "€",
      description: "SUV 100% eléctrico de lujo. Rendimiento quattro con cero emisiones.",
      specs: [
        "Doble motor eléctrico 408 CV",
        "Batería 95 kWh",
        "Autonomía: 436 km WLTP",
        "Tracción quattro eléctrica",
        "Carga rápida DC 150 kW"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/audi-etron-ext1/800/600",
          "https://picsum.photos/seed/audi-etron-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/audi-etron-int1/800/600",
          "https://picsum.photos/seed/audi-etron-int2/800/600"
        ]
      }
    }
  ],
  toyota: [
    {
      id: "corolla",
      name: "Toyota Corolla Hybrid",
      brand: "Toyota",
      price: 26900,
      currency: "€",
      description: "Sedán híbrido con fiabilidad legendaria Toyota. Eficiencia y bajo consumo garantizados.",
      specs: [
        "Motor híbrido 1.8 L 122 CV",
        "Sistema híbrido autorrecargable",
        "Consumo: 3.9 L/100km",
        "Toyota Safety Sense",
        "Garantía híbrida 5 años"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/toyota-corolla-ext1/800/600",
          "https://picsum.photos/seed/toyota-corolla-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/toyota-corolla-int1/800/600",
          "https://picsum.photos/seed/toyota-corolla-int2/800/600"
        ]
      }
    },
    {
      id: "rav4",
      name: "Toyota RAV4 Hybrid",
      brand: "Toyota",
      price: 38900,
      currency: "€",
      description: "SUV híbrido con tracción AWD-i. Combinación perfecta de eficiencia y capacidad.",
      specs: [
        "Motor híbrido 2.5 L 218 CV",
        "Tracción AWD-i inteligente",
        "Sistema híbrido de cuarta generación",
        "Maletero 580L",
        "Toyota Safety Sense 2.5"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/toyota-rav4-ext1/800/600",
          "https://picsum.photos/seed/toyota-rav4-ext2/800/600",
          "https://picsum.photos/seed/toyota-rav4-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/toyota-rav4-int1/800/600",
          "https://picsum.photos/seed/toyota-rav4-int2/800/600"
        ]
      }
    },
    {
      id: "yaris",
      name: "Toyota Yaris Hybrid",
      brand: "Toyota",
      price: 21900,
      currency: "€",
      description: "Urbano híbrido compacto. Premiado como Coche del Año en Europa 2021.",
      specs: [
        "Motor híbrido 1.5 L 116 CV",
        "Sistema híbrido de quinta generación",
        "Consumo: 3.8 L/100km",
        "Conducción dinámica",
        "Pantalla táctil 9 pulgadas"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/toyota-yaris-ext1/800/600",
          "https://picsum.photos/seed/toyota-yaris-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/toyota-yaris-int1/800/600",
          "https://picsum.photos/seed/toyota-yaris-int2/800/600"
        ]
      }
    }
  ],
  hyundai: [
    {
      id: "tucson",
      name: "Hyundai Tucson",
      brand: "Hyundai",
      price: 29900,
      currency: "€",
      description: "SUV con diseño paramétrico distintivo. Tecnología híbrida y espacioso interior.",
      specs: [
        "Motor 1.6 T-GDi 150 CV",
        "Versión híbrida disponible",
        "Pantallas duales 10.25 pulgadas",
        "SmartSense Hyundai",
        "Garantía 5 años"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/hyundai-tucson-ext1/800/600",
          "https://picsum.photos/seed/hyundai-tucson-ext2/800/600",
          "https://picsum.photos/seed/hyundai-tucson-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/hyundai-tucson-int1/800/600",
          "https://picsum.photos/seed/hyundai-tucson-int2/800/600"
        ]
      }
    },
    {
      id: "ioniq-5",
      name: "Hyundai IONIQ 5",
      brand: "Hyundai",
      price: 47900,
      currency: "€",
      description: "SUV eléctrico revolucionario. Diseño futurista con carga ultrarrápida.",
      specs: [
        "Motor eléctrico 225 CV",
        "Batería 72.6 kWh",
        "Autonomía: 481 km WLTP",
        "Carga ultrarrápida 800V",
        "V2L: recarga bidireccional"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/hyundai-ioniq5-ext1/800/600",
          "https://picsum.photos/seed/hyundai-ioniq5-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/hyundai-ioniq5-int1/800/600",
          "https://picsum.photos/seed/hyundai-ioniq5-int2/800/600"
        ]
      }
    }
  ],
  kia: [
    {
      id: "sportage",
      name: "Kia Sportage",
      brand: "Kia",
      price: 28900,
      currency: "€",
      description: "SUV con diseño atrevido y tecnología avanzada. Garantía líder de 7 años.",
      specs: [
        "Motor 1.6 T-GDi 150 CV",
        "Versión híbrida enchufable disponible",
        "Pantallas curvas panorámicas",
        "Kia Drive Wise",
        "Garantía 7 años"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/kia-sportage-ext1/800/600",
          "https://picsum.photos/seed/kia-sportage-ext2/800/600",
          "https://picsum.photos/seed/kia-sportage-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/kia-sportage-int1/800/600",
          "https://picsum.photos/seed/kia-sportage-int2/800/600"
        ]
      }
    },
    {
      id: "ev6",
      name: "Kia EV6",
      brand: "Kia",
      price: 49900,
      currency: "€",
      description: "SUV eléctrico con carga ultrarrápida. Diseño futurista y rendimiento deportivo.",
      specs: [
        "Motor eléctrico 229 CV",
        "Batería 77.4 kWh",
        "Autonomía: 528 km WLTP",
        "Carga ultrarrápida 800V",
        "0-100 km/h en 5.2 segundos"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/kia-ev6-ext1/800/600",
          "https://picsum.photos/seed/kia-ev6-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/kia-ev6-int1/800/600",
          "https://picsum.photos/seed/kia-ev6-int2/800/600"
        ]
      }
    }
  ],
  opel: [
    {
      id: "corsa",
      name: "Opel Corsa",
      brand: "Opel",
      price: 17900,
      currency: "€",
      description: "Compacto alemán con diseño Vizor distintivo. Disponible en versión eléctrica.",
      specs: [
        "Motor 1.2 Turbo 100 CV",
        "Versión eléctrica disponible",
        "IntelliLux LED Matrix",
        "Multimedia IntelliLink",
        "Consumo: 4.9 L/100km"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/opel-corsa-ext1/800/600",
          "https://picsum.photos/seed/opel-corsa-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/opel-corsa-int1/800/600",
          "https://picsum.photos/seed/opel-corsa-int2/800/600"
        ]
      }
    },
    {
      id: "grandland",
      name: "Opel Grandland",
      brand: "Opel",
      price: 32900,
      currency: "€",
      description: "SUV espacioso y tecnológico. Confort y eficiencia para toda la familia.",
      specs: [
        "Motor 1.5 Diesel 130 CV",
        "Versión híbrida enchufable disponible",
        "IntelliLux LED Pixel Matrix",
        "AGR asientos ergonómicos certificados",
        "Maletero 514L"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/opel-grandland-ext1/800/600",
          "https://picsum.photos/seed/opel-grandland-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/opel-grandland-int1/800/600",
          "https://picsum.photos/seed/opel-grandland-int2/800/600"
        ]
      }
    }
  ],
  skoda: [
    {
      id: "octavia",
      name: "Škoda Octavia",
      brand: "Škoda",
      price: 24900,
      currency: "€",
      description: "Familiar espacioso con tecnología checa inteligente. Líder en espacio y practicidad.",
      specs: [
        "Motor 1.5 TSI 150 CV",
        "Versión Combi con 640L de maletero",
        "Simply Clever: 30+ soluciones prácticas",
        "Virtual Cockpit",
        "Asistentes de conducción"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/skoda-octavia-ext1/800/600",
          "https://picsum.photos/seed/skoda-octavia-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/skoda-octavia-int1/800/600",
          "https://picsum.photos/seed/skoda-octavia-int2/800/600"
        ]
      }
    },
    {
      id: "kodiaq",
      name: "Škoda Kodiaq",
      brand: "Škoda",
      price: 35900,
      currency: "€",
      description: "SUV de 7 plazas con espacio excepcional. Versátil y familiar.",
      specs: [
        "Motor 2.0 TDI 150 CV",
        "7 plazas de serie",
        "Tracción 4x4 disponible",
        "Maletero hasta 2065L",
        "Asistente de remolque"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/skoda-kodiaq-ext1/800/600",
          "https://picsum.photos/seed/skoda-kodiaq-ext2/800/600",
          "https://picsum.photos/seed/skoda-kodiaq-ext3/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/skoda-kodiaq-int1/800/600",
          "https://picsum.photos/seed/skoda-kodiaq-int2/800/600"
        ]
      }
    }
  ],
  mini: [
    {
      id: "cooper-3-door",
      name: "MINI Cooper 3 Door",
      brand: "MINI",
      price: 24900,
      currency: "€",
      description: "Icono británico reinventado. Estilo único y conducción kart-like característica de MINI.",
      specs: [
        "Motor 1.5 TwinPower Turbo 136 CV",
        "Transmisión Steptronic de 7 velocidades",
        "MINI Connected XL",
        "Techo panorámico disponible",
        "Personalización ilimitada"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/mini-cooper-ext1/800/600",
          "https://picsum.photos/seed/mini-cooper-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/mini-cooper-int1/800/600",
          "https://picsum.photos/seed/mini-cooper-int2/800/600"
        ]
      }
    },
    {
      id: "countryman",
      name: "MINI Countryman",
      brand: "MINI",
      price: 32900,
      currency: "€",
      description: "El MINI más espacioso. SUV compacto con estilo británico y tracción ALL4.",
      specs: [
        "Motor 2.0 TwinPower Turbo 192 CV",
        "Tracción ALL4 disponible",
        "5 puertas y 5 plazas",
        "Versión híbrida enchufable disponible",
        "Maletero 450L"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/mini-countryman-ext1/800/600",
          "https://picsum.photos/seed/mini-countryman-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/mini-countryman-int1/800/600",
          "https://picsum.photos/seed/mini-countryman-int2/800/600"
        ]
      }
    }
  ],
  iveco: [
    {
      id: "daily",
      name: "IVECO Daily",
      brand: "IVECO",
      price: 35900,
      currency: "€",
      description: "Furgón comercial versátil. Líder en su categoría con múltiples configuraciones.",
      specs: [
        "Motor 2.3 Euro 6 156 CV",
        "Carga útil hasta 7 toneladas",
        "Sistema Hi-Matic automático disponible",
        "Versión eléctrica e-Daily disponible",
        "Garantía profesional 3 años"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/iveco-daily-ext1/800/600",
          "https://picsum.photos/seed/iveco-daily-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/iveco-daily-int1/800/600",
          "https://picsum.photos/seed/iveco-daily-int2/800/600"
        ]
      }
    },
    {
      id: "s-way",
      name: "IVECO S-Way",
      brand: "IVECO",
      price: 89900,
      currency: "€",
      description: "Camión pesado de última generación. Eficiencia y confort para larga distancia.",
      specs: [
        "Motor Cursor 13 460 CV",
        "Transmisión Hi-Tronix 12 velocidades",
        "Sistema de predicción de ruta",
        "Cabina con suspensión neumática",
        "Conectividad IVECONNECT"
      ],
      images: {
        exterior: [
          "https://picsum.photos/seed/iveco-sway-ext1/800/600",
          "https://picsum.photos/seed/iveco-sway-ext2/800/600"
        ],
        interior: [
          "https://picsum.photos/seed/iveco-sway-int1/800/600",
          "https://picsum.photos/seed/iveco-sway-int2/800/600"
        ]
      }
    }
  ]
};

export function getBrandVehicles(brandId: string): Vehicle[] {
  return products[brandId] || [];
}

export function getVehicle(brandId: string, vehicleId: string): Vehicle | undefined {
  const brandVehicles = products[brandId] || [];
  return brandVehicles.find(v => v.id === vehicleId);
}

export function getAllBrands(): string[] {
  return Object.keys(products);
}
