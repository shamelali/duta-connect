export function jobTypeLabel(type: string): string {
  const map: Record<string, string> = {
    fulltime: "Full-time",
    parttime: "Part-time",
    contract: "Contract",
    freelance: "Freelance",
    internship: "Internship",
  };
  return map[type] ?? type;
}

export function housingTypeLabel(type: string): string {
  const map: Record<string, string> = {
    kos: "Kos",
    apartemen: "Apartemen",
    rumah: "Rumah",
    roommate: "Cari Roommate",
    studio: "Studio",
  };
  return map[type] ?? type;
}

export function eventCategoryLabel(id: string): string {
  const map: Record<string, string> = {
    social: "Social",
    workshop: "Workshop",
    career: "Career",
    sports: "Sports",
    seminar: "Seminar",
    food: "Food",
    webinar: "Webinar",
  };
  return map[id] ?? id;
}
