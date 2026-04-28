#!/usr/bin/env python3
"""Rewrite bullet-list examples sections to bold-paragraph style."""

import re, os, glob

DIR = '/Users/christophe/github/Perso/christophe.heubes.com/_illustrations'

# New content for each examples section (no leading/trailing newline)
NEW_EXAMPLES = {

'biais-disponibilite.md': """\
**Terrorisme et aviation** : après un attentat médiatisé, les gens évitent l'avion, alors que la voiture est statistiquement bien plus dangereuse.

**Assurance catastrophe** : les assureurs vendent massivement des polices contre les catastrophes naturelles après un tremblement de terre, et beaucoup moins avant.

**Gestion de projet** : les managers qui ont vécu un projet en retard récent surestiment le risque de retard dans leurs prévisions futures.

**L'effet loterie** : les gagnants à la une des journaux rendent les gains plus disponibles mentalement, gonflant le nombre de billets achetés.""",

'biais-disponibilite-en.md': """\
**Terrorism and air travel**: after a publicized attack, people avoid flying, even though driving is statistically far more dangerous.

**Disaster insurance**: insurers sell surge policies against natural disasters after an earthquake, and far fewer before one.

**Project management**: managers who recently experienced a delayed project overestimate the risk of delay in future estimates.

**The lottery effect**: winners featured in newspapers make gains more mentally available, inflating ticket purchases.""",

'biais-retrospection.md': """\
**Crash boursier** : « Tout le monde voyait que ça allait s'effondrer. » Une certitude rétrospective qui efface l'incertitude réelle de l'époque.

**Victoire électorale** : « Avec un candidat comme ça, le résultat ne faisait aucun doute. » Pourtant, personne ne l'annonçait avec certitude avant le scrutin.

**Bug en production** : « On aurait dû tester ce cas de toute façon. » Mais ce cas n'était pas évident avant que le bug se produise.

**Accident industriel** : après un accident, les enquêteurs sous-estiment à quel point les signaux d'alerte étaient ambigus avant l'événement.""",

'biais-retrospection-en.md': """\
**Stock market crash**: "Everyone could see it was going to collapse." A retrospective certainty that erases the genuine uncertainty of the time.

**Election result**: "With a candidate like that, the result was never in doubt." Yet nobody announced it with confidence before the vote.

**Production bug**: "We should have tested that case anyway." But the case was not obvious before the bug occurred.

**Industrial accident**: after the fact, investigators underestimate how ambiguous the warning signals were before the event.""",

'effet-cobra.md': """\
**Cobras en Inde** : prime pour cobras morts, élevage de cobras en réponse, libération massive à l'annulation du programme.

**Quotas de rats au Vietnam** : prime pour queues de rats apportées, les habitants coupaient les queues et relâchaient les rats vivants pour continuer à en produire.

**Métriques de performance** : des objectifs chiffrés (nombre d'appels traités, taux de clôture de tickets) poussent à optimiser le chiffre au détriment du service réel.

**Tests scolaires standardisés** : les enseignants « préparent aux tests » plutôt qu'à la compréhension profonde.""",

'effet-cobra-en.md': """\
**Cobras in India**: bounty for dead cobras, cobra farming in response, mass release upon programme cancellation.

**Rat tails in Vietnam**: bounty for rat tails brought in, rats had their tails cut off and were released alive to keep producing more.

**Performance metrics**: KPIs on number of calls handled or ticket closure rates push agents to optimize the number rather than the quality of resolution.

**Standardized school tests**: teachers "teach to the test" rather than for deep understanding.""",

'effet-halo.md': """\
**Entretien d'embauche** : un candidat bien habillé est jugé plus intelligent, indépendamment de ses réponses.

**Apple** : les produits de la marque sont perçus comme plus fiables et innovants qu'un concurrent équivalent, grâce au halo de la marque.

**Évaluation enseignante** : un enseignant apprécié pour sa personnalité reçoit de meilleures évaluations sur la qualité de son contenu.

**PDG charismatique** : supposé avoir une excellente vision stratégique, biais régulièrement exposé lors de scandales d'entreprise.""",

'effet-halo-en.md': """\
**Job interview**: a well-dressed candidate is judged as more intelligent, regardless of their answers.

**Apple**: products from the brand are perceived as more reliable and innovative than equivalent competitors, thanks to brand halo.

**Teacher evaluation**: a teacher liked for their personality receives better evaluations of their content quality.

**Charismatic CEO**: assumed to have excellent strategic vision, a bias regularly exposed during corporate scandals.""",

'effet-ringelmann.md': """\
**Projet de 12 personnes** : 3 ou 4 membres font la majorité du travail, les autres s'appuient tacitement sur leur implication.

**Réunions plénières** : dans une réunion de 20 participants, seules 3 ou 4 voix s'expriment réellement.

**Projets créatifs** : le phénomène « too many cooks » illustre comment la multiplication des contributeurs dilue la cohérence du résultat.

**Comités d'entreprise ou parlementaires** : la responsabilité diluée mène à l'inaction structurelle.""",

'effet-ringelmann-en.md': """\
**12-person project**: 3 or 4 members do the majority of the work, with others quietly free-riding on their involvement.

**Large meetings**: in a meeting of 20 attendees, only 3 or 4 voices actually speak.

**Creative projects**: the "too many cooks" phenomenon illustrates how multiplying contributors dilutes coherence.

**Corporate or parliamentary committees**: diffused responsibility leads to structural inaction.""",

'fenetre-overton.md': """\
**Mariage homosexuel** : impensable dans les années 1980, radical dans les années 1990, acceptable dans les années 2000, et loi dans de nombreux pays dans les années 2010.

**Revenu universel de base** : idée marginale dans les années 1990, il est aujourd'hui expérimenté dans plusieurs pays.

**Mesures de crise** : des propositions économiques jugées extrêmes en temps normal, comme la nationalisation d'entreprises ou les dépenses de guerre, deviennent acceptables lors de crises.""",

'fenetre-overton-en.md': """\
**Same-sex marriage**: unthinkable in the 1980s, radical in the 1990s, acceptable in the 2000s, and law in many countries in the 2010s.

**Universal basic income**: a fringe idea in the 1990s, it is now being piloted in several countries.

**Crisis measures**: economic proposals deemed extreme in normal times, such as nationalization or wartime spending, become acceptable during crises.""",

'loi-brooks.md': """\
**Projet web en retard** : 4 développeurs ajoutés la dernière semaine aboutissent à une livraison avec encore 4 semaines de retard supplémentaires.

**Migrations de systèmes** : les grands projets SAP ou ERP sont réputés pour leurs dépassements malgré des effectifs croissants.

**L'escalade de ressources** : en consulting, plus d'interlocuteurs signifie plus de réunions de coordination, et donc moins de code produit.""",

'loi-brooks-en.md': """\
**Late web project**: adding 4 developers in the last week results in delivery with 4 additional weeks of delay.

**System migrations**: large SAP or ERP projects are notorious for overruns despite growing headcount.

**Resource escalation**: in consulting, more stakeholders means more coordination meetings and less code written.""",

'loi-gall.md': """\
**Internet** : né comme ARPANET (4 nœuds en 1969), a évolué progressivement vers le réseau mondial actuel.

**Unix** : construit autour de petits outils simples et combinables, à l'opposé des systèmes monolithiques de l'époque.

**Grands projets IT** : les méga-systèmes conçus tout d'un bloc (Louvois, Chorus, certains ERP) ont des taux d'échec élevés.

**Biologie** : les organismes complexes ont évolué depuis des formes simples sur des milliards d'années.""",

'loi-gall-en.md': """\
**The Internet**: born as ARPANET (4 nodes in 1969), gradually evolved into the global network.

**Unix**: built around small, simple, composable tools, the opposite of the monolithic systems of its era.

**Large IT projects**: mega-systems designed all at once (healthcare systems, national registries, large ERP rollouts) have high failure rates.

**Biology**: complex organisms evolved from simple forms over billions of years.""",

'loi-hyrum.md': """\
**Google et les API** : des comportements involontaires ont été maintenus pendant des années parce que des milliers de développeurs en dépendaient.

**Python 2 vers Python 3** : la migration a duré plus d'une décennie à cause de dépendances sur des comportements « accidentels » de Python 2.

**Capitalisation d'un champ JSON** : un service interne le corrige, et des dizaines de consumers qui font une comparaison case-sensitive cassent en production.

**Bug de performance devenu fonctionnalité** : des utilisateurs ont calibré leurs timeout sur le temps de réponse « cassé ». Le corriger les casse.""",

'loi-hyrum-en.md': """\
**Google and APIs**: unintentional behaviors were maintained for years because thousands of developers depended on them.

**Python 2 to Python 3**: the migration took over a decade due to dependencies on "accidental" Python 2 behaviors.

**JSON field capitalization**: an internal service fixes it, and dozens of consumers doing case-sensitive comparisons break in production.

**Performance bug as feature**: users calibrated their timeouts on the "broken" response time. Fixing it breaks them.""",

'loi-kerr.md': """\
**Finance** : on récompense la performance à court terme (bonus annuels) tout en espérant une gestion prudente du risque à long terme.

**Médecine** : certains systèmes paient à l'acte (consultation, examen) plutôt qu'à la santé du patient, encourageant les actes superflus.

**Support client** : un KPI sur le temps moyen de traitement pousse les agents à résoudre vite plutôt que bien.

**Startups** : des métriques de croissance (MAU, GMV) récompensées au détriment de la qualité produit ou de la marge.""",

'loi-kerr-en.md': """\
**Finance**: short-term performance is rewarded (annual bonuses) while hoping for prudent long-term risk management.

**Medicine**: some systems pay per act (consultation, exam) rather than for patient health, encouraging unnecessary procedures.

**Customer support**: a KPI on average handling time pushes agents to resolve fast rather than well.

**Startups**: growth metrics (MAU, GMV) rewarded at the expense of product quality or margin.""",

'loi-metcalfe.md': """\
**Téléphone** : inutile seul, précieux à deux, indispensable quand tout le monde l'a.

**Fax** : a explosé non pas quand il est devenu meilleur, mais quand assez d'entreprises l'avaient.

**WhatsApp, Facebook, LinkedIn** : leur valeur principale est le réseau lui-même, pas les fonctionnalités.

**Protocoles ouverts** (SMTP, HTTP) : leur universalité est leur valeur. Un standard adopté par tous vaut infiniment plus qu'un standard supérieur mais peu adopté.""",

'loi-metcalfe-en.md': """\
**Telephone**: useless alone, valuable for two, indispensable when everyone has one.

**Fax**: exploded not when it became better, but when enough companies had one.

**WhatsApp, Facebook, LinkedIn**: their primary value is the network itself, not the features.

**Open protocols** (SMTP, HTTP): their universality is their value. A standard adopted by all is worth infinitely more than a superior standard adopted by few.""",

'paradoxe-abilene.md': """\
**Plan de lancement** : une équipe valide unanimement un plan irréaliste, alors que chaque membre en privé le trouvait trop ambitieux.

**Conseil d'administration** : un conseil approuve une acquisition coûteuse que tous ses membres trouvaient surévaluée.

**Choix de restaurant** : des amis acceptent tous un restaurant dont aucun ne voulait, chacun pensant que c'était le choix des autres.

**Projets IT en dérive** : des projets continuent malgré l'évidence de leur échec, car personne n'ose être le premier à le dire.""",

'paradoxe-abilene-en.md': """\
**Launch plan**: a team unanimously approves an unrealistic plan, even though each member privately found it too ambitious.

**Board decision**: a board approves a costly acquisition that all its members privately considered overvalued.

**Restaurant choice**: friends all agree on a restaurant nobody wanted, each thinking it was the others' choice.

**Failing IT projects**: projects continue despite obvious failure, because nobody dares be the first to say so.""",

'principe-peter.md': """\
**L'enseignant promu proviseur** : brillant devant ses élèves, il se révèle piètre gestionnaire administratif.

**Le commercial promu directeur des ventes** : performant sur le terrain, il est paralysé par les tâches administratives et la gestion d'équipe.

**L'ingénieur senior promu chef de projet** : expert technique, il n'a aucun goût pour la coordination humaine.

**Les filières « expert »** : la création de postes Staff Engineer ou Principal Engineer dans les organisations tech est une réponse directe au principe de Peter, pour garder les meilleurs sans les forcer vers le management.""",

'principe-peter-en.md': """\
**The promoted teacher**: brilliant in the classroom, they prove a poor administrator as principal.

**The promoted salesperson**: high-performing in the field, they are paralyzed by administrative tasks and team management as sales director.

**The promoted engineer**: a technical expert, they have no taste for human coordination as project manager.

**Expert career tracks**: the creation of Staff Engineer and Principal Engineer roles in tech organizations is a direct response to the Peter Principle, keeping top performers without forcing them into management.""",

'principe-postel.md': """\
**Navigateurs web** : Chrome et Firefox affichent du HTML invalide sans erreur, libéraux à l'entrée.

**Serveurs HTTP** : ils renvoient des réponses strictement formatées selon les RFC, conservateurs à la sortie.

**Parsers JSON** : les implémentations modernes acceptent des virgules trailing ou des commentaires, même si le standard JSON les interdit.

**Clients email** : ils acceptent des emails malformés en entrée, mais n'envoient que des messages RFC-conformes.""",

'principe-postel-en.md': """\
**Web browsers**: Chrome and Firefox display invalid HTML without error, liberal at input.

**HTTP servers**: they return strictly formatted responses per RFC, conservative at output.

**JSON parsers**: modern implementations accept trailing commas or comments, even though the JSON standard forbids them.

**Email clients**: they accept malformed emails at input, but only send RFC-compliant messages.""",

}

