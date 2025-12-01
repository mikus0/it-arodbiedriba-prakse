// Supabase iestatījumi
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLIC_ANON_KEY";

// Izveido Supabase klientu
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Funkcija, kas nolasa datus
async function fetchMembers() {
  const { data, error } = await supabase.from('members').select('*');
  if (error) {
    console.error(error);
    return;
  }

  const ul = document.getElementById('members-list');
  data.forEach(member => {
    const li = document.createElement('li');
    li.textContent = `${member.name} - ${member.status}`;
    ul.appendChild(li);
  });
}

// Izsauc funkciju
fetchMembers();