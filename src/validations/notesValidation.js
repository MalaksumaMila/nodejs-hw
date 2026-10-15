import { Joi, Segments } from 'celebrate';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const getAllNotesSchema = {};
export const noteIdSchema = {};
export const createNoteSchema = {};
export const updateNoteSchema = {};
