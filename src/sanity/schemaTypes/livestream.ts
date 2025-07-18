import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'livestream',
  title: 'Livestream',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Livestream Title',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Facebook Video Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'isLive',
      title: 'Currently Live?',
      type: 'boolean',
    }),
    defineField({
      name: 'date',
      title: 'Livestream Date',
      type: 'datetime',
    }),
  ],
})
