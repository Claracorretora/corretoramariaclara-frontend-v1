export interface IProperty {
  id: string;
  legalName: string;
  tradeName: string;
  cnpj: string;
  isActive: boolean;
  uf: string;
  city: string;
  cnae: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateProperty {
  legalName: string;
  tradeName: string;
  cnpj: string;
  isActive: boolean;
  uf: string;
  city: string;
  email: string;
  cnae: string;
}

export interface IEditProperty {
  legalName: string;
  tradeName: string;
  cnpj: string;
  isActive: boolean;
  uf: string;
  city: string;
  email: string;
  cnae: string;
}
