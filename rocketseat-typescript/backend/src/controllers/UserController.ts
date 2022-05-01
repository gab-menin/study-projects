import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Boff", email: "gabrielm.boff@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: {
        name: "Boff",
        email: "gabrielm.boff@gmail.com",
      },
      message: {
        subject: "Matrícula",
        body: "Sua matrícula foi efetuada",
      },
    });

    return res.send();
  },
};
