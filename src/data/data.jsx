const elementData = [
    { 
        atomicNumber: 1,
        symbol: "H",
        name: "Hydrogen",
        atomicWeight: 1.0078,
        series: "Reactive nonmetals",
        mp: -259.1,
        bp: -252.9,
        electronegativity: 2.20,
        ioniziationEnergies: {
            first: 1312.0,
        },
        energyLevels: [1],
        description: "Hydrogen is the chemical element with the symbol H and atomic number 1. Hydrogen is the lightest element. At standard conditions hydrogen is a gas of diatomic molecules having the formula H2. It is colorless, odorless, tasteless,[8] non-toxic, and highly combustible. Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all normal matter.[9][note 1] Stars such as the Sun are mainly composed of hydrogen in the plasma state. Most of the hydrogen on Earth exists in molecular forms such as water and organic compounds. For the most common isotope of hydrogen (symbol 1H) each atom has one proton, one electron, and no neutrons."
    
    },
    { 
        atomicNumber: 2,
        symbol: "He",
        name: "Helium",
        electronegativity: null,
        atomicWeight: 4.0026,
        description: "Helium (from Greek: ἥλιος, romanized: helios, lit. 'sun') is a chemical element with the symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas and the first in the noble gas group in the periodic table.[a] Its boiling point is the lowest among all the elements, and it does not have a melting point at standard pressure. It is the second lightest and second most abundant element in the observable universe, after hydrogen. It is present at about 24% of the total elemental mass, which is more than 12 times the mass of all the heavier elements combined. Its abundance is similar to this in both the Sun and in Jupiter, due to the very high nuclear binding energy (per nucleon) of helium-4, with respect to the next three elements after helium. This helium-4 binding energy also accounts for why it is a product of both nuclear fusion and radioactive decay. The most common isotope of helium in the universe is helium-4, the vast majority of which was formed during the Big Bang. Large amounts of new helium are created by nuclear fusion of hydrogen in stars.",
        series: "Noble gases",
        mp: null,
        bp: -269,
        ioniziationEnergies: [1312.0, 5,250.5],
        energyLevels: [2],
    },
    { 
        atomicNumber: 3,
        symbol: "Li",
        electronegativity: 0.98,
        series: "Alkali metals",
        name: "Lithium",
        atomicWeight: 9.9410,
        mp: 180.54,
        bp: 1342,
        energyLevels: [2,1],
        ioniziationEnergies: [520.2,7298.1,11815],
        description: "Lithium (from Greek: λίθος, romanized: lithos, lit. 'stone') is a chemical element with the symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the least dense metal and the least dense solid element. Like all alkali metals, lithium is highly reactive and flammable, and must be stored in vacuum, inert atmosphere, or inert liquid such as purified kerosene or mineral oil. It exhibits a metallic luster. It corrodes quickly in air to a dull silvery gray, then black tarnish. It does not occur freely in nature, but occurs mainly as pegmatitic minerals, which were once the main source of lithium. Due to its solubility as an ion, it is present in ocean water and is commonly obtained from brines. Lithium metal is isolated electrolytically from a mixture of lithium chloride and potassium chloride."
    },
    { 
        atomicNumber: 4,
        electronegativity: 1.57,
        series: "Alkaline earth metals",
        symbol: "Be",
        mp: 1287,
        bp: 2470,
        energyLevels: [2,2],
        name: "Berylium",
        atomicWeight: 9.0122,
        description: "Beryllium is a chemical element with the symbol Be and atomic number 4. It is a steel-gray, strong, lightweight and brittle alkaline earth metal. It is a divalent element that occurs naturally only in combination with other elements to form minerals. Notable gemstones high in beryllium include beryl (aquamarine, emerald) and chrysoberyl. It is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays. Within the cores of stars, beryllium is depleted as it is fused into heavier elements. Beryllium constitutes about 0.0004 percent by mass of Earth's crust. The world's annual beryllium production of 220 tons is usually manufactured by extraction from the mineral beryl, a difficult process because beryllium bonds strongly to oxygen."
    },
    { 
        atomicNumber: 5,
        symbol: "B",
        electronegativity: 2.04,
        series: "Metalloids",
        mp: 2075,
        bp: 4000,
        energyLevels: [2,3],
        ioniziationEnergies: [380,2427.1,3659.7,25025.8,32826.7],
        name: "Boron",
        atomicWeight: 10.811,
        description: "Boron is a chemical element with the symbol B and atomic number 5. In its crystalline form it is a brittle, dark, lustrous metalloid; in its amorphous form it is a brown powder. As the lightest element of the boron group it has three valence electrons for forming covalent bonds, resulting in many compounds such as boric acid, the mineral sodium borate, and the ultra-hard crystals of boron carbide and boron nitride."
    },
    { 
        atomicNumber: 6,
        symbol: "C",
        electronegativity: 2.55,
        name: "Carbon",
        series: "Reactive nonmetals",
        mp: 3642,
        bp: 3642,
        energyLevels: [2,4],
        atomicWeight: 12.011,
        description: "Carbon (from Latin carbo 'coal') is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent—its atom making four electrons available to form covalent chemical bonds. It belongs to group 14 of the periodic table.[14] Carbon makes up about 0.025 percent of Earth's crust.[15] Three isotopes occur naturally, 12C and 13C being stable, while 14C is a radionuclide, decaying with a half-life of about 5,730 years.[16] Carbon is one of the few elements known since antiquity."
    },
    { 
        atomicNumber: 7,
        series: "Reactive nonmetals",
        mp: 2075,
        electronegativity: 3.04,
        bp: 4000,
        energyLevels: [2,3],
        symbol: "N",
        name: "Nitrogen",
        atomicWeight: 14.007,
        description: "Nitrogen is the chemical element with the symbol N and atomic number 7. Nitrogen is a nonmetal and the lightest member of group 15 of the periodic table, often called the pnictogens. It is a common element in the universe, estimated at seventh in total abundance in the Milky Way and the Solar System. At standard temperature and pressure, two atoms of the element bond to form N2, a colorless and odorless diatomic gas. N2 forms about 78% of Earth's atmosphere, making it the most abundant uncombined element. Nitrogen occurs in all organisms, primarily in amino acids (and thus proteins), in the nucleic acids (DNA and RNA) and in the energy transfer molecule adenosine triphosphate. The human body contains about 3% nitrogen by mass, the fourth most abundant element in the body after oxygen, carbon, and hydrogen. The nitrogen cycle describes the movement of the element from the air, into the biosphere and organic compounds, then back into the atmosphere."
    },
    { 
        atomicNumber: 8,
        symbol: "O",
        electronegativity: 3.44,
        series: "Reactive nonmetals",
        mp: -218,
        bp: -183,
        energyLevels: [2,6],
        name: "Oxygen",
        atomicWeight: 15.999,
        description: "Oxygen is the chemical element with the symbol O and atomic number 8. It is a member of the chalcogen group in the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds. Oxygen is Earth's most abundant element, and after hydrogen and helium, it is the third-most abundant element in the universe. At standard temperature and pressure, two atoms of the element bind to form dioxygen, a colorless and odorless diatomic gas with the formula O2. Diatomic oxygen gas currently constitutes 20.95% of the Earth's atmosphere, though this has changed considerably over long periods of time. Oxygen makes up almost half of the Earth\'s crust in the form of oxides."
    },
    { 
        atomicNumber: 9,
        series: "Reactive nonmetals",
        energyLevels: [2,7],
        electronegativity: 3.98,
        mp: -220,
        bp: -188.1,
        symbol: "F",
        name: "Fluorine",
        atomicWeight: 18.998,
        description: "Fluorine is a chemical element with the symbol F and atomic number 9. It is the lightest halogen and exists at standard conditions as a highly toxic, pale yellow diatomic gas. As the most electronegative reactive element, it is extremely reactive, as it reacts with all other elements except for the light inert gases."
    },
    { 
        atomicNumber: 10,
        electronegativity: null,
        series: "Noble gases",
        bp: -246.1,
        mp: -248.6,
        symbol: "Ne",
        name: "Neon",
        atomicWeight: 20.180,
        description: "Neon is a chemical element with the symbol Ne and atomic number 10. It is a noble gas.[11] Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air. It was discovered (along with krypton and xenon) in 1898 as one of the three residual rare inert elements remaining in dry air, after nitrogen, oxygen, argon and carbon dioxide were removed. Neon was the second of these three rare gases to be discovered and was immediately recognized as a new element from its bright red emission spectrum. The name neon is derived from the Greek word, νέον, neuter singular form of νέος (neos), meaning 'new'. Neon is chemically inert, and no uncharged neon compounds are known. The compounds of neon currently known include ionic molecules, molecules held together by van der Waals forces and clathrates."
    },
    { 
        atomicNumber: 11,
        series: "Alkali metals",
        symbol: "Na",
        electronegativity: 0.93,
        name: "Sodium",
        atomicWeight: 22.990,
        description: "Sodium is a chemical element with the symbol Na (from Latin natrium) and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is 23Na. The free metal does not occur in nature, and must be prepared from compounds. Sodium is the sixth most abundant element in the Earth's crust and exists in numerous minerals such as feldspars, sodalite, and halite (NaCl). Many salts of sodium are highly water-soluble: sodium ions have been leached by the action of water from the Earth's minerals over eons, and thus sodium and chlorine are the most common dissolved elements by weight in the oceans."
    },
    { 
        atomicNumber: 12,
        symbol: "Mg",
        electronegativity: 1.31,
        name: "Magnesium",
        series: "Alkaline earth metals",
        atomicWeight: 24.305,
        description: "Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray metal having a low density, low melting point and high chemical reactivity. Like the other alkaline earth metals (group 2 of the periodic table) it occurs naturally only in combination with other elements and it almost always has an oxidation state of +2. It reacts readily with air to form a thin passivation coating of magnesium oxide that inhibits further corrosion of the metal. The free metal burns with a brilliant-white light. The metal is obtained mainly by electrolysis of magnesium salts obtained from brine. It is less dense than aluminium and is used primarily as a component in strong and lightweight alloys that contain aluminium."
    },
    { 
        atomicNumber: 13,
        symbol: "Al",
        electronegativity: 1.61,
        series: "Post-transition metals",
        name: "Aluminum",
        atomicWeight: 26.982,
        description: "Aluminium (aluminum in North American English) is a chemical element with the symbol Al and atomic number 13. Aluminium has a density lower than those of other common metals, at approximately one third that of steel. It has a great affinity towards oxygen, and forms a protective layer of oxide on the surface when exposed to air. Aluminium visually resembles silver, both in its color and in its great ability to reflect light. It is soft, non-magnetic and ductile. It has one stable isotope, 27Al; this isotope is very common, making aluminium the twelfth most common element in the Universe. The radioactivity of 26Al is used in radiodating."
    },
    { 
        atomicNumber: 14,
        symbol: "Si",
        electronegativity: 1.90,
        name: "Silicon",
        series: "Metalloids",
        atomicWeight: 28.086,
        description: "Silicon is a chemical element with the symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic luster, and is a tetravalent metalloid and semiconductor. It is a member of group 14 in the periodic table: carbon is above it; and germanium, tin, lead, and flerovium are below it. It is relatively unreactive."
    },
    { 
        atomicNumber: 15,
        symbol: "P",
        electronegativity: 2.19,
        name: "Phosphorous",
        series: "Reactive nonmetals",
        atomicWeight: 30.974,
        description: "Phosphorus is a chemical element with the symbol P and atomic number 15. Elemental phosphorus exists in two major forms, white phosphorus and red phosphorus, but because it is highly reactive, phosphorus is never found as a free element on Earth. It has a concentration in the Earth's crust of about one gram per kilogram (compare copper at about 0.06 grams). In minerals, phosphorus generally occurs as phosphate."
    },
    { 
        atomicNumber: 16,
        symbol: "S",
        electronegativity: 2.58,
        name: "Sulfur",
        series: "Reactive nonmetals",
        atomicWeight: 32.065,
        description: "Sulfur (or sulphur in British English) is a chemical element with the symbol S and atomic number 16. It is abundant, multivalent and nonmetallic. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S8. Elemental sulfur is a bright yellow, crystalline solid at room temperature."
    },
    { 
        atomicNumber: 17,
        symbol: "Cl",
        electronegativity: 3.16,
        name: "Chlorine",
        series: "Reactive nonmetals",
        atomicWeight: 35.453,
        description: "Chlorine is a chemical element with the symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them. Chlorine is a yellow-green gas at room temperature. It is an extremely reactive element and a strong oxidising agent: among the elements, it has the highest electron affinity and the third-highest electronegativity on the revised Pauling scale, behind only oxygen and fluorine."
    },
    { 
        atomicNumber: 18,
        symbol: "Ar",
        electronegativity: null,
        name: "Argon",
        series: "Noble gases",
        atomicWeight: 39.948,
        description: "Argon is a chemical element with the symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas.[7] Argon is the third-most abundant gas in Earth's atmosphere, at 0.934% (9340 ppmv). It is more than twice as abundant as water vapor (which averages about 4000 ppmv, but varies greatly), 23 times as abundant as carbon dioxide (400 ppmv), and more than 500 times as abundant as neon (18 ppmv). Argon is the most abundant noble gas in Earth's crust, comprising 0.00015% of the crust."
    },
    { 
        atomicNumber: 19,
        symbol: "K",
        electronegativity: 0.82,
        series: "Alkali metals",
        name: "Potassium",
        atomicWeight: 39.098,
        description: "Potassium is the chemical element with the symbol K (from Neo-Latin kalium) and atomic number 19. It is a silvery white metal that is soft enough to easily cut with a knife.[6] Potassium metal reacts rapidly with atmospheric oxygen to form flaky white potassium peroxide in only seconds of exposure. It was first isolated from potash, the ashes of plants, from which its name derives. In the periodic table, potassium is one of the alkali metals, all of which have a single valence electron in the outer electron shell, which is easily removed to create an ion with a positive charge (which combines with anions to form salts). In nature, potassium occurs only in ionic salts. Elemental potassium reacts vigorously with water, generating sufficient heat to ignite hydrogen emitted in the reaction, and burning with a lilac-colored flame. It is found dissolved in seawater (which is 0.04% potassium by weight),[7][8] and occurs in many minerals such as orthoclase, a common constituent of granites and other igneous rocks.[9]"
    },
    { 
        atomicNumber: 20,
        symbol: "Ca",
        series: "Alkaline earth metals",
        name: "Calcium",
        atomicWeight: 40.078,
        description: "Calcium is a chemical element with the symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air. Its physical and chemical properties are most similar to its heavier homologues strontium and barium. It is the fifth most abundant element in Earth's crust, and the third most abundant metal, after iron and aluminium. The most common calcium compound on Earth is calcium carbonate, found in limestone and the fossilised remnants of early sea life; gypsum, anhydrite, fluorite, and apatite are also sources of calcium. The name derives from Latin calx \"lime\", which was obtained from heating limestone."
    },
    { 
        atomicNumber: 21,
        symbol: "Sc",
        series: "Transition metals",
        name: "Scandium",
        atomicWeight: 44.956
    },
    { 
        atomicNumber: 22,
        symbol: "Ti",
        series: "Transition metals",
        name: "Titanium",
        atomicWeight: 47.867
    },
    { 
        atomicNumber: 23,
        symbol: "Va",
        series: "Transition metals",
        name: "Vanadium",
        atomicWeight: 50.942
    },
    { 
        atomicNumber: 24,
        symbol: "Cr",
        series: "Transition metals",
        name: "Chromium",
        atomicWeight: 51.996
    },
    { 
        atomicNumber: 25,
        symbol: "Mn",
        series: "Transition metals",
        name: "Manganese",
        atomicWeight: 54.938
    },
    { 
        atomicNumber: 26,
        symbol: "Fe",
        series: "Transition metals",
        name: "Iron",
        atomicWeight: 55.845
    },
    { 
        atomicNumber: 27,
        symbol: "Co",
        series: "Transition metals",
        name: "Cobalt",
        atomicWeight: 58.933
    },
    { 
        atomicNumber: 28,
        symbol: "Ni",
        series: "Transition metals",
        name: "Nickel",
        atomicWeight: 58.693
    },
    { 
        atomicNumber: 29,
        symbol: "Cu",
        series: "Transition metals",
        name: "Copper",
        atomicWeight: 63.546
    },
    { 
        atomicNumber: 30,
        symbol: "Zn",
        series: "Transition metals",
        name: "Zinc",
        atomicWeight: 65.380
    },
    { 
        atomicNumber: 31,
        symbol: "Ga",
        series: "Post-transition metals",
        name: "Gallium",
        atomicWeight: 69.723
    },
    { 
        atomicNumber: 32,
        symbol: "Ge",
        series: "Metalloids",
        name: "Germanium",
        atomicWeight: 72.640
    },
    { 
        atomicNumber: 33,
        symbol: "As",
        series: "Metalloids",
        name: "Arsenic",
        atomicWeight: 74.922
    },

    { 
        atomicNumber: 34,
        symbol: "Se",
        name: "Selenium",
        series: "Reactive nonmetals",
        atomicWeight: 78.960
    },

    { 
        atomicNumber: 35,
        symbol: "Br",
        name: "Bromium",
        series: "Reactive nonmetals",
        atomicWeight: 79.904
    },

    { 
        atomicNumber: 36,
        symbol: "Kr",
        name: "Krypton",
        series: "Noble gases",
        atomicWeight: 83.798
    },

    { 
        atomicNumber: 37,
        symbol: "Rb",
        name: "Rubidium",
        series: "Alkali metals",
        atomicWeight: 85.468
    },

    { 
        atomicNumber: 38,
        symbol: "Sr",
        series: "Alkaline earth metals",
        name: "Strontium",
        atomicWeight: 87.62
    },
    { 
        atomicNumber: 39,
        symbol: "Y",
        series: "Transition metals",
        name: "Yttrium",
        atomicWeight: 88.906
    },

    { 
        atomicNumber: 40,
        symbol: "Zr",
        name: "Zirconium",
        series: "Transition metals",
        atomicWeight: 91.224
    },

    { 
        atomicNumber: 41,
        symbol: "Nb",
        series: "Transition metals",
        name: "Niobium",
        atomicWeight: 92.906
    },

    { 
        atomicNumber: 42,
        symbol: "Mo",
        series: "Transition metals",
        name: "Molybdenum",
        atomicWeight: 95.95
    },
    { 
        atomicNumber: 43,
        symbol: "Tc",
        series: "Transition metals",
        name: "Technetium",
        atomicWeight: 98
    },
    { 
        atomicNumber: 44,
        symbol: "Ru",
        series: "Transition metals",
        name: "Ruthenium",
        atomicWeight: 101.07
    },
    { 
        atomicNumber: 45,
        series: "Transition metals",
        symbol: "Rh",
        name: "Rhodium",
        atomicWeight: 102.91,
        energyLevels: [2,8,18,16,1],
        mp: 1964,
        bp: 3695,
        description: "Rhodium is a chemical element with the symbol Rh and atomic number 45. It is a very rare, silvery-white, hard, corrosion-resistant transition metal. It is a noble metal and a member of the platinum group. It has only one naturally occurring isotope: 103Rh. Naturally occurring rhodium is usually found as a free metal or as an alloy with similar metals and rarely as a chemical compound in minerals such as bowieite and rhodplumsite. It is one of the rarest and most valuable precious metals."
    },
    { 
        series: "Transition metals",
        atomicNumber: 46,
        symbol: "Pd",
        name: "Palladium",
        atomicWeight: 106.42,
        mp: 1554.90,
        bp: 2963,
        energyLevels: [2,8,18,19],
        description: "Palladium is a chemical element with the symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by the English chemist William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas. Palladium, platinum, rhodium, ruthenium, iridium and osmium form a group of elements referred to as the platinum group metals (PGMs). They have similar chemical properties, but palladium has the lowest melting point and is the least dense of them."
    },

    { 
        atomicNumber: 47,
        series: "Transition metals",
        symbol: "Ag",
        name: "Silver",
        atomicWeight: 107.87,
        bp: 2162,
        mp: 961.780,
        energyLevels: [2,8,18,18,1]
    },

    { 
        atomicNumber: 48,
        symbol: "Cd",
        name: "Cadmium",
        series: "Transition metals",
        atomicWeight: 112.41
    },

    { 
        atomicNumber: 49,
        symbol: "In",
        name: "Indium",
        atomicWeight: 114.82,
        series: "Post-transition metals",

    },

    { 
        atomicNumber: 50,
        symbol: "Sn",
        series: "Post-transition metals",
        name: "Tin",
        atomicWeight: 118.71
    },


    { 
        atomicNumber: 51,
        symbol: "Sb",
        series: "Metalloids",
        name: "Antimony",
        atomicWeight: 121.76
    },

    { 
        atomicNumber: 52,
        series: "Metalloids",
        symbol: "Te",
        name: "Tellurium",
        atomicWeight: 127.60
    },

    { 
        atomicNumber: 53,
        symbol: "I",
        series: "Reactive nonmetals",
        name: "Iodine",
        atomicWeight: 126.90
    },

    { 
        atomicNumber: 54,
        symbol: "Xe",
        series: "Noble gases",
        name: "Xenon",
        atomicWeight: 131.29
    },

    { 
        atomicNumber: 55,
        symbol: "Cs",
        series: "Alkali metals",
        name: "Cesium",
        atomicWeight: 132.905
    },

    { 
        atomicNumber: 56,
        series: "Alkaline earth metals",
        symbol: "Ba",
        name: "Barium",
        atomicWeight: 137.33
    },
    { 
        atomicNumber: 57,
        symbol: "La",
        series: "Lanthanoids",
        name: "Lanthanum",
        atomicWeight: 138.91
    },

    { 
        atomicNumber: 58,
        symbol: "Ce",
        series: "Lanthanoids",
        name: "Cerium",
        atomicWeight: 140.12
    },
    { 
        atomicNumber: 59,
        series: "Lanthanoids",
        symbol: "Pr",
        name: "Praseodymium",
        atomicWeight: 140.91
    },
    { 
        atomicNumber: 60,
        series: "Lanthanoids",
        symbol: "Nd",
        name: "Neodymium",
        atomicWeight: 144.24
    },
    { 
        atomicNumber: 61,
        series: "Lanthanoids",
        symbol: "Pm",
        name: "Promethium",
        atomicWeight: 145
    },
    { 
        atomicNumber: 62,
        series: "Lanthanoids",
        symbol: "Sm",
        name: "Samarium",
        atomicWeight: 150.36
    },
    { 
        atomicNumber: 63,
        series: "Lanthanoids",
        symbol: "Eu",
        name: "Europium",
        atomicWeight: 151.96
    },
    { 
        atomicNumber: 64,
        series: "Lanthanoids",
        symbol: "Gd",
        name: "Gadolinium",
        atomicWeight: 157.25
    },
    { 
        atomicNumber: 65,
        series: "Lanthanoids",
        symbol: "Tb",
        name: "Terbium",
        atomicWeight: 158.93
    },
    { 
        atomicNumber: 66,
        series: "Lanthanoids",
        symbol: "Dy",
        name: "Dysprosium",
        atomicWeight: 162.50
    },

    { 
        atomicNumber: 67,
        series: "Lanthanoids",
        symbol: "Ho",
        name: "Holmium",
        atomicWeight: 164.93
    },
    { 
        atomicNumber: 68,
        symbol: "Er",
        series: "Lanthanoids",
        name: "Erbium",
        atomicWeight: 167.26
    },
    { 
        atomicNumber: 69,
        symbol: "Tm",
        name: "Thulium",
        series: "Lanthanoids",
        atomicWeight: 168.93
    },

    { 
        atomicNumber: 70,
        symbol: "Yb",
        series: "Lanthanoids",
        name: "Ytterbium",
        atomicWeight: 173.05
    },

    { 
        atomicNumber: 71,
        series: "Lanthanoids",
        symbol: "Lu",
        name: "Lutetium",
        atomicWeight: 174.97
    },

    { 
        atomicNumber: 72,
        series: "Transition metals",
        symbol: "Hf",
        name: "Hafnium",
        atomicWeight: 178.486
    },
    { 
        atomicNumber: 73,
        series: "Transition metals",
        symbol: "Ta",
        name: "Tantalum",
        atomicWeight: 180.95
    },
    

    { 
        atomicNumber: 74,
        series: "Transition metals",
        symbol: "W",
        name: "Tungsten",
        atomicWeight: 183.84
    },

    { 
        atomicNumber: 75,
        series: "Transition metals",
        symbol: "Re",
        name: "Rhenium",
        atomicWeight: 186.21
    },

    { 
        atomicNumber: 76,
        series: "Transition metals",
        symbol: "Os",
        name: "Osmium",
        atomicWeight: 190.23
    },


    { 
        atomicNumber: 77,
        symbol: "Ir",
        name: "Iridium",
        atomicWeight: 192.22,
        series: "Transition metals"
    },

    { 
        atomicNumber: 78,
        symbol: "Pt",
        name: "Platinum",
        atomicWeight: 195.08,
        series: "Transition metals"

    },

    { 
        atomicNumber: 79,
        symbol: "Au",
        name: "Gold",
        atomicWeight: 196.97,
        series: "Transition metals"

    },
    { 
        atomicNumber: 80,
        symbol: "Hg",
        name: "Mercury",
        atomicWeight: 200.59,
        series: "Transition metals"

    },
    { 
        atomicNumber: 81,
        symbol: "Tl",
        name: "Thallium",
        atomicWeight: 204.38,
        series: "Post-transition metals"
    },

    { 
        atomicNumber: 82,
        symbol: "Pb",
        name: "Lead",
        atomicWeight: 207.2,
        series: "Post-transition metals"

    },

    { 
        atomicNumber: 83,
        symbol: "Bi",
        name: "Bismuth",
        atomicWeight: 208.98,
        series: "Post-transition metals"

    },

    { 
        atomicNumber: 84,
        symbol: "Po",
        name: "Polonium",
        atomicWeight: 209,
        series: "Post-transition metals"

    },

    { 
        atomicNumber: 85,
        symbol: "At",
        name: "Astatine",
        atomicWeight: 210,
        series: "Metalloids"
    },

    { 
        atomicNumber: 86,
        symbol: "Rn",
        name: "Radon",
        atomicWeight: 222,
        series: "Noble gases"
    },

    { 
        atomicNumber: 87,
        symbol: "Fr",
        name: "Francium",
        atomicWeight: 223,
        series: "Alkali metals"
    },
    { 
        atomicNumber: 88,
        symbol: "Ra",
        name: "Radium",
        atomicWeight: 226,
        series: "Alkaline earth metals"
    },
    
    { 
        atomicNumber: 89,
        symbol: "Ac",
        name: "Actinium",
        atomicWeight: 227,
        series: "Actinoids"
    },
    { 
        atomicNumber: 90,
        symbol: "Th",
        name: "Thorium",
        atomicWeight: 232.04,
        series: "Actinoids"
    },

    { 
        atomicNumber: 91,
        symbol: "Pa",
        name: "Protactinium",
        atomicWeight: 231.04,
        series: "Actinoids"
    },

    { 
        atomicNumber: 92,
        symbol: "U",
        name: "Uranium",
        atomicWeight: 238.03,
        series: "Actinoids"
    },
    { 
        atomicNumber: 93,
        symbol: "Np",
        name: "Neptunium",
        atomicWeight: 237,
        series: "Actinoids"
    },
    { 
        atomicNumber: 94,
        symbol: "Pu",
        name: "Plutonium",
        atomicWeight: 244,
        series: "Actinoids"
    },

    { 
        atomicNumber: 95,
        symbol: "Am",
        name: "Americium",
        atomicWeight: 243,
        series: "Actinoids"
    },

    { 
        atomicNumber: 96,
        symbol: "Cm",
        name: "Curium",
        atomicWeight: 247,
        series: "Actinoids"
    },

    { 
        atomicNumber: 97,
        symbol: "Bk",
        name: "Berkelium",
        atomicWeight: 247,
        series: "Actinoids"
    },

    { 
        atomicNumber: 98,
        symbol: "Cf",
        name: "Californium",
        atomicWeight: 251,
        series: "Actinoids"
    },

    { 
        atomicNumber: 99,
        symbol: "Es",
        name: "Einsteinium",
        atomicWeight: 252,
        series: "Actinoids"
    },

    { 
        atomicNumber: 100,
        symbol: "Fm",
        name: "Fermium",
        atomicWeight: 257,
        series: "Actinoids"
    },

    { 
        atomicNumber: 101,
        symbol: "Md",
        name: "Mendelevium",
        atomicWeight: 258,
        series: "Actinoids"
    },
    { 
        atomicNumber: 102,
        symbol: "No",
        name: "Nobelium",
        atomicWeight: 259,
        series: "Actinoids"
    },

    { 
        atomicNumber: 103,
        symbol: "Lr",
        name: "Lawrencium",
        atomicWeight: 266,
        series: "Actinoids"
    },

    { 
        atomicNumber: 104,
        symbol: "Rf",
        name: "Rutherfordium",
        atomicWeight: 267,
        series: "Transition metals"
    },

    { 
        atomicNumber: 105,
        symbol: "Db",
        name: "Dubnium",
        atomicWeight: 268,
        series: "Transition metals"
    },

    { 
        atomicNumber: 106,
        symbol: "Sg",
        name: "Seaborgium",
        atomicWeight: 269,
        series: "Transition metals"
    },

    { 
        atomicNumber: 107,
        symbol: "Bh",
        name: "Bohrium",
        atomicWeight: 270,
        series: "Transition metals"
    },

    { 
        atomicNumber: 108,
        symbol: "Hs",
        name: "Hassium",
        atomicWeight: 277,
        series: "Transition metals"
    },

    { 
        atomicNumber: 109,
        symbol: "Mt",
        name: "Meitnerium",
        atomicWeight: 278,
        series: "No series"
    },

    { 
        atomicNumber: 110,
        symbol: "Ds",
        name: "Darmstadtium",
        atomicWeight: 281,
        series: "No series"
    },

    { 
        atomicNumber: 111,
        symbol: "Rg",
        name: "Roentgenium",
        atomicWeight: 282,
        series: "No series"
    },

    { 
        atomicNumber: 112,
        symbol: "Cn",
        name: "Copernicium",
        atomicWeight: 285,
        series: "No series"
    },

    { 
        atomicNumber: 113,
        symbol: "Nh",
        name: "Nihonium",
        atomicWeight: 286,
        series: "No series"
    },

    { 
        atomicNumber: 114,
        symbol: "Fl",
        name: "Flerovium",
        atomicWeight: 289,
        series: "No series"
    },

    { 
        atomicNumber: 115,
        symbol: "Mc",
        name: "Moscovium",
        atomicWeight: 290,
        series: "No series"
    },

    { 
        atomicNumber: 116,
        symbol: "Lv",
        name: "Livermormium",
        atomicWeight: 293,
        series: "No series"
    },

    { 
        atomicNumber: 117,
        symbol: "Ts",
        name: "Tennessine",
        atomicWeight: 294,
        series: "No series"
    },


    { 
        atomicNumber: 118,
        symbol: "Og",
        name: "Oganesson",
        atomicWeight: 294,
        series: "No series"
    },
]

function getElementInfo(index){
    let element = elementData[index]
    return element !== undefined ? element : {};
}

function getElementByAtomicNumber(atomicNumber){
    let element = elementData.filter((obj) => {
        return obj.atomicNumber === atomicNumber
    })[0]

    return element !== undefined ? element : { atomicWeight: 0};
}


function getLinearNormalizedAtomicWeight(atomicWeight){
    let atomicWeights = elementData.map((data) => { return data.atomicWeight}) 
    let maxAW = Math.max(...atomicWeights)
    let minAW = Math.min(...atomicWeights)
    let diff = maxAW - minAW;
  
    return atomicWeight/diff;
}

export { elementData, getElementInfo, getElementByAtomicNumber,getLinearNormalizedAtomicWeight }