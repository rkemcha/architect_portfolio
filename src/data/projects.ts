export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  year: string;
  location: string;
  scope: string;
  thumbnail: string;
  images: string[];
}

export const projectsData: Project[] = [
  {
    id: "casa-branca",
    index: "01.",
    title: "Casa Branca",
    description: "A minimalist residential retreat blending concrete and natural light.",
    year: "2023",
    location: "Lisbon, Portugal",
    scope: "Architecture, Interior Design",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "horizon-pavilion",
    index: "02.",
    title: "Horizon Pavilion",
    description: "A temporary exhibition space redefining public engagement.",
    year: "2024",
    location: "Paris, France",
    scope: "Public Space, Architecture",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "the-monolith",
    index: "03.",
    title: "The Monolith",
    description: "Corporate headquarters emphasizing solid forms and brutalist aesthetics.",
    year: "2022",
    location: "Berlin, Germany",
    scope: "Commercial Architecture",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "villa-verde",
    index: "04.",
    title: "Villa Verde",
    description: "Sustainable living integrated with dense forest surroundings.",
    year: "2025",
    location: "Milan, Italy",
    scope: "Architecture, Landscape",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687644-aac4c1566f55?auto=format&fit=crop&q=80&w=800"
    ]
  }
];
