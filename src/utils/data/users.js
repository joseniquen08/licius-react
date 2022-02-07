import { v4 } from "uuid";

const uuids = [
  {
    uuid: v4(),
  },
  {
    uuid: v4(),
  },
  {
    uuid: v4(),
  },
  {
    uuid: v4(),
  },
];

export const users = [
  {
    id: uuids[0].uuid,
    username: 'usuario_prueba',
    password: 'pass123654',
  },
  {
    id: uuids[1].uuid,
    username: 'otro_usuario',
    password: 'password321',
  },
  {
    id: uuids[2].uuid,
    username: 'rest_prueba',
    password: 'restpass123',
  },
  {
    id: uuids[1].uuid,
    username: 'otro_rest',
    password: 'restpass876',
  },
]

export const clients = [
  {
    user_id: uuids[0].uuid,
    profile: {
      name: 'Usuario',
      lastname: 'Prueba',
      phone: '987654321',
      email: 'usuario.prueba@gmail.com',
      address: 'Calle Prueba 123',
      city: 'Lima',
      country: 'Perú',
      description: 'Lorem lorem ipsum dolor sit amet, consectetur adip',
    },
  },
  {
    user_id: uuids[1].uuid,
    profile: {
      name: 'Otro',
      lastname: 'Usuario',
      phone: '987655234',
      email: 'otro.usuario@gmail.com',
      address: 'Calle Otro 243',
      city: 'Arequipa',
      country: 'Perú',
      description: 'Lorem lorem ipsum dolor sit amet, consectetur adip occum soc et child',
    },
  },
];

