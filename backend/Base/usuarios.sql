SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `usuarios` (
  `user_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `colegio` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `edad` varchar(255) NOT NULL,
  `imagen` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `usuarios` (`user_id`, `nombre`, `correo`, `apellido`, `contrasena`, `colegio`, `telefono`, `edad`, `imagen`) VALUES
(1, 'Steiner', 'pruebadesteiner@gmail.com', 'Herrera', 'mosquera', 'I.E.M.M.M', '3020293030', '15', 'user_default.png');


ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `usuarios`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;



CREATE TABLE `tareas` (
  `tareas_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `info` varchar(255) NOT NULL,
  `f_inicial` varchar(255) NOT NULL,
  `f_final` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL,
  FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tareas` (`tareas_id`, `nombre`,`info`,`f_inicial`,`f_final`, `id_user`) VALUES (1, 'Matematicas', 'Buscar como encontrar la hipotenusa', '15/10/2022', '17/10/2022',1);

ALTER TABLE `tareas`
  ADD PRIMARY KEY (`tareas_id`);

ALTER TABLE `tareas`
  MODIFY `tareas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

COMMIT;