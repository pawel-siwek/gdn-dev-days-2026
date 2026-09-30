// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';

// Lekcje zapisują callouty w składni GitHub admonitions (`> [!NOTE]`). Ten plugin
// remark przepisuje je na dyrektywy Starlight asides, zanim Starlight je wyrenderuje —
// dzięki temu ta sama składnia działa i w repozytorium na github.com, i na stronie.
const githubAdmonitionMapping = {
  NOTE: 'note',
  TIP: 'tip',
  IMPORTANT: 'note',
  WARNING: 'caution',
  CAUTION: 'caution',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://pawelsiwek.github.io',
  base: '/gdn-dev-days-2026/cli-workshop',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [
      [remarkGithubAdmonitionsToDirectives, { mapping: githubAdmonitionMapping }],
    ],
  },
  integrations: [
    starlight({
      title: 'Warsztat Copilot CLI',
      description:
        'Praktyczny warsztat GitHub Copilot CLI na projekcie Tailspin Toys — tryby agenta, własne instrukcje, MCP, agent skills i automatyzacja pull requestów.',
      // Wydajemy tylko po polsku, więc zamiast dokładać locale `pl` obok sześciu
      // innych, ustawiamy polski jako jedyny język w korzeniu. Znika przez to cały
      // aparat `translations:` w sidebarze.
      locales: {
        root: { label: 'Polski', lang: 'pl' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/pawelsiwek/gdn-dev-days-2026',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/pawelsiwek/gdn-dev-days-2026/edit/main/cli-workshop/docs/',
      },
      sidebar: [
        { label: 'Start', link: '/' },
        {
          label: 'Warsztat Copilot CLI',
          items: [
            { label: 'Wprowadzenie', link: '/real-world-development/cli/' },
            { label: '0. Wymagania wstępne', link: '/real-world-development/cli/0-prerequisites/' },
            { label: '1. Instalacja Copilot CLI', link: '/real-world-development/cli/1-install-copilot-cli/' },
            { label: '2. Oceny w gwiazdkach', link: '/real-world-development/cli/2-add-star-rating/' },
            { label: '3. Tryby agenta: Plan i Autopilot', link: '/real-world-development/cli/3-agent-modes/' },
            { label: '4. Sterowanie Copilotem przez własne instrukcje', link: '/real-world-development/cli/4-custom-instructions/' },
            { label: '5. Skill do kontroli jakości', link: '/real-world-development/cli/5-agent-skills/' },
            { label: '6. Weryfikacja przez Playwright MCP', link: '/real-world-development/cli/6-mcp-playwright/' },
            { label: '7. Własny agent QA', link: '/real-world-development/cli/7-qa-agent/' },
            { label: '8. Pull request z funkcjonalnością', link: '/real-world-development/cli/8-create-pull-request/' },
            { label: '9. Komendy slash w Copilot CLI', link: '/real-world-development/cli/9-cli-power-tools/' },
            { label: '10. Podsumowanie i co dalej', link: '/real-world-development/cli/10-review/' },
          ],
        },
      ],
    }),
  ],
});
