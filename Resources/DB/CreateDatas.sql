-- Use the GameDB database
USE GenshinToolDB
GO

-- Insert Sex --
SET IDENTITY_INSERT Sex ON;
INSERT INTO Sex (Id,Name)
VALUES
(1,'F'),(2,'M')
SET IDENTITY_INSERT Sex OFF;

-- Insert StatTypes --
SET IDENTITY_INSERT StatTypes ON;
INSERT INTO StatTypes (Id,Name)
VALUES
(1,'Flat'),(2,'Percentage')
SET IDENTITY_INSERT StatTypes OFF;

-- Insert StatsNames --
SET IDENTITY_INSERT StatsNames ON;
INSERT INTO StatsNames (Id,Label,StatTypeId)
VALUES
(1,'HP',1),(2,'ATK',1),(3,'DEF',1),(4,'EM',1),(5,'ER',1),
(6,'Crit Rate',1),(7,'Crit DMG',1),
(8,'Healing Bonus',1),(9,'Shield Bonus',1),
(10,'Anemo DMG',1),(11,'Cryo DMG',1),
(12,'Pyro DMG',1),(13,'Electro DMG',1),(14,'Hydro DMG',1),
(17,'Geo DMG',1),(18,'Dendro DMG',1),(19,'Physical DMG',1),
(20,'HP%',2),(21,'ATK%',2),(22,'DEF%',2)
SET IDENTITY_INSERT StatsNames OFF;

-- Insert PIECES --
SET IDENTITY_INSERT ArtefactPieces ON;
INSERT INTO ArtefactPieces (Id,Name)
VALUES
(1,'Plume'),(2,'Flower'),(3,'Sand'),
(4,'Goblet'),(5,'Circlet')
SET IDENTITY_INSERT ArtefactPieces OFF;

-- Insert Elements --
SET IDENTITY_INSERT Elements ON;
INSERT INTO Elements (Id,Name)
VALUES
(1,'Anemo'),(2,'Geo'),(3,'Electro'),(4,'Dendro'),
(5,'Hydro'),(6,'Pyro'),(7,'Cryo'),(8,'Other')
SET IDENTITY_INSERT Elements OFF;

-- Insert Regions --
SET IDENTITY_INSERT Regions ON;
INSERT INTO Regions (Id,Name)
VALUES
(1,'Mondstadt'),(2,'Liyue'),(3,'Inazuma'),(4,'Sumeru'),
(5,'Fontaine'),(6,'Natlan'),(7,'Snezhnaya'),(8,'Other')
SET IDENTITY_INSERT Regions OFF;

-- Insert WeaponTypes --
SET IDENTITY_INSERT WeaponTypes ON;
INSERT INTO WeaponTypes (Id,Name)
VALUES
(1,'Sword'),(2,'Bow'),(3,'Polearm'),(4,'Claymore'),(5,'Catalyst')
SET IDENTITY_INSERT WeaponTypes OFF;

