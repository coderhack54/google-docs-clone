export const menuItems = [
  { id: 1, title: "File", submenu: null },
  { id: 2, title: "Edit", submenu: null },
  { id: 3, title: "View", submenu: null },
  { id: 4, title: "Insert", submenu: null },
  {
    id: 5,
    title: "Format",
    submenu: [
      {
        id: 1,
        title: "Text",
        submenu: [
          { id: 1, title: "Bold", submenu: null, shortcut: "Ctrl+B" },
          { id: 2, title: "Italic", submenu: null, shortcut: "Ctrl+I" },
          { id: 3, title: "Underline", submenu: null, shortcut: "Ctrl+U" },
          { id: 4, title: "Strikethrough", submenu: null, shortcut: "Ctrl+T" },
          {
            id: 5,
            title: "Superscript",
            submenu: null,
            shortcut: "Ctrl+Shift+=",
          },
          { id: 6, title: "Subscript", submenu: null, shortcut: "Ctrl+=" },
          { id: 7, title: "Size", submenu: null, shortcut: "Ctrl+Shift+<" },
          {
            id: 8,
            title: "Capitalization",
            submenu: null,
            shortcut: "Ctrl+Shift+A",
          },
        ],
      },
      {
        id: 2,
        title: "Paragraph styles",
        submenu: [
          { id: 1, title: "Borders and shading", submenu: null },
          { id: 2, title: "Normal Text", submenu: null },
          { id: 3, title: "Title", submenu: null },
          { id: 4, title: "Subtitle", submenu: null },
          { id: 5, title: "Heading 1", submenu: null },
          { id: 6, title: "Heading 2", submenu: null },
          { id: 7, title: "Heading 3", submenu: null },
          { id: 8, title: "Heading 4", submenu: null },
          { id: 9, title: "Heading 5", submenu: null },
          { id: 10, title: "Heading 6", submenu: null },
          { id: 11, title: "Options", submenu: null },
        ],
      },
      {
        id: 3,
        title: "Align & indent",
        submenu: [
          { id: 1, title: "Single", submenu: null },
          { id: 2, title: "1.15", submenu: null },
          { id: 3, title: "1.5", submenu: null },
          { id: 4, title: "Double", submenu: null },
          { id: 5, title: "Add space before paragraph", submenu: null },
          { id: 6, title: "Add space after paragraph", submenu: null },
          { id: 7, title: "Custom spacing", submenu: null },
          { id: 8, title: "Keep with text", submenu: null },
          { id: 9, title: "Keep lines together", submenu: null },
          { id: 10, title: "Prevent single lines", submenu: null },
          { id: 11, title: "Add page break before", submenu: null },
        ],
      },
      { id: 4, title: "Line & paragraph spacing", submenu: null },
      { id: 5, title: "Columns", submenu: null },
      { id: 6, title: "Bullets & numbering", submenu: null },
      { id: 7, title: "Headers & Footers", submenu: null },
      { id: 8, title: "Page numbers", submenu: null },
      { id: 9, title: "Page orientation", submenu: null },
      { id: 10, title: "Table", submenu: null, disable: true },
      { id: 11, title: "Image", submenu: null, disable: true },
      { id: 12, title: "Borders & lines", submenu: null, disable: true },
      { id: 13, title: "Clear formatting", submenu: null },
    ],
  },
  { id: 6, title: "Tools", submenu: null },
  { id: 7, title: "Extension", submenu: null },
  { id: 8, title: "Help", submenu: null },
];