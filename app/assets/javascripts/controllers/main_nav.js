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
Application.Controllers.controller('MainNavController', ['$scope', function ($scope) {
  // Common links (public application)
  $scope.navLinks = [
    {
      state: 'app.public.home',
      linkText: 'home',
      linkIcon: 'home'
    },
    {
      state: 'app.public.events_list',
      linkText: 'events_registrations',
      linkIcon: 'tags'
    },
    {
      state: 'app.public.machines_list',
      linkText: 'reserve_a_machine',
      linkIcon: 'cogs'
    },
    {
      state: 'app.public.projects_list',
      linkText: 'projects_gallery',
      linkIcon: 'th'
    },
    {
      state: 'app.public.trainings_list',
      linkText: 'trainings_registrations',
      linkIcon: 'graduation-cap'
    },   
    {
      state: 'app.public.calendar',
      linkText: 'public_calendar',
      linkIcon: 'calendar'
    }

  ];

  if (!Fablab.withoutSpaces) {
    $scope.navLinks.splice(3, 0, {
      state: 'app.public.spaces_list',
      linkText: 'reserve_a_space',
      linkIcon: 'rocket'
    });
  }

  Fablab.adminNavLinks = Fablab.adminNavLinks || [];
  const adminNavLinks = [
    {
      state: 'app.admin.trainings',
      linkText: 'trainings_monitoring',
      linkIcon: 'graduation-cap'
    },
    {
      state: 'app.admin.calendar',
      linkText: 'manage_the_calendar',
      linkIcon: 'calendar'
    },
    {
      state: 'app.admin.members',
      linkText: 'manage_the_users',
      linkIcon: 'users'
    },
    {
      state: 'app.admin.invoices',
      linkText: 'manage_the_invoices',
      linkIcon: 'file-pdf-o'
    },
    {
      state: 'app.admin.pricing',
      linkText: 'subscriptions_and_prices',
      linkIcon: 'money'
    },
    {
      state: 'app.admin.events',
      linkText: 'manage_the_events',
      linkIcon: 'tags'
    },
    {
      state: 'app.public.machines_list',
      linkText: 'manage_the_machines',
      linkIcon: 'cogs'
    },
    {
      state: 'app.admin.project_elements',
      linkText: 'manage_the_projects_elements',
      linkIcon: 'tasks'
    },
    {
      state: 'app.admin.statistics',
      linkText: 'statistics',
      linkIcon: 'bar-chart-o'
    },
    {
      state: 'app.admin.settings',
      linkText: 'customization',
      linkIcon: 'gear'
    },
    {
      state: 'app.admin.open_api_clients',
      linkText: 'open_api_clients',
      linkIcon: 'cloud'
    }
  ].concat(Fablab.adminNavLinks);

  $scope.adminNavLinks = adminNavLinks;

  if (!Fablab.withoutSpaces) {
    return $scope.adminNavLinks.splice(7, 0, {
      state: 'app.public.spaces_list',
      linkText: 'manage_the_spaces',
      linkIcon: 'rocket'
    });
  }
}
]);
