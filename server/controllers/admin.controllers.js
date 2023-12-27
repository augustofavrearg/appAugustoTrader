// controllers/admin.controllers.js
import Admin from '../models/admin.model.js';

export const register = async (req, res) => {
  const { AdminName, Email, Password, Phone } = req.body;

  try {
    // Sincroniza el modelo con la base de datos (esto puede no ser necesario, depende de tu flujo de trabajo)
    await Admin.sync();

    // Crea una nueva instancia del modelo Admin
    const newAdmin = await Admin.create({
      AdminName,
      Email,
      Password,
      Phone
    });

    const allAdmins = await Admin.findAll();
    console.log("Registros en la base de datos:", allAdmins);

    res.send("Registrando...");
  } catch (error) {
    console.log("Este es el error: ", error);
    res.status(500).send("Error al registrar el administrador");
  }
};

export const login = (req, res) => {
  res.send("Bienvenido al sistema de administración");
};
