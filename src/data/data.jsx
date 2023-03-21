const elementData = [
    { 
        atomicNumber: 1,
        symbol: "H",
        name: "Hydrogen",
        atomicWeight: 1.0078,
        series: "Reactive nonmetal",
        mp: -259.1,
        bp: -252.9,
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
        atomicWeight: 4.0026,
        description: "Helium (from Greek: ἥλιος, romanized: helios, lit. 'sun') is a chemical element with the symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas and the first in the noble gas group in the periodic table.[a] Its boiling point is the lowest among all the elements, and it does not have a melting point at standard pressure. It is the second lightest and second most abundant element in the observable universe, after hydrogen. It is present at about 24% of the total elemental mass, which is more than 12 times the mass of all the heavier elements combined. Its abundance is similar to this in both the Sun and in Jupiter, due to the very high nuclear binding energy (per nucleon) of helium-4, with respect to the next three elements after helium. This helium-4 binding energy also accounts for why it is a product of both nuclear fusion and radioactive decay. The most common isotope of helium in the universe is helium-4, the vast majority of which was formed during the Big Bang. Large amounts of new helium are created by nuclear fusion of hydrogen in stars."
    },
    { 
        atomicNumber: 3,
        symbol: "Li",
        name: "Lithium",
        atomicWeight: 9.9410,
        description: "Lithium (from Greek: λίθος, romanized: lithos, lit. 'stone') is a chemical element with the symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the least dense metal and the least dense solid element. Like all alkali metals, lithium is highly reactive and flammable, and must be stored in vacuum, inert atmosphere, or inert liquid such as purified kerosene or mineral oil. It exhibits a metallic luster. It corrodes quickly in air to a dull silvery gray, then black tarnish. It does not occur freely in nature, but occurs mainly as pegmatitic minerals, which were once the main source of lithium. Due to its solubility as an ion, it is present in ocean water and is commonly obtained from brines. Lithium metal is isolated electrolytically from a mixture of lithium chloride and potassium chloride."
    },
    { 
        atomicNumber: 4,
        symbol: "Be",
        name: "Berylium",
        atomicWeight: 9.0122,
        description: "Beryllium is a chemical element with the symbol Be and atomic number 4. It is a steel-gray, strong, lightweight and brittle alkaline earth metal. It is a divalent element that occurs naturally only in combination with other elements to form minerals. Notable gemstones high in beryllium include beryl (aquamarine, emerald) and chrysoberyl. It is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays. Within the cores of stars, beryllium is depleted as it is fused into heavier elements. Beryllium constitutes about 0.0004 percent by mass of Earth's crust. The world's annual beryllium production of 220 tons is usually manufactured by extraction from the mineral beryl, a difficult process because beryllium bonds strongly to oxygen."
    },
    { 
        atomicNumber: 5,
        symbol: "B",
        name: "Boron",
        atomicWeight: 10.811,
        description: "Boron is a chemical element with the symbol B and atomic number 5. In its crystalline form it is a brittle, dark, lustrous metalloid; in its amorphous form it is a brown powder. As the lightest element of the boron group it has three valence electrons for forming covalent bonds, resulting in many compounds such as boric acid, the mineral sodium borate, and the ultra-hard crystals of boron carbide and boron nitride."
    },
    { 
        atomicNumber: 6,
        symbol: "C",
        name: "Carbon",
        atomicWeight: 12.011,
        description: "Carbon (from Latin carbo 'coal') is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent—its atom making four electrons available to form covalent chemical bonds. It belongs to group 14 of the periodic table.[14] Carbon makes up about 0.025 percent of Earth's crust.[15] Three isotopes occur naturally, 12C and 13C being stable, while 14C is a radionuclide, decaying with a half-life of about 5,730 years.[16] Carbon is one of the few elements known since antiquity."
    },
    { 
        atomicNumber: 7,
        symbol: "N",
        name: "Nitrogen",
        atomicWeight: 14.007,
        description: "Nitrogen is the chemical element with the symbol N and atomic number 7. Nitrogen is a nonmetal and the lightest member of group 15 of the periodic table, often called the pnictogens. It is a common element in the universe, estimated at seventh in total abundance in the Milky Way and the Solar System. At standard temperature and pressure, two atoms of the element bond to form N2, a colorless and odorless diatomic gas. N2 forms about 78% of Earth's atmosphere, making it the most abundant uncombined element. Nitrogen occurs in all organisms, primarily in amino acids (and thus proteins), in the nucleic acids (DNA and RNA) and in the energy transfer molecule adenosine triphosphate. The human body contains about 3% nitrogen by mass, the fourth most abundant element in the body after oxygen, carbon, and hydrogen. The nitrogen cycle describes the movement of the element from the air, into the biosphere and organic compounds, then back into the atmosphere."
    },
    { 
        atomicNumber: 8,
        symbol: "O",
        name: "Oxygen",
        atomicWeight: 15.999,
        description: "Oxygen is the chemical element with the symbol O and atomic number 8. It is a member of the chalcogen group in the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds. Oxygen is Earth's most abundant element, and after hydrogen and helium, it is the third-most abundant element in the universe. At standard temperature and pressure, two atoms of the element bind to form dioxygen, a colorless and odorless diatomic gas with the formula O2. Diatomic oxygen gas currently constitutes 20.95% of the Earth's atmosphere, though this has changed considerably over long periods of time. Oxygen makes up almost half of the Earth\'s crust in the form of oxides."
    },
    { 
        atomicNumber: 9,
        symbol: "F",
        name: "Fluorine",
        atomicWeight: 18.998,
        description: "Fluorine is a chemical element with the symbol F and atomic number 9. It is the lightest halogen and exists at standard conditions as a highly toxic, pale yellow diatomic gas. As the most electronegative reactive element, it is extremely reactive, as it reacts with all other elements except for the light inert gases."
    },
    { 
        atomicNumber: 10,
        symbol: "Ne",
        name: "Neon",
        atomicWeight: 20.180,
        description: "Neon is a chemical element with the symbol Ne and atomic number 10. It is a noble gas.[11] Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air. It was discovered (along with krypton and xenon) in 1898 as one of the three residual rare inert elements remaining in dry air, after nitrogen, oxygen, argon and carbon dioxide were removed. Neon was the second of these three rare gases to be discovered and was immediately recognized as a new element from its bright red emission spectrum. The name neon is derived from the Greek word, νέον, neuter singular form of νέος (neos), meaning 'new'. Neon is chemically inert, and no uncharged neon compounds are known. The compounds of neon currently known include ionic molecules, molecules held together by van der Waals forces and clathrates."
    },
    { 
        atomicNumber: 11,
        symbol: "Na",
        name: "Sodium",
        atomicWeight: 22.990,
        description: "Sodium is a chemical element with the symbol Na (from Latin natrium) and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is 23Na. The free metal does not occur in nature, and must be prepared from compounds. Sodium is the sixth most abundant element in the Earth's crust and exists in numerous minerals such as feldspars, sodalite, and halite (NaCl). Many salts of sodium are highly water-soluble: sodium ions have been leached by the action of water from the Earth's minerals over eons, and thus sodium and chlorine are the most common dissolved elements by weight in the oceans."
    },
    { 
        atomicNumber: 12,
        symbol: "Mg",
        name: "Magnesium",
        atomicWeight: 24.305,
        description: "Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray metal having a low density, low melting point and high chemical reactivity. Like the other alkaline earth metals (group 2 of the periodic table) it occurs naturally only in combination with other elements and it almost always has an oxidation state of +2. It reacts readily with air to form a thin passivation coating of magnesium oxide that inhibits further corrosion of the metal. The free metal burns with a brilliant-white light. The metal is obtained mainly by electrolysis of magnesium salts obtained from brine. It is less dense than aluminium and is used primarily as a component in strong and lightweight alloys that contain aluminium."
    },
    { 
        atomicNumber: 13,
        symbol: "Al",
        name: "Aluminum",
        atomicWeight: 26.982,
        description: "Aluminium (aluminum in North American English) is a chemical element with the symbol Al and atomic number 13. Aluminium has a density lower than those of other common metals, at approximately one third that of steel. It has a great affinity towards oxygen, and forms a protective layer of oxide on the surface when exposed to air. Aluminium visually resembles silver, both in its color and in its great ability to reflect light. It is soft, non-magnetic and ductile. It has one stable isotope, 27Al; this isotope is very common, making aluminium the twelfth most common element in the Universe. The radioactivity of 26Al is used in radiodating."
    },
    { 
        atomicNumber: 14,
        symbol: "Si",
        name: "Silicon",
        atomicWeight: 28.086,
        description: "Silicon is a chemical element with the symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic luster, and is a tetravalent metalloid and semiconductor. It is a member of group 14 in the periodic table: carbon is above it; and germanium, tin, lead, and flerovium are below it. It is relatively unreactive."
    },
    { 
        atomicNumber: 15,
        symbol: "P",
        name: "Phosphorous",
        atomicWeight: 30.974,
        description: "Phosphorus is a chemical element with the symbol P and atomic number 15. Elemental phosphorus exists in two major forms, white phosphorus and red phosphorus, but because it is highly reactive, phosphorus is never found as a free element on Earth. It has a concentration in the Earth's crust of about one gram per kilogram (compare copper at about 0.06 grams). In minerals, phosphorus generally occurs as phosphate."
    },
    { 
        atomicNumber: 16,
        symbol: "S",
        name: "Sulfur",
        atomicWeight: 32.065,
        description: "Sulfur (or sulphur in British English) is a chemical element with the symbol S and atomic number 16. It is abundant, multivalent and nonmetallic. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S8. Elemental sulfur is a bright yellow, crystalline solid at room temperature."
    },
    { 
        atomicNumber: 17,
        symbol: "Cl",
        name: "Chlorine",
        atomicWeight: 35.453,
        description: "Chlorine is a chemical element with the symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them. Chlorine is a yellow-green gas at room temperature. It is an extremely reactive element and a strong oxidising agent: among the elements, it has the highest electron affinity and the third-highest electronegativity on the revised Pauling scale, behind only oxygen and fluorine."
    },
    { 
        atomicNumber: 18,
        symbol: "Ar",
        name: "Argon",
        atomicWeight: 39.948,
        description: "Argon is a chemical element with the symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas.[7] Argon is the third-most abundant gas in Earth's atmosphere, at 0.934% (9340 ppmv). It is more than twice as abundant as water vapor (which averages about 4000 ppmv, but varies greatly), 23 times as abundant as carbon dioxide (400 ppmv), and more than 500 times as abundant as neon (18 ppmv). Argon is the most abundant noble gas in Earth's crust, comprising 0.00015% of the crust."
    },
    { 
        atomicNumber: 19,
        symbol: "K",
        name: "Potassium",
        atomicWeight: 39.098,
        description: "Potassium is the chemical element with the symbol K (from Neo-Latin kalium) and atomic number 19. It is a silvery white metal that is soft enough to easily cut with a knife.[6] Potassium metal reacts rapidly with atmospheric oxygen to form flaky white potassium peroxide in only seconds of exposure. It was first isolated from potash, the ashes of plants, from which its name derives. In the periodic table, potassium is one of the alkali metals, all of which have a single valence electron in the outer electron shell, which is easily removed to create an ion with a positive charge (which combines with anions to form salts). In nature, potassium occurs only in ionic salts. Elemental potassium reacts vigorously with water, generating sufficient heat to ignite hydrogen emitted in the reaction, and burning with a lilac-colored flame. It is found dissolved in seawater (which is 0.04% potassium by weight),[7][8] and occurs in many minerals such as orthoclase, a common constituent of granites and other igneous rocks.[9]"
    },
    { 
        atomicNumber: 20,
        symbol: "Ca",
        name: "Calcium",
        atomicWeight: 40.078,
        description: "Calcium is a chemical element with the symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air. Its physical and chemical properties are most similar to its heavier homologues strontium and barium. It is the fifth most abundant element in Earth's crust, and the third most abundant metal, after iron and aluminium. The most common calcium compound on Earth is calcium carbonate, found in limestone and the fossilised remnants of early sea life; gypsum, anhydrite, fluorite, and apatite are also sources of calcium. The name derives from Latin calx \"lime\", which was obtained from heating limestone."
    },
    { 
        atomicNumber: 21,
        symbol: "Sc",
        name: "Scandium",
        atomicWeight: 44.956
    },
    { 
        atomicNumber: 22,
        symbol: "Ti",
        name: "Titanium",
        atomicWeight: 47.867
    },
    { 
        atomicNumber: 23,
        symbol: "Va",
        name: "Vanadium",
        atomicWeight: 50.942
    },
    { 
        atomicNumber: 24,
        symbol: "Cr",
        name: "Chromium",
        atomicWeight: 51.996
    },
    { 
        atomicNumber: 25,
        symbol: "Mn",
        name: "Manganese",
        atomicWeight: 54.938
    },
    { 
        atomicNumber: 26,
        symbol: "Fe",
        name: "Iron",
        atomicWeight: 55.845
    },
    { 
        atomicNumber: 27,
        symbol: "Co",
        name: "Cobalt",
        atomicWeight: 58.933
    },
    { 
        atomicNumber: 28,
        symbol: "Ni",
        name: "Nickel",
        atomicWeight: 58.693
    },
    { 
        atomicNumber: 29,
        symbol: "Cu",
        name: "Copper",
        atomicWeight: 63.546
    },
    { 
        atomicNumber: 30,
        symbol: "Zn",
        name: "Zinc",
        atomicWeight: 65.380
    },
    { 
        atomicNumber: 31,
        symbol: "Ga",
        name: "Gallium",
        atomicWeight: 69.723
    },
    { 
        atomicNumber: 32,
        symbol: "Ge",
        name: "Germanium",
        atomicWeight: 72.640
    },
    { 
        atomicNumber: 33,
        symbol: "As",
        name: "Arsenic",
        atomicWeight: 74.922
    },

    { 
        atomicNumber: 34,
        symbol: "Se",
        name: "Selenium",
        atomicWeight: 78.960
    },

    { 
        atomicNumber: 35,
        symbol: "Br",
        name: "Bromium",
        atomicWeight: 79.904
    },

    { 
        atomicNumber: 36,
        symbol: "Kr",
        name: "Krypton",
        atomicWeight: 83.798
    },

    { 
        atomicNumber: 37,
        symbol: "Rb",
        name: "Rubidium",
        atomicWeight: 85.468
    },

    { 
        atomicNumber: 38,
        symbol: "Sr",
        name: "Strontium",
        atomicWeight: 87.62
    },
    { 
        atomicNumber: 39,
        symbol: "Y",
        name: "Yttrium",
        atomicWeight: 88.906
    },

    { 
        atomicNumber: 40,
        symbol: "Zr",
        name: "Zirconium",
        atomicWeight: 91.224
    },

    { 
        atomicNumber: 41,
        symbol: "Nb",
        name: "Niobium",
        atomicWeight: 92.906
    },

    { 
        atomicNumber: 42,
        symbol: "Mo",
        name: "Molybdenum",
        atomicWeight: 95.95
    },

    { 
        atomicNumber: 44,
        symbol: "Ru",
        name: "Ruthenium",
        atomicWeight: 101.07
    },
    { 
        atomicNumber: 45,
        symbol: "Rh",
        name: "Rhodium",
        atomicWeight: 102.91
    },
    { 
        atomicNumber: 46,
        symbol: "Pd",
        name: "Palladium",
        atomicWeight: 106.42
    },

    { 
        atomicNumber: 48,
        symbol: "Cd",
        name: "Cadmium",
        atomicWeight: 112.41
    },

    { 
        atomicNumber: 49,
        symbol: "In",
        name: "Indium",
        atomicWeight: 114.82
    },

    { 
        atomicNumber: 50,
        symbol: "Sn",
        name: "Tin",
        atomicWeight: 118.71
    },
]

function getElementInfo(index){
    return elementData[index]
}

function getElementByAtomicNumber(atomicNumber){
    return elementData.filter((obj) => {
        return obj.atomicNumber === atomicNumber
    })[0]
}

export { getElementInfo, getElementByAtomicNumber }