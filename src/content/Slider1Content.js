export default [
  {
    tag: 'div',
    properties: {style: {textAlign: 'center', width: '100%', height: '100%', background: '#F3F3F3', color: '#2F3134', fontSize: '3rem'}},
    children: [
      {tag: 'h1', properties: {style: {margin: 0}}, children: 'Hello world!!!'},
      {tag: 'p', children: 'My first slide'}
    ]
  },
  {
    tag: 'div',
    properties: {style: {textAlign: 'center', background: '#2F3134', color: 'white'}},
    children: [
      {tag: 'h2', properties: {style: {margin: 0, padding: '20px'}}, children: 'Slide-2'},
      {
        tag: 'img',
        properties: {
          alt: 'Nature',
          src: 'https://i.artfile.ru/3003x2000_894702_%5Bwww.ArtFile.ru%5D.jpg',
          style: {height: '100%', width: '100%', objectFit: 'cover'}
        },
      }
    ]
  },
  {
    tag: 'div',
    properties: {style: {width: '100%', height: '100%'}},
    children: [
      {tag: 'h1', properties: {style: {margin: 0, textAlign: 'center'}}, children: 'My form'},
      {
        tag: 'form', 
        properties: {
          action: '#',
          style: {background: '#2F3134', display: 'flex', width: '100%', height: '100px', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}
        },
        children: [
          {
            tag: 'input', 
            properties: {
              type: "email",
              placeholder: "Email",
              style: {background: '#F3F3F3', outline: 'none', border: 'none', borderRight: '1px solid rgba(0,0,0,0.2)', padding: '4px 12px'}
            }
          },
          {
            tag: 'button',
            properties: {
              type: 'submit',
              style: {display: 'block', outline: 'none', border: 'none', padding: '4px 3px'}
            },
            children: "Next"
          }
        ]
      }
    ]
  },
  {
    tag: 'div',
    properties: {style: {textAlign: 'center', width: '100%', height: '100%', background: '#F3F3F3', color: '#2F3134', fontSize: '3rem'}},
    children: [
      {tag: 'h1', properties: {style: {margin: 0}}, children: 'Slide-4'},
      {tag: 'ul', properties: {style: {width: '20%', margin: '0 auto', textAlign: 'left'}}, children: [
        {tag: 'li', children: 'First li'},
        {tag: 'li', children: 'Second li'},
      ]}
    ]
  },
  {
    tag: 'div',
    properties: {style: {textAlign: 'center', width: '100%', height: '100%', background: '#F3F3F3', color: '#2F3134', fontSize: '3rem'}},
    children: [
      {tag: 'h1', properties: {style: {margin: 0}}, children: 'Slide-5'},
      {tag: 'p', children: 'The End...'}
    ]
  },
]