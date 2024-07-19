const API_URL = 'http://localhost:3000';

// récuperer les artistes de manière paginés
export const getArtists = async (page: number) => {
  const res = await fetch(`${API_URL}/artists?page=${page}`, {
    method: 'GET',
  });

  return res.json();
};

export const getAllArtists = async () => {
  const res = await fetch(`${API_URL}/artists/all`, {
    method: 'GET',
  });

  return res.json();
};

export const getArtistById = async (id: number) => {
  const res = await fetch(`${API_URL}/artists/${id}`, {
    method: 'GET',
  });

  return res.json();
};

// Obtenir la musique d'un artiste
export const getArtistMusic = async (id: number) => {
  const res = await fetch(`${API_URL}/artists/${id}/music`, {
    method: 'GET',
  });

  return res.json();
};
