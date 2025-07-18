
const courses = [

    { semester 1: "Introducción a la Ciencia Política", id: "intro_cp", prereqs: [], semester: 1 },
    { semester 1: "Expresión Oral y Escrita", id: "expresion", prereqs: [], semester: 1 },
    { semester 1: "Inglés I", id: "ingles1", prereqs: [], semester: 1 },
    { semester 1: "Matemática", id: "matematica", prereqs: [], semester: 1 },
    { semester 1: "Introducción a las Relaciones Internacionales", id: "intro_ri", prereqs: [], semester: 1 },

    { semester 2: "Teoría Política Clásica y Medieval", id: "tp_classic", prereqs: [], semester: 2 },
    { semester 2: "Teoría de las Relaciones Internacionales", id: "tri", prereqs: ["intro_ri"], semester: 2 },
    { semester 2: "Inglés II", id: "ingles2", prereqs: ["ingles1"], semester: 2 },
    { semester 2: "Estadística", id: "estadistica", prereqs: ["matematica"], semester: 2 },
    { semester 2: "Historia Política de Chile", id: "hist_chile", prereqs: [], semester: 2 },
    { semester 2: "Optativo Formación General", id: "opt_fg_1", prereqs: [], semester: 2 },

    { semester 3: "Teoría Política Moderna", id: "tp_mod", prereqs: [], semester: 3 },
    { semester 3: "Sistema Internacional", id: "sistema_int", prereqs: ["tri"], semester: 3 },
    { semester 3: "Gobierno e Instituciones Políticas", id: "gobierno", prereqs: ["intro_cp"], semester: 3 },
    { semester 3: "Métodos Cuantitativos Básicos", id: "mq_basicos", prereqs: ["estadistica"], semester: 3 },
    { semester 3: "Historia Contemporánea de América Latina", id: "hist_latam", prereqs: [], semester: 3 },
    { semester 3: "Optativo Formación Teológica", id: "opt_ft_1", prereqs: [], semester: 3 },

    { semester 4: "Teoría Política Contemporánea", id: "tp_contemp", prereqs: [], semester: 4 },
    { semester 4: "Política Comparada", id: "pol_comp", prereqs: ["gobierno"], semester: 4 },
    { semester 4: "Métodos Cualitativos", id: "m_cualitativos", prereqs: [], semester: 4 },
    { semester 4: "Introducción a la Economía", id: "intro_econ", prereqs: [], semester: 4 },
    { semester 4: "Inglés para Politólogos I", id: "ingles_pol1", prereqs: ["ingles2"], semester: 4 },
    { semester 4: "Optativo Formación Teológica II", id: "opt_ft_2", prereqs: [], semester: 4 },
    { semester 4: "Optativo Formación General II", id: "opt_fg_2", prereqs: [], semester: 4 },
,
    { semester 5: "Derecho Internacional", id: "der_int", prereqs: ["sistema_int"], semester: 5 },
    { semester 5: "Estado: Transformaciones y Roles", id: "estado", prereqs: ["pol_comp"], semester: 5 },
    { semester 5: "Métodos Cuantitativos Avanzados", id: "mq_avanzados", prereqs: ["mq_basicos"], semester: 5 },
    { semester 5: "Taller de Primera Práctica Profesional", id: "practica1", prereqs: ["mq_basicos"], semester: 5 },
    { semester 5: "Escritura Académica para las Ciencias Sociales", id: "escritura", prereqs: [], semester: 5 },

    { semester 6: "Teoría de la Democracia", id: "teoria_demo", prereqs: [], semester: 6 },
    { semester 6: "Economía Política Internacional", id: "epi", prereqs: ["sistema_int"], semester: 6 },
    { semester 6: "Partidos Políticos y Sistemas Electorales", id: "partidos", prereqs: ["pol_comp"], semester: 6 },
    { semester 6: "Inglés para Politólogos II", id: "ingles_pol2", prereqs: ["ingles2", "ingles_pol1"], semester: 6 },
    { semester 6: "Optativo Formación Complementaria I", id: "opt_fc_1", prereqs: [], semester: 6 },

    { semester 7: "Análisis de Política Exterior", id: "ape", prereqs: ["sistema_int"], semester: 7 },
    { semester 7: "Políticas Públicas", id: "pol_pub", prereqs: ["pol_comp"], semester: 7 },
    { semester 7: "Métodos Mixtos", id: "met_mixtos", prereqs: ["mq_basicos"], semester: 7 },
    { semester 7: "Optativo Formación Complementaria II", id: "opt_fc_2", prereqs: [], semester: 7 },
    { semester 7: "Optativo Formación Complementaria III", id: "opt_fc_3", prereqs: [], semester: 7 },

    { semester 8: "Comunicación Política", id: "com_pol", prereqs: [], semester: 8 },
    { semester 8: "Globalización y Cooperación Internacional", id: "globcoop", prereqs: [], semester: 8 },
    { semester 8: "Relaciones Económicas Internacionales", id: "rei", prereqs: [], semester: 8 },
    { semester 8: "Procesos Legislativos", id: "proc_leg", prereqs: [], semester: 8 },
    { semester 8: "Políticas Exteriores Comparadas", id: "pol_ext_comp", prereqs: [], semester: 8 },
    { semester 8: "Gestión Pública", id: "gestion", prereqs: ["pol_pub", "epi"], semester: 8 },
    { semester 8: "Formulación de Proyectos", id: "form_proj", prereqs: ["pol_pub", "epi"], semester: 8 },
    { semester 8: "Taller de Diseño de Investigación", id: "diseno_inv", prereqs: ["mq_avanzados"], semester: 8 },
    { semester 8: "Optativo Formación Complementaria IV", id: "opt_fc_4", prereqs: [], semester: 8 },

    { semester 9: "Ética Política", id: "etica", prereqs: [], semester: 9 },
    { semester 9: "Relaciones Internacionales de Asia Pacífico", id: "asia", prereqs: [], semester: 9 },
    { semester 9: "Seguridad Global y Regional", id: "seguridad", prereqs: [], semester: 9 },
    { semester 9: "Análisis de Políticas Públicas", id: "analisis_pol", prereqs: [], semester: 9 },
    { semester 9: "Análisis y Resolución de Conflictos", id: "conflictos", prereqs: [], semester: 9 },
    { semester 9: "Desarrollo Local y Regional", id: "desarrollo", prereqs: ["pol_pub", "epi"], semester: 9 },
    { semester 9: "Planificación Estratégica", id: "plan_estrategica", prereqs: ["pol_pub", "epi"], semester: 9 },
    { semester 9: "Taller de Memoria de Grado", id: "memoria", prereqs: [], semester: 9 },

    { semester 10: "Prospectiva de Especialización", id: "prospectiva", prereqs: [], semester: 10 },
    { semester 10: "Negociación Internacional", id: "negociacion", prereqs: [], semester: 10 },
    { semester 10: "Análisis Electoral y Comportamiento Político", id: "comportamiento", prereqs: [], semester: 10 },
    { semester 10: "Evaluación de Políticas y Programas", id: "evaluacion", prereqs: ["pol_pub", "epi"], semester: 10 },
    { semester 10: "Práctica Profesional", id: "practica", prereqs: [], semester: 10 }
];

