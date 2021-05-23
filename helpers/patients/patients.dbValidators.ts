import { CustomValidator } from "express-validator";
import { Patient } from "../../models";

export const validPatientIdInDb: CustomValidator = async (
  id: string,
  { req }
) => {
  const patient = await Patient.findById(id);
  if (!patient) {
    throw new Error(`Paciente con id ${id} no encontrado`);
  }
  if (!patient.status) {
    throw new Error(
      `Paciente con id ${id} restringido, póngase en contacto con un administrador`
    );
  }
  req.patient = patient;
  return true;
};

export const patientCellphoneRegistered: CustomValidator = async (
  mobileNumber: number
) => {
  const mobileNumberExists = await Patient.findOne({ mobileNumber });
  if (mobileNumberExists) {
    throw new Error(`El teléfono ${mobileNumber} ya se encuentra registrado`);
  }
  return true;
};

export const patientCellphoneRegisteredForUpdate: CustomValidator = async (
  mobileNumber: number,
  { req }
) => {
  const patient = req.patient;
  const mobileNumberExists = await Patient.findOne({ mobileNumber });
  if (
    mobileNumberExists &&
    mobileNumberExists.mobileNumber !== patient.mobileNumber
  ) {
    throw new Error(`El teléfono ${mobileNumber} ya se encuentra registrado`);
  }
  return true;
};
