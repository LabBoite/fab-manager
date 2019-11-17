/* eslint-disable
    no-undef,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
'use strict';

/**
 * Navigation controller. List the links availables in the left navigation pane and their icon.
 */
Application.Controllers.controller('HeaderNavController', ['$scope', function ($scope) {
  // Common links (public application)
  $scope.navLinks = [
    {
      state: 'app.public.place',
      linkText: 'place',
      linkIcon: 'rocket'
    },
    {
      state: 'app.public.events_list',
      linkText: 'events_registrations',
      linkIcon: 'tags'
    },
    {
      state: 'app.public.tools',
      linkText: 'tools',
      linkIcon: 'cogs'
    },
    {
      state: 'app.public.projects_list',
      linkText: 'projects_gallery',
      linkIcon: 'th'
    },
    {
      state: 'app.public.contact',
      linkText: 'contact',
      linkIcon: 'rocket'
    }
  ];

  if (!Fablab.withoutPlans) {
    $scope.navLinks.push({
      state: 'app.public.plans',
      linkText: 'subscriptions',
      linkIcon: 'credit-card'
    });
  }

  Fablab.adminNavLinks = Fablab.adminNavLinks || [];
  const adminNavLinks = [
    {
      state: 'app.admin.members',
      linkText: 'manage_the_users',
      linkIcon: 'users'
    },
    {
      state: 'app.admin.calendar',
      linkText: 'manage_the_calendar',
      linkIcon: 'calendar'
    },
    {
      state: 'app.admin.trainings',
      linkText: 'trainings_monitoring',
      linkIcon: 'graduation-cap'
    },
    {
      state: 'app.admin.events',
      linkText: 'manage_the_events',
      linkIcon: 'tags'
    },
    {
      state: 'app.public.tools',
      linkText: 'manage_the_tools',
      linkIcon: 'cogs'
    },
    {
      state: 'app.admin.project_elements',
      linkText: 'manage_the_projects_elements',
      linkIcon: 'tasks'
    },
    {
      state: 'app.admin.manage_abuses',
      linkText: 'manage_the_abuses',
      linkIcon: 'tasks'
    },
    {
      state: 'app.admin.statistics',
      linkText: 'statistics',
      linkIcon: 'bar-chart-o'
    },
    {
      state: 'app.admin.pricing',
      linkText: 'subscriptions_and_prices',
      linkIcon: 'money'
    },
    {
      state: 'app.admin.settings',
      linkText: 'customization',
      linkIcon: 'gear'
    }
  ].concat(Fablab.adminNavLinks);

  $scope.adminNavLinks = adminNavLinks;
}
]);
