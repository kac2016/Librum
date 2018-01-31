# Librum Theme for Hugo

Librum is a simple, clean Hugo theme that was designed for bookclub websites. It consists of a listing page, which shows the covers and brief details about the books read.

To use this theme, clone the repository into the `themes` directory of your Hugo site.
```
$ cd themes
$ git clone https://github.com/mrewers/Librum
```

Add the line `theme = "librum"` to your config.toml file. You can then start adding new book listings to your site by running (replacing `book-title` with the title of your book):
`hugo new book book-title`

This will create a markdown template in content/book directory of your site, which you can edit with your information.
