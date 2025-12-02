import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'projectTitle',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectContributors',
      title: 'Project Contributors',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'projectClient',
      title: 'Project Client',
      type: 'string',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'projectCategory',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          {title: 'Writing', value: 'Writing'},
          {title: 'Design', value: 'Design'},
          {title: 'Project Management', value: 'Project Management'},
          {title: 'Research', value: 'Research'},
        ],
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      description: 'External link to the project (if any)',
    }),
  ],
  preview: {
    select: {
      title: 'projectTitle',
      client: 'projectClient',
      media: 'projectImage',
    },
    prepare(selection) {
      const {client} = selection
      return {...selection, subtitle: client && `Client: ${client}`}
    },
  },
})
