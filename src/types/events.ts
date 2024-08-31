export interface IEvents {
  eventName: string;
  enrlmtStartDate: string;
  enrlmtEndDate: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  description: string;
  category: string;
  eventType: string;
  maxEnrollment: number;
  equipmentsRequired: string;
  Files?: File[];
}

export interface ISession {
  sessionName: string;
  sessionType?: string;
  sessionLocation: string;
  sessionDuration: Date;
  equipmentsRequired: string;
  sessionTrainerUserId?: string;
  startDate: Date;
  description: string;
  eventId?: string;
}
