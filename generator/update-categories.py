#!/usr/bin/env python3
"""
Met à jour les catégories dans les fichiers JS (concepts) et MD (_illustrations).
Nouvelles catégories (6 au total) :
  FR : Biais & Heuristiques / Psychologie & Comportement / Épistémologie /
       Économie & Incitations / Management & Organisations / Ingénierie & Technologie
  EN : Biases & Heuristics / Psychology & Behaviour / Epistemology /
       Economics & Incentives / Management & Organisations / Engineering & Technology
"""
import os, re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONCEPTS = os.path.join(BASE, 'generator', 'concepts')
ILLUS   = os.path.join(BASE, '_illustrations')

# (slug, new_fr_category, new_en_category)
MAPPING = [
    # ── BIAIS & HEURISTIQUES ───────────────────────────────────────────────
    ('ancrage-cognitif',      'Biais & Heuristiques', 'Biases & Heuristics'),
    ('aversion-pertes',       'Biais & Heuristiques', 'Biases & Heuristics'),
    ('biais-confirmation',    'Biais & Heuristiques', 'Biases & Heuristics'),
    ('biais-disponibilite',   'Biais & Heuristiques', 'Biases & Heuristics'),
    ('biais-retrospection',   'Biais & Heuristiques', 'Biases & Heuristics'),
    ('biais-survivant',       'Biais & Heuristiques', 'Biases & Heuristics'),
    ('effet-cadrage',         'Biais & Heuristiques', 'Biases & Heuristics'),
    ('effet-halo',            'Biais & Heuristiques', 'Biases & Heuristics'),
    ('marteau-maslow',        'Biais & Heuristiques', 'Biases & Heuristics'),
    # ── PSYCHOLOGIE & COMPORTEMENT ─────────────────────────────────────────
    ('effet-dunning-kruger',  'Psychologie & Comportement', 'Psychology & Behaviour'),
    ('effet-projecteur',      'Psychologie & Comportement', 'Psychology & Behaviour'),
    ('effet-placebo',         'Psychologie & Comportement', 'Psychology & Behaviour'),
    ('effet-pygmalion',       'Psychologie & Comportement', 'Psychology & Behaviour'),
    ('effet-ringelmann',      'Psychologie & Comportement', 'Psychology & Behaviour'),
    ('loi-hick',              'Psychologie & Comportement', 'Psychology & Behaviour'),
    ('loi-miller',            'Psychologie & Comportement', 'Psychology & Behaviour'),
    # ── ÉPISTÉMOLOGIE ──────────────────────────────────────────────────────
    ('cloture-chesterton',    'Épistémologie', 'Epistemology'),
    ('effet-lindy',           'Épistémologie', 'Epistemology'),
    ('ikigai',                'Épistémologie', 'Epistemology'),
    ('carte-territoire',      'Épistémologie', 'Epistemology'),
    ('loi-brandolini',        'Épistémologie', 'Epistemology'),
    ('principe-hanlon',       'Épistémologie', 'Epistemology'),
    ('rasoir-ockham',         'Épistémologie', 'Epistemology'),
    # ── ÉCONOMIE & INCITATIONS ─────────────────────────────────────────────
    ('effet-cobra',           'Économie & Incitations', 'Economics & Incentives'),
    ('fenetre-overton',       'Économie & Incitations', 'Economics & Incentives'),
    ('loi-goodhart',          'Économie & Incitations', 'Economics & Incentives'),
    ('loi-kerr',              'Économie & Incitations', 'Economics & Incentives'),
    ('loi-pareto',            'Économie & Incitations', 'Economics & Incentives'),
    ('paradoxe-jevons',       'Économie & Incitations', 'Economics & Incentives'),
    # ── MANAGEMENT & ORGANISATIONS ─────────────────────────────────────────
    ('loi-carlson',           'Management & Organisations', 'Management & Organisations'),
    ('loi-hofstadter',        'Management & Organisations', 'Management & Organisations'),
    ('loi-parkinson',         'Management & Organisations', 'Management & Organisations'),
    ('lotus-culture-apprenante', 'Management & Organisations', 'Management & Organisations'),
    ('nombre-dunbar',         'Management & Organisations', 'Management & Organisations'),
    ('paradoxe-abilene',      'Management & Organisations', 'Management & Organisations'),
    ('principe-peter',        'Management & Organisations', 'Management & Organisations'),
    ('principe-shirky',       'Management & Organisations', 'Management & Organisations'),
    # ── INGÉNIERIE & TECHNOLOGIE ───────────────────────────────────────────
    ('loi-brooks',            'Ingénierie & Technologie', 'Engineering & Technology'),
    ('loi-conway',            'Ingénierie & Technologie', 'Engineering & Technology'),
    ('loi-gall',              'Ingénierie & Technologie', 'Engineering & Technology'),
    ('loi-hyrum',             'Ingénierie & Technologie', 'Engineering & Technology'),
    ('loi-metcalfe',          'Ingénierie & Technologie', 'Engineering & Technology'),
    ('loi-tesler',            'Ingénierie & Technologie', 'Engineering & Technology'),
    ('principe-postel',       'Ingénierie & Technologie', 'Engineering & Technology'),
]

CAT_RE = re.compile(r"(category:\s*)['\"]([^'\"]+)['\"]")

def replace_category(path, new_cat):
    if not os.path.exists(path):
        print(f"  SKIP (not found): {path}")
        return False
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Detect quote style from file extension
    ext = os.path.splitext(path)[1]
    if ext == '.js':
        new_line = lambda m: m.group(1) + "'" + new_cat + "'"
    else:  # .md YAML
        new_line = lambda m: m.group(1) + '"' + new_cat + '"'
    new_content, n = CAT_RE.subn(new_line, content, count=1)
    if n == 0:
        print(f"  WARN  (no match): {os.path.relpath(path, BASE)}")
        return False
    if new_content == content:
        return False  # already correct
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True

updated = 0
for slug, fr_cat, en_cat in MAPPING:
    # FR JS
    p = os.path.join(CONCEPTS, f'{slug}.js')
    if replace_category(p, fr_cat):
        print(f"  JS  FR  {slug}.js → {fr_cat}")
        updated += 1
    # EN JS
    p = os.path.join(CONCEPTS, f'{slug}-en.js')
    if replace_category(p, en_cat):
        print(f"  JS  EN  {slug}-en.js → {en_cat}")
        updated += 1
    # FR MD
    p = os.path.join(ILLUS, f'{slug}.md')
    if replace_category(p, fr_cat):
        print(f"  MD  FR  {slug}.md → {fr_cat}")
        updated += 1
    # EN MD
    p = os.path.join(ILLUS, f'{slug}-en.md')
    if replace_category(p, en_cat):
        print(f"  MD  EN  {slug}-en.md → {en_cat}")
        updated += 1

print(f"\n✅ {updated} fichiers mis à jour.")