const container = document.getElementById("graph-container");

function loadState() {
    return JSON.parse(localStorage.getItem("completedCourses") || "[]");
}

function saveState(state) {
    localStorage.setItem("completedCourses", JSON.stringify(state));
}


function renderCourses() {
    const completed = loadState();
    container.innerHTML = "";

    const semesters = {};

    courses.forEach(course => {
        if (!semesters[course.semester]) {
            semesters[course.semester] = [];
        }
        semesters[course.semester].push(course);
    });

    Object.keys(semesters).sort((a, b) => a - b).forEach(sem => {
        const semDiv = document.createElement("div");
        semDiv.className = "semester-group";

        const title = document.createElement("h2");
        title.textContent = `Semestre ${sem}`;
        semDiv.appendChild(title);

        const courseGrid = document.createElement("div");
        courseGrid.className = "course-grid";

        semesters[sem].forEach(course => {
            const prereqsMet = course.prereqs.every(p => completed.includes(p));

            const courseDiv = document.createElement("div");
            courseDiv.className = "node";
            courseDiv.textContent = course.name;

            if (completed.includes(course.id)) {
                courseDiv.classList.add("completed");
            } else if (!prereqsMet) {
                courseDiv.style.opacity = "0.4";
                courseDiv.style.pointerEvents = "none";
            }

            courseDiv.addEventListener("click", () => {
                if (completed.includes(course.id)) {
                    const index = completed.indexOf(course.id);
                    completed.splice(index, 1);
                } else {
                    completed.push(course.id);
                }
                saveState(completed);
                renderCourses();
            });

            courseGrid.appendChild(courseDiv);
        });

        semDiv.appendChild(courseGrid);
        container.appendChild(semDiv);
    });
}

renderCourses();

        });

        container.appendChild(courseDiv);
    });
}

renderCourses();

        container.appendChild(courseDiv);
    });
}

renderCourses();
