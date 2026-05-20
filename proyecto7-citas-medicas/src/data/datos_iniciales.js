export const doctores_iniciales = [
  {
    id: '1',
    nombre: 'Dra. Ana Maria Lopez',
    especialidad: 'Cardiologia',
    experiencia: 12,
    consultorio: '101',
    horario: 'Lun-Vie 9:00 - 17:00',
    imagen: 'https://randomuser.me/api/portraits/women/68.jpg',
    email: 'ana.lopez@clinica.com',
    telefono: '555-0101'
  },
  {
    id: '2',
    nombre: 'Dr. Carlos Rodriguez',
    especialidad: 'Pediatria',
    experiencia: 8,
    consultorio: '102',
    horario: 'Lun-Vie 8:00 - 16:00',
    imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    email: 'carlos.rodriguez@clinica.com',
    telefono: '555-0102'
  },
  {
    id: '3',
    nombre: 'Dra. Maria Fernandez',
    especialidad: 'Dermatologia',
    experiencia: 15,
    consultorio: '103',
    horario: 'Mar-Sab 10:00 - 18:00',
    imagen: 'https://randomuser.me/api/portraits/women/45.jpg',
    email: 'maria.fernandez@clinica.com',
    telefono: '555-0103'
  },
  {
    id: '4',
    nombre: 'Dr. Javier Mendez',
    especialidad: 'Neurologia',
    experiencia: 10,
    consultorio: '104',
    horario: 'Lun-Vie 9:00 - 17:00',
    imagen: 'https://randomuser.me/api/portraits/men/75.jpg',
    email: 'javier.mendez@clinica.com',
    telefono: '555-0104'
  }
]

export const citas_iniciales = [
  {
    id: '1',
    paciente_nombre: 'Juan Perez',
    paciente_telefono: '555-1234',
    paciente_email: 'juan@email.com',
    doctor_id: '1',
    fecha: '2024-12-20',
    hora: '10:00',
    motivo: 'Chequeo general',
    estado: 'confirmada'
  },
  {
    id: '2',
    paciente_nombre: 'Maria Gonzalez',
    paciente_telefono: '555-5678',
    paciente_email: 'maria@email.com',
    doctor_id: '2',
    fecha: '2024-12-21',
    hora: '11:30',
    motivo: 'Vacunacion',
    estado: 'pendiente'
  },
  {
    id: '3',
    paciente_nombre: 'Luis Ramirez',
    paciente_telefono: '555-9012',
    paciente_email: 'luis@email.com',
    doctor_id: '3',
    fecha: '2024-12-22',
    hora: '09:00',
    motivo: 'Consulta dermatologica',
    estado: 'confirmada'
  }
]