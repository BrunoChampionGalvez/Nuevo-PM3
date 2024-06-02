import { NextFunction, Request, Response } from "express";

// Middleware para validar la fecha y la hora de una cita
const validateSchedule = (req: Request, res: Response, next: NextFunction) => {
    const { date, time } = req.body;

    // Validar que la fecha esté presente y sea válida
    if (!date) {
        return res.status(400).json({ message: "Error. Falta la fecha." });
    }

    const appointmentDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Establecer la hora de hoy a medianoche para comparación

    // Validar que la fecha sea posterior a hoy
    if (appointmentDate <= today) {
        return res.status(400).json({ message: "Error. La fecha debe ser posterior a hoy." });
    }

    // Validar que la hora esté presente y sea válida
    if (!time) {
        return res.status(400).json({ message: "Error. Falta la hora." });
    }

    const [hours, minutes] = time.split(':').map(Number);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return res.status(400).json({ message: "Error. Hora inválida." });
    }

    // Validar que la hora esté entre las 8:00 y las 17:00
    if (hours < 8 || hours >= 17) {
        return res.status(400).json({ message: "Error. La hora debe ser después de, o igual a, las 8:00 y antes de las 17:00." });
    }

    next();
};

export default validateSchedule;