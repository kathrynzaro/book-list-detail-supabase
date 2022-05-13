const SUPABASE_URL = 'https://iyzobpamomhqtsgqrmvm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5em9icGFtb21ocXRzZ3FybXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODU5MDMsImV4cCI6MTk2Nzg2MTkwM30.GdYfCjbuJD7LEkd_denWfb1xuQeGRk8sRe6SbpV-thg';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBooks() {
    const resp = await client.from('books').select('*');
    return resp.data;
}

export async function getBookById(idFromParams) {
    const resp = await client.from('books').select('*').match({ id: idFromParams }).single();
    return resp.data;
}

