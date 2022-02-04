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

export const clientes = [
  {
    user_id: uuids[0].uuid,
    profile: {
      name: 'Usuario',
      lastname: 'Prueba',
      phone: '987654321',
      email: 'usuario.prueba@gmail.com',
      address: 'Calle Prueba 123',
      city: 'Lima',
      Country: 'Perú',
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
      Country: 'Perú',
      description: 'Lorem lorem ipsum dolor sit amet, consectetur adip occum soc et child',
    },
  },
];

export const restaurantes = [
  {
    user_id: uuids[2].uuid,
    profile: {
      name_comercial: 'Rest Prueba',
      razon_social: 'Rest Prueba SAC',
      ruc: '651838131',
      email: 'rest.prueba@gmail.com',
      address: 'Avenida Prueba 1243',
      city: 'Lima',
      Country: 'Perú',
      description: 'Lorem lorem ipsum dolor sit amet',
    },
  },
  {
    user_id: uuids[3].uuid,
    profile: {
      name_comercial: 'Otro Rest',
      razon_social: 'Otro Rest SAC',
      ruc: '24342425',
      email: 'otro.rest@gmail.com',
      address: 'Avenida Otro 3243',
      city: 'Buenos Aires',
      Country: 'Argentina',
      description: 'Lorem lorem ipsum dolor sit amet, consectetur adip occum soc et child euismod. Lorem ipsum dolor sit amet',
      locations: [
        {
          title: 'Otro Rest 1',
          description: 'Sede principal',
          address: 'Avenida Otro 3243',
          city: 'Buenos Aires',
          country: 'Argentina',
          phone: '+54765438123',
          latitude: '-34.666768',
          longitude: '-58.511091',
          tags: [],
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
      ],
    },
  },
];

export const categories = [
  {
    id: v4(),
    title: 'Comida peruana',
    description: 'Comida peruana típica y de fusión.'
  },
];