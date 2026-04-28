#!/usr/bin/env python3
"""Fix em dashes in _illustrations/*.md files."""

import re
import os
import glob

ILLUSTRATIONS_DIR = '/Users/christophe/github/Perso/christophe.heubes.com/_illustrations'

# Hand-crafted description rewrites (no em dash)
DESC = {
    'biais-disponibilite-en.md':
        'description: "Heuristic described by Kahneman and Tversky (1973): people assess the probability of an event by how easily examples come to mind, not by actual statistics."',
    'biais-disponibilite.md':
        "description: \"Heuristique décrite par Kahneman et Tversky (1973) : on évalue la probabilité d'un événement selon la facilité avec laquelle des exemples nous viennent à l'esprit, et non selon les statistiques réelles.\"",
    'biais-retrospection-en.md':
        'description: "Bias documented by Baruch Fischhoff (1975): after learning the outcome of an event, people overestimate the probability they would have assigned to it beforehand, as memory rewrites itself."',
    'biais-retrospection.md':
        "description: \"Biais documenté par Baruch Fischhoff (1975) : après avoir connu l'issue d'un événement, on surestime la probabilité qu'on lui aurait attribuée à l'avance : la mémoire se réécrit.\"",
    'biais-survivant-en.md':
        'description: "Cognitive error of focusing on successful cases while ignoring those that failed, invisible by definition."',
    'biais-survivant.md':
        'description: "Erreur cognitive qui consiste à se concentrer sur les cas ayant réussi en ignorant ceux qui ont échoué, invisibles par définition."',
    'effet-cadrage-en.md':
        'description: "Cognitive bias in which the way information is framed, not its content, determines the decision made."',
    'effet-cadrage.md':
        'description: "Biais cognitif par lequel la manière de présenter une information, et non son contenu, détermine la décision prise."',
    'effet-cobra-en.md':
        'description: "Named after a colonial India anecdote: the British offered a bounty for dead cobras to reduce their numbers. Locals started breeding cobras for profit. When the programme was cancelled, captive cobras were released, causing the population to surge."',
    'effet-cobra.md':
        "description: \"Nommé d'après une anecdote de l'Inde coloniale : les Britanniques offrirent une prime pour chaque cobra mort. Les habitants se mirent à élever des cobras. À l'annulation du programme, les cobras furent relâchés, entraînant une explosion de la population.\"",
    'effet-placebo-en.md':
        "description: \"Two identical treatments produce different results depending on the patient's belief. The mind directly influences physiology, a mechanism that extends far beyond medicine.\"",
    'effet-placebo.md':
        "description: \"Deux traitements identiques produisent des résultats différents selon la croyance du patient. L'esprit influence directement la physiologie, un mécanisme qui dépasse de loin la médecine.\"",
    'effet-pygmalion-en.md':
        "description: \"High expectations from a third party positively influence an individual's performance. A self-fulfilling prophecy that operates in both directions through behavior.\"",
    'effet-pygmalion.md':
        "description: \"Les attentes élevées d'un tiers influencent positivement la performance de l'individu. Une prophétie auto-réalisatrice qui s'active par le comportement, dans les deux sens.\"",
    'fenetre-overton-en.md':
        'description: "Concept introduced by Joseph Overton: at any given moment, only a narrow range of ideas is politically acceptable. Ideas outside the window are dismissed as radical or unthinkable, until the window shifts."',
    'fenetre-overton.md':
        "description: \"Concept introduit par Joseph Overton : à chaque instant, seule une plage étroite d'idées est politiquement acceptable. Les idées hors de cette fenêtre sont écartées comme radicales ou impensables, jusqu'à ce que la fenêtre se déplace.\"",
    'loi-tesler-en.md':
        'description: "Law formulated by Larry Tesler (Xerox, Apple): every system has an irreducible amount of complexity that cannot be eliminated, only shifted between user and developer."',
    'loi-tesler.md':
        "description: \"Loi formulée par Larry Tesler (Xerox, Apple) : tout système possède une complexité irréductible qui ne peut être éliminée, seulement déplacée entre l'utilisateur et le développeur.\"",
    'paradoxe-abilene-en.md':
        'description: "Described by Jerry Harvey (1974): in a group, each person assumes the others approve of an idea and goes along to be polite, leading to a unanimous decision that nobody wanted."',
    'paradoxe-abilene.md':
        "description: \"Décrit par Jerry Harvey (1974) : dans un groupe, chacun suppose que les autres approuvent une idée et valide par politesse, menant à une décision unanime que personne ne souhaitait.\"",
    'principe-peter-en.md':
        'description: "Principle formulated by Laurence J. Peter (1969): in any organization, a competent individual is promoted until reaching a position where they become incompetent and stay."',
    'principe-peter.md':
        "description: \"Principe formulé par Laurence J. Peter (1969) : dans toute organisation, un individu compétent est promu jusqu'au poste où il devient incompétent, où il reste.\"",
}

