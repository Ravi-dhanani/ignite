interface ICoachProfile {
  personalInfo?: string;
  qualifications?: string;
  coachingPreference: string;
  licences: ILicences;
}

export interface ILicence {
  licence: string;
  licenceBody: string;
}

export interface ILicences {
  licences: ILicence[];
}

export interface IAppUser {
  ProfileImage: string;
  UserId: string;
  Name: string;
  Email: string;
  IsActive: boolean;
  RegisteredOn: string;
  UserType: string;
  Height: string;
  Weight: string;
  Gender: string;
  DateOfBirth: string;
  TShirtSize: string;
  Address: string;
  DailyStepsGoal: string;
  HealthSourceApp: string;
  CoachName: string;
  CoachProfile?: ICoachProfile;
  WellnessProviderProfile: IWellnessProviderProfile;
}

export interface IAppUserStatus {
  id: string;
  isActive: boolean;
}

export interface IWellnessProviderProfile {
  coachingPreference: string;
  licences: ILicences;
  personalInfo: string;
  qualifications: string;
  providerType: string;
  speciality: string;
}
