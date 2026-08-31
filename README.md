# Patient Care Vault

Applicazione TanStack Start + Supabase pronta per il deploy su Vercel.

## Deploy

1. Crea un repository GitHub vuoto.
2. Carica tutti i file di questo progetto.
3. In Vercel importa il repository.
4. Lascia la root del progetto su `./`.
5. Build command: `npm run build`.
6. Vercel userà Nitro con preset Vercel.
7. Collega il progetto Supabase tramite l'integrazione Vercel.

## Variabili Supabase

L'integrazione Supabase di Vercel fornisce automaticamente:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SECRET_KEY`

Il file `vite.config.ts` espone al browser solo URL e publishable key. La secret key resta server-side.

## Database nuovo

Il progetto contiene le migrazioni in `supabase/migrations/`.

Per creare lo schema su un nuovo progetto Supabase puoi usare `supabase/complete_schema.sql` nel SQL Editor di Supabase.

## Autenticazione

Dopo il primo deploy imposta in Supabase Authentication > URL Configuration:

- Site URL: dominio Vercel definitivo
- Redirect URLs: dominio Vercel definitivo e gli eventuali URL di preview necessari

## AI opzionale

Le funzioni AI usano un provider configurabile.

Per abilitarle, aggiungi in Vercel:

- `AI_API_URL`
- `AI_API_KEY`

Il valore predefinito di `AI_API_URL` usa l'endpoint OpenAI-compatible di Google Gemini.

Se le variabili AI non sono presenti, il resto dell'applicazione continua a funzionare e le funzioni AI non configurate vengono trattate come non disponibili.

## Sicurezza

Il file `.env` originale non viene incluso nel repository.

Non caricare mai su GitHub una secret key Supabase o altre credenziali private.

## Vercel

This project is configured for TanStack Start + Nitro on Vercel. The router entry is explicitly `src/router.tsx` and the server entry is `src/server.ts`.

Vercel build command: `vite build`.

Do not add Lovable's Vite config package back to the project.
