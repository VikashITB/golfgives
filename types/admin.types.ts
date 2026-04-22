import type { Role, Status } from "@/types";

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
};

export type AdminMetric = {
  label: string;
  value: string | number;
};
