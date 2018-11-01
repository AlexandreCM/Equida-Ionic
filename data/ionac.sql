-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mar 22 Mai 2018 à 14:22
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ionac2`
--

-- --------------------------------------------------------

--
-- Structure de la table `categvente`
--

CREATE TABLE `categvente` (
  `code` varchar(5) NOT NULL,
  `libelle` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `categvente`
--

INSERT INTO `categvente` (`code`, `libelle`) VALUES
('AUT', 'Vente d\'automne'),
('ELVG', 'Vente d\'élevage'),
('ETE', 'Vente d\'été'),
('XFEV', 'Vente mixte de février');

-- --------------------------------------------------------

--
-- Structure de la table `cheval`
--

CREATE TABLE `cheval` (
  `id` int(11) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `sexe` varchar(1) DEFAULT NULL,
  `prixDepart` int(11) DEFAULT NULL,
  `typecheval` int(11) DEFAULT NULL,
  `dateNaissance` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cheval`
--

INSERT INTO `cheval` (`id`, `nom`, `sexe`, `prixDepart`, `typecheval`, `dateNaissance`) VALUES
(1, 'Valdack', 'M', 10000, 2, '2012-12-31'),
(2, 'Trais d\'or', 'M', 7000, 1, '1998-06-06'),
(3, 'Herricka', 'F', 56000, 2, '2007-08-12'),
(4, 'Nuage', 'M', 6500, 1, '2003-09-14'),
(5, 'Flying fox', 'F', 8000, 3, '1996-04-17'),
(6, 'rainbow quest', 'F', 58000, 3, '2006-08-26'),
(7, 'Generous', 'M', 8900, 4, '2006-03-30'),
(8, 'Gladiateur', 'M', 15000, 3, '2011-01-01'),
(9, 'California Chrome', 'F', 12700, 2, '2002-09-24'),
(10, 'Kindjar', 'F', 9500, 3, '2001-11-25'),
(11, 'Dancing Brave', 'F', 9400, 1, '2014-12-23'),
(12, 'Linamix', 'M', 72000, 3, '2004-04-17'),
(13, 'Solow', 'M', 27000, 4, '2006-03-12'),
(14, 'Kingmambo', 'M', 29450, 1, '2006-09-19'),
(15, 'Curlin', 'F', 52300, 4, '2012-08-02'),
(16, 'Dalakni', 'M', 4300, 2, '2003-05-09'),
(17, 'Dane Dream', 'F', 41000, 4, '2001-02-28'),
(18, 'Arazi', 'M', 84000, 3, '2009-05-21'),
(19, 'Black Caviar', 'M', 12450, 3, '2008-07-31'),
(20, 'Storm Cat', 'F', 24100, 4, '2006-06-24'),
(59, 'news', 'F', 150, 3, '2018-05-24'),
(60, 'Rufus', 'M', 5000, 2, '2016-03-10');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `prenom` varchar(40) NOT NULL,
  `rue` varchar(60) NOT NULL,
  `copos` varchar(5) NOT NULL,
  `ville` varchar(40) NOT NULL,
  `mail` varchar(60) DEFAULT NULL,
  `codePays` varchar(3) DEFAULT NULL,
  `titre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`id`, `nom`, `prenom`, `rue`, `copos`, `ville`, `mail`, `codePays`, `titre`) VALUES
(1, 'Deltour', 'Charles', '4 rue du Pont', '14680', 'Bretteville Sur Laize', 'cdeltour@hotmail.com', 'FRA', NULL),
(2, 'Fime', 'Nadia', '5 rue du Montparnasse', '14220', 'Boulon', '', 'ENG', NULL),
(3, 'Ertau', 'Frank', '4 Avenue du président Wilson', '14190', 'Urville', 'frank.ertau@laposte.net', 'FRA', NULL),
(4, 'Maneur', 'David', '6 rue Charles Péguy', '14220', 'Mutrécy', '', 'FRA', NULL),
(5, 'Berezovski', 'Sylvie', '18 rue du Château', '14680', 'Barbery', '', 'FRA', NULL),
(6, 'Finley', 'Pascale', '25 rue de Tolbiac', '14680', 'Caillouet', 'pascfinley@yahoo.fr', 'FRA', NULL),
(7, 'Vofur', 'Hector', '18 rue Deparcieux', '14190', 'Cauvicourt', 'hvofur@free.fr', 'ENG', NULL),
(8, 'Derzou', 'Fred', '230 avenue de la libert', '14220', 'Espins', 'ouzala@aol.com', 'FRA', NULL),
(9, 'Serty', 'Julie', '23 rue du Calvaire', '14220', 'Fresney le Vieux', '', 'FRA', NULL),
(10, 'Vofur', 'Victor', '18 rue Deparcieux', '14680', 'Bretteville Sur Laize', 'victor.vofur@laposte.net', 'FRA', NULL),
(11, 'Calende', 'Hugo', '22 rue des jardins', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(12, 'Jemba', 'Hubert', '10 rue du 8 mai 1945', '14680', 'Bretteville Sur Laize', 'jaimeba@yahoo.fr', 'FRA', NULL),
(13, 'Morin', 'S?verine', '4 rue du bac', '93000', 'Paris', 'morinsev@hotmail.com', 'FRA', NULL),
(14, 'Benrech', 'Tarek', '79 rue de Caen', '14320', 'May Sur Orne', '', 'FRA', NULL),
(15, 'Nguyen', 'Marc', '53 impasse Tourneur', '14320', 'Fontenay Le Marmion', 'nguyen774@wanadoo.fr', 'FRA', NULL),
(16, 'Louali', 'Karima', '89 avenue Poincar', '14320', 'Saint Martin de Fontenay', 'kloua@caramail.fr', 'FRA', NULL),
(17, 'Paolo', 'Marco', '14 rue du Caire', '14320', 'Fontenay Le Marmion', '', 'FRA', NULL),
(18, 'Map', 'Joanna', '120 boulevard Voltaire', '75012', 'Paris', '', 'FRA', NULL),
(19, 'Kound', 'Fatoumata', '4 Place Carr', '14190', 'Urville', '', 'FRA', NULL),
(20, 'Derissam', 'Bachir', '1 rue des Indes', '14190', 'Urville', '', 'FRA', NULL),
(21, 'Villechalane', 'Louis', '8 rue des Charmes', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(22, 'Andre', 'David', '1 rue Petit', '14220', 'Boulon', '', 'FRA', NULL),
(23, 'Bedos', 'Christian', '1 rue Peranud', '14320', 'Fontenay Le Marmion', '', 'FRA', NULL),
(24, 'Tusseau', 'Louis', '22 rue des Ternes', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(25, 'Bentot', 'Pascal', '11 allée des Cerises', '14220', 'Boulon', '', 'FRA', NULL),
(26, 'Bioret', 'Luc', '1 Avenue gambetta', '14320', 'Fontenay Le Marmion', '', 'FRA', NULL),
(27, 'Bunisset', 'Francis', '10 rue des Perles', '14220', 'Espins', '', 'FRA', NULL),
(28, 'Bunisset', 'Denise', '23 rue Manin', '14320', 'Saint Martin de Fontenay', '', 'FRA', NULL),
(29, 'Cacheux', 'Bernard', '114 rue Blanche', '14320', 'Fontenay Le Marmion', '', 'FRA', NULL),
(30, 'Cadic', 'Eric', '123 avenue de la République', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(31, 'Charoze', 'Catherine', '100 rue Petit', '14220', 'Boulon', '', 'FRA', NULL),
(32, 'Clepkens', 'Christophe', '12 allée des Anges', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(33, 'Cottin', 'Vincenne', '36 rue Des Roches', '14220', 'Boulon', '', 'FRA', NULL),
(34, 'Daburon', 'François', '13 rue de Chanzy', '14220', 'Mutrécy', '', 'FRA', NULL),
(35, 'De', 'Philippe', '13 rue Barthes', '14320', 'Fontenay Le Marmion', '', 'FRA', NULL),
(36, 'Debelle', 'Michel', '181 avenue Barbusse', '14220', 'Espins', '', 'FRA', NULL),
(37, 'Debelle', 'Jeanne', '134 allée des Joncs', '14320', 'Saint Martin de Fontenay', '', 'FRA', NULL),
(38, 'Debroise', 'Michel', '2 Bld Jourdain', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(39, 'Desmarquest', 'Nathalie', '14 Place d Arc', '14220', 'Boulon', '', 'FRA', NULL),
(40, 'Desnost', 'Pierre', '16 avenue des Cèdres', '14220', 'Mutrécy', '', 'FRA', NULL),
(41, 'Dudouit', 'Frédéric', '18 rue de l église', '14320', 'Fontenay Le Marmion', '', 'FRA', NULL),
(42, 'Duncombe', 'Claude', '19 rue de la tour', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(43, 'Enault-Pascreau', 'Céline', '25 place de la gare', '14680', 'Bretteville Sur Laize', '', 'FRA', NULL),
(44, 'Eynde', 'Valérie', '3 Grand Place', '14220', 'Mutrécy', '', 'FRA', NULL),
(45, 'Finck', 'Jacques', '10 avenue du Prado', '14320', 'Fontenay Le Marmion', '', 'FRA', NULL),
(46, 'Frémont', 'Fernande', '4 route de la mer', '14220', 'Espins', '', 'FRA', NULL),
(47, 'Gest', 'Alain', '30 avenue des terres', '14320', 'Saint Martin de Fontenay', '', 'FRA', NULL),
(48, 'Testemale', 'tarek', 'du trek', '14000', 'Tarascon', NULL, 'FRA', NULL),
(49, 'Trieste', 'Thierry', 'du tertre', '14000', 'Tologne', NULL, 'FRA', NULL),
(50, 'test04sept', 'luc', 'de ahjk', '121', 'jkjklj', NULL, 'FRA', NULL),
(51, 'mezeray', 'alexandre', '45 est', '15230', 'toulouses', NULL, 'FRA', NULL),
(52, 'cathoche', 'alex', '89 ouest', '12620', 'caen', NULL, 'FRA', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `concerner`
--

CREATE TABLE `concerner` (
  `codeVente` int(11) NOT NULL DEFAULT '0',
  `codeTypeCheval` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `concerner`
--

INSERT INTO `concerner` (`codeVente`, `codeTypeCheval`) VALUES
(30917, 1),
(210717, 1),
(250217, 1),
(90217, 2),
(210817, 2);

-- --------------------------------------------------------

--
-- Structure de la table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `lieu` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `course`
--

INSERT INTO `course` (`id`, `nom`, `lieu`, `date`) VALUES
(1, 'Prix Dahman', 'Dax', '0000-00-00'),
(2, 'prix Dahman', '', '0000-00-00'),
(3, 'Prix Dahman', 'Dax', '2016-09-07'),
(4, 'prix Danbik', 'Aurillac', '2016-08-08'),
(5, 'prix Pierre Pechdo', 'Pompadour', '2016-09-18'),
(6, 'prix d\'Ornano', 'Deauville', '2016-10-02');

-- --------------------------------------------------------

--
-- Structure de la table `interesser`
--

CREATE TABLE `interesser` (
  `codeClient` int(11) NOT NULL,
  `codeCategVente` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `interesser`
--

INSERT INTO `interesser` (`codeClient`, `codeCategVente`) VALUES
(2, 'AUT'),
(6, 'AUT'),
(49, 'AUT'),
(1, 'ELVG'),
(51, 'ELVG'),
(1, 'ETE'),
(3, 'ETE'),
(6, 'ETE'),
(7, 'ETE'),
(16, 'ETE'),
(49, 'ETE'),
(50, 'ETE'),
(6, 'XFEV');

-- --------------------------------------------------------

--
-- Structure de la table `lieu`
--

CREATE TABLE `lieu` (
  `id` int(11) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `nbBoxes` int(11) NOT NULL,
  `commentaires` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `lieu`
--

INSERT INTO `lieu` (`id`, `ville`, `nbBoxes`, `commentaires`) VALUES
(1, 'Deauville', 3, 'Il y a 3 boxes à Deauville'),
(2, 'St Cloud', 5, 'Il y a 5 boxes a St Cloud');

-- --------------------------------------------------------

--
-- Structure de la table `lot`
--

CREATE TABLE `lot` (
  `id` int(11) NOT NULL,
  `prixDepart` int(11) NOT NULL,
  `codeVente` int(11) NOT NULL DEFAULT '0',
  `codeCheval` int(11) DEFAULT NULL,
  `codeVendeur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `lot`
