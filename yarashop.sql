-- Estructura de tabla para la tabla bodeguero
--

CREATE TABLE bodeguero 
(  
 idAdmin int IDENTITY(1,1) NOT NULL,  
 nombreCompleto varchar (256) NOT NULL,  
 correo varchar(256) NOT NULL,  
 password varchar(256) NOT NULL,
 suscripcion varchar(256) NOT NULL  
);  

--
-- Volcado de datos para la tabla bodeguero
--

INSERT bodeguero
   (nombreCompleto, correo, password, suscripcion)  
VALUES  
   ('Jhonatan Guevara', 'jhony.ames26@gmail.com', '12as4', 'FREE');
INSERT bodeguero
   (nombreCompleto, correo, password, suscripcion)  
VALUES  
   ('Fiorela Huarcaya', 'fiorela.16@gmail.com', '123', 'FREE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla categoria
--

CREATE TABLE categoria (
  idCategoria int NOT NULL,
  nombreCat varchar(256) NOT NULL,
  descripcion varchar(256) NOT NULL
);

--
-- Volcado de datos para la tabla categoria
--

INSERT INTO categoria (idCategoria, nombreCat, descripcion) VALUES
(1, 'Lácteo', 'Leche, Yogurt, Mantequilla'),
(2, 'Bebida', 'Gaseosa, Jugos, Agua'),
(3, 'Embutido', 'Salchicha, Jamonada, Tocino, chorizo'),
(4, 'Fideo', '-'),
(5, 'Helado', '-'),
(6, 'Galleta', '-'),
(7, 'Chocolate', 'En todas sus presentaciones'),
(8, 'Salsas y Cremas', 'Salsas, Cremas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla producto
--

CREATE TABLE producto (
  idProducto int NOT NULL,
  idCategoria varchar(256) NOT NULL,
  nombreP varchar(256) NOT NULL,
  descripcion varchar(256) NOT NULL,
  precioCosto decimal(10,2) NOT NULL,
  precioVentaR decimal(10,2) NOT NULL,
  rucProvee varchar(12) DEFAULT NULL,
  codBarra varchar(255) NOT NULL
);

--
-- Volcado de datos para la tabla producto
--

INSERT INTO producto (idProducto, idCategoria, nombreP, descripcion, precioCosto, precioVentaR, rucProvee, codBarra) VALUES
(1, '1', 'Leche entera', 'Bolsa x 900 ml', '3.00', '4.00', '20415932376', '2837642837641'),
(2, '1', 'Mantequilla GLORIA', 'Con Sal Pote 400g', '12.50', '12.00', '20415932376', '6733186733181'),
(3, '1', 'Leche UHT GLORIA ', 'Sin Lactosa x 1L', '4.80', '5.50', '20415932376', '2977752977751'),
(4, '1', 'Yogurt Bebible GLORIA', 'Galonera 1.9Kg', '8.50', '9.00', '20415932376', '1587711587711'),
(5, '1', 'Yogurt Bebible GLORIA ', 'Vainilla Galonera 1.9Kg', '8.50', '9.00', '20415932376', '5468505468502'),
(6, '1', 'Leche Condensada GLORIA', 'Lata 393g', '4.50', '5.00', '20415932376', '2054452054452'),
(7, '2', 'Gaseosa COCA COLA Sin Azúcar', 'Botella 1.5L', '4.80', '5.50', '20415932376', '7204167204163'),
(8, '5', 'Helado PEZIDURI', 'Tricolor Pote 2.2L', '12.80', '13.50', '20263322496', '4241384241381'),
(9, '6', 'Galletas MOROCHAS', 'Sabor Chocolate', '0.50', '0.70', '20263322496', '1234567890128'),
(10, '1', 'Leche Condensada NESTLÉ', 'Lata 393g', '5.00', '5.50', '20263322496', '4755484755481'),
(11, '6', 'Galleta NESTLE MOROCHAS', 'Bolsa 42g', '1.00', '1.40', '20263322496', '3080373080372'),
(12, '6', 'Galletas Saladas DORÉ', 'Paquete 230g', '4.00', '4.50', '20263322496', '4679881467988'),
(13, '6', 'Wafer COCOSETTE', 'Sabor a Coco', '0.80', '1.20', '20263322496', '4487934487931'),
(14, '7', 'Chocolate LENTEJAS', 'Grageas Caja 30g', '0.80', '1.20', '20263322496', '5901234123457'),
(15, '7', 'Chocolate KIT KAT', 'De leche Paquete 45Gr', '3.50', '4.00', '20263322496', '1485381485381'),
(16, '7', 'Chocolate SUBLIME Bitter', 'Envoltura 40g', '0.80', '1.50', '20263322496', '4814194814191'),
(17, '7', 'Chocolate NESTLE Sublime Blanco', 'Sonrisa Envoltura 40g', '1.00', '1.70', '20263322496', '9617769617761'),
(18, '3', 'Pack SAN FERNANDO Jamón Sándwich + Queso Edam ', 'Paquete 360g', '12.00', '13.00', '20100154308', '2943442943441'),
(19, '3', 'Nuggets Pechuga de Pollo SAN FERNANDO', 'Caja 24un', '10.50', '11.20', '20100154308', '9024119024111'),
(20, '3', 'Hot Dog Ahumado de Pollo SAN FERNANDO', 'Paquete 440g', '6.80', '7.50', '20100154308', '9788492808274'),
(23, '3', 'Salchicha de Pollo SAN FERNANDO', 'Paquete 250g', '3.00', '3.50', '20100154308', '9495589495581'),
(24, '1', 'Mezcla Láctea LAIVE ', 'Sin Lactosa Caja 480g', '2.80', '3.50', '20100095450', '7734327734321'),
(25, '1', 'Mantequilla LAIVE', 'con Sal Barra 200g', '8.00', '8.50', '20100095450', '7051767051761'),
(26, '1', 'Yogurt Griego LAIVE', 'Natural Vaso 500g', '8.00', '8.50', '20100095450', '2121712121711'),
(27, '1', 'Yogurt LAIVE Kids', 'Fresa Vaso 120g', '1.00', '1.50', '20100095450', '8042358042358'),
(28, '4', 'Fideos Spaghetti MOLITALIA', 'Bolsa 1Kg', '3.80', '4.50', '20100035121', ''),
(29, '8', 'Salsa Pomarola MOLITALIA con Hongos y Laurel', 'Doypack 190g', '1.80', '2.50', '20100035121', ''),
(30, '4', 'Fideos Munición MOLITALIA', 'Bolsa 250g', '1.00', '1.50', '20100035121', '');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla proveedor
--

CREATE TABLE proveedor (
  rucProvee varchar(12) NOT NULL,
  RazonSocial varchar(256) NOT NULL,
  telefonoProvee varchar(256) NOT NULL,
  direccionProvee varchar(256) NOT NULL,
  paginaProvee varchar(256) NOT NULL
);

--
-- Volcado de datos para la tabla proveedor
--

INSERT INTO proveedor (rucProvee, RazonSocial, telefonoProvee, direccionProvee, paginaProvee) VALUES
('20100035121', 'Molitalia', '5136262', 'Av. Venezuela Nro. 2850 - Lima', 'http://www.molitalia.com.pe'),
('20100095450', 'LAIVE S A', '3560218', 'Av. Nicolas de Pierola Nro. 601 Fnd. la Estrella (Alt Km 9.8 Carr Central,santa Clara)', 'http://www.ajegroup.com'),
('20100154308', 'SAN FERNANDO S.A.', '2135300', 'Av. Republica de Panama Nro. 4295 - Surquillo', 'http://www.san-fernando.com.pe'),
('20100190797', 'Gloria Sa', '4707170', 'Av. Republica de Panama Nro. 2461 - La Victoria -Lima', 'http://www.gloria.com.pe'),
('20263322496', 'NESTLE PERU S A', '4364040', 'Cal. Luis Galvani Nro. 493 -Ate- Lima', 'http://www.nestle.com.pe'),
('20415932376', 'Coca-Cola Servicios de Peru S.A', '4423050', 'Av. República de Panamá Nro. 4050 - Lima ', 'http://www.coca-cola.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla tienda
--

CREATE TABLE tienda (
  idTienda int IDENTITY(1,1) NOT NULL,
  idAdministrador int NOT NULL,
  nombreTienda varchar(256) NOT NULL,
  telefono varchar(256) NOT NULL,
  ubicacion varchar(256) NOT NULL
);

--
-- Volcado de datos para la tabla tienda
--

INSERT tienda
   (idAdministrador, nombreTienda, telefono, ubicacion)  
VALUES  
   (1, 'ADIFONI SAC', '4822272', 'Flor de Amancaes');
  
INSERT tienda
   (idAdministrador, nombreTienda, telefono, ubicacion)  
VALUES  
   (2, 'FiorelitaSHOP', '987654321', 'La choza de Huaycan');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla bodeguero
--
ALTER TABLE bodeguero
  ADD PRIMARY KEY (idAdmin);

--
-- Indices de la tabla categoria
--
ALTER TABLE categoria
  ADD PRIMARY KEY (idCategoria);

--
-- Indices de la tabla producto
--
ALTER TABLE producto
  ADD PRIMARY KEY (idProducto),
  ADD KEY fk_provee (rucProvee);

--
-- Indices de la tabla proveedor
--
ALTER TABLE proveedor
  ADD PRIMARY KEY (rucProvee);

--
-- Indices de la tabla tienda
--
ALTER TABLE tienda
  ADD PRIMARY KEY (idTienda),
  ADD KEY fk_adm (idAdministrador);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla bodeguero
--
ALTER TABLE bodeguero
  MODIFY idAdmin int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla producto
--
ALTER TABLE producto
  MODIFY idProducto int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla tienda
--
ALTER TABLE tienda
  MODIFY idTienda int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla producto
--
ALTER TABLE producto
  ADD CONSTRAINT fk_provee FOREIGN KEY (rucProvee) REFERENCES proveedor (rucProvee) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla tienda
--
ALTER TABLE tienda
  ADD CONSTRAINT fk_adm FOREIGN KEY (idAdministrador) REFERENCES bodeguero (idAdmin) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
