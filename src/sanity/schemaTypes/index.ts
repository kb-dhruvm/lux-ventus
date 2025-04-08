import { type SchemaTypeDefinition } from 'sanity'
import { pagesType } from './pagesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pagesType],
}
