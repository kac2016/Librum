Welcome to the Librum documentation.

## Customize Your Theme

Copy the file `overrides.less` from the directory `Librum\src\styles` into the (By moving this file out of the themes folder, you prevent it from being deleted/overwritten is you every choose to install an updated version of Librum). At the bottom of the file `Librum\src\styles\style.less` uncomment the file line `//@import "../../../../static/overrides.less";` (by removing the initial `//`)

Once you have made your changes to the theme variables, run `npm install` (to install the required dependencies) and `npm run build_css` (to recompile the CSS) from within your Librum directory.

If in the future you update to a newer version of Librum, all you need to do to .
