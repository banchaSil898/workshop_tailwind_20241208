# Dashboard layout workshop

- Run `npm install && npm run dev`
- Open http://localhost:3333/workshop/blog/

If you see the blog, you are ready to start.

The blog is generated from AI without using Tailwind Jun Layout. Your job is to apply Tailwind Jun Layout to the current codebase.

Feel free to add your creativity on top of the tasks.

## Tasks

- [ ] Add layout structure classes to the page
- [ ] Add a header
  - [ ] Add navigation (mockup links)
  - [ ] Hide the navigation on mobile and use EdgeSidebar drawer mode instead
- [ ] Apply InsetSidebar to the table of contents in blog post detail page
  - [ ] Change between `sticky` (default), `fixed`, and `absolute` to see the difference
  - [ ] Hide InsetSidebar on mobile and render table of content on EdgeSidebar drawer instead.
- [ ] Move shared components to `src/app/blog/layout.tsx`
