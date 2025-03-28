export default async ({req, res}: any) =>{
    if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

    if (req.path === '/ping') return res.json({ message: 'pong' });

    return res.json({ message: 'Hello world' });
}