-- Insert Chars --
INSERT INTO Characters 
(Name,ElementId,RegionId,WeaponTypeId,Rarity,SexId,IsCollab)
VALUES
('Albedo',			2,1,1,5,2,0,0),
('Alhaitham',		4,4,1,5,2,0,0),
('Aloy',			7,8,2,5,1,1,0),
('Amber',			6,1,2,4,1,0,0),
('Ayaka',			7,3,1,5,1,0,0),
('Ayato',			5,3,1,5,2,0,0),
('Barbara',			5,1,5,4,1,0,0),
('Beidou',			3,2,4,4,1,0,0),
('Bennett',			6,1,1,4,2,0,0),
('Candace',			5,4,3,4,1,0,0),
('Collei',			4,4,2,4,1,0,0),
('Chongyun',		7,2,4,4,2,0,0),
('Cyno',			3,4,3,5,2,0,0),
('Diluc',			6,1,4,5,2,0,0),
('Diona',			7,1,2,4,1,0,0),
('Dori',			3,4,4,4,1,0,0),
('Eula',			7,1,4,5,1,0,0),
('Faruzan',			1,4,2,4,1,0,0),
('Fischl',			3,1,2,4,1,0,0),
('Ganyu',			7,2,2,5,1,0,0),
('Gorou',			2,3,2,4,2,0,0),
('Heizou',			1,3,5,4,2,0,0),
('Hu Tao',			6,2,3,5,1,0,0),
('Itto',			2,3,4,5,2,0,0),
('Jean',			1,1,1,5,1,0,0),
('Kaeya',			7,1,1,4,2,0,0),
('Kazuha',			1,3,1,5,2,0,0),
('Keqing',			3,2,1,5,1,0,0),
('Klee',			6,1,5,5,1,0,0),
('Kokomi',			5,3,5,5,1,0,0),
('Kujou Sara',		3,3,2,4,1,0,0),
('Kuki Shinobu',	3,3,1,4,1,0,0),
('Layla',			7,4,1,4,1,0,0),
('Lisa',			3,1,5,4,1,0,0),
('Mona',			5,1,5,5,1,0,0),
('Nahida',			4,4,5,5,1,0,0),
('Ningguang',		2,2,5,4,1,0,0),
('Nilou',			5,4,1,5,1,0,0),
('Noelle',			2,1,4,4,1,0,0),
('Qiqi',			7,2,1,5,1,0,0),
('Razor',			3,1,4,4,2,0,0),
('Raiden Shogun',	3,3,3,5,1,0,0),
('Rosaria',			7,1,3,4,1,0,0),
('Sayu',			1,3,4,4,1,0,0),
('Shenhe',			7,2,3,5,1,0,0),
('Sucrose',			1,1,5,4,1,0,0),
('Tartaglia',		5,7,2,5,2,0,0),
('Thoma',			6,3,3,4,2,0,0),
('Tighnari',		4,4,2,5,2,0,0),
('Traveler',		1,8,1,5,2,0,0),
('Traveler',		2,8,1,5,2,0,0),
('Traveler',		3,8,1,5,2,0,0),
('Traveler',		4,8,1,5,2,0,0),
('Venti',			1,1,2,5,2,0,0),
('Wanderer',		1,4,5,5,2,0,0),
('Xiangling',		6,2,3,4,1,0,0),
('Xiao',			1,2,3,5,2,0,0),
('Xingqiu',			5,2,1,4,2,0,0),
('Xinyan',			6,2,4,4,1,0,0),
('Yae Miko',		3,3,5,5,1,0,0),
('Yanfei',			6,2,5,4,1,0,0),
('Yaoyao',			4,4,3,4,1,0,0),
('Yelan',			5,2,2,5,1,0,0),
('Yoimiya',			6,3,2,5,1,0,0),
('Yun Jin',			2,2,3,4,1,0,0),
('Zhongli',			2,2,3,5,2,0,0),
('Freminet',		7,5,3,4,2,0,0),
('Lyney',			6,5,2,5,2,0,0),
('Lynette',			1,5,1,4,1,0,0),
('Traveler',		5,8,1,5,2,0,0),
('Kirara',			4,3,1,4,1,0,0),
('Wriothesley',		7,5,5,5,2,0,0),
('Neuvillette',		5,5,5,5,2,0,0),
('Kaveh',			4,4,4,4,2,0,0),
('Baizhu',			4,2,5,5,2,0,0),
('Mika',			7,1,3,4,2,0,0),
('Dehya',			6,4,4,5,1,0,0)

