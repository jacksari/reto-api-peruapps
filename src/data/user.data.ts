export enum Role {
  user = 'user_role',
  admin = 'admin_role'
}

export enum Place {
  p1 = 'Miraflores',
  p2 = 'La Molina',
  p3 = 'San Isidro'
}

export interface User {
  _id?: string,
  name: string,
  lastname: string,
  email: string,
  password?: string,
  status: boolean,
  img: string,
  place?: Place,
  role: Role,
  slug: string,
  google?: boolean,
  phone?: string,
  birthday?: Date,
  created_at: Date,
  updated_at: Date,
}