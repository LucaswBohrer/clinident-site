// Dados públicos reais da CliniDENT — Centro Odontológico (São Leopoldo/RS).
// Verificados em 23/11/2026. Nenhum dado aqui foi inventado.
// - Endereço: Av. Imperatriz Leopoldina, 92, São José, São Leopoldo/RS.
//   CEP 93042-030 — confirmado em CNES, CNPJ, Doctoralia e mais 2 bases.
//   O Places indica 93042-160, mas é o único a divergir: seguiu-se o CEP
//   registado oficialmente (93042-030).
// - WhatsApp CONFIRMADO pela própria clínica: post do Instagram dela de
//   06/11/2026 (@clinident.sl) lista "WhatsApp (51) 3590-1515"; o mesmo
//   número aparece no carrossel do Facebook da clínica. Telefone no Places:
//   +55 51 3590-1515. (Um nº (51) 3588-4045 aparece em bases de CNPJ —
//   provavelmente antigo/secundário; NÃO é usado no site.)
// - Instagram CONFIRMADO: @clinident.sl, conta business, 1,5 mil seguidores
//   (lido em 23/11/2026). Facebook: CLINIDENT CENTRO ODONTOLOGICO, 1,2 mil
//   seguidores — https://www.facebook.com/clinidentcentroodontologico
// - Avaliação: 4,7 ★ no Google, 42 avaliações (Places: avg 4,6667, n=42).
// - Horário (Places + Instagram): seg–sex 8h–12h e 13h–19h (sex até 17h30);
//   sábado e domingo fechado.
// - Serviços: descrição oficial da clínica (Places): "atendimento estético,
//   ortodontia, implantes, próteses, clareamentos, entre outros".
// - Slogan e missão: do carrossel da própria clínica (06/11/2026):
//   "Prazer, somos a CliniDENT" / "Muito mais do que cuidar de sorrisos,
//   cuidamos de pessoas." / missão: despertar o seu melhor sorriso.
//   Recomendação de visita a cada 6 meses: post próprio no Instagram
//   (10/04/2026) — "De quanto em quanto tempo eu devo ir ao dentista?"
// - Atendimento particular: só atende pacientes particulares (Doctoralia).
// - CNPJ 10.457.773/0001-55 — Clinident Centro Odontologico LTDA LTDA,
//   fundada em 31/10/2008 (CNES, Doctoralia e bases de CNPJ).
// - Preços: a clínica NÃO publica tabela de preços — os tratamentos
//   aparecem sem valor, com "consulte no WhatsApp". Nenhum preço de
//   mercado foi apresentado como sendo dela.
// - Nomes de dentistas / CRO: o perfil da Doctoralia não lista nenhum
//   dentista nominalmente — por isso o site NÃO cita nomes, só a clínica.
// - Fotos: ILUSTRATIVAS realistas de consultório odontológico (Unsplash,
//   licença livre), verificadas visualmente uma a uma. A galeria do
//   Places estava vazia e o Instagram bloqueia download direto. O site
//   diz com honestidade que as fotos são ilustrativas e liga para o
//   Instagram @clinident.sl, onde estão as fotos reais da clínica.
// - Sem site próprio: o Places não traz campo de website (só Facebook e
//   Instagram). Perfil na Doctoralia existe, mas sem agendamento online
//   ("ainda não indicou os horários") — por isso a Doctoralia NÃO é
//   apresentada como forma de agendamento; o agendamento é via WhatsApp.

import {
  hero,
  consultorio,
  diagnostico,
  atendimento,
} from './assets/images.js'

export const EMPRESA = {
  nome: 'CliniDENT',
  nomeCompleto: 'CliniDENT — Centro Odontológico',
  slogan: 'Muito mais do que cuidar de sorrisos, cuidamos de pessoas.',
  descricao:
    'Centro odontológico no São José, em São Leopoldo: atendimento estético, ortodontia, implantes, próteses e clareamento — com agendamento direto no WhatsApp.',
  endereco: 'Av. Imperatriz Leopoldina, 92',
  bairro: 'São José',
  cidadeUf: 'São Leopoldo/RS — CEP 93042-030',
  whatsapp: '(51) 3590-1515',
  whatsappUrl: 'https://wa.me/555135901515',
  instagram: '@clinident.sl',
  instagramUrl: 'https://www.instagram.com/clinident.sl/',
  instagramDm: 'https://ig.me/m/clinident.sl',
  facebook: 'CLINIDENT CENTRO ODONTOLOGICO',
  facebookUrl: 'https://www.facebook.com/clinidentcentroodontologico',
  seguidores: '1,5 mil seguidores',
  avaliacao: '4,7',
  avaliacoes: '42 avaliações no Google',
  fundacao: 'Desde 2008',
  horarioSemana: 'Segunda a sexta: 08:00 às 12:00 e 13:00 às 19:00',
  horarioSexta: 'Sexta-feira: até às 17:30',
  horarioFechado: 'Sábado e domingo: fechado',
  cnpj: '10.457.773/0001-55',
  razaoSocial: 'Clinident Centro Odontologico LTDA',
}

