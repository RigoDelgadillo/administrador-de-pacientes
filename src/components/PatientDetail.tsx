import type { Patient } from "../interfaces";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);

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

      <div className="flex justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg hover:cursor-pointer"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg hover:cursor-pointer"
          onClick={() => deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
