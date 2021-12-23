
import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/ismalel/ismalel.github.io.git', // Update to point to your repository
  user: {
   name: 'ismalel', // update to use your name
   email: 'ochoa.ismael@uabc.edu.mx' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);