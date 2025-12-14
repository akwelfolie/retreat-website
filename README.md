# Crator Next.js - Typescript

This is modern dark agency template built with [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

This template is built using **Tailwind CSS v4.1**, **Next.js v15.5**, and Typescript leveraging the latest [App Router](https://nextjs.org/docs/app) and server component functionalities.

## Getting Started

Unzip and open the folder of the theme with your editor of choice.

First, install the dependencies. Navigate to the project directory in your terminal and run:

```bash
npm install
# or
yarn install  # if you have Yarn installed
```

This will install all required dependencies and place them in a folder called `node_modules` in the root directory.

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the website.

## File Structure

All of the code for this template is located in the `/src` folder. The folder contains the following:

- `components` - Directory of reusable components
- `app` - Contains the site route components and layouts
- `styles` - Contains the entry point CSS file for Tailwind CSS
- `case-studies` - A directory of markdown files containing the case study content for the site.
- `lib` - Contains `caseStudies.ts` which defines various data fetching functions for case studies.

Note that in order to more concisely import components, we defined a module path alias to the `/src` directory inside the `jsconfig.json` file at the root of our project. To learn more about module aliases you can check out [Vercel's documentation](https://nextjs.org/docs/advanced-features/module-path-aliases) on the subject.

## Tailwind CSS

This theme uses the latest version of Tailwind CSS: v4.1.

Tailwind CSS and its dependencies were installed via npm as recommended by the official [Tailwind installation docs for next.js](https://tailwindcss.com/docs/guides/nextjs). If you are not familiar with the Tailwind CSS framework, I would recommend checking out the [Tailwind documentation](https://tailwindcss.com/docs).

The entry point CSS file is located at `src/styles/tailwind.css`. We've tried to minimize any custom CSS and only rely on Tailwind's utility classes.

## Content

All of the case studies content for the site is stored in markdown files in the `src/case-studies` directory. Crator uses [gray-matter](https://github.com/jonschlinkert/gray-matter), to parse the data from the markdown frontmatter content. Every case study content file has a corresponding `/work/<case-study>` page in the site where `<case-study>` is the name of the file.

### Adding new case studies

All of the case studies have data of the following form:

```markdown
---
name: Clever Counts
shortDescription: Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor.
category: Non-profit
image: '/stock/work/work-image-04.jpg'
date: Oct. 2018
featured: true
stack:
  - tech: html
  - tech: tailwind
hero:
  tagline: Case study
  headline: From idea to a thriving online platform
  keyPoints:
    - label: Challenge
      text: Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius mod tempor.
      icon: puzzle
    - label: Services
      text: Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius mod tempor.
      icon: stack
    - label: Results
      text: Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius mod tempor.
      icon: bulb
about:
  tagline: About the project
  text: Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et. Ad cum decore expetenda dissentiet, civibus patrioque referrentur id nec, ei eam simul diceret.
statsSection:
  tagline: Key stats
  headline: Going above and beyond our client's expectations.
  text: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
  action:
    href: '#'
    label: Learn more
  stats:
    - label: Additional revenue (2021)
      value: $2.1m
    - label: Social interactions a month
      value: 12m
    - label: Unique monthly visitors
      value: 300k
featuresSection:
  tagline: The details
  headline: Taking a closer look
  text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
  features:
    - tagline: User focused
      headline: How we increased user engagement
      text: Anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat fugiat aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      image:
        src: '/stock/work/work-image-01.jpg'
        alt: 'Art piece'
    - tagline: Performance
      headline: How we improved website speed by 70%
      text: Anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat fugiat aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      image:
        src: '/stock/work/work-image-02.jpg'
        alt: 'Camera on pink background'
    - tagline: Product growth
      headline: How we achieved 10x growth in revenue
      text: Anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat fugiat aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      image:
        src: '/stock/work/work-image-03.jpg'
        alt: 'Artistic image'
---
```

Every case study has page data fields (`hero`, `about`, `statsSection`, and `featuresSection`) corresponding to sections and components within the case study dynamic route page in `app/work/[slug]/page.tsx`. Every section is optional and is conditionally rendered in the dynamic route component:

```typescript
export default function CaseStudyPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const caseStudy = getCaseStudy(slug)

  return (
    <>
      {caseStudy?.hero && <CaseStudyHero data={caseStudy} />}
      {caseStudy?.about && <AboutCaseStudy data={caseStudy.about} />}
      {caseStudy?.statsSection && (
        <CaseStudyStats data={caseStudy.statsSection} />
      )}
      {caseStudy?.featuresSection && (
        <CaseStudyFeatures data={caseStudy.featuresSection} />
      )}
      <CallToAction />
    </>
  )
}
```

You can optionally set `featured: true` in order for the case study to be shown in the `<FeaturedWork/>` component in the `home` and `work` pages. Otherwise, it will be fetched in the `<ArchivedCaseStudies/>` component in the `work` page.

## TypeScript

This template uses TypeScript to provide static typing and improve the development experience. You can find the TypeScript configuration in the `tsconfig.json` file at the root of the project.

TypeScript provides several benefits:

- Static type checking
- Better IDE support with autocompletion and refactoring tools
- Improved code readability and maintainability
- Catch errors early in the development process

If you're new to TypeScript, you can learn more from the official [TypeScript Documentation](https://www.typescriptlang.org/docs/).

## Font

This template uses the `Inter` Font family from the [Google Fonts Library](https://fonts.google.com/specimen/Inter). Crator uses the new Next.js font system with `next/font` which allows you to conveniently use Google Fonts with performance and privacy in mind.

## Icons

The icons used for this theme are part of the [Tabler Icons](https://github.com/tabler/tabler-icons) set that is free to use and published under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

## Images

All of the images used in the template are free to use and are either from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), or custom-made.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) made by the same creators of Next.js.

Check out their [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This site template is a commercial product and is licensed under the [Tailwind Awesome license](https://www.tailwindawesome.com/license).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript and its features.

## Additional Help

If you need additional help setting up the template or have any questions, feel free to contact me at <rodrigo@tailwindawesome.com>.