-- Insert ArtefactSets --
INSERT INTO ArtefactSets
(Name,Initials,TwoPiecesEffect,FourPiecesEffect)
VALUES
('Archaic Petra','ap','Geo DMG Bonus +15%','Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain a 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.'),
('Bloodstained Chivalry','bc','Physical DMG Bonus +25%','After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.'),
('Retracing Bolide','rb','Shield Strength Bonus +35%.','While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.'),
('Vourukasha''s Glow','vg','HP +20%','Elemental Skill and Elemental Burst DMG will be increased by 10%. After the equipping character takes DMG, the aforementioned DMG Bonus is increased by 80% for 5s. This effect increase can have 5 stacks. The duration of each stack is counted independently. These effects can be triggered even when the equipping character is not on the field.'),
('Nymph''s Dream','nd','Hydro DMG Bonus +15%','After Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts hit opponents, 1 stack of Mirrored Nymph will be triggered, lasting 8s. When under the effect of 1, 2, or 3 or more Mirrored Nymph stacks, ATK will be increased by 7%/16%/25%, and Hydro DMG Bonus will be increased by 4%/9%/15%. Mirrored Nymph stacks created by Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts exist independently.'),
('Flower of Paradise Lost','fopl','Elemental Mastery +80','The equipping character''s Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%. Additionally, after the equipping character triggers Bloom, Hyperbloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field.'),
('Desert Pavilion Chronicle','dpc','Anemo DMG Bonus +15%','When Charged Attacks hit opponents, the equipping character''s Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s.'),
('Noblesse Oblige','no','Elemental Burst DMG +20%','Using an Elemental Burst increases all party members'' ATK by 20% for 12s. This effect cannot stack.'),
('Crimson Witch of Flames','cwof','Pyro DMG Bonus +15%','Increases Overloaded, Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.'),
('Gilded Dreams','gd','Elemental Mastery +80','Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members. ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.'),
('Deepwood Memories','dm','Dendro DMG Bonus +15%','After Elemental Skills or Bursts hit opponents, the targets'' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.'),
('Thundering Fury','tf','Electro DMG Bonus +15%','Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.'),
('Wanderer''s Troupe','wt','Elemental Mastery +80','Increases Charged Attack DMG by 35% if the character uses a Catalyst or a Bow.'),
('Echoes of an Offering','eoao','ATK +18%','When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%. This trigger can occur once every 0.2s.'),
('Vermillion Hereafter','vh','ATK +18%','After using an Elemental Burst, this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the character''s HP decreases, their ATK will further increase by 10%. This further increase can occur this way a maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled.'),
('Viridescent Venerer','vv','Anemo DMG Bonus +15%','Increases Swirl DMG by 60%. Decreases opponent''s Elemental RES to the element infused in the Swirl by 40% for 10s.'),
('Gladiator''s Finale','gf','ATK +18%','If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.'),
('Ocean-Hued Clam','ohc','Healing Bonus +15%','When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field.'),
('Marechaussee Hunter','mh','Normal and Charged Attack DMG +15%','When current HP increases or decreases, CRIT Rate will be increased by 12% for 5s. Max 3 stacks.'),
('Golden Troupe','gt','Elemental Skill DMG +20%.','Increases Elemental Skill DMG by 25%. Additionally, when not on the field, Elemental Skill DMG will be further increased by 25%. This effect will be cleared 2s after taking the field.'),
('Husk of Opulent Dreams','hood','DEF +30%','A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.'),
('Maiden Beloved','mb','Healing Bonus +15%','Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.'),
('Lavawalker','lw','Pyro RES increased by 40%','Increases DMG against opponents affected by Pyro by 35%'),
('Emblem of Severed Fate','eosf','Energy Recharge +20%','Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.'),
('Shimenawa''s Reminiscence','sr','ATK +18%','When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.'),
('Thundersoother','ts','Electro RES increased by 40%','Increases DMG against opponents affected by Electro by 35%.'),
('Blizzard Strayer','bs','Cryo DMG Bonus +15%','When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.'),
('Pale Flame','pf','Physical DMG Bonus +25%','When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.'),
('Tenacity of the Millelith','totm','HP +20%','When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.'),
('Heart of Depth','hod','Hydro DMG Bonus +15%','After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.'),
('The Exile','te','Energy Recharge +20%','Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack.')

-- Insert Weapons --
