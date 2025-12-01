const { createClient } = window.supabase;

const SUPABASE_URL = "https://zzwofulaiwqupwharrjw.supabase.co";
const SUPABASE_KEY = "sb_publishable_Y2iBOHk6WUFJtTz3xjf17A_Fk5QOmHa";

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchMembers() {
  console.log('Mēģinu ielasīt members...');

  const { data, error } = await supabaseClient
    .from('members')
    .select('*');

  const ul = document.getElementById('members-list');
  ul.innerHTML = '';

  if (error) {
    console.error(error);
    ul.innerHTML = `<li style="color:red;">Kļūda: ${error.message}</li>`;
    return;
  }

  if (!data || data.length === 0) {
    ul.innerHTML = '<li>Nav ierakstu</li>';
    return;
  }

  data.forEach(member => {
    const li = document.createElement('li');
    li.textContent = `${member.name} - ${member.description}`;
    ul.appendChild(li);
  });
}

fetchMembers();