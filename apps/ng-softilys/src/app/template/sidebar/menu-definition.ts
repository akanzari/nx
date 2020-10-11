export class SideBarMenu {
    public code: string;
    public defaultLabel: string;
    public subMenus?: SideBarMenu[] = [];
    public routerLink?: string[] = [];
    public icon?: string;
    public fragment?: string;
}

export const subMenuItems: SideBarMenu[] = [
    {
        code: '1',
        defaultLabel: 'Getting Started ',
        icon: 'file',
        routerLink: ['setup'],
        fragment: 'home-anchor'
    },
    {
        code: '18',
        defaultLabel: 'Breadcrumb',
        icon: 'ellipsize',
        routerLink: ['breadcrumb'],
        fragment: 'search-anchor'
    },
    {
        code: '25',
        defaultLabel: 'Button',
        icon: 'bold',
        routerLink: ['button'],
        fragment: 'search-anchor'
    },
    {
        code: '31',
        defaultLabel: 'Calendar',
        icon: 'time',
        routerLink: ['calendar'],
        fragment: 'search-anchor'
    },
    {
        code: '9',
        defaultLabel: 'Card',
        icon: 'chevron_up_down',
        routerLink: ['card'],
        fragment: 'search-anchor'
    },
    {
        code: '44',
        defaultLabel: 'Chart',
        icon: 'bar_chart',
        routerLink: ['chart'],
        fragment: 'search-anchor'
    },
    {
        code: '4',
        defaultLabel: 'Check-Box & Radio button',
        icon: 'check_box',
        routerLink: ['checkbox'],
        fragment: 'search-anchor'
    },
    {
        code: '7',
        defaultLabel: 'Container',
        icon: 'chevron_up_down',
        routerLink: ['card-container'],
        fragment: 'search-anchor'
    },
    {
        code: '39',
        defaultLabel: 'Double datepicker calendar',
        icon: 'calendar',
        routerLink: ['double-date-picker'],
        fragment: 'search-anchor'
    },
    {
        code: '13',
        defaultLabel: 'Drag & Drop',
        icon: 'cursor',
        routerLink: ['dragdrop'],
        fragment: 'search-anchor'
    },
    {
        code: '8',
        defaultLabel: 'Form',
        icon: 'form',
        routerLink: ['form'],
        fragment: 'search-anchor'
    },
    {
        code: '17',
        defaultLabel: 'Icons',
        icon: 'alert',
        routerLink: ['icon'],
        fragment: 'search-anchor'
    },
    {
        code: '6',
        defaultLabel: 'Input',
        icon: 'terminal',
        routerLink: ['input'],
        fragment: 'search-anchor'
    },
    {
        code: '3',
        defaultLabel: 'Interval',
        icon: 'calendar',
        routerLink: ['interval'],
        fragment: 'search-anchor'
    },
    {
        code: '14',
        defaultLabel: 'Modal',
        icon: 'credit_card',
        routerLink: ['modal'],
        fragment: 'search-anchor'
    },
    {
        code: '11',
        defaultLabel: 'Mono select',
        icon: 'list_ul',
        routerLink: ['monoselect'],
        fragment: 'search-anchor'
    },
    {
        code: '12',
        defaultLabel: 'Multi select',
        icon: 'list_ul',
        routerLink: ['multiselect'],
        fragment: 'search-anchor'
    },
    {
        code: '23',
        defaultLabel: 'Navbar',
        icon: 'rack',
        routerLink: ['navbar'],
        fragment: 'hamburger'
    },
    {
        code: '21',
        defaultLabel: 'Sidebar',
        icon: 'hamburger',
        routerLink: ['sidebar'],
        fragment: 'search-anchor'
    },
    {
        code: '24',
        defaultLabel: 'Spinner',
        icon: 'refresh',
        routerLink: ['spinner'],
        fragment: 'search-anchor'
    },
    {
        code: '30',
        defaultLabel: 'stepper',
        icon: 'slider_horizontal',
        routerLink: ['stepper'],
        fragment: 'search-anchor'
    },
    {
        code: '2',
        defaultLabel: 'Table',
        icon: 'table',
        routerLink: ['table'],
        fragment: 'search-anchor'
    },
    {
        code: '29',
        defaultLabel: 'Tabs',
        icon: 'arrow_left_right',
        routerLink: ['tabs'],
        fragment: 'search-anchor'
    },
    {
        code: '35',
        defaultLabel: 'Text Area',
        icon: 'file_edit',
        routerLink: ['textarea'],
        fragment: 'search-anchor'
    },
    {
        code: '15',
        defaultLabel: 'Toast',
        icon: 'rack',
        routerLink: ['toast'],
        fragment: 'search-anchor'
    },
    {
        code: '19',
        defaultLabel: 'Tooltip',
        icon: 'rack',
        routerLink: ['tooltip'],
        fragment: 'search-anchor'
    },
    {
        code: '20',
        defaultLabel: 'Tree',
        icon: 'chevron_right',
        routerLink: ['tree'],
        fragment: 'search-anchor'
    },
    {
        code: '16',
        defaultLabel: 'Typography',
        icon: 'zoom_up',
        routerLink: ['typography'],
        fragment: 'search-anchor'
    },
    {
        code: '22',
        defaultLabel: 'Upload File',
        icon: 'move',
        routerLink: ['upload'],
        fragment: 'search-anchor'
    }
];