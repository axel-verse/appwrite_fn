export default async function ({req, res, log, error}: any) {
    if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

    log('Function works!');
    error('This is an error!');

    if (req.path === '/ping') return res.json({ message: 'pong' });

    return res.status(404).json({ message: 'Not found' });
}