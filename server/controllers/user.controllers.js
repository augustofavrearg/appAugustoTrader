import User from '../models/user.model.js';

export const register = async (req, res) => {
  const {
    UserName,
    Email,
    Password,
    UserCode,
    Phone,
    CodeReferenced,
    UserPoints,
    idPaidPlanForUser
  } = req.body;

  try {
    // Crear una nueva instancia del modelo User
    const newUser = await User.create({
      UserName,
      Email,
      Password,
      UserCode,
      Phone,
      CodeReferenced,
      UserPoints,
      idPaidPlanForUser
    });

    const allUsers = await User.findAll();
    console.log("Registros en la base de datos:", allUsers);

    res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ error: "Error interno del servidor al registrar el usuario" });
  }
};

export const login = (req, res) => {
  // Lógica de inicio de sesión, si es necesario
  res.send("Iniciando sesión...");
};
