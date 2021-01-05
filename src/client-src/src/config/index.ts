import { FocusType } from '#/store/focus';

type ShortcutType = {
  tag: string;
  shortKey: string;
  link: string;
  when?: FocusType[];
};

export const Shortcuts: ShortcutType[] = [
  {
    tag: 'Quit',
    shortKey: 'q',
    link: '/',
  },
  {
    tag: 'Issues',
    shortKey: 'i',
    link: '/issues',
  },
  {
    tag: 'Home',
    shortKey: 'h',
    link: '/',
  },
  {
    tag: 'Repositories',
    shortKey: 'r',
    link: '/repositories',
  },
  {
    tag: 'Pull Requests',
    shortKey: 'p',
    link: '/pull-requests',
  },
];

export const RepositoriesShortcut: ShortcutType[] = [
  {
    tag: 'List Repositories',
    shortKey: 'l',
    when: ['repositoryFocus'],
    link: '/repositories/list',
  },
  {
    tag: 'Create New Repositories',
    shortKey: 'c',
    when: ['repositoryFocus'],
    link: '/repositories/new',
  },
];

export const IssuesShortcut: ShortcutType[] = [
  {
    tag: 'List Issues',
    shortKey: 'l',
    when: ['issueFocus'],
    link: '/issues/list',
  },
  {
    tag: 'Create New Issue',
    shortKey: 'c',
    when: ['issueFocus'],
    link: '/issues/new',
  },
];

export const KeyToLink = Shortcuts.concat(RepositoriesShortcut)
  .concat(IssuesShortcut)
  .reduce((prev, curr) => {
    if (prev[curr.shortKey] == null) {
      prev[curr.shortKey] = [curr];
    } else {
      prev[curr.shortKey].push(curr);
    }
    return prev;
  }, {} as Record<string, ShortcutType[]>);
