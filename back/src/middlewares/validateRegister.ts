import { NextFunction, Request, Response } from "express";

const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni, username, password } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Error. Falta el nombre." });
    }

    if (!email) {
        return res.status(400).json({ message: "Error. Falta el email." });
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Error. Email inválido." });
        }
    }

    if (!birthdate) {
        return res.status(400).json({ message: "Error. Falta la fecha de nacimiento." });
    } else {
        const newBirthdate = new Date(birthdate);
        const presentDate = new Date();
        const time1 = newBirthdate.getTime();
        const time2 = presentDate.getTime();

        if (time1 >= time2) {
            return res.status(400).json({ message: "Error. La fecha de nacimiento debe ser anterior a la de hoy." });
        }
    }

    if (!nDni) {
        return res.status(400).json({ message: "Error. Falta el DNI." });
    } else {
        if (nDni < 1000) {
            return res.status(400).json({ message: "Error. el DNI debe ser mayor o igual a 1000." });
        }
    }

    if (!username) {
        return res.status(400).json({ message: "Error. Falta el nombre de usuario" });
    } else {
        if (username.length <= 5) {
            return res.status(400).json({ message: "Error. El nombre de usuario debe contener mínimo 6 caractéres." });
        }
    }

    if (!password) {
        return res.status(400).json({ message: "Error. Falta la contraseña." });
    } else {
        if (password.length <= 7) {
            return res.status(400).json({ message: "Error. La contraseña debe contener mínimo 8 caractéres." });
        }
    }

    next();
};

export default validateRegister;
