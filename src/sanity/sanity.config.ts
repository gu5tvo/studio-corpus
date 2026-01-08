import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './schema'
import { projectId, dataset } from './env'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        deskTool(),
        visionTool(),
    ],
})
