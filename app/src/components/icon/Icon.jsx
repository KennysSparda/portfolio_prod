export default function Icon(props) {
  var icons = [             // Type
    '/ico/github.png',      // 0  github
    '/ico/user.png',        // 1  user
    '/ico/link.png',        // 2  link
    '/ico/whatsapp.png',    // 3  whatsapp
    '/ico/linkedin.png',    // 4  linkedin
    '/ico/menu.png',        // 5  menu
    '/ico/git.png',         // 6  git
    '/ico/nextjs.png',      // 7 next
    '/ico/reactjs.png',     // 8 react
    '/ico/nodejs.png',      // 9 node
    '/ico/js.png',          // 10 javascript
    '/ico/css3.png',        // 11 css
    '/ico/HTML5.png',       // 12 html
    '/ico/puzzle.png',      // 13 puzzle
    '/ico/linux.png',       // 14 linux
    '/ico/python.png',      // 15 python
    '/ico/c-sharp.png',     // 16 c#
    '/ico/mysql.png',       // 17 mysql
    '/ico/bootstrap.png',   // 18 mysql
    '/ico/ruby.png',        // 19 css
    '/ico/rails.png',       // 20 css
    '/ico/gpt.png'          // 21 chatgpt
  ]
  var ico = icons[props.type]
  return (
    <img id='ico' src={ico}></img>
  )
}