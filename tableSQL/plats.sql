CREATE TABLE plats (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  prix DECIMAL(10,2) NOT NULL
);

INSERT INTO plats (nom, description, prix) VALUES
  ('Tartiflette nature', 'Pommes de terre, crème, oignons, reblochon, accompagnée de salade verte', 17.00),
  ('Tartiflette au bleu', 'Pommes de terre, crème, oignons, bleu, accompagnée de salade verte', 17.50),
  ('Tartiflette lardons', 'Pommes de terre, crème, oignons, reblochon, lardons, accompagnée de salade verte', 18.00),
  ('Tartiflette à la viande de grison', 'Pommes de terre, crème, oignons, reblochon, viande de grison, accompagnée de salade verte', 19.50),
  ('Tartiflette au saumon fumé', 'Pommes de terre, crème, oignons, reblochon, saumon fumé, accompagnée de salade verte', 20.00),
  ('Tartiflette aux cèpes', 'Pommes de terre, crème, reblochon, cèpes, accompagnée de salade verte', 21.50),
  ('Croziflette lardons', 'Pommes de terre, crème, reblochon, cèpes, accompagnée de salade verte', 18.50),
  ('Gratiné au brezain', 'Crêpes de sarrasin, pommes de terre, crème, oignons, viande de grison, raclette fumée, accompagné de salade verte', 20.50),
  ('Diots au vin blanc*', 'Saucisses de Savoie fumées cuites au vin blanc', 20.50),
  ('Escalope savoyarde*', 'Filet de poulet, jambon cru de Savoie, oignons, crème, reblochon', 20.50)
  