const data = [
  {
    autor: "inconnu",
    content:
      "L'étoile danse dans l'obscurité, un éclat d'espoir dans la nuit La mer embrasse la rive, une histoire sans fin murmurée à chaque vague. Dans le silence, le cœur écoute des vérités oubliées.Un rayon d'or perce les nuages, la promesse d'un jour meilleur.",
  },

  {
    autor: "inconnu",
    content:
      "L'horizon murmure des rêves que seule l'aube éclaire. Chaque goutte de pluie est une promesse d'un renouveau. L'ombre danse là où la lumière respire. Dans chaque souffle de vent, une histoire se déploie. Les étoiles tissent des constellations de souvenirs oubliés.",
  },

  {
    autor: "inconnu",
    content:
      "Et quand le crépuscule tombe, chaque fin devient un début en secret.",
  },
];

function func() {
  let random = Math.floor(Math.random() * data.length);
  const h3 = document.querySelector("h3");
  const p = document.getElementById("container-citation");

  h3.innerHTML = data[random].autor;
  p.innerHTML = data[random].content;
}

func();
