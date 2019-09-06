//var site = require('./siteConfig')
const fs = require("fs")
var path = require("path")

const OLDCONTENT = "./content/blog"
// OLD
// content
//    assets
//       *.png
//    blog
//       blog1
//         index.md
//            ---
//            title: Hello World
//            date: "2019-07-30T06:40:03.284Z"
//            --
//         optional.png

// NEW
// content
//    assets
//       *.png
//    posts
//       *.mdx
//            ---
//            title: Hello World
//            date: "2019-07-30"
//            --

// generate stdout to copy all images to ../contents/assets, rename as blog__imagename.*
// fs.readdir(OLDCONTENT, function(err, oldcontent) {
//   if (err) {
//     console.error("Could not list the directory.", err)
//     process.exit(1)
//   }

//   oldcontent.forEach(function(oldblog, index) {

//     if (oldblog !== ".DS_Store") {
//       subdir = path.join(OLDCONTENT, oldblog)
//       fs.readdir(subdir, function(err, subdirfiles) {
//         if (err) {
//           console.error("Could not list the directory.", err)
//           process.exit(1)
//         }

//         subdirfiles.forEach(function(oldblogfile, index) {
//             if (oldblogfile != 'index.md') {
//                 let newblogfile =  oldblog + '__' + oldblogfile
//                 //console.log(oldblogfile + ' ---> ' + newblogfile)
//                 console.log('cp -f ' + OLDCONTENT + '/' + oldblog + '/' + oldblogfile + ' ../content/assets/' + newblogfile)
//              }
//         })
//       })
//     }
//   });
// })




// // read all files, replace date and image names, copy to new ../content/posts
// fs.readdir(OLDCONTENT, function(err, oldcontent) {
//     if (err) {
//       console.error("Could not list the directory.", err)
//       process.exit(1)
//     }
  
//     oldcontent.forEach(function(oldblog, index) {
  
//       if (oldblog !== ".DS_Store") {
//         subdir = path.join(OLDCONTENT, oldblog)
//         fs.readdir(subdir, function(err, subdirfiles) {
//           if (err) {
//             console.error("Could not list the directory.", err)
//             process.exit(1)
//           }
  
//           subdirfiles.forEach(function(oldblogfile, index) {
//               if (oldblogfile == 'index.md') {
//                   let name = path.join(OLDCONTENT, oldblog, oldblogfile)
//                   let lines = fs.readFileSync(name, 'utf8').split('\n')
//                   let i = 0
//                   for (i=0; i<lines.length; i++) {
//                       if (lines[i].includes("](./")) {
//                         lines[i] = lines[i].replace("](./", "](../assets/" + oldblog + '__' )
//                      }
//                      if (lines[i].includes("date:")) {
//                          let parts = lines[i].split('T')
//                          lines[i] = parts[0] + '"'
//                      }
//                   }
//                   console.log('----------------------------')
//                   console.log(lines)
//                   let newfile = '../content/posts/' + oldblog + '.mdx'
//                   lines = lines.join('\n')
//                   console.log(newfile)
//                   fs.writeFileSync(newfile, lines)
//                }
//           })
//         })
//       }
//     });
//   })
  
