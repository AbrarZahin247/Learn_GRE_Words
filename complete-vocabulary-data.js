const vocabularyData = [
    {
        word: "Laconic",
        meaning: "Brief and concise in speech or expression",
        example: "Instead of giving a long explanation, the professor's laconic response was simply \"Check page 42.\"",
        notes: [
            "Sparta was known for laconic phrases",
            "\"Just do it\" is a laconic slogan",
            "Similar to: terse, concise",
            "Opposite: verbose"
        ]
    },
    {
        word: "Insipid",
        meaning: "Lacking flavor, interest, or excitement",
        example: "The critic found the movie insipid, noting that its predictable plot and flat characters failed to engage viewers.",
        notes: [
            "An insipid soup needs seasoning",
            "Can describe food or entertainment",
            "Often used in food/art reviews",
            "Similar to: bland, dull"
        ]
    },
    {
        word: "Pragmatic",
        meaning: "Practical and focused on results rather than theories",
        example: "The pragmatic business owner chose to start small and grow gradually rather than taking huge risks.",
        notes: [
            "A pragmatic solution to traffic: carpooling",
            "Pragmatic leaders focus on what works",
            "Often contrasted with \"idealistic\"",
            "Used in business/politics"
        ]
    },
    {
        word: "Iconoclast",
        meaning: "Someone who challenges or opposes traditional beliefs and institutions",
        example: "As an iconoclast in the tech industry, she consistently challenged conventional programming methods.",
        notes: [
            "Steve Jobs was an iconoclast",
            "Originally meant someone who destroyed religious icons",
            "Modern usage: any tradition-challenger",
            "Example: Galileo"
        ]
    },
    {
        word: "Arduous",
        meaning: "Requiring great effort; difficult and tiring",
        example: "The arduous climb to Mount Everest's base camp took the hikers two weeks of challenging trekking.",
        notes: [
            "Medical school is an arduous journey",
            "Can be physical or mental challenge",
            "Marathon training is arduous",
            "Similar to: strenuous"
        ]
    },
    {
        word: "Profligate",
        meaning: "Recklessly wasteful or extravagant",
        example: "The profligate spending of the lottery winner left him bankrupt within just two years.",
        notes: [
            "A profligate lifestyle of luxury cars and parties",
            "Often used in financial contexts",
            "Historical use: morally corrupt",
            "Common in economic discussions"
        ]
    },
    {
        word: "Prosaic",
        meaning: "Dull, ordinary, lacking imagination",
        example: "What could have been an exciting adventure story became prosaic in the hands of an uninspired writer.",
        notes: [
            "A prosaic office routine",
            "Originally meant \"prose-like\"",
            "Opposite of poetic/romantic",
            "Used in literary criticism"
        ]
    },
    {
        word: "Ameliorate",
        meaning: "To make better or improve",
        example: "The new traffic system helped ameliorate the city's congestion problems during rush hour.",
        notes: [
            "Medicine ameliorates symptoms",
            "Social programs ameliorate poverty",
            "Similar to: alleviate, improve",
            "Often used in social/medical contexts"
        ]
    },
    {
        word: "Obsequious",
        meaning: "Excessively eager to please or obey; servile",
        example: "The obsequious waiter kept hovering around the celebrity's table, offering unnecessary assistance.",
        notes: [
            "Think of an overly flattering employee",
            "Often seen as insincere",
            "Similar to: sycophantic",
            "Used negatively"
        ]
    },
    {
        word: "Capricious",
        meaning: "Given to sudden, unpredictable changes",
        example: "Her capricious decision-making style made it difficult for her team to plan long-term projects.",
        notes: [
            "Capricious weather changes",
            "Often describes mood/weather",
            "Similar to: fickle, volatile",
            "From Latin 'caper' (goat)"
        ]
    },
    {
        word: "Fortuitous",
        meaning: "Happening by chance, often with lucky results",
        example: "Their fortuitous meeting at the airport led to a successful business partnership.",
        notes: [
            "A fortuitous discovery in science",
            "Note: Not just \"fortunate\"",
            "Emphasizes chance/accident",
            "Used in scientific contexts"
        ]
    },
    {
        word: "Orthodox",
        meaning: "Following traditional beliefs and practices",
        example: "The orthodox approach to teaching mathematics emphasizes memorization of formulas.",
        notes: [
            "Orthodox religious practices",
            "Orthodox medicine vs. alternative",
            "Can be religious or secular",
            "Opposite: unorthodox"
        ]
    },
    {
        word: "Alacrity",
        meaning: "Cheerful willingness; eager readiness",
        example: "The volunteers responded with alacrity when asked to help with the community project.",
        notes: [
            "Students showing alacrity to learn",
            "Implies both speed and enthusiasm",
            "Often used with \"with\"",
            "Positive connotation"
        ]
    },
    {
        word: "Pellucid",
        meaning: "Crystal clear; easy to understand",
        example: "Her pellucid explanation of quantum physics made complex concepts accessible to beginners.",
        notes: [
            "Pellucid water in a mountain stream",
            "Can be literal (clear) or figurative (understanding)",
            "Similar to: lucid, transparent",
            "Literary usage"
        ]
    },
    {
        word: "Corroborate",
        meaning: "To confirm or support with evidence",
        example: "The witness's testimony corroborated the defendant's alibi.",
        notes: [
            "Scientific evidence corroborates theory",
            "Used in legal/scientific contexts",
            "Similar to: verify, confirm",
            "Needs independent sources"
        ]
    },
    {
        word: "Magnanimous",
        meaning: "Noble and generous in spirit",
        example: "The magnanimous winner shared his prize money with the runners-up.",
        notes: [
            "Shows generosity to competitors",
            "Often used in sports contexts",
            "Similar to: generous, benevolent",
            "Sign of good character"
        ]
    },
    {
        word: "Scrupulous",
        meaning: "Extremely careful and precise; thorough",
        example: "The scrupulous accountant checked each entry three times before submitting the report.",
        notes: [
            "Important in professional work",
            "Shows attention to detail",
            "Similar to: meticulous",
            "Essential in certain jobs"
        ]
    },
    {
        word: "Prolific",
        meaning: "Producing much or producing many; fruitful",
        example: "The prolific author published six bestselling novels in just two years.",
        notes: [
            "Used for creative output",
            "Implies high productivity",
            "Similar to: productive",
            "Common in arts/literature"
        ]
    },
    {
        word: "Dogmatic",
        meaning: "Expressing opinions forcefully as if they were facts",
        example: "The dogmatic professor refused to consider alternative interpretations of the historical event.",
        notes: [
            "Often used negatively",
            "Common in religious contexts",
            "Opposite of open-minded",
            "Can be limiting"
        ]
    },
    {
        word: "Placate",
        meaning: "To make someone less angry or hostile",
        example: "The company tried to placate angry customers by offering full refunds.",
        notes: [
            "Used in conflict resolution",
            "Similar to: appease",
            "Common in business",
            "Temporary solution"
        ]
    },
    {
        word: "Mercurial",
        meaning: "Subject to sudden changes in mood",
        example: "Her mercurial temperament made it difficult for colleagues to predict how she would react to feedback.",
        notes: [
            "Related to personality",
            "Unpredictable nature",
            "Similar to: volatile",
            "From planet Mercury"
        ]
    },
    {
        word: "Exacerbate",
        meaning: "To make worse",
        example: "The harsh criticism only served to exacerbate the situation between the two teams.",
        notes: [
            "Often used with problems",
            "Opposite of ameliorate",
            "Common in medical context",
            "Similar to: aggravate"
        ]
    },
    {
        word: "Redundant",
        meaning: "Unnecessarily repetitive",
        example: "The phrase \"past history\" is redundant since history is always about the past.",
        notes: [
            "Common in writing",
            "Shows inefficiency",
            "Similar to: superfluous",
            "Avoid in formal writing"
        ]
    },
    {
        word: "Hackneyed",
        meaning: "Overused; lacking originality",
        example: "The romance novel was filled with hackneyed phrases like \"love at first sight.\"",
        notes: [
            "Common in criticism",
            "Similar to: cliché",
            "Used in literature",
            "Negative connotation"
        ]
    },
    {
        word: "Prudent",
        meaning: "Wise and careful about practical matters",
        example: "The prudent investor diversified his portfolio to minimize risk.",
        notes: [
            "Financial context",
            "Shows good judgment",
            "Similar to: cautious",
            "Positive trait"
        ]
    },
    {
        word: "Belie",
        meaning: "To contradict or give a false impression",
        example: "Her calm exterior belied her inner turmoil.",
        notes: [
            "Shows contrast",
            "Often surprising",
            "Similar to: contradict",
            "Complex usage"
        ]
    },
    {
        word: "Esoteric",
        meaning: "Understanding by only a select few; obscure",
        example: "The professor's esoteric lecture on ancient philosophy left most students confused.",
        notes: [
            "Specialized knowledge",
            "Limited audience",
            "Similar to: arcane",
            "Academic context"
        ]
    },
    {
        word: "Cacophony",
        meaning: "A harsh mixture of sounds",
        example: "The cacophony of car horns and construction noise made it impossible to concentrate.",
        notes: [
            "Unpleasant sounds",
            "Urban context",
            "Opposite: harmony",
            "Sound description"
        ]
    },
    {
        word: "Impetuous",
        meaning: "Acting without thinking; hasty",
        example: "His impetuous decision to quit his job without another offer proved costly.",
        notes: [
            "Lacks planning",
            "Often regrettable",
            "Similar to: rash",
            "Youth association"
        ]
    },
    {
        word: "Idiosyncrasy",
        meaning: "A peculiar characteristic or habit",
        example: "One of her endearing idiosyncrasies was humming while she worked.",
        notes: [
            "Personal traits",
            "Often harmless",
            "Makes unique",
            "Can be charming"
        ]
    },
    {
        word: "Extant",
        meaning: "Still in existence; surviving",
        example: "These manuscripts are among the few extant copies from the medieval period.",
        notes: [
            "Historical context",
            "Rare items",
            "Similar to: existing",
            "Academic usage"
        ]
    },
    {
        word: "Obscure",
        meaning: "Not well-known; unclear",
        example: "The researcher specialized in studying obscure dialects of ancient languages.",
        notes: [
            "Limited knowledge",
            "Hard to find",
            "Similar to: unknown",
            "Research context"
        ]
    },
    {
        word: "Didactic",
        meaning: "Intended to teach; instructive",
        example: "The didactic nature of the documentary made it perfect for classroom use.",
        notes: [
            "Educational purpose",
            "Teaching focus",
            "Can be boring",
            "Academic term"
        ]
    },
    {
        word: "Pithy",
        meaning: "Brief but meaningful and forceful",
        example: "Her pithy comment \"less is more\" perfectly summarized the design philosophy.",
        notes: [
            "Concise wisdom",
            "Similar to: succinct",
            "Effective communication",
            "Valued in writing"
        ]
    },
    {
        word: "Copious",
        meaning: "Abundant; in large quantity",
        example: "The researcher took copious notes during the experiment.",
        notes: [
            "Large amount",
            "Often positive",
            "Similar to: plentiful",
            "Research context"
        ]
    },
    {
        word: "Ostentation",
        meaning: "Pretentious display meant to impress",
        example: "The billionaire's ostentation in buying gold-plated cars drew public criticism.",
        notes: [
            "Show of wealth",
            "Often negative",
            "Similar to: showiness",
            "Social criticism"
        ]
    },
    {
        word: "Adulterate",
        meaning: "To make impure by adding inferior materials",
        example: "Some dishonest vendors adulterate olive oil with cheaper vegetable oils.",
        notes: [
            "Food context",
            "Fraudulent act",
            "Similar to: contaminate",
            "Legal issue"
        ]
    },
    {
        word: "Vociferous",
        meaning: "Loud and forceful",
        example: "The vociferous protests outside city hall could be heard blocks away.",
        notes: [
            "Strong expression",
            "Public context",
            "Similar to: clamorous",
            "Often protests"
        ]
    },
    {
        word: "Taciturn",
        meaning: "Tending to be quiet; reserved",
        example: "The taciturn shopkeeper rarely engaged in small talk with customers.",
        notes: [
            "Personality trait",
            "Not social",
            "Similar to: reserved",
            "Can be mistaken"
        ]
    },
    {
        word: "Obdurate",
        meaning: "Stubbornly refusing to change one's opinion",
        example: "Despite clear evidence, the obdurate politician refused to admit his mistake.",
        notes: [
            "Strong-willed",
            "Often negative",
            "Similar to: stubborn",
            "Political context"
        ]
    },
    {
        word: "Garrulous",
        meaning: "Excessively talkative",
        example: "The garrulous passenger talked throughout the entire flight.",
        notes: [
            "Social context",
            "Can be annoying",
            "Similar to: chatty",
            "Personality trait"
        ]
    },
    {
        word: "Misanthrope",
        meaning: "Person who dislikes and avoids other people",
        example: "The misanthrope lived alone in a remote cabin, avoiding all human contact.",
        notes: [
            "Social attitude",
            "Extreme behavior",
            "Similar to: hermit",
            "Psychological term"
        ]
    },
    {
        word: "Lionize",
        meaning: "To treat as a celebrity",
        example: "The media tends to lionize young tech entrepreneurs.",
        notes: [
            "Fame context",
            "Often temporary",
            "Similar to: idolize",
            "Media term"
        ]
    },
    {
        word: "Imminent",
        meaning: "About to happen",
        example: "With dark clouds gathering, rain seemed imminent.",
        notes: [
            "Near future",
            "Often used for warnings",
            "Similar to: impending",
            "Time-sensitive"
        ]
    },
    {
        word: "Frivolous",
        meaning: "Not serious; silly",
        example: "The court dismissed the frivolous lawsuit as a waste of time.",
        notes: [
            "Lacks seriousness",
            "Often negative",
            "Similar to: trivial",
            "Legal context"
        ]
    },
    {
        word: "Benign",
        meaning: "Gentle and kindly; not harmful",
        example: "The tumor proved to be benign, causing great relief to the patient.",
        notes: [
            "Medical context",
            "Positive outcome",
            "Similar to: harmless",
            "Opposite: malignant"
        ]
    },
    {
        word: "Dissonance",
        meaning: "Lack of harmony; conflict",
        example: "There was clear dissonance between the company's environmental claims and its actions.",
        notes: [
            "Conflict context",
            "Musical origin",
            "Similar to: discord",
            "Psychology term"
        ]
    },
    {
        word: "Inculpate",
        meaning: "To accuse or blame",
        example: "The evidence seemed to inculpate both the manager and his assistant in the fraud.",
        notes: [
            "Legal context",
            "Blame assignment",
            "Similar to: implicate",
            "Formal usage"
        ]
    },
    {
        word: "Docile",
        meaning: "Easily taught or managed; obedient",
        example: "The usually docile cat became aggressive when threatened.",
        notes: [
            "Behavior trait",
            "Often animals",
            "Similar to: compliant",
            "Can be positive"
        ]
    },
    {
        word: "Sporadic",
        meaning: "Occurring at irregular intervals",
        example: "The printer's sporadic malfunctions made it unreliable for important jobs.",
        notes: [
            "Time pattern",
            "Unpredictable",
            "Similar to: intermittent",
            "Technical context"
        ]
    },
    {
        word: "Prevaricate",
        meaning: "To avoid telling the truth; to lie",
        example: "When asked about the missing funds, the treasurer began to prevaricate.",
        notes: [
            "Dishonesty",
            "Evasive behavior",
            "Similar to: equivocate",
            "Formal term"
        ]
    },
    {
        word: "Chicanery",
        meaning: "Trickery or deception",
        example: "The company's financial chicanery eventually led to its downfall.",
        notes: [
            "Deceptive practice",
            "Often business",
            "Similar to: trickery",
            "Legal context"
        ]
    },
    {
        word: "Gainsay",
        meaning: "To deny or contradict",
        example: "No one could gainsay the positive impact of the new policy.",
        notes: [
            "Formal disagreement",
            "Strong opposition",
            "Similar to: deny",
            "Archaic usage"
        ]
    },
    {
        word: "Eulogy",
        meaning: "Speech of praise, especially for the deceased",
        example: "His moving eulogy captured his father's spirit and achievements.",
        notes: [
            "Funeral context",
            "Memorial speech",
            "Similar to: tribute",
            "Emotional content"
        ]
    },
    {
        word: "Belligerent",
        meaning: "Hostile and aggressive",
        example: "The belligerent customer refused to leave despite the staff's polite requests.",
        notes: [
            "Aggressive behavior",
            "Conflict situation",
            "Similar to: hostile",
            "Often negative"
        ]
    },
    {
        word: "Dispassionate",
        meaning: "Not influenced by emotion; impartial",
        example: "The judge maintained a dispassionate approach throughout the controversial trial.",
        notes: [
            "Professional context",
            "Objective view",
            "Similar to: neutral",
            "Valued trait"
        ]
    },
    {
        word: "Providential",
        meaning: "Lucky; occurring at a favorable time",
        example: "Their providential discovery of water saved the expedition.",
        notes: [
            "Lucky timing",
            "Divine providence",
            "Similar to: fortunate",
            "Positive outcome"
        ]
    },
    {
        word: "Diffidence",
        meaning: "Shyness; lack of confidence",
        example: "Her diffidence in social situations masked her brilliant mind.",
        notes: [
            "Personality trait",
            "Social context",
            "Similar to: timidity",
            "Can limit success"
        ]
    },
    {
        word: "Fractious",
        meaning: "Irritable; unruly",
        example: "The fractious toddler refused to follow any of the daycare rules.",
        notes: [
            "Difficult behavior",
            "Often children",
            "Similar to: unruly",
            "Temporary state"
        ]
    },
    {
        word: "Malign",
        meaning: "Evil or harmful",
        example: "The malign effects of pollution on marine life are well-documented.",
        notes: [
            "Negative impact",
            "Harmful intent",
            "Similar to: harmful",
            "Environmental context"
        ]
    },
    {
        word: "Disparate",
        meaning: "Fundamentally different",
        example: "The committee brought together experts from disparate fields to solve the problem.",
        notes: [
            "Difference focus",
            "Often groups",
            "Similar to: diverse",
            "Professional context"
        ]
    },
    {
        word: "Plausible",
        meaning: "Seemingly reasonable or probable",
        example: "His explanation for being late seemed plausible given the weather conditions.",
        notes: [
            "Believability",
            "Not certain",
            "Similar to: credible",
            "Daily usage"
        ]
    },
    {
        word: "Sanguine",
        meaning: "Optimistic; positive",
        example: "Despite the challenges, she remained sanguine about the project's success.",
        notes: [
            "Positive outlook",
            "Personality trait",
            "Similar to: optimistic",
            "Professional context"
        ]
    },
    {
        word: "Venerate",
        meaning: "To regard with great respect",
        example: "Many cultures venerate their ancestors through various traditions.",
        notes: [
            "Deep respect",
            "Cultural context",
            "Similar to: revere",
            "Religious usage"
        ]
    },
    {
        word: "Trite",
        meaning: "Lacking originality",
        example: "The graduation speech was full of trite phrases about \"following your dreams.\"",
        notes: [
            "Overused ideas",
            "Writing context",
            "Similar to: hackneyed",
            "Negative critique"
        ]
    },
    {
        word: "Succinct",
        meaning: "Brief and clear",
        example: "Her succinct email contained just the essential information.",
        notes: [
            "Communication style",
            "Professional value",
            "Similar to: concise",
            "Often praised"
        ]
    },
    {
        word: "Ingenious",
        meaning: "Clever and original",
        example: "The engineer's ingenious solution saved both time and money.",
        notes: [
            "Creative thinking",
            "Problem solving",
            "Similar to: brilliant",
            "Positive trait"
        ]
    },
    {
        word: "Meticulous",
        meaning: "Extremely careful about details",
        example: "The meticulous researcher double-checked every calculation.",
        notes: [
            "Attention to detail",
            "Professional quality",
            "Similar to: thorough",
            "Valued trait"
        ]
    },
    {
        word: "Erudite",
        meaning: "Having or showing great knowledge",
        example: "The erudite professor could speak knowledgeably about any historical period.",
        notes: [
            "Academic context",
            "Scholarly trait",
            "Similar to: learned",
            "Intellectual respect"
        ]
    },
    {
        word: "Bolster",
        meaning: "To support or strengthen",
        example: "The new evidence helped bolster the prosecution's case.",
        notes: [
            "Support context",
            "Strengthening",
            "Similar to: reinforce",
            "Common usage"
        ]
    },
    {
        word: "Anachronism",
        meaning: "Something out of its proper historical time",
        example: "Using a smartphone in a period drama would be an anachronism.",
        notes: [
            "Historical error",
            "Time context",
            "Similar to: misplaced",
            "Literary term"
        ]
    },
    {
        word: "Trivial",
        meaning: "Of little importance",
        example: "What seemed like a trivial decision proved to be life-changing.",
        notes: [
            "Minor importance",
            "Often dismissed",
            "Similar to: insignificant",
            "Common usage"
        ]
    },
    {
        word: "Advocate",
        meaning: "One who supports or promotes a cause",
        example: "She became a passionate advocate for environmental protection.",
        notes: [
            "Active support",
            "Cause-driven",
            "Similar to: champion",
            "Political context"
        ]
    }
];