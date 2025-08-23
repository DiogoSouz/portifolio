export interface ProjectData {
  id: number
  slug: string
  title: string
  client: string
  year: string
  resume: string
  images: string[]
  categories: string[]
  featured?: boolean
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: "raw-pure",
    title: "Raw//Pure",
    client: "Academico",
    year: "2025",
    resume:
      "A Raw//Pure é uma marca de higiene pessoal com estética minimalista e brutalista, voltada principalmente para o público masculino urbano e jovem adulto. Seu conceito se baseia em transparência, funcionalidade e design direto, sem excessos. A identidade visual traduz essa proposta em materiais brutos, cores sólidas e embalagens que destacam simplicidade e autenticidade. A linha masculina é marcada pelo preto rochoso, transmitindo força e sobriedade, enquanto a linha feminina aposta no marmorizado dourado, agregando sofisticação e contraste. No geral, a Raw//Pure se posiciona como uma marca que une cuidado pessoal a um estilo de vida moderno, objetivo e sem frescuras.",
    images: ["Raw1_ixnc87", "cld-sample-5", "hero-placeholder"],
    categories: ["Branding", "Packging"],
    featured: true,
  },
  {
    id: 2,
    slug: "festival",
    title: "Festival",
    client: "Projeto Ficticio",
    year: "2025",
    resume:
      "Desenvolvimento de interface moderna e intuitiva para aplicativo mobile focado em experiência do usuário. O projeto envolveu pesquisa de usabilidade, prototipagem e testes com usuários reais para garantir uma navegação fluida e engajante.",
    images: [""],
    categories: ["Social", "UI/UX"],
    featured: true,
  },
  {
    id: 3,
    slug: "visual-campaign",
    title: "Campanha Visual Integrada",
    client: "Creative Agency",
    year: "2026",
    resume:
      "Campanha visual completa integrando diferentes mídias e plataformas. O projeto abrangeu desde a concepção criativa até a execução final, garantindo consistência visual em todos os pontos de contato com o público.",
    images: [""],
    categories: ["Social", "Branding", "Marketing"],
    featured: true,
  },
  {
    id: 4,
    slug: "design-system",
    title: "Sistema de Design Escalável",
    year: "2025",
    client: "Enterprise Corp",
    resume:
      "Criação de sistema de design robusto e escalável para empresa de grande porte. O projeto incluiu documentação completa, componentes reutilizáveis e guidelines para manter consistência em todos os produtos digitais.",
    images: [""],
    categories: ["UI/UX", "Design System"],
    featured: true,
  },
  {
    id: 5,
    slug: "ecommerce-platform",
    title: "Plataforma E-commerce",
    client: "RetailTech",
    year: "2025",
    resume:
      "Design completo de plataforma e-commerce focada em conversão e experiência do usuário. Incluiu pesquisa de mercado, arquitetura de informação e otimização para dispositivos móveis.",
    images: [""],
    categories: ["Design System", "UI/UX"],
  },
  {
    id: 6,
    slug: "brand-identity",
    title: "Identidade de Marca Completa",
    client: "StartupXYZ",
    year: "2025",
    resume:
      "Desenvolvimento de identidade visual completa para startup inovadora. O projeto abrangeu desde a criação do logotipo até aplicações em diversos materiais e plataformas digitais.",
    images: [""],
    categories: ["Branding", "Marketing"],
  },
  {
    id: 7,
    slug: "social-media-strategy",
    title: "Estratégia de Redes Sociais",
    client: "InfluencerBrand",
    year: "2025",
    resume:
      "Criação de estratégia visual para redes sociais com foco em engajamento e crescimento orgânico. Incluiu templates, guidelines e calendário editorial visual.",
    images: [""],
    categories: ["Social", "Marketing"],
  },
  {
    id: 8,
    slug: "web-platform",
    title: "Plataforma Web Corporativa",
    client: "BusinessCorp",
    year: "2025",
    resume:
      "Design e desenvolvimento de plataforma web corporativa com foco em produtividade e colaboração. O projeto incluiu pesquisa com usuários e testes de usabilidade.",
    images: [""],
    categories: ["UI/UX", "Design System"],
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): ProjectData[] {
  return projectsData
    .filter((project) => project.featured)
    .sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
}

export function getAllProjectsSortedByYear(): ProjectData[] {
  return [...projectsData].sort((a, b) => {
    const yearA = Number.parseInt(a.year, 10)
    const yearB = Number.parseInt(b.year, 10)
    return yearB - yearA // Most recent year first
  })
}

export function getAllCategories(): string[] {
  const categories = new Set<string>()
  projectsData.forEach((project) => {
    project.categories.forEach((category) => categories.add(category))
  })
  return Array.from(categories)
}
