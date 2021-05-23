import { Request, Response } from "express";
import { ClinicalHistory, IPatient, IRecord, IUser, Record } from "../models";
import { errorResponse, successResponse } from "../network/response";

export const listPatientRecords = async (req: Request, res: Response) => {
  const { clinicalHistoryId } = req.patient as IPatient;

  try {
    const clinicalHistory = await ClinicalHistory.findById(
      clinicalHistoryId
    ).populate([
      {
        path: "records",
        select: ["updatedBy", "dateTime", "medicalCondition"],
        populate: {
          path: "updatedBy",
          select: ["firstName", "lastName", "mobileNumber"],
        },
      },
      {
        path: "patientId",
        select: ["firstName", "lastName", "mobileNumber"],
      },
    ]);
    successResponse(res, clinicalHistory as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const getRecordById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const record = await Record.findById(id).populate([
      {
        path: "patient",
        select: ["firstName", "gender", "lastName", "mobileNumber"],
      },
      {
        path: "updatedBy",
        select: ["email", "firstName", "lastName", "mobileNumber"],
      },
    ]);
    successResponse(res, record as object, 200);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const createRecord = async (req: Request, res: Response) => {
  const { _id, __v, ...data } = req.body as IRecord;
  const { _id: activeUserId } = req.activeUser as IUser;
  const { clinicalHistoryId } = req.patient as IPatient;

  data.updatedBy = activeUserId;
  const record = new Record(data);
  try {
    const clinicalHistory = await ClinicalHistory.findById(clinicalHistoryId);
    const recordsArray = clinicalHistory!.records;
    recordsArray!.unshift(record._id);
    await ClinicalHistory.findByIdAndUpdate(clinicalHistoryId, {
      records: recordsArray,
    });
    await record.save();
    successResponse(res, record, 201);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};

export const updateRecord = async (req: Request, res: Response) => {
  const { _id, __v, patient, ...data } = req.body as IRecord;
  const { _id: activeUserId } = req.activeUser as IUser;
  const { id } = req.params;

  data.updatedBy = activeUserId;
  try {
    await Record.findByIdAndUpdate(id, data);
    successResponse(res, "Registro modificado correctamente", 204);
  } catch (error) {
    errorResponse(res, "Por favor contáctese con un administrador", 500, error);
  }
};
