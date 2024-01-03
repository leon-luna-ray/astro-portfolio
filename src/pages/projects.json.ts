import type { APIRoute } from 'astro';
import { fetchProjects, fetchProjectTechnologies } from '../lib/api';

const projects = await fetchProjects()

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(JSON.stringify(projects)
    )
}