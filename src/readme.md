Implement a React component that renders a dynamic and expandable side-menu-like list of items.

The outermost tag of the component is a div with a class of menu-wrapper. Initially it will contain nothing, and your task is to create the code that will display the side menu there.

The component will receive a property named menuConfig which will contain the configuration of the side menu data:

const menuConfig = [
{
title: 'Home',
},
{
title: 'Services',
subItems: ['Cooking', 'Cleaning'],
},
{
title: 'Contact',
subItems: ['Phone', 'Mail'],
},
];
Every menu item should be displayed inside a separate corresponding div. This div should have a dynamically created attribute, data-test-id, in the form: first-level-{lowercase-title-name-here}. So, for example, if some MenuItem contained a title named Home, the div should have a data-test-id containing first-level-home.

Every div from the previous point should contain within it:

1.title. For example, for a MenuItem with the title Home, the text Home should appear in this div.
2.button with a dynamic data-test-id in the form: button-{lowercase-title-name-here} (for example, button-home). The button should only be displayed when there are subItems for the given menu item. When clicking the button, the submenu with subItems (ul list described in the next point) should appear (be added to the DOM) if it is hidden, and should disappear (be removed from the DOM) if it is expanded. The text inside the button should be Expand when the given menu is not expanded, and Hide if the menu has already been expanded.
ul list. The ul tag should have a data-test-id in the form: ul-{lowercase-title-here}, so if we had a list for the Home title, the data-test-id should be ul-home.
3.li tags inside the aforementioned ul tag. Each li should have a data-test-id in the form: li-{lowercase-title-name-here}-{lowercase-subitem-name-here}. So, for example, for the Home title and the subItems Main and Services, the li data-test-ids should be li-home-main and li-home-services. Inside every li tag there should be a subItem name (taken from the array subItems from the corresponding MenuItem). The display state of these submenu lists is controlled by the aforementioned corresponding buttons.
4.Only one submenu should be in the expanded state at any time. If one of the submenus is open and then some other menu item button is clicked, the previously expanded submenu should be hidden and the new one should appear.

If no subItems are available for some MenuItem (undefined subItems property for MenuItem or an empty array), then no ul list should be available, and also no Expand button should be available.

Tests will follow elements by their data-test-id, so invisible elements should not be rendered. Do not control elements' visibility using CSS properties.

Assumptions
Design/styling is not assessed and will not affect your score. You should focus only on implementing the requirements.
Setting proper ids for the elements is crucial, as it will be used later, in the automated assessment of the task.
Initially, no submenu items should be visible; in other words, no menu item should be expanded when it contains some subItems (there should be no ul in the DOM).
Every title in menuConfig will be unique, so you do not have to worry about duplicate IDs in the code.
No title or potential subtitle can have an empty value.
Every title and subtitle contains only letters and consists of just one word.
You can use console.log for debugging purposes via your browser's developer tools.
Only imports from the react module are allowed.
