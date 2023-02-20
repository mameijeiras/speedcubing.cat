import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/', { unstable_onlyGenerated: true });
    await res.revalidate('/redirects/comp-groups', { unstable_onlyGenerated: true });
    await res.revalidate('/redirects/wca-live', { unstable_onlyGenerated: true });
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
