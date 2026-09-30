const employees = {
  "madeline@simpleonlinehealthcare.com": {
    "firstName": "Madeline",
    "lastName": "Brennan",
    "jobTitle": "Customer Service Advisor",
    "department": "Australia",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "caiti@simpleonlinehealthcare.com",
    "directReports": []
  },
  "aamina@simpleonlinehealthcare.com": {
    "firstName": "Aamina",
    "lastName": "Rafiq",
    "jobTitle": "Superintendent Pharmacist",
    "department": "Clinical Regulatory",
    "level": 5,
    "sublevel": null,
    "managerEmail": "abdal@simpleonlinehealthcare.com",
    "directReports": [
      "zahra@simpleonlinehealthcare.com"
    ]
  },
  "abbie@simpleonlinehealthcare.com": {
    "firstName": "Abbie",
    "lastName": "Gibb",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "abdal@simpleonlinehealthcare.com": {
    "firstName": "Abdal",
    "lastName": "Alvi",
    "jobTitle": "Chief Clinical Officer",
    "department": "Central",
    "level": 6,
    "sublevel": null,
    "managerEmail": "addy@simpleonlinehealthcare.com",
    "directReports": [
      "aamina@simpleonlinehealthcare.com",
      "laura@simpleonlinehealthcare.com",
      "richard@simpleonlinehealthcare.com",
      "ruaraidh@simpleonlinehealthcare.com",
      "sabeela@simpleonlinehealthcare.com"
    ]
  },
  "abdualaleem@simpleonlinehealthcare.com": {
    "firstName": "Abdualaleem",
    "lastName": "Ibrahim",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "abdullah@simpleonlinehealthcare.com": {
    "firstName": "Abdullah",
    "lastName": "Mohammed",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "addy@simpleonlinehealthcare.com": {
    "firstName": "Addy",
    "lastName": "Mohammed",
    "jobTitle": "Co-Founder",
    "department": "Central",
    "level": 6,
    "sublevel": null,
    "managerEmail": null,
    "directReports": [
      "abdal@simpleonlinehealthcare.com",
      "ali@simpleonlinehealthcare.com",
      "bev@simpleonlinehealthcare.com",
      "edward@simpleonlinehealthcare.com",
      "fraser@simpleonlinehealthcare.com",
      "scott@simpleonlinehealthcare.com"
    ]
  },
  "adele@simpleonlinehealthcare.com": {
    "firstName": "Adele",
    "lastName": "Liddle",
    "jobTitle": "Accounts & Payroll Team Lead",
    "department": "Simple Finance",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "ryan@simpleonlinehealthcare.com",
    "directReports": [
      "ataklti@simpleonlinehealthcare.com"
    ]
  },
  "alan@simpleonlinehealthcare.com": {
    "firstName": "Alan",
    "lastName": "Creevy",
    "jobTitle": "Head of People",
    "department": "People Function",
    "level": 5,
    "sublevel": null,
    "managerEmail": "bev@simpleonlinehealthcare.com",
    "directReports": [
      "danielle@simpleonlinehealthcare.com",
      "sean@simpleonlinehealthcare.com"
    ]
  },
  "ali@simpleonlinehealthcare.com": {
    "firstName": "Ali",
    "lastName": "Bashir",
    "jobTitle": "Pharmacy Support Manager",
    "department": "Clinical Prescribing",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "addy@simpleonlinehealthcare.com",
    "directReports": []
  },
  "alice@simpleonlinehealthcare.com": {
    "firstName": "Alice",
    "lastName": "Pinna",
    "jobTitle": "Marketing Assistant",
    "department": "Performance",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "dharmesh@simpleonlinehealthcare.com",
    "directReports": []
  },
  "almokhtar@simpleonlinehealthcare.com": {
    "firstName": "Almokhtar",
    "lastName": "Nasamou",
    "jobTitle": "Shift Manager",
    "department": "Production",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "james@simpleonlinehealthcare.com",
    "directReports": [
      "abdualaleem@simpleonlinehealthcare.com",
      "abdullah@simpleonlinehealthcare.com",
      "merhawi@simpleonlinehealthcare.com",
      "miriam@simpleonlinehealthcare.com",
      "robel@simpleonlinehealthcare.com",
      "khobaib@simpleonlinehealthcare.com",
      "liepa@simpleonlinehealthcare.com",
      "remaz@simpleonlinehealthcare.com",
      "sinan@simpleonlinehealthcare.com"
    ]
  },
  "amanda@simpleonlinehealthcare.com": {
    "firstName": "Amanda",
    "lastName": "French",
    "jobTitle": "Patient Care Supervisor",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "amber@simpleonlinehealthcare.com": {
    "firstName": "Amber",
    "lastName": "Cummings",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "amy@simpleonlinehealthcare.com": {
    "firstName": "Amy",
    "lastName": "Masterson",
    "jobTitle": "Clinical Admin",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "andrea@simpleonlinehealthcare.com": {
    "firstName": "Andrea",
    "lastName": "Nagy",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "andrew@simpleonlinehealthcare.com": {
    "firstName": "Andrew",
    "lastName": "McNeilly",
    "jobTitle": "Customer Service Team Leader",
    "department": "Patient Experience",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "jacqueline@simpleonlinehealthcare.com",
    "directReports": [
      "amber@simpleonlinehealthcare.com",
      "cameron@simpleonlinehealthcare.com",
      "connor@simpleonlinehealthcare.com",
      "emily@simpleonlinehealthcare.com",
      "famile@simpleonlinehealthcare.com",
      "gregg@simpleonlinehealthcare.com",
      "jodie@simpleonlinehealthcare.com",
      "lisa@simpleonlinehealthcare.com",
      "matthew@simpleonlinehealthcare.com",
      "paul@simpleonlinehealthcare.com",
      "taylor@simpleonlinehealthcare.com",
      "areebah@simpleonlinehealthcare.com"
    ]
  },
  "anindita@simpleonlinehealthcare.com": {
    "firstName": "Anindita",
    "lastName": "Das",
    "jobTitle": "Dietitian",
    "department": "Clinical Nutrition and Dietitian",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "laura@simpleonlinehealthcare.com",
    "directReports": []
  },
  "annick@simpleonlinehealthcare.com": {
    "firstName": "Annick",
    "lastName": "Laenzlinger",
    "jobTitle": "New Markets Delivery Lead",
    "department": "New Markets",
    "level": 3,
    "sublevel": 3,
    "managerEmail": "scott@simpleonlinehealthcare.com",
    "directReports": [
      "daniela@simpleonlinehealthcare.com",
      "ina@simpleonlinehealthcare.com",
      "jaskrit@simpleonlinehealthcare.com"
    ]
  },
  "arif@simpleonlinehealthcare.com": {
    "firstName": "Arif",
    "lastName": "Ali",
    "jobTitle": "Pharmacist Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "arnav@simpleonlinehealthcare.com": {
    "firstName": "Arnav",
    "lastName": "Dev",
    "jobTitle": "Product Manager",
    "department": "Product",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ataklti@simpleonlinehealthcare.com": {
    "firstName": "Ataklti",
    "lastName": "Abraha",
    "jobTitle": "Warehouse Packing Manager",
    "department": "Production",
    "level": 2,
    "sublevel": 1,
    "managerEmail": "adele@simpleonlinehealthcare.com",
    "directReports": []
  },
  "aytalina@simpleonlinehealthcare.com": {
    "firstName": "Aytalina",
    "lastName": "Andreeva",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "bev@simpleonlinehealthcare.com": {
    "firstName": "Bev",
    "lastName": "Dumbleton",
    "jobTitle": "Chief Operating Officer",
    "department": "Central",
    "level": 6,
    "sublevel": null,
    "managerEmail": "addy@simpleonlinehealthcare.com",
    "directReports": [
      "alan@simpleonlinehealthcare.com",
      "caiti@simpleonlinehealthcare.com",
      "jacqueline@simpleonlinehealthcare.com",
      "james@simpleonlinehealthcare.com"
    ]
  },
  "caiti@simpleonlinehealthcare.com": {
    "firstName": "Caiti",
    "lastName": "Kapernick",
    "jobTitle": "Operations Lead",
    "department": "Australia",
    "level": 3,
    "sublevel": 2,
    "managerEmail": "bev@simpleonlinehealthcare.com",
    "directReports": [
      "madeline@simpleonlinehealthcare.com",
      "fransis@simpleonlinehealthcare.com",
      "michelle@simpleonlinehealthcare.com",
      "pia@simpleonlinehealthcare.com"
    ]
  },
  "calum@simpleonlinehealthcare.com": {
    "firstName": "Calum",
    "lastName": "MacRitchie",
    "jobTitle": "Customer Service Team Leader",
    "department": "Clinical Ops",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "jacqueline@simpleonlinehealthcare.com",
    "directReports": [
      "amy@simpleonlinehealthcare.com",
      "eli@simpleonlinehealthcare.com",
      "hana@simpleonlinehealthcare.com",
      "iman@simpleonlinehealthcare.com",
      "nisa@simpleonlinehealthcare.com",
      "ruqayyah@simpleonlinehealthcare.com",
      "sinitta@simpleonlinehealthcare.com",
      "muhammad@simpleonlinehealthcare.com",
      "natasha@simpleonlinehealthcare.com"
    ]
  },
  "cameo-lee@simpleonlinehealthcare.com": {
    "firstName": "Cameo-Lee",
    "lastName": "Smith",
    "jobTitle": "Social Media Intern",
    "department": "Brand",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "holly@simpleonlinehealthcare.com",
    "directReports": []
  },
  "cameron@simpleonlinehealthcare.com": {
    "firstName": "Cameron",
    "lastName": "Ferguson",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "cassandra@simpleonlinehealthcare.com": {
    "firstName": "Cassandra",
    "lastName": "Kerinec",
    "jobTitle": "Dietitian",
    "department": "Clinical Nutrition and Dietitian",
    "level": 1,
    "sublevel": 4,
    "managerEmail": "laura@simpleonlinehealthcare.com",
    "directReports": []
  },
  "chloe@simpleonlinehealthcare.com": {
    "firstName": "Chloe",
    "lastName": "Quigley",
    "jobTitle": "Clinical Admin",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "zahra@simpleonlinehealthcare.com",
    "directReports": []
  },
  "christopher@simpleonlinehealthcare.com": {
    "firstName": "Christopher",
    "lastName": "McKane",
    "jobTitle": "SEO Strategist",
    "department": "Brand",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "graeme@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ciara@simpleonlinehealthcare.com": {
    "firstName": "Ciara",
    "lastName": "Bertoncini-Gilmour",
    "jobTitle": "CRM Executive",
    "department": "Performance",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "william@simpleonlinehealthcare.com",
    "directReports": []
  },
  "connor@simpleonlinehealthcare.com": {
    "firstName": "Connor",
    "lastName": "Lennox",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "daniela@simpleonlinehealthcare.com": {
    "firstName": "Daniela",
    "lastName": "Vukadin Scott",
    "jobTitle": "Digital Marketing Specialist",
    "department": "Kapsel",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "annick@simpleonlinehealthcare.com",
    "directReports": []
  },
  "danielle@simpleonlinehealthcare.com": {
    "firstName": "Danielle",
    "lastName": "Harte",
    "jobTitle": "Senior Recruiter",
    "department": "People Function",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "alan@simpleonlinehealthcare.com",
    "directReports": []
  },
  "david@simpleonlinehealthcare.com": {
    "firstName": "David",
    "lastName": "Tolmie",
    "jobTitle": "Creative Design Manager",
    "department": "Brand",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "graeme@simpleonlinehealthcare.com",
    "directReports": []
  },
  "dharmesh@simpleonlinehealthcare.com": {
    "firstName": "Dharmesh",
    "lastName": "Garala",
    "jobTitle": "Director of Performance",
    "department": "Performance",
    "level": 5,
    "sublevel": null,
    "managerEmail": "scott@simpleonlinehealthcare.com",
    "directReports": [
      "alice@simpleonlinehealthcare.com",
      "kaho@simpleonlinehealthcare.com",
      "siobhan@simpleonlinehealthcare.com",
      "vanessa@simpleonlinehealthcare.com",
      "william@simpleonlinehealthcare.com"
    ]
  },
  "dylan@simpleonlinehealthcare.com": {
    "firstName": "Dylan",
    "lastName": "McGartland",
    "jobTitle": "Creative Production Manager",
    "department": "Brand",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "holly@simpleonlinehealthcare.com",
    "directReports": []
  },
  "edward@simpleonlinehealthcare.com": {
    "firstName": "Edward",
    "lastName": "Pickles",
    "jobTitle": "Chief Strategy Officer",
    "department": "Central",
    "level": 6,
    "sublevel": null,
    "managerEmail": "addy@simpleonlinehealthcare.com",
    "directReports": []
  },
  "eli@simpleonlinehealthcare.com": {
    "firstName": "Eli",
    "lastName": "Simpson",
    "jobTitle": "Clinical Admin",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "elizabeth@simpleonlinehealthcare.com": {
    "firstName": "Elizabeth",
    "lastName": "Pyott",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "emily@simpleonlinehealthcare.com": {
    "firstName": "Emily",
    "lastName": "Cockburn",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "erin@simpleonlinehealthcare.com": {
    "firstName": "Erin",
    "lastName": "McGowan",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "famile@simpleonlinehealthcare.com": {
    "firstName": "Famile",
    "lastName": "Nimfas",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "favour@simpleonlinehealthcare.com": {
    "firstName": "Favour",
    "lastName": "Radebe",
    "jobTitle": "People & Office Assistant",
    "department": "People Function",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "jennifer@simpleonlinehealthcare.com",
    "directReports": []
  },
  "fiona@simpleonlinehealthcare.com": {
    "firstName": "Fiona",
    "lastName": "Stewart",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "fizza@simpleonlinehealthcare.com": {
    "firstName": "Fizza",
    "lastName": "Mahmood",
    "jobTitle": "Pharmacist",
    "department": "Australia",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "tyson@simpleonlinehealthcare.com",
    "directReports": []
  },
  "fransis@simpleonlinehealthcare.com": {
    "firstName": "Fransis",
    "lastName": "Beveridge",
    "jobTitle": "Patient Care",
    "department": "Australia",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "caiti@simpleonlinehealthcare.com",
    "directReports": []
  },
  "fraser@simpleonlinehealthcare.com": {
    "firstName": "Fraser",
    "lastName": "Reid",
    "jobTitle": "Partnerships Executive",
    "department": "Central",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "addy@simpleonlinehealthcare.com",
    "directReports": []
  },
  "gideon@simpleonlinehealthcare.com": {
    "firstName": "Gideon",
    "lastName": "Oyelowo",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "graeme@simpleonlinehealthcare.com": {
    "firstName": "Graeme",
    "lastName": "Barnes",
    "jobTitle": "Director of Brand",
    "department": "Brand",
    "level": 5,
    "sublevel": null,
    "managerEmail": "scott@simpleonlinehealthcare.com",
    "directReports": [
      "christopher@simpleonlinehealthcare.com",
      "david@simpleonlinehealthcare.com",
      "holly@simpleonlinehealthcare.com",
      "ian@simpleonlinehealthcare.com",
      "sheridan@simpleonlinehealthcare.com",
      "victoria@simpleonlinehealthcare.com"
    ]
  },
  "gregg@simpleonlinehealthcare.com": {
    "firstName": "Gregg",
    "lastName": "McSwiggan",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "hana@simpleonlinehealthcare.com": {
    "firstName": "Hana",
    "lastName": "Jamieson",
    "jobTitle": "Patient Care",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "heather@simpleonlinehealthcare.com": {
    "firstName": "Heather",
    "lastName": "Sinclair",
    "jobTitle": "Finance Controller",
    "department": "Simple Finance",
    "level": 4,
    "sublevel": 1,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": [
      "ryan@simpleonlinehealthcare.com"
    ]
  },
  "holly@simpleonlinehealthcare.com": {
    "firstName": "Holly",
    "lastName": "Grey",
    "jobTitle": "Senior Brand Manager",
    "department": "Brand",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "graeme@simpleonlinehealthcare.com",
    "directReports": [
      "cameo-lee@simpleonlinehealthcare.com",
      "dylan@simpleonlinehealthcare.com",
      "ikhlas@simpleonlinehealthcare.com"
    ]
  },
  "ian@simpleonlinehealthcare.com": {
    "firstName": "Ian",
    "lastName": "Coakley",
    "jobTitle": "Product Content Writer",
    "department": "Brand",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "graeme@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ikechukwu@simpleonlinehealthcare.com": {
    "firstName": "Ikechukwu",
    "lastName": "Anyanwu",
    "jobTitle": "Product Designer",
    "department": "Product",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ikhlas@simpleonlinehealthcare.com": {
    "firstName": "Ikhlas",
    "lastName": "Syed",
    "jobTitle": "AI Growth Associate",
    "department": "Brand",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "holly@simpleonlinehealthcare.com",
    "directReports": []
  },
  "iman@simpleonlinehealthcare.com": {
    "firstName": "Iman",
    "lastName": "Mohammed",
    "jobTitle": "Pharmacist",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ina@simpleonlinehealthcare.com": {
    "firstName": "Ina",
    "lastName": "Kluge",
    "jobTitle": "Content Writer",
    "department": "Kapsel",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "annick@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ioana@simpleonlinehealthcare.com": {
    "firstName": "Ioana",
    "lastName": "Balanescu",
    "jobTitle": "Senior Software Engineer",
    "department": "Product",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "jacqueline@simpleonlinehealthcare.com": {
    "firstName": "Jacqueline",
    "lastName": "Rosie",
    "jobTitle": "Head of Patient Experience",
    "department": "Patient Experience",
    "level": 5,
    "sublevel": null,
    "managerEmail": "bev@simpleonlinehealthcare.com",
    "directReports": [
      "andrew@simpleonlinehealthcare.com",
      "calum@simpleonlinehealthcare.com",
      "junior@simpleonlinehealthcare.com",
      "melissa@simpleonlinehealthcare.com"
    ]
  },
  "james@simpleonlinehealthcare.com": {
    "firstName": "James",
    "lastName": "Miller",
    "jobTitle": "Production Manager",
    "department": "Production",
    "level": 4,
    "sublevel": 2,
    "managerEmail": "bev@simpleonlinehealthcare.com",
    "directReports": [
      "almokhtar@simpleonlinehealthcare.com",
      "kathleen@simpleonlinehealthcare.com",
      "kinga@simpleonlinehealthcare.com",
      "lukasz@simpleonlinehealthcare.com",
      "monika@simpleonlinehealthcare.com",
      "stuart@simpleonlinehealthcare.com"
    ]
  },
  "jamie@simpleonlinehealthcare.com": {
    "firstName": "Jamie",
    "lastName": "Shergold",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "jannath@simpleonlinehealthcare.com": {
    "firstName": "Jannath",
    "lastName": "Nilma",
    "jobTitle": "Senior Prescriber",
    "department": "Clinical Prescribing",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "sabeela@simpleonlinehealthcare.com",
    "directReports": [
      "lara@simpleonlinehealthcare.com",
      "susannah@simpleonlinehealthcare.com",
      "theresa@simpleonlinehealthcare.com",
      "ariana@simpleonlinehealthcare.com",
      "justine@simpleonlinehealthcare.com",
      "leanne@simpleonlinehealthcare.com",
      "markie@simpleonlinehealthcare.com",
      "nicola@simpleonlinehealthcare.com"
    ]
  },
  "jaskrit@simpleonlinehealthcare.com": {
    "firstName": "Jaskrit",
    "lastName": "Bakshi",
    "jobTitle": "New Markets Analyst",
    "department": "New Markets",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "annick@simpleonlinehealthcare.com",
    "directReports": []
  },
  "jason@simpleonlinehealthcare.com": {
    "firstName": "Jason",
    "lastName": "Smart",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "jayne@simpleonlinehealthcare.com": {
    "firstName": "Jayne",
    "lastName": "McGhee",
    "jobTitle": "Project Manager",
    "department": "Central",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "peter@simpleonlinehealthcare.com",
    "directReports": []
  },
  "jennifer@simpleonlinehealthcare.com": {
    "firstName": "Jennifer",
    "lastName": "Thompson",
    "jobTitle": "Accounts Assistant",
    "department": "Simple Finance",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "ryan@simpleonlinehealthcare.com",
    "directReports": [
      "favour@simpleonlinehealthcare.com"
    ]
  },
  "jodie@simpleonlinehealthcare.com": {
    "firstName": "Jodie",
    "lastName": "Conway",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "joicy@simpleonlinehealthcare.com": {
    "firstName": "Joicy",
    "lastName": "Jose",
    "jobTitle": "Nutritionist",
    "department": "Clinical Nutrition and Dietitian",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "laura@simpleonlinehealthcare.com",
    "directReports": []
  },
  "joseph@simpleonlinehealthcare.com": {
    "firstName": "Joseph",
    "lastName": "Groark",
    "jobTitle": "Applied AI Lead",
    "department": "Product",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "julia@simpleonlinehealthcare.com": {
    "firstName": "Julia",
    "lastName": "Lau",
    "jobTitle": "Senior Prescriber",
    "department": "Clinical Prescribing",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "sabeela@simpleonlinehealthcare.com",
    "directReports": []
  },
  "julian@simpleonlinehealthcare.com": {
    "firstName": "Julian",
    "lastName": "Aylward",
    "jobTitle": "Director of Analytics",
    "department": "Data",
    "level": 5,
    "sublevel": null,
    "managerEmail": "scott@simpleonlinehealthcare.com",
    "directReports": [
      "liam@simpleonlinehealthcare.com",
      "martin@simpleonlinehealthcare.com",
      "noel@simpleonlinehealthcare.com",
      "sujan@simpleonlinehealthcare.com"
    ]
  },
  "junior@simpleonlinehealthcare.com": {
    "firstName": "Junior",
    "lastName": "Akete-Tshekoya",
    "jobTitle": "AI & Automation Intern",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "jacqueline@simpleonlinehealthcare.com",
    "directReports": []
  },
  "kaho@simpleonlinehealthcare.com": {
    "firstName": "Kaho",
    "lastName": "Cheung",
    "jobTitle": "Senior PPC Specialist",
    "department": "Performance",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "dharmesh@simpleonlinehealthcare.com",
    "directReports": []
  },
  "karim@simpleonlinehealthcare.com": {
    "firstName": "Karim",
    "lastName": "Nassar",
    "jobTitle": "Co-Founder",
    "department": "Central",
    "level": 6,
    "sublevel": null,
    "managerEmail": null,
    "directReports": []
  },
  "kathleen@simpleonlinehealthcare.com": {
    "firstName": "Kathleen",
    "lastName": "Murdoch",
    "jobTitle": "Warehouse Supervisor",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "james@simpleonlinehealthcare.com",
    "directReports": []
  },
  "kinga@simpleonlinehealthcare.com": {
    "firstName": "Kinga",
    "lastName": "Kalwasinska",
    "jobTitle": "Accuracy Checking Technician",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "james@simpleonlinehealthcare.com",
    "directReports": []
  },
  "lara@simpleonlinehealthcare.com": {
    "firstName": "Lara",
    "lastName": "Seymour",
    "jobTitle": "Pharmacist",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "laura@simpleonlinehealthcare.com": {
    "firstName": "Laura",
    "lastName": "Perez",
    "jobTitle": "Clinical Nutrition Lead",
    "department": "Clinical Regulatory",
    "level": 3,
    "sublevel": 3,
    "managerEmail": "abdal@simpleonlinehealthcare.com",
    "directReports": [
      "anindita@simpleonlinehealthcare.com",
      "cassandra@simpleonlinehealthcare.com",
      "joicy@simpleonlinehealthcare.com",
      "ana@simpleonlinehealthcare.com",
      "ayisha@simpleonlinehealthcare.com"
    ]
  },
  "leonard@simpleonlinehealthcare.com": {
    "firstName": "Leonard",
    "lastName": "Crainie",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "liam@simpleonlinehealthcare.com": {
    "firstName": "Liam",
    "lastName": "Owen",
    "jobTitle": "Data Analyst",
    "department": "Data",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "julian@simpleonlinehealthcare.com",
    "directReports": []
  },
  "lisa@simpleonlinehealthcare.com": {
    "firstName": "Lisa",
    "lastName": "Scambler",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": [
      "michael@simpleonlinehealthcare.com",
      "peter@simpleonlinehealthcare.com"
    ]
  },
  "lukasz@simpleonlinehealthcare.com": {
    "firstName": "Lukasz",
    "lastName": "Trawinski",
    "jobTitle": "Shift Manager",
    "department": "Production",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "james@simpleonlinehealthcare.com",
    "directReports": [
      "elizabeth@simpleonlinehealthcare.com",
      "jamie@simpleonlinehealthcare.com",
      "marcin@simpleonlinehealthcare.com",
      "tomasz@simpleonlinehealthcare.com",
      "winta@simpleonlinehealthcare.com",
      "clement@simpleonlinehealthcare.com",
      "louise@simpleonlinehealthcare.com",
      "mariah@simpleonlinehealthcare.com",
      "pola@simpleonlinehealthcare.com"
    ]
  },
  "marcin@simpleonlinehealthcare.com": {
    "firstName": "Marcin",
    "lastName": "Skubinski",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "martin@simpleonlinehealthcare.com": {
    "firstName": "Martin",
    "lastName": "Mallon",
    "jobTitle": "Senior Growth Analyst",
    "department": "Data",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "julian@simpleonlinehealthcare.com",
    "directReports": []
  },
  "matthew@simpleonlinehealthcare.com": {
    "firstName": "Matthew",
    "lastName": "Greive",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "mediha@simpleonlinehealthcare.com": {
    "firstName": "Mediha",
    "lastName": "Mohammed",
    "jobTitle": "Pharmacist Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "sabeela@simpleonlinehealthcare.com",
    "directReports": []
  },
  "melissa@simpleonlinehealthcare.com": {
    "firstName": "Melissa",
    "lastName": "Crompton",
    "jobTitle": "Customer Service Team Leader",
    "department": "Patient Experience",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "jacqueline@simpleonlinehealthcare.com",
    "directReports": [
      "abbie@simpleonlinehealthcare.com",
      "amanda@simpleonlinehealthcare.com",
      "aytalina@simpleonlinehealthcare.com",
      "erin@simpleonlinehealthcare.com",
      "fiona@simpleonlinehealthcare.com",
      "gideon@simpleonlinehealthcare.com",
      "leonard@simpleonlinehealthcare.com",
      "paula@simpleonlinehealthcare.com",
      "sehar@simpleonlinehealthcare.com",
      "zeenat@simpleonlinehealthcare.com"
    ]
  },
  "merhawi@simpleonlinehealthcare.com": {
    "firstName": "Merhawi",
    "lastName": "Fishale",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "michael@simpleonlinehealthcare.com": {
    "firstName": "Michael",
    "lastName": "Stricker",
    "jobTitle": "Patient Care (Germany)",
    "department": "Kepsel Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lisa@simpleonlinehealthcare.com",
    "directReports": [
      "arnav@simpleonlinehealthcare.com",
      "heather@simpleonlinehealthcare.com",
      "ikechukwu@simpleonlinehealthcare.com",
      "ioana@simpleonlinehealthcare.com",
      "joseph@simpleonlinehealthcare.com",
      "nathan@simpleonlinehealthcare.com",
      "nikita@simpleonlinehealthcare.com",
      "nikki@simpleonlinehealthcare.com",
      "sergio@simpleonlinehealthcare.com",
      "warren@simpleonlinehealthcare.com",
      "yan@simpleonlinehealthcare.com",
      "atlas@simpleonlinehealthcare.com",
      "imran@simpleonlinehealthcare.com"
    ]
  },
  "michelle@simpleonlinehealthcare.com": {
    "firstName": "Michelle",
    "lastName": "Walker",
    "jobTitle": "Patient Care",
    "department": "Australia",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "caiti@simpleonlinehealthcare.com",
    "directReports": []
  },
  "miriam@simpleonlinehealthcare.com": {
    "firstName": "Miriam",
    "lastName": "Anderson",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "monika@simpleonlinehealthcare.com": {
    "firstName": "Monika",
    "lastName": "Luczka",
    "jobTitle": "Warehouse Supervisor",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "james@simpleonlinehealthcare.com",
    "directReports": []
  },
  "nandini@simpleonlinehealthcare.com": {
    "firstName": "Nandini",
    "lastName": "Bagga",
    "jobTitle": "Program Office Support Associate",
    "department": "Central",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "peter@simpleonlinehealthcare.com",
    "directReports": []
  },
  "naomi@simpleonlinehealthcare.com": {
    "firstName": "Naomi",
    "lastName": "Garcia",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "nathan@simpleonlinehealthcare.com": {
    "firstName": "Nathan",
    "lastName": "Gostelow",
    "jobTitle": "Lead Software Engineer",
    "department": "Product",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "nikita@simpleonlinehealthcare.com": {
    "firstName": "Nikita",
    "lastName": "Lavrenovs",
    "jobTitle": "Product Manager",
    "department": "Product",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "nikki@simpleonlinehealthcare.com": {
    "firstName": "Nikki",
    "lastName": "Clelland",
    "jobTitle": "Senior Software Engineer",
    "department": "Product",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "nisa@simpleonlinehealthcare.com": {
    "firstName": "Nisa",
    "lastName": "Zainab",
    "jobTitle": "Pharmacist",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "noel@simpleonlinehealthcare.com": {
    "firstName": "Noel",
    "lastName": "Ogbuagu",
    "jobTitle": "Junior Data Analyst",
    "department": "Data",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "julian@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ondine@simpleonlinehealthcare.com": {
    "firstName": "Ondine",
    "lastName": "Kirwan",
    "jobTitle": "Accounts Assistant",
    "department": "Simple Finance",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "ryan@simpleonlinehealthcare.com",
    "directReports": []
  },
  "paul@simpleonlinehealthcare.com": {
    "firstName": "Paul",
    "lastName": "Kaye",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "paula@simpleonlinehealthcare.com": {
    "firstName": "Paula",
    "lastName": "Fitzpatrick",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "peter@simpleonlinehealthcare.com": {
    "firstName": "Peter",
    "lastName": "Politajs",
    "jobTitle": "Patient Care (Germany)",
    "department": "Kepsel Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lisa@simpleonlinehealthcare.com",
    "directReports": [
      "jayne@simpleonlinehealthcare.com",
      "nandini@simpleonlinehealthcare.com"
    ]
  },
  "pia@simpleonlinehealthcare.com": {
    "firstName": "Pia",
    "lastName": "Stretton",
    "jobTitle": "Patient Care",
    "department": "Australia",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "caiti@simpleonlinehealthcare.com",
    "directReports": []
  },
  "rebekah@simpleonlinehealthcare.com": {
    "firstName": "Rebekah",
    "lastName": "Parker",
    "jobTitle": "Senior Prescriber",
    "department": "Clinical Prescribing",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "sabeela@simpleonlinehealthcare.com",
    "directReports": [
      "andrea@simpleonlinehealthcare.com",
      "arif@simpleonlinehealthcare.com",
      "jason@simpleonlinehealthcare.com",
      "naomi@simpleonlinehealthcare.com",
      "sarina@simpleonlinehealthcare.com",
      "amal@simpleonlinehealthcare.com",
      "katie@simpleonlinehealthcare.com",
      "kelly@simpleonlinehealthcare.com",
      "vicky@simpleonlinehealthcare.com"
    ]
  },
  "richard@simpleonlinehealthcare.com": {
    "firstName": "Richard",
    "lastName": "Wood",
    "jobTitle": "Pharmacist",
    "department": "Clinical Regulatory",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "abdal@simpleonlinehealthcare.com",
    "directReports": []
  },
  "robel@simpleonlinehealthcare.com": {
    "firstName": "Robel",
    "lastName": "Kidane",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ruaraidh@simpleonlinehealthcare.com": {
    "firstName": "Ruaraidh",
    "lastName": "Buckenham",
    "jobTitle": "Senior Governance Pharmacist",
    "department": "Clinical Regulatory",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "abdal@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ruqayyah@simpleonlinehealthcare.com": {
    "firstName": "Ruqayyah",
    "lastName": "Ahmed",
    "jobTitle": "Pharmacist",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ryan@simpleonlinehealthcare.com": {
    "firstName": "Ryan",
    "lastName": "McGill",
    "jobTitle": "Accounts Manager",
    "department": "Simple Finance",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "heather@simpleonlinehealthcare.com",
    "directReports": [
      "adele@simpleonlinehealthcare.com",
      "jennifer@simpleonlinehealthcare.com",
      "ondine@simpleonlinehealthcare.com"
    ]
  },
  "sabeela@simpleonlinehealthcare.com": {
    "firstName": "Sabeela",
    "lastName": "Yasin",
    "jobTitle": "Lead Prescriber",
    "department": "Clinical Prescribing",
    "level": 4,
    "sublevel": 1,
    "managerEmail": "abdal@simpleonlinehealthcare.com",
    "directReports": [
      "jannath@simpleonlinehealthcare.com",
      "julia@simpleonlinehealthcare.com",
      "mediha@simpleonlinehealthcare.com",
      "rebekah@simpleonlinehealthcare.com"
    ]
  },
  "sarina@simpleonlinehealthcare.com": {
    "firstName": "Sarina",
    "lastName": "Azimi",
    "jobTitle": "Pharmacist Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "scott@simpleonlinehealthcare.com": {
    "firstName": "Scott",
    "lastName": "Lawrie",
    "jobTitle": "Chief Growth Officer",
    "department": "Central",
    "level": 6,
    "sublevel": null,
    "managerEmail": "addy@simpleonlinehealthcare.com",
    "directReports": [
      "annick@simpleonlinehealthcare.com",
      "dharmesh@simpleonlinehealthcare.com",
      "graeme@simpleonlinehealthcare.com",
      "julian@simpleonlinehealthcare.com",
      "tyson@simpleonlinehealthcare.com"
    ]
  },
  "sean@simpleonlinehealthcare.com": {
    "firstName": "Sean",
    "lastName": "Davidson",
    "jobTitle": "Learning & Development Specialist",
    "department": "People Function",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "alan@simpleonlinehealthcare.com",
    "directReports": []
  },
  "sehar@simpleonlinehealthcare.com": {
    "firstName": "Sehar",
    "lastName": "Mohammed Sharif",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "sergio@simpleonlinehealthcare.com": {
    "firstName": "Sergio",
    "lastName": "Okonkwo",
    "jobTitle": "Junior Software Engineer",
    "department": "Product",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "sheridan@simpleonlinehealthcare.com": {
    "firstName": "Sheridan",
    "lastName": "New",
    "jobTitle": "Brand & Content Manager",
    "department": "Brand",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "graeme@simpleonlinehealthcare.com",
    "directReports": []
  },
  "sinitta@simpleonlinehealthcare.com": {
    "firstName": "Sinitta",
    "lastName": "Sanghera",
    "jobTitle": "Pharmacist",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "siobhan@simpleonlinehealthcare.com": {
    "firstName": "Siobhan",
    "lastName": "Heaney",
    "jobTitle": "Creative Strategist",
    "department": "Performance",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "dharmesh@simpleonlinehealthcare.com",
    "directReports": []
  },
  "stuart@simpleonlinehealthcare.com": {
    "firstName": "Stuart",
    "lastName": "Anderson",
    "jobTitle": "Storesman",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "james@simpleonlinehealthcare.com",
    "directReports": []
  },
  "sujan@simpleonlinehealthcare.com": {
    "firstName": "Sujan",
    "lastName": "Tumbaraguddi",
    "jobTitle": "Data Analyst - Operations",
    "department": "Data",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "julian@simpleonlinehealthcare.com",
    "directReports": []
  },
  "susannah@simpleonlinehealthcare.com": {
    "firstName": "Susannah",
    "lastName": "Russell",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "taylor@simpleonlinehealthcare.com": {
    "firstName": "Taylor",
    "lastName": "Belkevitz",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "theresa@simpleonlinehealthcare.com": {
    "firstName": "Theresa",
    "lastName": "Deveney",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "tomasz@simpleonlinehealthcare.com": {
    "firstName": "Tomasz",
    "lastName": "Jankiewicz",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "tyson@simpleonlinehealthcare.com": {
    "firstName": "Tyson",
    "lastName": "Wilkman",
    "jobTitle": "International Growth Manager",
    "department": "Australia",
    "level": 3,
    "sublevel": 2,
    "managerEmail": "scott@simpleonlinehealthcare.com",
    "directReports": [
      "fizza@simpleonlinehealthcare.com"
    ]
  },
  "vanessa@simpleonlinehealthcare.com": {
    "firstName": "Vanessa",
    "lastName": "McGough",
    "jobTitle": "Senior PPC Specialist",
    "department": "Performance",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "dharmesh@simpleonlinehealthcare.com",
    "directReports": []
  },
  "victoria@simpleonlinehealthcare.com": {
    "firstName": "Victoria",
    "lastName": "Cowlett",
    "jobTitle": "PR Manager",
    "department": "Brand",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "graeme@simpleonlinehealthcare.com",
    "directReports": []
  },
  "warren@simpleonlinehealthcare.com": {
    "firstName": "Warren",
    "lastName": "Perkins",
    "jobTitle": "Senior Software Engineer",
    "department": "Product",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "william@simpleonlinehealthcare.com": {
    "firstName": "William",
    "lastName": "Palmer",
    "jobTitle": "CRM Manager",
    "department": "Performance",
    "level": 3,
    "sublevel": 1,
    "managerEmail": "dharmesh@simpleonlinehealthcare.com",
    "directReports": [
      "ciara@simpleonlinehealthcare.com"
    ]
  },
  "winta@simpleonlinehealthcare.com": {
    "firstName": "Winta",
    "lastName": "Bahre",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "yan@simpleonlinehealthcare.com": {
    "firstName": "Yan",
    "lastName": "He",
    "jobTitle": "Product Manager",
    "department": "Product",
    "level": 1,
    "sublevel": 3,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "zahra@simpleonlinehealthcare.com": {
    "firstName": "Zahra",
    "lastName": "Qureshi",
    "jobTitle": "Pharmacist",
    "department": "Clinical Regulatory",
    "level": 3,
    "sublevel": 3,
    "managerEmail": "aamina@simpleonlinehealthcare.com",
    "directReports": [
      "chloe@simpleonlinehealthcare.com"
    ]
  },
  "zeenat@simpleonlinehealthcare.com": {
    "firstName": "Zeenat",
    "lastName": "Ahmed",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "melissa@simpleonlinehealthcare.com",
    "directReports": []
  },
  "amal@simpleonlinehealthcare.com": {
    "firstName": "Amal",
    "lastName": "Osman",
    "jobTitle": "Pharmacist Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ana@simpleonlinehealthcare.com": {
    "firstName": "Ana",
    "lastName": "Paredes Cimadevilla",
    "jobTitle": "Senior Dietitian",
    "department": "Clinical Nutrition and Dietitian",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "laura@simpleonlinehealthcare.com",
    "directReports": []
  },
  "areebah@simpleonlinehealthcare.com": {
    "firstName": "Areebah",
    "lastName": "Khan",
    "jobTitle": "Patient Care",
    "department": "Patient Experience",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "andrew@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ariana@simpleonlinehealthcare.com": {
    "firstName": "Ariana",
    "lastName": "Jahanfar",
    "jobTitle": "Pharmacist Independent Prescriber",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "atlas@simpleonlinehealthcare.com": {
    "firstName": "Atlas",
    "lastName": "Reaper",
    "jobTitle": "Junior Software Engineer",
    "department": "Product",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "ayisha@simpleonlinehealthcare.com": {
    "firstName": "Ayisha",
    "lastName": "Mushtaq",
    "jobTitle": "Nutritionist",
    "department": "Clinical Nutrition and Dietitian",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "laura@simpleonlinehealthcare.com",
    "directReports": []
  },
  "clement@simpleonlinehealthcare.com": {
    "firstName": "Clement",
    "lastName": "Addae",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "imran@simpleonlinehealthcare.com": {
    "firstName": "Imran",
    "lastName": "Mohammed",
    "jobTitle": "Office Administrator",
    "department": "Simple Finance",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "michael@simpleonlinehealthcare.com",
    "directReports": []
  },
  "justine@simpleonlinehealthcare.com": {
    "firstName": "Justine",
    "lastName": "Riley",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "katie@simpleonlinehealthcare.com": {
    "firstName": "Katie",
    "lastName": "Taylor",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "kelly@simpleonlinehealthcare.com": {
    "firstName": "Kelly",
    "lastName": "White",
    "jobTitle": "Accuracy Checking Technician",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  },
  "khobaib@simpleonlinehealthcare.com": {
    "firstName": "Khobaib",
    "lastName": "Waqar",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "leanne@simpleonlinehealthcare.com": {
    "firstName": "Leanne",
    "lastName": "Scott",
    "jobTitle": "Clinical Pharmacist and Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "liepa@simpleonlinehealthcare.com": {
    "firstName": "Liepa",
    "lastName": "Burske",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "louise@simpleonlinehealthcare.com": {
    "firstName": "Louise",
    "lastName": "Marchant",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "mariah@simpleonlinehealthcare.com": {
    "firstName": "Mariah",
    "lastName": "Kierczynska",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "markie@simpleonlinehealthcare.com": {
    "firstName": "Markie",
    "lastName": "Dales",
    "jobTitle": "Clinical Pharmacist and Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "muhammad@simpleonlinehealthcare.com": {
    "firstName": "Muhammad",
    "lastName": "Kaleem",
    "jobTitle": "Pharmacist",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "natasha@simpleonlinehealthcare.com": {
    "firstName": "Natasha",
    "lastName": "Mirza",
    "jobTitle": "Pharmacist",
    "department": "Clinical Ops",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "calum@simpleonlinehealthcare.com",
    "directReports": []
  },
  "nicola@simpleonlinehealthcare.com": {
    "firstName": "Nicola",
    "lastName": "Hopewell",
    "jobTitle": "Pharmacist",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "jannath@simpleonlinehealthcare.com",
    "directReports": []
  },
  "pola@simpleonlinehealthcare.com": {
    "firstName": "Pola",
    "lastName": "Jaroch",
    "jobTitle": "Warehouse Assistant",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "lukasz@simpleonlinehealthcare.com",
    "directReports": []
  },
  "remaz@simpleonlinehealthcare.com": {
    "firstName": "Remaz",
    "lastName": "Hamid",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "sinan@simpleonlinehealthcare.com": {
    "firstName": "Sinan",
    "lastName": "Shah",
    "jobTitle": "Dispenser",
    "department": "Production",
    "level": 1,
    "sublevel": 1,
    "managerEmail": "almokhtar@simpleonlinehealthcare.com",
    "directReports": []
  },
  "vicky@simpleonlinehealthcare.com": {
    "firstName": "Vicky",
    "lastName": "Simpson",
    "jobTitle": "Nurse Independent Prescriber",
    "department": "Clinical Prescribing",
    "level": 1,
    "sublevel": 2,
    "managerEmail": "rebekah@simpleonlinehealthcare.com",
    "directReports": []
  }
};