--

INSERT INTO `lot` (`id`, `prixDepart`, `codeVente`, `codeCheval`, `codeVendeur`) VALUES
(1, 50, 30917, 1, 2),
(2, 120, 90217, 1, 2),
(3, 10, 250223, 1, 2),
(4, 1200, 250223, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `participer`
--

CREATE TABLE `participer` (
  `course` int(11) NOT NULL,
  `cheval` int(11) NOT NULL,
  `place` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `participer`
--

INSERT INTO `participer` (`course`, `cheval`, `place`) VALUES
(1, 1, 2),
(1, 5, 1),
(1, 17, 4),
(1, 20, 3),
(2, 7, 2),
(2, 13, 3),
(2, 14, 4),
(2, 15, 1),
(3, 1, 4),
(3, 8, 1),
(3, 14, 2),
(3, 19, 3);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `code` varchar(3) NOT NULL,
  `nom` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`code`, `nom`) VALUES
('ENG', 'Angleterre'),
('FRA', 'France');

-- --------------------------------------------------------

--
-- Structure de la table `typecheval`
--

CREATE TABLE `typecheval` (
  `id` int(11) NOT NULL,
  `libelle` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `typecheval`
--

INSERT INTO `typecheval` (`id`, `libelle`) VALUES
(1, 'yearling'),
(2, 'pur-sang'),
(3, 'arabe'),
(4, 'trotteur');

-- --------------------------------------------------------

--
-- Structure de la table `vente`
--

CREATE TABLE `vente` (
  `id` int(11) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `dateDebut` date NOT NULL,
  `codeCategVente` varchar(5) NOT NULL,
  `codeLieu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `vente`
--

INSERT INTO `vente` (`id`, `nom`, `dateDebut`, `codeCategVente`, `codeLieu`) VALUES
(30917, 'Garibaldi Princess', '2017-03-09', 'ELVG', 1),
(90217, 'Mixing brain', '2017-09-02', 'XFEV', 2),
(210717, 'Rapsberry Sailing', '2017-07-17', 'ETE', 1),
(210817, 'Jelly Bay', '2017-08-17', 'ETE', 2),
(250217, 'Djezair Star', '2017-02-25', 'XFEV', 1),
(250223, 'Vente express', '2017-10-10', 'ETE', 2),
(250224, 'Vente annuelle', '2017-10-10', 'ETE', 2);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categvente`
--
ALTER TABLE `categvente`
  ADD PRIMARY KEY (`code`);

--
-- Index pour la table `cheval`
--
ALTER TABLE `cheval`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_CHEVAL_TYPE` (`typecheval`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_cli_pays` (`codePays`);

--
-- Index pour la table `concerner`
--
ALTER TABLE `concerner`
  ADD PRIMARY KEY (`codeVente`,`codeTypeCheval`),
  ADD KEY `FK_VTC_TYPECHEVAL` (`codeTypeCheval`);

--
-- Index pour la table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `interesser`
--
ALTER TABLE `interesser`
  ADD PRIMARY KEY (`codeClient`,`codeCategVente`),
  ADD KEY `FK_cliCat_Categ` (`codeCategVente`);

--
-- Index pour la table `lieu`
--
ALTER TABLE `lieu`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `lot`
--
ALTER TABLE `lot`
  ADD PRIMARY KEY (`id`,`codeVente`),
  ADD KEY `FK_LOT_VENTE` (`codeVente`),
  ADD KEY `FK_LOT_CHE` (`codeCheval`),
  ADD KEY `FK_LOT_VEN` (`codeVendeur`);

--
-- Index pour la table `participer`
--
ALTER TABLE `participer`
  ADD PRIMARY KEY (`course`,`cheval`),
  ADD KEY `FK_cheval` (`cheval`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`code`);

--
-- Index pour la table `typecheval`
--
ALTER TABLE `typecheval`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vente`
--
ALTER TABLE `vente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codeCategVente` (`codeCategVente`),
  ADD KEY `FK_VENTE_LIEU` (`codeLieu`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `cheval`
--
ALTER TABLE `cheval`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT pour la table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `lot`
--
ALTER TABLE `lot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `vente`
--
ALTER TABLE `vente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250225;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `cheval`
--
ALTER TABLE `cheval`
  ADD CONSTRAINT `FK_CHEVAL_TYPE` FOREIGN KEY (`typecheval`) REFERENCES `typecheval` (`id`),
  ADD CONSTRAINT `cheval_ibfk_1` FOREIGN KEY (`typecheval`) REFERENCES `typecheval` (`id`);

--
-- Contraintes pour la table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `FK_cli_pays` FOREIGN KEY (`codePays`) REFERENCES `pays` (`code`);

--
-- Contraintes pour la table `concerner`
--
ALTER TABLE `concerner`
  ADD CONSTRAINT `FK_VTC_TYPECHEVAL` FOREIGN KEY (`codeTypeCheval`) REFERENCES `typecheval` (`id`),
  ADD CONSTRAINT `FK_VTC_VENTE` FOREIGN KEY (`codeVente`) REFERENCES `vente` (`id`);

--
-- Contraintes pour la table `interesser`
--
ALTER TABLE `interesser`
  ADD CONSTRAINT `FK_cliCat_Categ` FOREIGN KEY (`codeCategVente`) REFERENCES `categvente` (`code`),
  ADD CONSTRAINT `FK_cliCat_client` FOREIGN KEY (`codeClient`) REFERENCES `client` (`id`);

--
-- Contraintes pour la table `lot`
--
ALTER TABLE `lot`
  ADD CONSTRAINT `FK_LOT_CHE` FOREIGN KEY (`codeCheval`) REFERENCES `cheval` (`id`),
  ADD CONSTRAINT `FK_LOT_VEN` FOREIGN KEY (`codeVendeur`) REFERENCES `vendeur` (`codeIntervenant`),
  ADD CONSTRAINT `FK_LOT_VENTE` FOREIGN KEY (`codeVente`) REFERENCES `vente` (`id`);

--
-- Contraintes pour la table `participer`
--
ALTER TABLE `participer`
  ADD CONSTRAINT `FK_cheval` FOREIGN KEY (`cheval`) REFERENCES `cheval` (`id`),
  ADD CONSTRAINT `FK_course` FOREIGN KEY (`course`) REFERENCES `course` (`id`);

--
-- Contraintes pour la table `vente`
--
ALTER TABLE `vente`
  ADD CONSTRAINT `FK_VENTE_LIEU` FOREIGN KEY (`codeLieu`) REFERENCES `lieu` (`id`),
  ADD CONSTRAINT `FK_Ven_Categ` FOREIGN KEY (`codeCategVente`) REFERENCES `categvente` (`code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
