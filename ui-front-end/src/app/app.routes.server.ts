import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'public/services/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const categories = [
        'digital-workplace',
        'digital-infrastructure',
        'managed-it',
        'audit-compliance',
        'data-analytics',
        'smt-manufacturing'
      ];
      return categories.map(category => ({ category }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
