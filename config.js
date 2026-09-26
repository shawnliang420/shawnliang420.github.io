/* ============================================================
   All the words on the site live here. Edit this file directly,
   or open admin.html, fill in the form, and download a new copy.
   ============================================================ */
window.SITE = {
  "name": "Shaofeng Liang",
  "portrait": "photo/portrait_web.jpg",
  "email": "sliang@connect.hkust-gz.edu.cn",
  "lede": "PhD student at {school}, Intelligent Transportation thrust, advised by {advisor}. I work on **guide-dog robots that share perception with the person they lead**, and before that on how drones see and follow things. I also draw every figure in my papers.",
  "school":  { "name": "HKUST (Guangzhou)", "url": "https://hkust-gz.edu.cn", "logo": "photo/hkust.png" },
  "advisor": { "name": "Prof. Yutao Yue", "url": "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue" },
  "links": [
    { "label": "Google Scholar", "url": "https://scholar.google.com/citations?user=_xogWXUAAAAJ&hl=zh-CN" },
    { "label": "GitHub", "url": "https://github.com/shawnliang420" },
    { "label": "DBLP", "url": "https://dblp.org/pid/397/1364.html" },
    { "label": "ORCID", "url": "https://orcid.org/0009-0005-8134-2188" }
  ],

  "news": {
    "kicker": "News",
    "heading": "Recently",
    "show": 4,
    "items": [
      { "date": "Sep 2026", "text": "Started the PhD at HKUST (Guangzhou), Systems Hub, working on the guide-dog robot project." },
      { "date": "Jul 2026", "text": "Referring multi-object tracking paper with RGB-D submitted." },
      { "date": "May 2026", "text": "Multi-drone collaborative tracking paper accepted." },
      { "date": "Jan 2026", "text": "Released the altitude-aware tracker code and the figure sources." }
    ]
  },

  "research": {
    "kicker": "Research",
    "heading": "A guide-dog robot that shares one body with the person it leads.",
    "lede": "Human-robot isomorphism treats the person and the robot as a single agent: one safety space, one model of intent, and decisions the person can follow.",
    "category": "Main topic",
    "title": "Human-robot isomorphic guide-dog robot",
    "description": "A quadruped that walks with a visually impaired person through a city. Instead of navigating for the person, it senses what they cannot, models what they intend, and intervenes as little as possible, so the pair moves as one body.",
    "figure": "figures/fig13.png"
  },

  "papers": {
    "kicker": "Publications",
    "heading": "Papers",
    "show": 5,
    "items": [
      { "title": "Referring multi-object tracking with RGB-D: a dataset and a depth-aware baseline",
        "authors": "Shaofeng Liang, Sijia Chen, Yutao Yue", "venue": "Under review, 2026", "thumb": "figures/fig06.png",
        "links": [ { "label": "PDF", "url": "#" }, { "label": "Code", "url": "#" } ] },
      { "title": "Cross-view association for multi-drone collaborative tracking",
        "authors": "Shaofeng Liang, Coauthor One, Coauthor Three", "venue": "Conference, 2026", "thumb": "figures/fig04.png",
        "links": [ { "label": "PDF", "url": "#" }, { "label": "Code", "url": "#" }, { "label": "Project", "url": "#" } ] },
      { "title": "Altitude-aware single-object tracking for UAV video",
        "authors": "Shaofeng Liang, Coauthor One, Coauthor Two", "venue": "Journal, 2025", "thumb": "figures/fig01.png",
        "links": [ { "label": "PDF", "url": "#" }, { "label": "Code", "url": "#" } ] },
      { "title": "Referring object tracking from the air",
        "authors": "Shaofeng Liang, Coauthor Two, Coauthor Four", "venue": "Conference, 2025", "thumb": "figures/fig12.png",
        "links": [ { "label": "PDF", "url": "#" } ] },
      { "title": "Speed and accuracy trade-offs for embedded aerial trackers",
        "authors": "Coauthor One, Shaofeng Liang, Coauthor Two", "venue": "Workshop, 2025", "thumb": "figures/fig11.png",
        "links": [ { "label": "PDF", "url": "#" } ] },
      { "title": "A multi-drone tracking dataset with cross-view identities",
        "authors": "Shaofeng Liang, Coauthor Three", "venue": "Journal, 2024", "thumb": "figures/fig09.png",
        "links": [ { "label": "PDF", "url": "#" }, { "label": "Data", "url": "#" } ] }
    ]
  },

  "figures": {
    "kicker": "Selected figures",
    "show": 8,
    "heading": "The figures I'm proudest of.",
    "lede": "Every figure in my papers is drawn by me. A few favourites, drifting by. Click any of them to see it at full size.",
    "items": [
      { "src": "figures/fig04.png", "label": "Fig. 1", "caption": "Three drones observe the same target from different altitudes and headings; dashed lines are the association edges the model recovers.", "source": "Multi-drone tracking, 2026", "tool": "Figma", "url": "#" },
      { "src": "figures/fig01.png", "label": "Fig. 2", "caption": "Overview of the altitude-aware tracker. A scale prior conditioned on altitude and ground sampling distance steers the cross-attention.", "source": "Altitude-aware tracking, 2025", "tool": "Figma", "url": "#" },
      { "src": "figures/fig07.png", "label": "Fig. 8", "caption": "Attention over time. The grounded fusion block keeps attending to the referent as it moves and shrinks.", "source": "Referring tracking, 2026", "tool": "matplotlib", "url": "#" },
      { "src": "figures/fig03.png", "label": "Fig. 5", "caption": "Success and precision plots of one-pass evaluation on the UAV benchmark.", "source": "Altitude-aware tracking, 2025", "tool": "matplotlib", "url": "#" },
      { "src": "figures/fig06.png", "label": "Fig. 3", "caption": "Referring tracking architecture. Visual and language streams meet in a grounded fusion block; temporal memory keeps the referent through the sequence.", "source": "Referring tracking, 2026", "tool": "Figma", "url": "#" },
      { "src": "figures/fig02.png", "label": "Fig. 6", "caption": "Qualitative comparison on a sequence with fast altitude change. Red is ours, blue the baseline, dashed white the ground truth.", "source": "Altitude-aware tracking, 2025", "tool": "matplotlib", "url": "#" },
      { "src": "figures/fig11.png", "label": "Fig. 10", "caption": "Speed against accuracy on an embedded GPU. The light variant stays real-time with a small loss in AUC.", "source": "Altitude-aware tracking, 2025", "tool": "matplotlib", "url": "#" },
      { "src": "figures/fig12.png", "label": "Fig. 1", "caption": "Referring expressions and the targets they pick out. Dashed boxes are distractors of the same category.", "source": "Referring tracking, 2026", "tool": "Figma + matplotlib", "url": "#" },
      { "src": "figures/fig10.png", "label": "Fig. 6", "caption": "Identity consistency across three drones. Each row is one drone, each column one moment; colours are identities.", "source": "Multi-drone tracking, 2026", "tool": "matplotlib", "url": "#" },
      { "src": "figures/fig08.png", "label": "Fig. 9", "caption": "Attribute-wise AUC. The largest margins are under scale variation and low resolution.", "source": "Altitude-aware tracking, 2025", "tool": "matplotlib", "url": "#" }
    ],
    "offer": {
      "category": "Figures for your paper",
      "title": "Drawing figures is the part of research I enjoy most.",
      "description": "I also draw for other people's papers: pipeline diagrams, result plates, and plots that read at a glance. If yours needs one, send me the draft and the deadline and we can work it out together.",
      "button": "Ask about a figure"
    }
  },

  "collaborators": {
    "kicker": "Collaborators",
    "heading": "People I work with",
    "show": 8,
    "items": [
      { "name": "Yutao Yue", "affiliation": "HKUST (Guangzhou), advisor", "url": "#" },
      { "name": "Sijia Chen", "affiliation": "Huazhong University of Science and Technology", "url": "#" },
      { "name": "Collaborator name", "affiliation": "Affiliation", "url": "#" },
      { "name": "Collaborator name", "affiliation": "Affiliation", "url": "#" },
      { "name": "Collaborator name", "affiliation": "Affiliation", "url": "#" },
      { "name": "Collaborator name", "affiliation": "Affiliation", "url": "#" }
    ]
  },

  "footer": {
    "slogan": "Leave the barriers behind. Keep the road ahead.",
    "sloganZh": "让障碍留在过去，让路留给未来。",
    "location": "Systems Hub, HKUST (Guangzhou), Nansha",
    "note": "Figures on this page are drawn by me and free to reuse with attribution.",
    "copyright": "© 2026 Shaofeng Liang"
  }
};
