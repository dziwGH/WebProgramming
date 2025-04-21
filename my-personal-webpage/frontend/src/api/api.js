const BASE_URL = 'http://localhost:3000/api';

export async function fetchProjects() {
  const res = await fetch(`${BASE_URL}/projects`);
  return res.json();
}

export async function fetchEducation() {
  const res = await fetch(`${BASE_URL}/education`);
  return res.json();
}

export async function fetchSkills() {
  const res = await fetch(`${BASE_URL}/skills`);
  return res.json();
}

export async function sendContactMessage(data) {
  const res = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}
