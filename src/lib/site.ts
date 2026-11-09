export const site = {
  name: "A Better Arborist®",
  shortName: "A Better Arborist",
  tagline: "Professional Tree Service in Dallas, TX",
  owner: "Todd",
  phone: "+19723337444",
  phoneDisplay: "(972) 333-7444",
  email: "wesavetrees@yahoo.com",
  address: "2303 Royal Ln, Dallas, TX 75229",
  city: "Dallas, TX",
  gmbUrl: "https://maps.app.goo.gl/ZakpV22cMJa4cpsX9",
  hours: "Mon–Sat: 7:00 AM – 7:00 PM · 24/7 Storm Emergency",
};

export const serviceOptions = [
  "Tree Removal",
  "Tree Trimming & Pruning",
  "Stump Grinding / Removal",
  "Storm Damage Cleanup",
  "Crane-Assisted Removal",
  "Sick Tree Diagnosis",
  "Deep Root Fertilization",
  "Tree Cabling & Bolting",
  "Tree Planting",
  "Not Sure / Other",
] as const;

export const urgencyOptions = [
  { value: "emergency", label: "Emergency — today" },
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "Within a month" },
  { value: "flexible", label: "Just getting a quote" },
] as const;

export const serviceAreas = [
  { name: "Highland Park", zip: "75205" },
  { name: "Bluffview / Love Field", zip: "75209" },
  { name: "Oak Lawn / Turtle Creek", zip: "75219" },
  { name: "University Park", zip: "75225" },
  { name: "SMU / Park Cities", zip: "75275" },
  { name: "Northwest Dallas", zip: "75220" },
  { name: "Royal Lane / Walnut Hill", zip: "75229" },
  { name: "Farmers Branch / Addison", zip: "75244" },
  { name: "Preston Hollow", zip: "75230" },
  { name: "Southlake", zip: "76092" },
  { name: "Roanoke / Trophy Club", zip: "76262" },
  { name: "Holland Park", zip: "Dallas" },
];

export const serviceZips = new Set(
  serviceAreas.map((a) => a.zip).filter((z) => /^\d{5}$/.test(z)),
);
