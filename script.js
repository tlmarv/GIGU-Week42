// Quiz Data
const quizData = [
  {
    "question": "A 58-year-old man with COPD presents with altered mental status. Arterial blood gas shows: pH 7.29, PCO2 55 mmHg, HCO3− 26 mEq/L. Which of the following best explains the acid-base abnormality and the expected renal response?",
    "choices": [
      "Respiratory alkalosis with renal bicarbonate reabsorption",
      "Acute respiratory acidosis with insufficient renal compensation",
      "Chronic respiratory acidosis with renal generation of new bicarbonate",
      "Metabolic acidosis with compensatory hypoventilation",
      "High anion gap metabolic acidosis with renal ammonia excretion"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has a pH < 7.35 and elevated PCO2, consistent with respiratory acidosis. The near-normal HCO3− (26) suggests partial compensation, likely from chronic renal adaptation. In chronic respiratory acidosis, the kidneys reabsorb filtered HCO3− and generate new HCO3− via ammonium excretion. (A) Alkalosis is incorrect. (B) Bicarbonate would not be this high in acute changes. (C) Correct. (D) Inappropriate—hypoventilation worsens CO2 retention. (E) There's no metabolic component.)"
  },
  {
    "question": "A 72-year-old woman with chronic diarrhea presents with fatigue and confusion. Arterial blood gas reveals: pH 7.20, PCO2 28 mmHg, HCO3− 12 mEq/L. Sodium is 138 mEq/L, chloride is 109 mEq/L. What is the most likely diagnosis and mechanism?",
    "choices": [
      "Metabolic alkalosis due to vomiting and volume contraction",
      "Respiratory alkalosis from hyperventilation during anxiety",
      "High anion gap metabolic acidosis due to lactic acidosis",
      "Normal anion gap metabolic acidosis due to gastrointestinal bicarbonate loss",
      "Chronic respiratory acidosis with renal bicarbonate retention"
    ],
    "correctAnswer": 3,
    "explanation": "The pH is low, HCO3− is low, and PCO2 is appropriately decreased (partial compensation), indicating metabolic acidosis. The anion gap = 138 – (109 + 12) = 17 → elevated, which supports a high anion gap acidosis (likely from lactic acid or ketoacids). However, the correct choice here (answer 4) would be normal anion gap metabolic acidosis due to diarrhea, a non-volatile acid loss where chloride increases to balance lost HCO3−. (1) Incorrect condition. (2) Does not fit ABG. (3) Misaligned with gap calc. (4) Correct.)"
  },
  {
    "question": "A 36-year-old woman with type 1 diabetes presents with abdominal pain and Kussmaul respirations. Labs: pH 7.10, PCO2 22 mmHg, HCO3− 7 mEq/L, Na+ 135, Cl− 100. Which of the following best reflects the compensatory mechanism for this acid-base disturbance?",
    "choices": [
      "Renal bicarbonate excretion and decreased ammonium production",
      "Respiratory retention of CO2 and enhanced HCO3− production",
      "Hyperventilation leading to reduced PCO2",
      "Increased titratable acid excretion without new bicarbonate formation",
      "Decreased glutamine metabolism to limit acid buffering"
    ],
    "correctAnswer": 2,
    "explanation": "The ABG reveals high anion gap metabolic acidosis (AG = 135 − [100 + 7] = 28). Kussmaul respirations (deep/labored breathing) reflect respiratory compensation via hyperventilation, which lowers PCO2 to buffer the acidosis. (1) Incorrect; bicarbonate is conserved, not excreted. (2) Respiratory retention would worsen acidosis. (3) Correct. (4) Titratable acid increases, but new bicarbonate formation is needed. (5) Glutamine metabolism increases in acidosis.)"
  },
  {
    "question": "A 70-year-old woman presents with involuntary urine leakage when coughing or sneezing. She has had three vaginal deliveries. Which of the following best explains the mechanism of her urinary incontinence?",
    "choices": [
      "Uncontrolled detrusor contractions due to spinal cord injury",
      "Overflow of urine due to incomplete bladder emptying",
      "Loss of cortical control over the micturition reflex",
      "Weakness of the urethral sphincter leading to leakage with increased intra-abdominal pressure",
      "Loss of bladder stretch sensation resulting in delayed voiding"
    ],
    "correctAnswer": 3,
    "explanation": "This is stress incontinence, most common in older women with pelvic floor weakening from childbirth. Increased intra-abdominal pressure overcomes the weak urethral sphincter. (A) Describes urge incontinence or neurogenic bladder. (B) Overflow incontinence from obstruction or neuropathy. (C) Describes automatic bladder from CNS damage. (D) Applies to overflow or diabetic neuropathy.)"
  },
  {
    "question": "A 58-year-old man with diabetes presents with continuous dribbling of urine. Bladder ultrasound shows significant post-void residual volume. Which of the following best explains his condition?",
    "choices": [
      "Uninhibited contraction of the detrusor muscle",
      "Urethral sphincter weakness causing stress incontinence",
      "Increased bladder sensitivity due to upper motor neuron lesion",
      "Failure of bladder afferent signaling causing overflow incontinence",
      "Increased activity of cortical inhibitory centers"
    ],
    "correctAnswer": 3,
    "explanation": "This patient has overflow incontinence, common in diabetic neuropathy. Sensory loss prevents bladder stretch detection, causing the bladder to overfill and leak. (A) Describes urge incontinence. (B) Seen in stress incontinence. (C) Upper motor neuron lesions cause urgency, not retention. (D) Correct. (E) Not involved in this pathology.)"
  },
  {
    "question": "A patient with a spinal cord injury at the thoracic level presents with uncoordinated episodes of bladder contraction and incontinence. Which of the following best describes the mechanism involved?",
    "choices": [
      "Damage to sacral spinal cord eliminating detrusor reflex",
      "Loss of voluntary control with preserved spinal micturition reflexes",
      "Obstruction of the bladder outlet causing overflow incontinence",
      "Detrusor areflexia from autonomic neuropathy",
      "Activation of pudendal nerve fibers causing bladder wall contraction"
    ],
    "correctAnswer": 1,
    "explanation": "With injury above the sacral cord, cortical inhibition is lost, but spinal reflexes remain. This leads to automatic bladder, with spontaneous voiding. (A) Would eliminate the reflex. (B) Correct. (C) Describes overflow from BPH. (D) Diabetic autonomic dysfunction. (E) Pudendal nerve controls external sphincter, not detrusor muscle.)"
  },
  {
    "question": "A 68-year-old man with congestive heart failure is prescribed furosemide. A few days later, he presents with new muscle cramps and weakness. Which of the following best explains the underlying mechanism of his symptoms?",
    "choices": [
      "Direct inhibition of potassium reabsorption in the proximal tubule",
      "Increased potassium excretion due to enhanced sodium delivery to the aldosterone-sensitive distal nephron",
      "Suppression of aldosterone leading to potassium wasting",
      "Inhibition of ENaC channels in the collecting duct",
      "Activation of calcium-sensing receptors in the distal tubule"
    ],
    "correctAnswer": 1,
    "explanation": "Loop diuretics like furosemide block the Na+/K+/2Cl− transporter in the thick ascending limb. This increases sodium delivery to the distal nephron, where it is reabsorbed via ENaC, promoting potassium secretion via aldosterone-sensitive principal cells. (A) Potassium is not primarily reabsorbed in the PCT. (B) Correct. (C) Aldosterone is increased, not suppressed. (D) ENaC inhibition occurs with potassium-sparing diuretics. (E) Not the relevant mechanism.)"
  },
  {
    "question": "A 52-year-old woman with hypertension is started on hydrochlorothiazide. She later develops hypercalcemia and mild hypokalemia. Which of the following best explains the mechanism of her electrolyte abnormalities?",
    "choices": [
      "Inhibition of Na+/K+/2Cl− transporter in the thick ascending limb",
      "Stimulation of the calcium-sensing receptor in the loop of Henle",
      "Inhibition of Na+/Cl− co-transport in the distal convoluted tubule",
      "Blockade of aquaporin-2 insertion in the collecting duct",
      "Activation of H+/ATPase in intercalated cells"
    ],
    "correctAnswer": 2,
    "explanation": "Thiazide diuretics act on the Na+/Cl− co-transporter in the distal convoluted tubule, reducing intracellular Na+ and enhancing Ca²⁺ reabsorption through apical Ca²⁺ channels. This explains hypercalcemia and hypokalemia (due to downstream aldosterone effects). (A) Loop diuretics act here, not thiazides. (B) Not directly involved. (C) Correct. (D) Aquaretics affect this. (E) Relates to acid-base handling.)"
  },
  {
    "question": "A patient with SIADH is treated with tolvaptan. What is the most likely mechanism of this medication?",
    "choices": [
      "Inhibition of Na+/Cl− transporter in the distal convoluted tubule",
      "Antagonism of vasopressin V2 receptors in the collecting duct",
      "Blockade of aldosterone receptors in the cortical collecting duct",
      "Inhibition of carbonic anhydrase in the proximal tubule",
      "Stimulation of ENaC activity to reduce water reabsorption"
    ],
    "correctAnswer": 1,
    "explanation": "Tolvaptan is a vasopressin V2 receptor antagonist, preventing aquaporin-2 channel insertion in the collecting duct, promoting free water excretion (aquaretic effect). This is useful in euvolemic or hypervolemic hyponatremia, such as SIADH. (A) Describes thiazide action. (B) Correct. (C) Describes spironolactone. (D) Carbonic anhydrase inhibitors work proximally. (E) ENaC promotes Na+ reabsorption, not water excretion.)"
  },
  {
    "question": "A 26-year-old man of Asian descent presents with gross hematuria 24 hours after an upper respiratory tract infection. Urinalysis shows red blood cells and mild proteinuria. Serum complement levels are normal. A renal biopsy shows mesangial proliferation and immunofluorescence reveals dominant IgA deposits in the mesangium. What is the most likely diagnosis?",
    "choices": [
      "Post-infectious glomerulonephritis",
      "IgA nephropathy",
      "Membranoproliferative glomerulonephritis",
      "Anti-GBM disease",
      "Microscopic polyangiitis"
    ],
    "correctAnswer": 1,
    "explanation": "The hallmark of IgA nephropathy is hematuria occurring concurrently with or shortly after a mucosal infection (synpharyngitic presentation). It is the most common glomerulonephritis worldwide. Biopsy findings include mesangial proliferation and dominant IgA deposition. Complement levels are typically normal. Post-infectious GN would have a latency period and low C3. MPGN would show tram-tracking and low complement. Anti-GBM would show linear IgG. MPA is ANCA-associated and pauci-immune on IF."
  },
  {
    "question": "A 13-year-old girl presents with facial puffiness, hematuria, and elevated blood pressure. Two weeks prior, she had a sore throat. Her serum creatinine is elevated and complement C3 is low. Urinalysis shows RBC casts and proteinuria. Which of the following findings on electron microscopy of the renal biopsy is most diagnostic of her condition?",
    "choices": [
      "Subendothelial dense deposits",
      "Mesangial IgA deposition",
      "Subepithelial humps",
      "GBM splitting and tram-tracking",
      "Linear IgG staining along the basement membrane"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has post-infectious glomerulonephritis, likely post-streptococcal. The classic EM finding is large subepithelial 'hump'-shaped immune complex deposits. Low C3 supports alternative pathway activation. Subendothelial deposits are seen in lupus. Mesangial IgA is typical of IgA nephropathy. Tram-tracking is seen in MPGN. Linear IgG staining suggests anti-GBM disease."
  },
  {
    "question": "A 31-year-old man presents with hemoptysis and acute renal failure. Urinalysis shows RBC casts and mild proteinuria. Chest X-ray reveals bilateral alveolar infiltrates. Serologic testing reveals anti-GBM antibodies. Which of the following best describes the immunofluorescence finding on kidney biopsy?",
    "choices": [
      "Granular deposition of IgG and C3 in the mesangium",
      "Granular deposition of immune complexes in a starry sky pattern",
      "Linear deposition of IgG along the glomerular basement membrane",
      "No immune deposition (pauci-immune pattern)",
      "Mesangial C3 and IgA co-dominant deposition"
    ],
    "correctAnswer": 2,
    "explanation": "This presentation is consistent with anti-GBM disease (Goodpasture syndrome if lungs are involved). IF shows linear deposition of IgG along the GBM, which is characteristic. Granular deposition is seen in immune complex diseases like PIGN or lupus. Pauci-immune is associated with ANCA vasculitis. Mesangial IgA deposition is typical of IgA nephropathy."
  },
  {
    "question": "A 74-year-old woman presents with progressive lower extremity edema and a 12-lb weight gain over one month. She has type 2 diabetes managed with oral agents, no diabetic retinopathy, and no hypertension. Labs show creatinine 1.2 mg/dL, albumin 2.0 g/dL, cholesterol 302 mg/dL, and 11 g/day proteinuria. Biopsy reveals mesangial expansion with nodular glomerulosclerosis and Congo red positivity. Which of the following findings would most strongly confirm the diagnosis?",
    "choices": [
      "Linear IgG deposition on immunofluorescence",
      "Positive anti-PLA2R antibodies",
      "Mesangial expansion with apple-green birefringence on Congo red staining",
      "Electron-dense subepithelial deposits",
      "Foot process effacement without immune deposits"
    ],
    "correctAnswer": 2,
    "explanation": "This is consistent with renal amyloidosis. The strongest confirmatory finding is apple-green birefringence on Congo red staining, which detects amyloid fibrils. Linear IgG suggests anti-GBM disease. Anti-PLA2R is specific for membranous nephropathy. Subepithelial deposits suggest membranous GN. Foot process effacement without deposits suggests minimal change disease."
  },
  {
    "question": "A 55-year-old African American man with obesity and chronic NSAID use presents with generalized edema. Labs show serum creatinine 3.2 mg/dL, albumin 1.9 g/dL, and 9.5 g/day proteinuria. Urinalysis is bland. Renal biopsy shows segmental scarring in less than 50% of glomeruli, with diffuse foot process effacement and no immune deposits. Which of the following best explains the underlying mechanism?",
    "choices": [
      "Anti-podocyte antibodies with subepithelial deposition",
      "APOL1-associated podocyte injury and glomerular collapse",
      "Thickening of the basement membrane from glycosylation end-products",
      "Immune complex deposition in the mesangium",
      "Circulating permeability factor leading to podocyte fusion"
    ],
    "correctAnswer": 1,
    "explanation": "This is classic for FSGS, especially the collapsing variant, common in African Americans and associated with APOL1 variants. The absence of immune deposits and the segmental nature of the lesion supports this. Anti-podocyte antibodies and subepithelial deposits suggest membranous GN. Basement membrane thickening is seen in diabetic nephropathy. Mesangial immune deposits suggest IgA nephropathy. Permeability factor is more characteristic of minimal change disease."
  },
  {
    "question": "A 48-year-old Caucasian man presents with progressive leg swelling and weight gain. He is otherwise healthy. Labs reveal nephrotic-range proteinuria, hypoalbuminemia, and hyperlipidemia. Serology is notable for positive anti-PLA2R antibodies. Renal biopsy shows thickened glomerular basement membranes with spikes on silver stain and granular IgG deposits on immunofluorescence. What is the most likely diagnosis?",
    "choices": [
      "Focal segmental glomerulosclerosis",
      "Minimal change disease",
      "Membranous nephropathy",
      "Diabetic nephropathy",
      "IgA nephropathy"
    ],
    "correctAnswer": 2,
    "explanation": "The findings are diagnostic of primary membranous nephropathy. Anti-PLA2R positivity, spike formation on silver stain, and subepithelial granular deposits are classic. FSGS lacks subepithelial deposits and has segmental scarring. Minimal change disease shows normal LM and IF. Diabetic nephropathy involves mesangial nodules and GBM thickening without immune deposits. IgA nephropathy presents with hematuria and mesangial IgA deposits."
  },
  {
    "question": "A 78-year-old man with a history of diabetes, CKD stage 3, and heart failure presents with respiratory distress and bilateral lower extremity edema. He has been out of his furosemide for a week and continues enalapril, spironolactone, and potassium supplements. Labs show K+ 6.2 mEq/L, creatinine 2.4 mg/dL. ECG is normal. Which of the following best explains the mechanism of his hyperkalemia?",
    "choices": [
      "Pseudohyperkalemia from lab artifact",
      "Increased cellular release of potassium",
      "Impaired renal potassium excretion from hyporeninemic hypoaldosteronism",
      "Excess potassium intake overwhelming normal renal handling",
      "Redistribution from insulin deficiency"
    ],
    "correctAnswer": 2,
    "explanation": "This patient's diabetes and CKD increase the likelihood of type IV renal tubular acidosis due to hyporeninemic hypoaldosteronism. Enalapril and spironolactone further impair aldosterone action, reducing potassium secretion. Pseudohyperkalemia is unlikely with a consistent clinical picture. Increased cellular release is not supported by trauma or acidosis. Dietary intake is rarely sufficient alone to cause hyperkalemia unless excretion is impaired. His insulin use reduces, not worsens, redistribution risk."
  },
  {
    "question": "A 32-year-old woman with type 1 diabetes is admitted with DKA. She has K+ 6.8 mEq/L, glucose 900 mg/dL, HCO3− 15, and a pH of 7.32. ECG shows peaked T waves. What is the most likely explanation for her hyperkalemia?",
    "choices": [
      "Total body potassium excess due to renal retention",
      "Transcellular shift of potassium from insulin deficiency and acidosis",
      "Excessive dietary intake of potassium",
      "Surreptitious potassium supplement use",
      "Reduced GFR from diabetic nephropathy"
    ],
    "correctAnswer": 1,
    "explanation": "This is a classic presentation of DKA. Insulin deficiency and metabolic acidosis cause potassium to shift out of cells into plasma, resulting in elevated serum K despite total body potassium depletion due to osmotic diuresis. Upon insulin administration, potassium will shift back intracellularly, potentially causing hypokalemia. There is no evidence for excessive intake or supplement use. Although GFR is reduced, the acute nature points to transcellular shift as the dominant cause."
  },
  {
    "question": "A 38-year-old woman with new-onset hypertension is found to have persistent hypokalemia (K+ 2.9 mEq/L), metabolic alkalosis, and a transtubular potassium gradient (TTKG) of 7. Renin is suppressed and aldosterone is elevated. Which of the following is the most likely diagnosis?",
    "choices": [
      "Bartter syndrome",
      "Gitelman syndrome",
      "Primary hyperaldosteronism",
      "Apparent mineralocorticoid excess",
      "Diuretic abuse"
    ],
    "correctAnswer": 2,
    "explanation": "The hallmark of primary hyperaldosteronism is hypertension, hypokalemia, metabolic alkalosis, suppressed renin, and elevated aldosterone. The high TTKG confirms inappropriate renal potassium loss. Bartter and Gitelman syndromes present with hypokalemia but involve high renin and aldosterone due to volume depletion. Apparent mineralocorticoid excess causes similar findings but typically features low aldosterone. Diuretic abuse is less likely with suppressed renin and no history or physical findings suggesting use."
  },
  {
    "question": "A 72-year-old woman from a nursing home presents with 4 days of diarrhea and confusion. Vitals show orthostatic hypotension. Labs reveal: Na+ 133 mEq/L, Cl− 118 mEq/L, HCO3− 5 mEq/L, pH 7.11, PCO2 16 mmHg. Which of the following best characterizes her acid-base disorder?",
    "choices": [
      "High anion gap metabolic acidosis with respiratory compensation",
      "Normal anion gap metabolic acidosis with respiratory acidosis",
      "Normal anion gap metabolic acidosis with appropriate respiratory compensation",
      "High anion gap metabolic acidosis with respiratory alkalosis",
      "Mixed respiratory acidosis and metabolic alkalosis"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has a pH of 7.11 and a very low bicarbonate of 5 mEq/L, indicating metabolic acidosis. The anion gap = 133 − (118 + 5) = 10, which is normal. This indicates a normal anion gap (hyperchloremic) acidosis, often caused by diarrhea. PCO2 = 16 mmHg, which is consistent with expected compensation using Winter's formula: PCO2 = 1.5 x HCO3 + 8 ± 2 → ~15.5 ± 2. Thus, her compensation is appropriate. No evidence of respiratory acidosis or alkalosis is present."
  },
  {
    "question": "A 68-year-old man is admitted for weakness and progressive fatigue. Labs: Na+ 135, Cl− 101, HCO3− 12, K+ 5.4. ABG: pH 7.32, PCO2 24 mmHg. What is the most likely acid-base disturbance and its etiology?",
    "choices": [
      "Normal anion gap metabolic acidosis due to diarrhea",
      "High anion gap metabolic acidosis due to renal failure",
      "High anion gap metabolic acidosis with respiratory alkalosis",
      "Mixed metabolic alkalosis and respiratory acidosis",
      "Compensated metabolic alkalosis from vomiting"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has metabolic acidosis with low bicarbonate (12) and a low pH (7.32). His anion gap is 135 − (101 + 12) = 22, indicating a high anion gap metabolic acidosis. Renal failure is the most likely cause, supported by the elevated potassium and fatigue. PCO2 of 24 is appropriately compensated for the degree of acidosis (expected: 1.5 × 12 + 8 = 26 ± 2). No evidence of respiratory alkalosis or alkalosis is seen."
  },
  {
    "question": "A 58-year-old woman presents after a suicide attempt with aspirin overdose. ABG: pH 7.52, PCO2 12 mmHg, HCO3− 10 mEq/L. What is the most accurate acid-base interpretation?",
    "choices": [
      "Respiratory alkalosis with metabolic alkalosis",
      "Respiratory alkalosis with high anion gap metabolic acidosis",
      "Pure respiratory alkalosis",
      "High anion gap metabolic acidosis only",
      "Normal anion gap metabolic acidosis"
    ],
    "correctAnswer": 1,
    "explanation": "Aspirin overdose characteristically causes a mixed acid-base disorder: early respiratory alkalosis due to stimulation of the respiratory center and a high anion gap metabolic acidosis from accumulation of salicylate. The elevated pH with low PCO2 and low bicarbonate confirms a mixed disorder. The anion gap = 140 − (106 + 10) = 24, which supports high anion gap acidosis. A single primary disorder cannot explain this profile, so it's not pure respiratory or metabolic disturbance."
  },
  {
    "question": "An 85-year-old man from a nursing home is brought in with fever, hypotension, and poor oral intake. His sodium level is 174 mEq/L, BUN 100 mg/dL, and urine osmolality is 700 mOsm/kg. He is lethargic and has signs of volume depletion. Which of the following is the most appropriate initial fluid therapy?",
    "choices": [
      "5% dextrose in water",
      "Oral water boluses through a nasogastric tube",
      "3% hypertonic saline",
      "0.9% normal saline",
      "1.5% saline"
    ],
    "correctAnswer": 3,
    "explanation": "This patient has hypernatremia due to hypovolemia and water loss from fever and poor intake. His high urine osmolality indicates appropriate ADH response. In patients with volume depletion and hypernatremia, the priority is to restore hemodynamic stability using isotonic saline. Hypotonic fluids like D5W or oral water are inappropriate initially due to the risk of exacerbating hypotension. Hypertonic saline is used for hyponatremia, not hypernatremia."
  },
  {
    "question": "A 65-year-old woman on fluoxetine presents with altered mental status. Labs reveal a sodium level of 103 mEq/L, serum osmolality 210 mOsm/kg, and urine osmolality of 400 mOsm/kg. Which of the following best explains the pathophysiology of her hyponatremia?",
    "choices": [
      "Congestive heart failure causing secondary ADH release",
      "Volume depletion leading to non-osmotic ADH release",
      "Severe hyperglycemia causing osmotic shift",
      "Fluoxetine-induced syndrome of inappropriate ADH secretion",
      "Reset osmostat due to chronic illness"
    ],
    "correctAnswer": 3,
    "explanation": "The patient has hypotonic, euvolemic hyponatremia with inappropriately concentrated urine. Fluoxetine is known to cause SIADH by enhancing ADH release. Her normal volume status and absence of hyperglycemia or hypovolemia support this diagnosis. CHF and volume depletion would show signs of extracellular volume expansion or contraction, respectively. Reset osmostat occurs with milder hyponatremia."
  },
  {
    "question": "A 66-year-old man with known small cell lung cancer is found to have sodium of 115 mEq/L and low serum uric acid. He is asymptomatic. His labs suggest euvolemic hyponatremia with low BUN and normal creatinine. What is the best initial management for his condition?",
    "choices": [
      "3% hypertonic saline",
      "3% saline plus a loop diuretic",
      "Normal saline infusion",
      "Water restriction",
      "Desmopressin administration"
    ],
    "correctAnswer": 3,
    "explanation": "This patient likely has SIADH due to paraneoplastic ADH secretion from small cell lung cancer. He is asymptomatic and euvolemic, making water restriction the appropriate first-line treatment. Hypertonic saline is reserved for severe or symptomatic hyponatremia. Loop diuretics may be added later if sodium remains low despite fluid restriction. Normal saline is ineffective in SIADH and may worsen hyponatremia due to continued ADH activity. Desmopressin would further worsen water retention."
  },
  {
    "question": "A 68-year-old man with COPD is admitted with fever, hypotension, and confusion. He has a respiratory rate of 28/min, systolic blood pressure of 86 mm Hg, and a GCS of 12. Labs show WBC 16,000/mm³, lactate 4.1 mmol/L, and creatinine 2.2 mg/dL. Which of the following best predicts this patient's mortality risk?",
    "choices": [
      "Temperature elevation",
      "Lactate concentration",
      "Total leukocyte count",
      "Sputum culture results",
      "C-reactive protein level"
    ],
    "correctAnswer": 1,
    "explanation": "Serum lactate is a validated predictor of mortality in sepsis, reflecting tissue hypoperfusion. A lactate >4 mmol/L is associated with ~30% mortality. Although elevated WBCs and CRP suggest inflammation, they do not correlate as strongly with outcomes. Sputum cultures identify etiology but not severity. Temperature abnormalities are common but nonspecific."
  },
  {
    "question": "A 55-year-old woman presents with fever, chills, and hypotension. She is diagnosed with septic shock and receives broad-spectrum antibiotics. Which of the following best describes a key molecular mechanism contributing to her condition?",
    "choices": [
      "Inhibition of the renin-angiotensin-aldosterone system",
      "Overactivation of TLRs leading to cytokine storm",
      "Deficiency of nitric oxide synthase activity",
      "Depletion of neutrophils in peripheral tissues",
      "Downregulation of complement activation"
    ],
    "correctAnswer": 1,
    "explanation": "Sepsis results from excessive innate immune activation via pattern recognition receptors like Toll-like receptors (TLRs). TLR-4, for example, recognizes lipopolysaccharide and initiates a cascade that leads to NF-κB activation and a cytokine storm, central to sepsis pathogenesis. RAAS is not directly suppressed. NO production is typically increased, contributing to vasodilation. Complement is activated, not suppressed, and neutrophils are recruited, not depleted."
  },
  {
    "question": "A 44-year-old man with a history of IV drug use presents with high-grade fever, hypotension, and tachypnea. He is diagnosed with septic shock. Blood cultures grow methicillin-resistant Staphylococcus aureus. Which of the following antibiotic regimens is most appropriate as empiric therapy while awaiting sensitivities?",
    "choices": [
      "Ampicillin-sulbactam and azithromycin",
      "Ceftriaxone and metronidazole",
      "Vancomycin and cefepime",
      "Ciprofloxacin and doxycycline",
      "Linezolid and meropenem"
    ],
    "correctAnswer": 2,
    "explanation": "Initial empiric therapy in septic shock should cover both MRSA and Pseudomonas. Vancomycin covers MRSA, and cefepime is a broad-spectrum beta-lactam with anti-pseudomonal activity. Meropenem is reserved for ESBL-producing organisms. Ampicillin-sulbactam and ceftriaxone do not reliably cover Pseudomonas. Linezolid can be used for MRSA but is not typically first-line for septic shock unless vancomycin cannot be used."
  },
  {
    "question": "A 63-year-old man with a history of spinal cord injury presents with recurrent urinary tract infections and difficulty initiating urination. Urodynamic studies show detrusor overactivity and detrusor-sphincter dyssynergia. Which of the following best explains his condition?",
    "choices": [
      "Lesion at or below the sacral spinal cord causing areflexic bladder",
      "Lesion above the pontine micturition center causing voluntary voiding loss",
      "Lesion above the conus medullaris causing reflexic neurogenic bladder",
      "Loss of pudendal nerve function leading to sphincteric hypotonia",
      "Injury to the hypogastric nerve resulting in loss of bladder contraction"
    ],
    "correctAnswer": 2,
    "explanation": "A lesion above the conus medullaris (typically suprasacral spinal cord injury) can cause a reflexic neurogenic bladder characterized by detrusor overactivity and detrusor-sphincter dyssynergia. This can result in incomplete bladder emptying and upper tract damage. Lesions at or below the sacrum cause an areflexic bladder. The pudendal nerve controls voluntary sphincter control, not bladder filling dynamics. Hypogastric nerve injury impairs storage, not contraction."
  },
  {
    "question": "A 70-year-old woman presents with involuntary urine leakage when she coughs, sneezes, or exercises. Physical exam shows normal cognition and mobility. Which of the following best describes the most appropriate first-line treatment for her condition?",
    "choices": [
      "Intravesical botulinum toxin injections",
      "Midurethral sling surgery",
      "Antimuscarinic therapy",
      "Pelvic floor muscle training",
      "Sacral neuromodulation"
    ],
    "correctAnswer": 3,
    "explanation": "The patient has stress urinary incontinence, characterized by urine leakage during increased intra-abdominal pressure. First-line treatment includes pelvic floor muscle training and other behavioral therapies. Surgery is reserved for those who fail conservative therapy. Antimuscarinics are used for urgency incontinence. Botox and sacral neuromodulation are used in refractory overactive bladder, not stress incontinence."
  },
  {
    "question": "A 58-year-old woman presents with urinary urgency, nocturia, and frequent urination. She denies pain or hematuria. Physical exam and urinalysis are unremarkable. She has tried bladder training with minimal benefit. Which of the following is the next most appropriate pharmacologic option for her symptoms?",
    "choices": [
      "Beta-3 adrenergic agonist",
      "Loop diuretic",
      "Alpha-1 adrenergic blocker",
      "Estrogen vaginal cream",
      "Mirabegron and midurethral sling"
    ],
    "correctAnswer": 0,
    "explanation": "This patient has symptoms of overactive bladder. After failed first-line behavioral therapy, second-line options include antimuscarinic or beta-3 adrenergic agonists like mirabegron. Loop diuretics can worsen symptoms. Alpha-blockers are used for bladder outlet obstruction. Vaginal estrogen is useful in atrophic vaginitis but not first-line for OAB. Midurethral sling is used for stress incontinence."
  },
  {
    "question": "A 65-year-old woman with a history of diabetes and chronic NSAID use presents with hematuria, flank pain, and fever. Imaging shows bilateral irregular cortical scarring and dilation of calyces. A renal biopsy reveals interstitial fibrosis, tubular atrophy with colloid casts, and mononuclear cell infiltrates. Which of the following is the most likely underlying mechanism?",
    "choices": [
      "Ascending bacterial infection complicated by vesicoureteral reflux",
      "Immune complex deposition in the glomerular basement membrane",
      "Ischemia due to thromboembolic renal infarction",
      "Hypersensitivity reaction to antibiotic therapy",
      "Uric acid stone obstruction with subsequent hydronephrosis"
    ],
    "correctAnswer": 0,
    "explanation": "This is classic for chronic pyelonephritis, particularly with reflux nephropathy. The presence of cortical scars, deformed calyces, and thyroidization of tubules suggests a chronic ascending infection, most often superimposed on vesicoureteral reflux. Immune complex deposition is characteristic of glomerular disease. Thromboembolic infarcts cause wedge-shaped necrosis, not this pattern. Hypersensitivity reactions (eosinophilic interstitial nephritis) are more acute. Uric acid stones lead to acute obstruction, not long-standing fibrosis."
  },
  {
    "question": "A 60-year-old man with long-standing hypertension develops worsening renal function. His kidneys are symmetrically shrunken with a finely granular surface. Microscopy reveals arteriolar wall thickening with pink, glassy material and interstitial fibrosis. Which of the following best describes the pathologic finding in this patient?",
    "choices": [
      "Fibrinoid necrosis of arterioles",
      "Hyperplastic arteriolitis with concentric layering",
      "Hyaline arteriolosclerosis of small vessels",
      "Onion-skin appearance of interlobular arteries",
      "Necrotizing glomerulonephritis with crescent formation"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has benign nephrosclerosis due to chronic hypertension. The characteristic lesion is hyaline arteriolosclerosis, causing luminal narrowing, glomerular ischemia, tubular atrophy, and interstitial fibrosis. Fibrinoid necrosis and onion-skin changes are seen in malignant hypertension. Crescentic glomerulonephritis is a rapidly progressive glomerular disease, not primarily vascular."
  },
  {
    "question": "A 43-year-old man presents with hematuria and flank pain. Family history reveals several relatives with kidney failure and cerebral aneurysms. Imaging shows bilateral enlarged kidneys with multiple cysts. Which of the following additional findings is most likely in this patient?",
    "choices": [
      "Multiple small cysts limited to collecting ducts",
      "Coexistence of hepatosplenomegaly and portal hypertension",
      "Progressive cortical scarring with deformed calyces",
      "Aneurysms in the circle of Willis on cerebral imaging",
      "Focal segmental glomerulosclerosis on renal biopsy"
    ],
    "correctAnswer": 3,
    "explanation": "This patient likely has autosomal dominant polycystic kidney disease (ADPKD), characterized by multiple large cortical and medullary cysts, and associations with berry aneurysms in the circle of Willis. Small collecting duct cysts are seen in autosomal recessive (childhood) polycystic kidney disease. Hepatosplenomegaly is not typical of ADPKD. Cortical scarring and calyceal deformity suggest chronic pyelonephritis. FSGS is unrelated to cystic disease in this context."
  },
{
  "question": "A 52-year-old woman presents with flank pain, fever, and recurrent urinary tract infections. Urinalysis shows alkaline urine with abundant ammonium magnesium phosphate crystals. A renal ultrasound reveals a large staghorn calculus occupying the renal pelvis. Which of the following organisms is most likely responsible for this patient’s condition?",
  "choices": [
    "Escherichia coli",
    "Proteus vulgaris",
    "Enterococcus faecalis",
    "Klebsiella pneumoniae",
    "Staphylococcus saprophyticus"
  ],
  "correctAnswer": 1,
  "explanation": "Proteus species, especially Proteus vulgaris, are urease-producing organisms that hydrolyze urea into ammonia, alkalinizing the urine. This favors precipitation of magnesium, ammonium, and phosphate, leading to formation of struvite stones (staghorn calculi). E. coli is the most common cause of UTIs but does not produce urease. Enterococcus, Klebsiella, and Staph. saprophyticus may cause UTIs but are less commonly associated with staghorn calculi."
}
  ]
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let answeredQuestions = JSON.parse(sessionStorage.getItem("answeredQuestions")) || new Array(quizData.length).fill(false);
let explanationsShown = JSON.parse(sessionStorage.getItem("explanationsShown")) || new Array(quizData.length).fill(false);
let selectedAnswers = JSON.parse(sessionStorage.getItem("selectedAnswers")) || new Array(quizData.length).fill(null);

// DOM Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const explanationBox = document.getElementById("explanation");
const progressText = document.getElementById("progress");
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");
const questionList = document.getElementById("question-list");
const quizContainer = document.querySelector(".quiz-content");
const resultsContainer = document.getElementById("results-container");

// Display Hotkey Info Popup
window.onload = function() {
    alert("Welcome to the quiz!\n\nHotkeys Available:\n- Space: Next Question\n- B: Previous Question\n- 1-5: Select Answer Choices\n Anki remotes should be compatible! \n\nGood luck!");
};

// Load Questions into Sidebar
quizData.forEach((_, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = index + 1;
    listItem.classList.add("question-bubble");
    listItem.onclick = () => loadQuestion(index);
    listItem.setAttribute("data-index", index);
    questionList.appendChild(listItem);
});

// Load Question
function loadQuestion(index) {
    if (index >= quizData.length) {
        showResults();
        return;
    }

    currentQuestionIndex = index;
    const q = quizData[index];
    
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";
    
    q.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(i, button);
        button.classList.add("choice-btn");
        
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (i === selectedAnswers[currentQuestionIndex]) {
                button.style.backgroundColor = selectedAnswers[currentQuestionIndex] === q.correctAnswer ? "green" : "red";
            }
            if (i === q.correctAnswer) {
                button.style.backgroundColor = "green";
            }
        }
        
        choicesContainer.appendChild(button);
    });

    if (explanationsShown[currentQuestionIndex]) {
        explanationBox.textContent = q.explanation;
        explanationBox.classList.remove("hidden");
    } else {
        explanationBox.textContent = "";
        explanationBox.classList.add("hidden");
    }

    updateProgress();
}

// Check Answer
function checkAnswer(selectedIndex, button) {
    if (answeredQuestions[currentQuestionIndex]) return; // Prevent multiple answers

    const q = quizData[currentQuestionIndex];
    explanationBox.textContent = q.explanation;
    explanationBox.classList.remove("hidden");

    const questionBubble = document.querySelector(`.question-bubble[data-index="${currentQuestionIndex}"]`);

    if (selectedIndex === q.correctAnswer) {
        button.style.backgroundColor = "green";
        questionBubble.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        button.style.backgroundColor = "red";
        questionBubble.style.backgroundColor = "red";
        incorrectAnswers++;
        
        // Highlight correct answer in green
        const buttons = choicesContainer.getElementsByTagName("button");
        buttons[q.correctAnswer].style.backgroundColor = "green";
    }

    answeredQuestions[currentQuestionIndex] = true; // Mark as answered
    explanationsShown[currentQuestionIndex] = true; // Keep explanation visible
    selectedAnswers[currentQuestionIndex] = selectedIndex;
    
    sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    sessionStorage.setItem("explanationsShown", JSON.stringify(explanationsShown));
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    
    updateProgress();
}

// Update Progress
function updateProgress() {
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    correctText.textContent = correctAnswers;
    incorrectText.textContent = incorrectAnswers;
}

// Show Final Results Popup
function showResultsPopup() {
    const scorePercentage = ((correctAnswers / quizData.length) * 100).toFixed(2);
    alert(`Quiz Completed!\n\nYour Score: ${correctAnswers}/${quizData.length} (${scorePercentage}%)\n\nCongratulations on finishing the quiz!`);
}

// Navigation Controls
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex + 1 >= quizData.length) {
        showResultsPopup();
    } else {
        loadQuestion(currentQuestionIndex + 1);
    }
};
document.getElementById("prev-btn").onclick = () => loadQuestion(Math.max(currentQuestionIndex - 1, 0));

// Hotkey Navigation & Answer Selection
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        loadQuestion(currentQuestionIndex + 1);
    } else if (event.code === "KeyB") {
        loadQuestion(Math.max(currentQuestionIndex - 1, 0));
    } else if (event.key >= "1" && event.key <= "5") {
        const answerIndex = parseInt(event.key) - 1;
        if (answerIndex < quizData[currentQuestionIndex].choices.length) {
            const buttons = choicesContainer.getElementsByTagName("button");
            if (buttons[answerIndex]) {
                buttons[answerIndex].click();
            }
        }
    }
});

// Load First Question on Start
loadQuestion(0);
