export interface IUser {
  nickname?: string;
  profile?: string | File;
  emdName?: string;
  emdId?: number;
}

export type ReportType = "USER" | "POST" | "COMMENT";

export interface IReportUser {
  title: string;
  content: string;
  reportType: ReportType;
  targetId: number;
  images?: File[];
}
