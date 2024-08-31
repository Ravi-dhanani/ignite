export interface ITenantDetail {
  // id: string;
  programStartDate: Date | any;
  programEndDate: Date | any;
  coachRegStartDate: Date | any;
  coachRegEndDate: Date | any;
  chlngrRegStartDate: Date | any;
  chlngrRegEndDate: Date | any;
  maxChallenger: number;
}

export interface ISummary {
  challengers: number;
  challenges: number;
  events: number;
  polls: number;
  wellnessProvider: number;
  coaches: number;
}

export interface ITenant {
  domain: string;
  isDefault: boolean;
  logo: string;
  name: string;
  tenantId: string;
}

export interface IAdminUser {
  createdBy: string;
  createdOn: string;
  email: string;
  isTenantAdmin: boolean;
  userId: string;
  name: string;
}

export interface IFaqs {
  answer: string;
  isNew?: boolean;
  id: string;
  question: string;
  isActive?: boolean;
}

export interface IPolicyInfo {
  content: string;
  id: string;
  name: string;
  policyType?: string;
}