SECTION_RE = re.compile(
    r'(## (?:Exemples concrets|Concrete examples)\n)(.+?)(\n(?=##)|\Z)',
    re.DOTALL
)

updated = 0
for filename, new_body in NEW_EXAMPLES.items():
    fp = os.path.join(DIR, filename)
    with open(fp) as f:
        content = f.read()

    def replacer(m):
        return m.group(1) + '\n' + new_body + '\n'

    new_content = SECTION_RE.sub(replacer, content)

    if new_content == content:
        print(f'  SKIP (no change): {filename}')
        continue

    with open(fp, 'w') as f:
        f.write(new_content)
    print(f'  ✓ {filename}')
    updated += 1

print(f'\n{updated} fichiers mis à jour.')

# Verify no bullet lists remain in examples sections
remaining = []
for fp in sorted(glob.glob(os.path.join(DIR, '*.md'))):
    name = os.path.basename(fp)
    with open(fp) as f:
        content = f.read()
    body = content.split('---', 2)[2]
    m = re.search(r'## (?:Exemples concrets|Concrete examples)\n(.*?)(?=\n##|\Z)', body, re.DOTALL)
    if m and re.search(r'^\s*-\s+', m.group(1), re.MULTILINE):
        remaining.append(name)

if remaining:
    print(f'\n⚠ Bullet lists still present in: {remaining}')
else:
    print('✅ No bullet lists remain in any examples section.')
