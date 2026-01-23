import type { Patient } from "../interfaces";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  return (
    <div className="mx-10 my-5 px-10 p-5 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID:" data={patient.id} />
      <PatientDetailItem label="Nombre:" data={patient.name} />
      <PatientDetailItem label="Propietario:" data={patient.caretaker} />
      <PatientDetailItem label="Email:" data={patient.email} />
      <PatientDetailItem label="Síntomas:" data={patient.symptoms} />
      <PatientDetailItem
        label="Fecha de alta:"
        data={patient.date.toString()}
      />
    </div>
  );
}
