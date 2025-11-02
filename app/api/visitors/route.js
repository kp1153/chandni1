import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function GET() {
  try {
    const settings = await client.fetch(
      `*[_type == "siteSettings"][0]{visitorCount}`
    );

    return Response.json({ visitors: settings?.visitorCount || 0 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST() {
  try {
    const settingsId = await client.fetch(`*[_type == "siteSettings"][0]._id`);

    if (settingsId) {
      await client.patch(settingsId).inc({ visitorCount: 1 }).commit();
    } else {
      await client.create({
        _type: "siteSettings",
        visitorCount: 1,
      });
    }

    const updated = await client.fetch(
      `*[_type == "siteSettings"][0]{visitorCount}`
    );

    return Response.json({ visitors: updated.visitorCount });
  } catch (error) {
    return Response.json({ error: "Failed to update" }, { status: 500 });
  }
}
