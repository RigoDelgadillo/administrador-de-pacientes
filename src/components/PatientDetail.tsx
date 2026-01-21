import type { Patient } from "../interfaces";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  return <div>{patient.name}</div>;
}
