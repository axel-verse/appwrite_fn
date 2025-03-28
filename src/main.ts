import { Client, Users } from 'node-appwrite';

export default async ({req, res, log, error}: any) =>{
    if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

    const client = new Client()
        .setEndpoint(<string>Bun.env["APPWRITE_FUNCTION_API_ENDPOINT"])
        .setProject(<string>Bun.env["APPWRITE_FUNCTION_PROJECT_ID"])
        .setKey(req.headers['x-appwrite-key'] ?? '');
    const users = new Users(client);

    try {
        const response = await users.list();
        log(`Total users: ${response.total}`);
    } catch (err) {
        // @ts-ignore
        error(`Could not fetch users: ${err.message}`);
    }

    if (req.path === '/ping') return res.text('pong');

    return res.json({ message: 'Hello world' });
}