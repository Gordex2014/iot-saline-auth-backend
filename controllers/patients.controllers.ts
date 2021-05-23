import { Request, Response } from "express";
import { ClinicalHistory, IPatient, IUser, Patient } from "../models";
import { errorResponse, successResponse } from "../network/response";

type AllowedSearch = {
  filter: string;
};

export const listPatients = async (req: Request, res: Response) => {
  const { filter } = req.query as AllowedSearch;

  try {
    if (filter) {
      const regex = new RegExp(filter, "i");
      const patients = await Patient.find({
        $or: [{ firstName: regex }, { lastName: regex }],
        status: true,
      });
      return successResponse(res, patients as object, 200);
    }
    const patients = await Patient.find({ status: true });
    return successResponse(res, patients as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const getPatientById = async (req: Request, res: Response) => {
  const patient = req.patient as IUser;
  successResponse(res, patient as object, 200);
};

export const createPatient = async (req: Request, res: Response) => {
  const { _id, __v, status, roles, lastModifiedBy, ...data } =
    req.body as IPatient;
  const { _id: activeUserId } = req.activeUser as IUser;

  data.createdBy = activeUserId;
  const patient = new Patient(data);
  const clinicalHistory = new ClinicalHistory({ patientId: patient._id });
  patient.clinicalHistoryId = clinicalHistory._id;

  try {
    await clinicalHistory.save();
    await patient.save();
    successResponse(res, patient, 201);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const updatePatient = async (req: Request, res: Response) => {
  const { _id, __v, status, roles, createdBy, clinicalHistoryId, ...data } =
    req.body as IPatient;
  const { _id: activeUserId } = req.activeUser as IUser;
  const { id } = req.params;

  data.lastModifiedBy = activeUserId;
  try {
    await Patient.findByIdAndUpdate(id, data);
    successResponse(res, "Paciente modificado correctamente", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const deletePatient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { _id: activeUserId } = req.activeUser as IUser;

  try {
    await Patient.findByIdAndUpdate(id, {
      status: false,
      lastModifiedBy: activeUserId,
    });
    successResponse(res, "Paciente eliminado", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};
