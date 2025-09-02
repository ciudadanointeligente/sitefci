import { defineCollection, z } from 'astro:content';

const noticiasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),
    autores: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    categorias: z.array(z.string()).optional(),
    medios: z.array(z.string()).optional(),
    fecha: z.date(),
  }),
});

const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    medios: z.array(z.string()).optional(),
    documentos: z.array(z.string()).optional(),
    fecha: z.date(),
  }),
});

const estudiosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    documentos: z.array(z.string()).optional(),
    fecha: z.date(),
  }),
});

export const collections = {
  'noticias': noticiasCollection,
  'proyectos': proyectosCollection,
  'estudios': estudiosCollection,
};