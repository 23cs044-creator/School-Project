const schoolData = {
  students: [],
  teachers: [],
  admissions: []
};

self.onmessage = (e) => {
  const { type, section, payload } = e.data;

  if (!schoolData[section]) return;

  switch (type) {
    case "INSERT":
      schoolData[section].push(payload);
      break;
    case "UPDATE":
      schoolData[section][payload.index] = payload.value;
      break;
    case "DELETE":
      schoolData[section].splice(payload, 1);
      break;
    default:
      break;
  }

  self.postMessage(schoolData[section]);
};
