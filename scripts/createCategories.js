import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'm2cjuxl7',
  dataset: 'production',
  token: 'sk4uh1Mttblyp4zojv5rWWy853JEkuyzjFqggdlRdxK9QR6tRF40jjitLJnuPkix0rzvqul8iGCc54fb3w7oFG7BFQpHzVHoat6ZUKHHVZZGNtUSOVSAPMKj2jnph3pbPiyn1fA6LFrcpV3EpFevmj3wCUj7VGo5IStJWttSpnLgRACXfhrk',
  useCdn: false,
  apiVersion: '2024-01-01'
});

const categories = [
  { name: 'accessories', slug: 'accessories' },
  { name: 'antivirus', slug: 'antivirus' },
  { name: 'assemble-desktop', slug: 'assemble-desktop' },
  { name: 'cabinet', slug: 'cabinet' },
  { name: 'cartridge', slug: 'cartridge' },
  { name: 'cctv-camera', slug: 'cctv-camera' },
  { name: 'desktop', slug: 'desktop' },
  { name: 'laptop', slug: 'laptop' },
  { name: 'monitor', slug: 'monitor' },
  { name: 'motherboard', slug: 'motherboard' },
  { name: 'printer', slug: 'printer' },
  { name: 'ram', slug: 'ram' },
  { name: 'storage', slug: 'storage' },
  { name: 'tablet', slug: 'tablet' },
];

async function createCategories() {
  for (const cat of categories) {
    try {
      const doc = await client.create({
        _type: 'category',
        name: cat.name,
        slug: {
          _type: 'slug',
          current: cat.slug
        }
      });
      console.log(`✅ Created: ${cat.name}`);
    } catch (error) {
      console.log(`❌ Error: ${cat.name}`, error.message);
    }
  }
  console.log('🎉 सभी कैटेगरी बन गईं!');
}

createCategories();