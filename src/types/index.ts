export type PageRoute = '/' | '/sobre' | '/contato' | '/condicoes-comerciais' | '/privacidade';

export interface VehicleInquiry {
  brand: string;
  model: string;
  year: string;
  displacement?: string;
  fuelType?: string;
  notes?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