export const WHATS = 'https://wa.me/555135901515'
export const IG_DM = 'https://ig.me/m/clinident.sl'

export const MAPS_EMBED =
  'https://maps.google.com/maps?q=Av.+Imperatriz+Leopoldina,+92,+Sao+Leopoldo,+RS,+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed'

export const MAPS_ABRIR =
  'https://www.google.com/maps/search/?api=1&query=Av.+Imperatriz+Leopoldina,+92,+Sao+Leopoldo,+RS'

export const MAPS_ROTA =
  'https://www.google.com/maps/dir/?api=1&destination=Av.+Imperatriz+Leopoldina,+92,+Sao+Leopoldo,+RS'

// Tratamentos sem preços: a clínica não publica tabela de preços. O valor
// é confirmado no WhatsApp e varia conforme o caso. Tratamentos listados
// conforme a descrição oficial da própria clínica.
export const SERVICOS = [
  {
    id: 'implantes',
    nome: 'Implantes',
    descricao:
      'Reposição de dentes perdidos com implantes — devolva a função e a confiança ao sorrir.',
    destaque: 'Mais procurado',
  },
  {
    id: 'proteses',
    nome: 'Próteses',
    descricao:
      'Próteses fixas e removíveis para recuperar a mastigação, a fala e a estética do sorriso.',
    destaque: null,
  },
  {
    id: 'ortodontia',
    nome: 'Ortodontia',
    descricao:
      'Correção do alinhamento dos dentes e da mordida — aparelho para crianças, adolescentes e adultos.',
    destaque: null,
  },
  {
    id: 'estetica',
    nome: 'Odontologia Estética',
    descricao:
      'Cuidado estético do sorriso: harmonia, formato e cor dos dentes, com planeamento individual.',
    destaque: null,
  },
  {
    id: 'clareamento',
    nome: 'Clareamento',
    descricao:
      'Clareamento dental supervisionado para um sorriso mais branco, com segurança e acompanhamento.',
    destaque: null,
  },
  {
    id: 'checkup',
    nome: 'Check-up e Prevenção',
    descricao:
      'Avaliação completa, limpeza e prevenção — a clínica recomenda uma visita a cada 6 meses.',
    destaque: null,
  },
]

export const PASSOS = [
  {
    numero: 1,
    titulo: 'Chama no WhatsApp',
    texto:
      'Você conta o tratamento que procura — é só mandar uma mensagem no WhatsApp da clínica.',
  },
  {
    numero: 2,
    titulo: 'Recebe o valor e o horário',
    texto:
      'A clínica confirma o valor, que varia conforme o caso, e agenda o dia e a hora da avaliação.',
  },
  {
    numero: 3,
    titulo: 'Avaliação na clínica',
    texto:
      'Na consulta, a equipa avalia o seu caso e apresenta o plano de tratamento ideal para você.',
  },
  {
    numero: 4,
    titulo: 'Seu melhor sorriso',
    texto:
      'Tratamento feito com acompanhamento — e a recomendação de voltar a cada 6 meses para o check-up.',
  },
]

export const GALERIA = [
  {
    imagem: hero,
    titulo: 'Avaliação com radiografia',
    alt: 'Dentista a mostrar uma radiografia panorâmica a uma paciente no consultório (foto ilustrativa)',
  },
  {
    imagem: consultorio,
    titulo: 'Consultório moderno',
    alt: 'Consultório odontológico moderno e iluminado, com cadeira odontológica (foto ilustrativa)',
  },
  {
    imagem: diagnostico,
    titulo: 'Diagnóstico em 3D',
    alt: 'Dentista a analisar reconstruções 3D de exames odontológicos (foto ilustrativa)',
  },
  {
    imagem: atendimento,
    titulo: 'Atendimento especializado',
    alt: 'Dentista com lupa a atender um paciente no consultório (foto ilustrativa)',
  },
]

export const IMAGENS = { hero, consultorio, diagnostico, atendimento }

export const DIAS = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
]

export const PERIODOS = {
  semana: ['Manhã (8h–12h)', 'Tarde (13h–19h)'],
  sexta: ['Manhã (8h–12h)', 'Tarde (13h–17h30)'],
}
