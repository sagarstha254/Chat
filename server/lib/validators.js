import { body, check, param, validationResult } from "express-validator";
import { ErrorHandler } from "../utils/utility.js";

const registerValidator = () => [
  body(["name", "Please Enter Name"]).notEmpty(),
  body(["username", "Please Enter Username"]).notEmpty(),
  body(["bio", "Please Enter Bio"]).notEmpty(),
  body(["password", "Please Enter Password"]).notEmpty(),
  check("avatar", "Please Upload Avatar").notEmpty(),
];

const loginValidator = () => [
  body(["username", "Please Enter Username"]).notEmpty(),
  body(["password", "Please Enter Password"]).notEmpty(),
];

const validateHandler = (req, res, next) => {
  const errors = validationResult(req);

  const errorMessages = errors
    .array()
    .map((error) => error.msg)
    .join(",");

  if (errors.isEmpty()) return next();
  else next(new ErrorHandler(errorMessages, 400));
};

const newGroupValidator = () => [
  body(["name", "Please Enter Name"]).notEmpty(),
  body("members")
    .notEmpty()
    .withMessage("Please Enter Members")
    .isArray({ min: 2, max: 100 })
    .withMessage("Members must be 2-100"),
];

const addMemberValidator = () => [
  body(["chatId", "Please Enter Chat ID"]).notEmpty(),
  body("members")
    .notEmpty()
    .withMessage("Please Enter Members")
    .isArray({ min: 1, max: 97 })
    .withMessage("Members must be 1-97"),
];

const removeMemberValidator = () => [
  body(["chatId", "Please Enter Chat ID"]).notEmpty(),
  body(["userId", "Please Enter User ID"]).notEmpty(),
];

const sendAttachmentsValidator = () => [
  body(["chatId", "Please Enter Chat ID"]).notEmpty(),
  check("files")
    .notEmpty()
    .withMessage("Please Upload Attachments")
    .isArray({ min: 1, max: 5 })
    .withMessage("Members must be 1-5"),
];

const chatIdValidator = () => [
  param(["id", "Please Enter Chat ID"]).notEmpty(),
];

const renameValidator = () => [
  param(["id", "Please Enter Chat ID"]).notEmpty(),
  body(["name", "Please Enter New Name"]).notEmpty(),
];

export {
  registerValidator,
  validateHandler,
  loginValidator,
  newGroupValidator,
  addMemberValidator,
  removeMemberValidator,
  sendAttachmentsValidator,
  chatIdValidator,
  renameValidator,
};