# Attribution pattern: blockquote ending with — Author, Year
ATTR_RE = re.compile(r'^(>\s*["«“].*["»”]?\s*)—\s*[A-Z][A-Za-zÀ-ÿ\s&,]+\d{4}')

# Parenthetical double em dash: X — phrase — Y → X, phrase, Y
PAREN_RE = re.compile(r' — ([^—]{1,60}?) — ')

# Bold term followed by em dash: **X** — desc
BOLD_RE = re.compile(r'(\*\*[^*]+\*\*)\s*—\s*')


def fix_body_line(line, is_fr):
    if '—' not in line:
        return line

    # Skip attribution blockquotes
    if ATTR_RE.match(line):
        return line

    # Blockquote aphorism (non-attribution)
    if line.startswith('>'):
        sep = ' : ' if is_fr else ': '
        return line.replace(' — ', sep)

    # Parenthetical double em dash  — X —  →  , X,
    line = PAREN_RE.sub(r', \1, ', line)
    if '—' not in line:
        return line

    # Bold term definition: **X** — desc  →  **X** : desc (FR) / **X**: desc (EN)
    if BOLD_RE.search(line):
        repl = r'\1 : ' if is_fr else r'\1: '
        line = BOLD_RE.sub(repl, line, count=1)
        if '—' not in line:
            return line

    # List pattern: "A, B, C — subject"  →  "A, B, C : subject"
    parts = line.split(' — ')
    if len(parts) == 2 and parts[0].count(',') >= 2:
        sep = ' : ' if is_fr else ': '
        return line.replace(' — ', sep, 1)

    # Default: comma
    return line.replace(' — ', ', ')


def process_file(filepath):
    filename = os.path.basename(filepath)
    is_fr = not filename.endswith('-en.md')

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '—' not in content:
        return False

    lines = content.split('\n')
    new_lines = []
    fm_dashes = 0  # count of '---' separators

    for line in lines:
        if line.strip() == '---':
            fm_dashes += 1
            new_lines.append(line)
            continue

        in_fm = (fm_dashes == 1)

        if in_fm:
            if line.startswith('description:') and filename in DESC:
                new_lines.append(DESC[filename])
            else:
                new_lines.append(line)
        else:
            new_lines.append(fix_body_line(line, is_fr))

    new_content = '\n'.join(new_lines)
    if new_content == content:
        return False

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True


updated = 0
for fp in sorted(glob.glob(os.path.join(ILLUSTRATIONS_DIR, '*.md'))):
    if process_file(fp):
        print(f'  ✓ {os.path.basename(fp)}')
        updated += 1

print(f'\n{updated} fichiers mis à jour.')

# Verify no em dashes remain (except in citations)
remaining = []
for fp in sorted(glob.glob(os.path.join(ILLUSTRATIONS_DIR, '*.md'))):
    with open(fp, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f, 1):
            if '—' in line and not ATTR_RE.match(line.rstrip()):
                remaining.append(f'{os.path.basename(fp)}:{i}: {line.rstrip()}')

if remaining:
    print(f'\n⚠ Tirets restants ({len(remaining)}) :')
    for r in remaining:
        print(' ', r)
else:
    print('✅ Aucun tiret cadratin restant (hors citations).')