export const restaurants = [
  {
    user_id: uuids[2].uuid,
    profile: {
      name_comercial: 'BEMBOS',
      razon_social: 'BEMBOS S.A.C',
      ruc: '20101087647',
      email: 'rest.prueba@gmail.com',
      address: 'Cal. Camino Real Nro. 1801 Int. A4 Z.I. San Pedrito',
      city: 'Lima',
      country: 'Perú',
      description: 'Lorem lorem ipsum dolor sit amet',
      id_category: 'ccff',
      logo_url: '',
      locations: [
        {
          id_location: 'b001',
          title: 'Bembos Benavides',
          description: 'Hamburguesas',
          img_url: '',
          address: 'Av. Benavides N° 1821 Miraflores, LIMA 18',
          city: 'Lima',
          country: 'Perú',
          phone: '+51765438123',
          latitude: '-34.666768',
          longitude: '-58.511091',
          tags: [
            'hamburguesas',
            'comida rápida',
            'dine-in',
            'takeaway',
            'delivery',
          ],
          schedule: [
            {
              day: 'Lunes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Martes',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Miércoles',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Jueves',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Viernes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Sábado',
              isOpen: true,
              open_at: '11:00',
              close_at: '17:00'
            },
            {
              day: 'Domingo',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
          ],
        },
        {
          id_location: 'b002',
          title: 'Bembos Angamos',
          description: 'Hamburguesas',
          img_url: '',
          address: 'Av. Angamos, Surquillo 15036',
          city: 'Lima',
          country: 'Perú',
          phone: '+51765438123',
          latitude: '-12.126898',
          longitude: '-77.013487',
          tags: [
            'hamburguesas',
            'comida rápida',
            'dine-in',
            'takeaway',
            'delivery',
          ],
          schedule: [
            {
              day: 'Lunes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Martes',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Miércoles',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Jueves',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Viernes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Sábado',
              isOpen: true,
              open_at: '11:00',
              close_at: '17:00'
            },
            {
              day: 'Domingo',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
          ],
        },
        {
          id_location: 'b003',
          title: 'Bembos Camino Real',
          description: 'Hamburguesas',
          img_url: '',
          address: 'Av. Los Conquistadores N° 120, Lima 15073',
          city: 'Lima',
          country: 'Perú',
          phone: '+51765438123',
          latitude: '-12.097033',
          longitude: '-77.035883',
          tags: [
            'hamburguesas',
            'comida rápida',
            'dine-in',
            'takeaway',
            'delivery',
          ],
          schedule: [
            {
              day: 'Lunes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Martes',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Miércoles',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Jueves',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Viernes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Sábado',
              isOpen: true,
              open_at: '11:00',
              close_at: '17:00'
            },
            {
              day: 'Domingo',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
          ],
        }
      ]
    },
  },
  {
    user_id: uuids[3].uuid,
    profile: {
      name_comercial: 'TANTA',
      razon_social: 'CINCO MILLAS SAC',
      ruc: '20509076945',
      email: 'otro.rest@gmail.com',
      address: 'Av. Larco Nro. 1232 Int. Ref (Interior 10w101 Piso 10)',
      city: 'Lima',
      country: 'Perú',
      description: 'Lorem lorem ipsum dolor sit amet, consectetur adip occum soc et child euismod. Lorem ipsum dolor sit amet',
      id_category: 'ccpe',
      logo_url: '',
      locations: [
        {
          id_location: 't001',
          title: 'Tanta San Isidro',
          description: 'Gatronomía Peruana',
          img_url: '',
          address: 'Pancho Fierro 115, San Isidro 15073',
          city: 'Lima',
          country: 'Perú',
          phone: '+51765438123',
          latitude: '-12.097073',
          longitude: '-77.035240',
          tags: [
            'comida peruana',
            'comida fusión',
            'brunch',
            'dine-in',
            'takeaway',
            'delivery',
          ],
          schedule: [
            {
              day: 'Lunes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Martes',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Miércoles',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Jueves',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Viernes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Sábado',
              isOpen: true,
              open_at: '11:00',
              close_at: '17:00'
            },
            {
              day: 'Domingo',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
          ],
        },
        {
          id_location: 't002',
          title: 'Tanta San Miguel',
          description: 'Gastronomía Peruana',
          img_url: '',
          address: 'CC Plaza, Av. la Marina 2000, San Miguel 15088',
          city: 'Lima',
          country: 'Perú',
          phone: '+51765438123',
          latitude: '-12.076394',
          longitude: '-77.082888',
          tags: [
            'comida peruana',
            'comida fusión',
            'brunch',
            'dine-in',
            'takeaway',
            'delivery',
          ],
          schedule: [
            {
              day: 'Lunes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Martes',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Miércoles',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Jueves',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Viernes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Sábado',
              isOpen: true,
              open_at: '11:00',
              close_at: '17:00'
            },
            {
              day: 'Domingo',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
          ],
        },
        {
          id_location: 't003',
          title: 'Tanta Salaverry',
          description: 'Gastronomía Peruana',
          img_url: '',
          address: 'Av. Gral. Salaverry 2370, Jesús María 15076',
          city: 'Lima',
          country: 'Perú',
          phone: '+51765438123',
          latitude: '-12.090757',
          longitude: '-77.052374',
          tags: [
            'comida peruana',
            'comida fusión',
            'brunch',
            'dine-in',
            'takeaway',
            'delivery',
          ],
          schedule: [
            {
              day: 'Lunes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Martes',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Miércoles',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Jueves',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Viernes',
              isOpen: true,
              open_at: '10:00',
              close_at: '18:00'
            },
            {
              day: 'Sábado',
              isOpen: true,
              open_at: '11:00',
              close_at: '17:00'
            },
            {
              day: 'Domingo',
              isOpen: false,
              open_at: '10:00',
              close_at: '18:00'
            },
          ],
        }
      ],
    },
  },
];

export const categories = [
  {
    id: 'ccpe',
    title: 'Comida Peruana',
    description: 'Comida peruana típica y de fusión.'
  },
  {
    id: 'ccma',
    title: 'Comida Marina',
    description: 'Comida marina, con pesca del día y fusión.'
  },
  {
    id: 'ccff',
    title: 'Comida Rápida',
    description: 'Lo mejor en fast food, para llevar y dine-in.'
  },
  {
    id: 'ccbt',
    title: 'Bares y tapas',
    description: 'Bebidas, tragos y piqueos para pasar el mejor momento .'
  },
  {
    id: 'ccit',
    title: 'Comida Italiana',
    description: 'Comida Italiana y fusión.'
  },
  {
    id: 'ccpz',
    title: 'Pizzería',
    description: 'Lo mejor en pizzas.'
  },
];

export const posts = [
  {
    user_id: uuids[1].uuid,
    date: '2021-01-01T12:00:00Z',
    content: '¿Cuál faltaría en tu lista? El 05 de febrero es el día del pisco sour y quiero compartirte los imperdibles y mejores de Lima para que preparen su ruta. ¡Dejen sus favoritos en los comentarios!',
    attachhment_urls: [
      ''
    ]
  },
  {
    user_id: uuids[1].uuid,
    date: '2021-01-01T12:00:00Z',
    content: '¿Qué restaurantes me recomiendan en Arequipa? Los leo',
    attachhment_urls: [
      ''
    ]
  },
  {
    user_id: uuids[1].uuid,
    date: '2021-01-01T12:00:00Z',
    content: 'Les comparto mis #BestPlaces para disfrutar makis & nigiris',
    attachhment_urls: [
      ''
    ]
  },
  {
    user_id: uuids[1].uuid,
    date: '2021-01-01T12:00:00Z',
    content: '¿Cómida árabe auténtica y deliciosa?  No busques más, ayer bajé a @elpalestinos y estuvo sensancional. Encuentras Shawerma de pollo a S/13 solcitos y recontra taypa, con abundante relleno, pollo tierno, hummus y vegetales. No podía faltar probar Pita chips con hummus, a S/8 en sabores clásicos y hierbas crocantes, excelente sabor! Riquísima opción.',
    attachhment_urls: [
      ''
    ]
  },
  {
    user_id: uuids[3].uuid,
    date: '2021-01-01T12:00:00Z',
    content: 'Ven y disfruta de los mejores platos peruanos. Acompáñalos con un delicioso pisco sour, y celebra con nosotros',
    attachhment_urls: [
      ''
    ]
  },
  {
    user_id: uuids[2].uuid,
    date: '2021-01-01T12:00:00Z',
    content: '¿Ya probaste nuestro combo Anticuchero? Disfrutalo con toda la familia. Recuerda sobrino, Como Bembos, no hay otra!',
    attachhment_urls: [
      ''
    ]
  }
]